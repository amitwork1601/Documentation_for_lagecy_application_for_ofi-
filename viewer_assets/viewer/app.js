const state = {
  files: [],
  filtered: [],
  categories: [],
  repos: [],
  activeId: null,
};

const refs = {
  search: document.querySelector("#searchInput"),
  category: document.querySelector("#categoryFilter"),
  repo: document.querySelector("#repoFilter"),
  sort: document.querySelector("#sortOrder"),
  clear: document.querySelector("#clearFilters"),
  results: document.querySelector("#resultsList"),
  count: document.querySelector("#resultsCount"),
  preview: document.querySelector("#docPreview"),
  previewTitle: document.querySelector("#previewTitle"),
  previewMeta: document.querySelector("#previewMeta"),
};

async function loadIndex() {
  try {
    const response = await fetch("../docs_index.json", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to load docs_index.json (${response.status})`);
    }
    const data = await response.json();
    state.files = data.files ?? [];
    state.categories = ["all", ...(data.categories ?? [])];
    state.repos = ["all", ...(data.repos ?? [])];
    populateFilters();
    applyFilters();
  } catch (err) {
    refs.count.textContent = "Unable to load docs_index.json";
    refs.results.innerHTML = `<div class="result-card">
        <p>Could not load documentation index.</p>
        <p class="muted">${err.message}</p>
      </div>`;
  }
}

function populateFilters() {
  refs.category.innerHTML = state.categories
    .map((cat) => `<option value="${cat}">${formatLabel(cat)}</option>`)
    .join("");
  refs.repo.innerHTML = state.repos
    .map((repo) => `<option value="${repo}">${formatLabel(repo)}</option>`)
    .join("");
}

function formatLabel(label) {
  if (label === "all") return "All";
  return label
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function applyFilters() {
  const searchTerm = refs.search.value.trim().toLowerCase();
  const category = refs.category.value;
  const repo = refs.repo.value;
  const sorter = refs.sort.value;

  const filtered = state.files.filter((file) => {
    const matchesSearch =
      !searchTerm ||
      [file.title, file.summary, file.path]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(searchTerm));

    const matchesCategory =
      category === "all" ||
      (file.category ?? "Other").toLowerCase() === category.toLowerCase();

    const matchesRepo =
      repo === "all" || (file.repo ?? "").toLowerCase() === repo.toLowerCase();

    return matchesSearch && matchesCategory && matchesRepo;
  });

  filtered.sort((a, b) => {
    if (sorter === "repo") {
      return (a.repo || "").localeCompare(b.repo || "");
    }
    if (sorter === "category") {
      return (a.category || "").localeCompare(b.category || "");
    }
    return (a.title || "").localeCompare(b.title || "");
  });

  state.filtered = filtered;
  renderResults();
}

function renderResults() {
  refs.results.innerHTML = "";
  refs.count.textContent = `${state.filtered.length} matching document${
    state.filtered.length === 1 ? "" : "s"
  }`;

  if (!state.filtered.length) {
    refs.results.innerHTML =
      '<div class="result-card"><p>No documents match your filters.</p></div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  state.filtered.forEach((file) => {
    const card = document.createElement("article");
    card.className = `result-card${
      state.activeId === file.path ? " is-active" : ""
    }`;
    card.tabIndex = 0;
    card.addEventListener("click", () => openDocument(file));
    card.addEventListener("keypress", (event) => {
      if (event.key === "Enter") openDocument(file);
    });

    card.innerHTML = `
      <h3>${file.title}</h3>
      <div class="result-meta">
        <span class="badge">${formatLabel(file.category || "Other")}</span>
        <span>${file.repo || "Unknown repo"}</span>
        <span>${file.path}</span>
      </div>
      <p>${file.summary || "No summary available."}</p>
    `;
    fragment.appendChild(card);
  });

  refs.results.appendChild(fragment);
}

async function openDocument(file) {
  state.activeId = file.path;
  renderResults();
  refs.preview.innerHTML = "<p class='muted'>Loading document…</p>";
  refs.previewTitle.textContent = file.title || file.path;
  refs.previewMeta.textContent = `${formatLabel(
    file.category || "Other"
  )} • ${file.repo || "Unknown repo"}`;

  try {
    const response = await fetch(`../${file.path}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Unable to fetch ${file.path}`);
    }
    const content = await response.text();
    refs.preview.innerHTML = marked.parse(content);
  } catch (err) {
    refs.preview.innerHTML = `<p class="muted">${err.message}</p>`;
  }
}

function resetFilters() {
  refs.search.value = "";
  refs.category.value = "all";
  refs.repo.value = "all";
  refs.sort.value = "title";
  applyFilters();
}

refs.search.addEventListener("input", debounce(applyFilters, 200));
refs.category.addEventListener("change", applyFilters);
refs.repo.addEventListener("change", applyFilters);
refs.sort.addEventListener("change", applyFilters);
refs.clear.addEventListener("click", resetFilters);

function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(null, args), wait);
  };
}

loadIndex();

