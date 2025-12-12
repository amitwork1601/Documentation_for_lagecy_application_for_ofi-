const state = {
  files: [],
  filtered: [],
  categories: [],
  repos: [],
  selection: [],
  activeId: null,
  activeTab: 'selection'
};

const refs = {
  search: document.querySelector("#searchInput"),
  category: document.querySelector("#categoryFilter"),
  repo: document.querySelector("#repoFilter"),
  sort: document.querySelector("#sortOrder"),
  clear: document.querySelector("#clearFilters"),
  clearSearch: document.querySelector("#clearSearch"),
  results: document.querySelector("#resultsList"),
  count: document.querySelector("#resultsCount"),
  preview: document.querySelector("#docPreview"),
  selectionZone: document.querySelector("#selectionZone"),
  exportBtn: document.querySelector("#exportSelection"),
  tabs: document.querySelectorAll(".tab"),
  tabContents: document.querySelectorAll(".tab-content"),
  activeFilters: document.querySelector("#activeFilters"),
  filterChips: document.querySelector(".filter-chips"),
  expandAll: document.querySelector("#expandAll"),
  collapseAll: document.querySelector("#collapseAll")
};

// --- Initialization ---

async function loadIndex() {
  try {
    const response = await fetch("../docs_index.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to load index (${response.status})`);

    const data = await response.json();
    state.files = data.files ?? [];
    state.categories = ["all", ...(data.categories ?? [])];
    state.repos = ["all", ...(data.repos ?? [])];

    populateFilters();
    applyFilters();
    setupDragAndDrop();
    setupTabs();
  } catch (err) {
    refs.count.textContent = "Error loading index";
    refs.results.innerHTML = `<div class="result-card"><p class="muted">${err.message}</p></div>`;
  }
}

function populateFilters() {
  refs.category.innerHTML = state.categories
    .map(cat => `<option value="${cat}">${formatLabel(cat)}</option>`)
    .join("");
  refs.repo.innerHTML = state.repos
    .map(repo => `<option value="${repo}">${formatLabel(repo)}</option>`)
    .join("");
}

function formatLabel(label) {
  if (label === "all") return label === "all" && refs.category.value === "all" ? "All Categories" : "All";
  // Simple formatter
  return label.replace(/[_-]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

// --- Filtering ---

function applyFilters() {
  const term = refs.search.value.trim().toLowerCase();
  const cat = refs.category.value;
  const repo = refs.repo.value;
  const sort = refs.sort.value;

  state.filtered = state.files.filter(file => {
    const matchSearch = !term || [file.title, file.summary, file.path].some(s => s && s.toLowerCase().includes(term));
    const matchCat = cat === "all" || (file.category || "Other") === cat;
    const matchRepo = repo === "all" || (file.repo || "") === repo;
    return matchSearch && matchCat && matchRepo;
  });

  state.filtered.sort((a, b) => {
    if (sort === "repo") return (a.repo || "").localeCompare(b.repo || "");
    if (sort === "category") return (a.category || "").localeCompare(b.category || "");
    return (a.title || "").localeCompare(b.title || "");
  });

  renderResults();
  updateActiveFilters();
}

function renderResults() {
  refs.results.innerHTML = "";
  refs.count.textContent = `${state.filtered.length} document${state.filtered.length !== 1 ? 's' : ''}`;

  if (!state.filtered.length) {
    refs.results.innerHTML = `
      <div class="result-card result-card--empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <p class="muted">No matches found. Try adjusting your filters.</p>
      </div>`;
    return;
  }

  // Group results by category
  const grouped = {};
  state.filtered.forEach(file => {
    const cat = file.category || "Other";
    if (!grouped[cat]) {
      grouped[cat] = [];
    }
    grouped[cat].push(file);
  });

  const fragment = document.createDocumentFragment();
  Object.keys(grouped).sort().forEach(category => {
    const categoryGroup = document.createElement("div");
    categoryGroup.className = "category-group";
    categoryGroup.dataset.category = category;

    const categoryHeader = document.createElement("div");
    categoryHeader.className = "category-header";
    categoryHeader.innerHTML = `
      <button type="button" class="category-toggle" aria-expanded="true">
        <svg class="toggle-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
        <span class="category-name">${category}</span>
        <span class="category-count">${grouped[category].length}</span>
      </button>
    `;

    const categoryContent = document.createElement("div");
    categoryContent.className = "category-content";
    categoryContent.style.display = "block";

    grouped[category].forEach(file => {
      const card = document.createElement("article");
      card.className = "result-card";
      card.draggable = true;
      card.dataset.path = file.path;

      // Drag Events
      card.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", JSON.stringify(file));
        e.dataTransfer.effectAllowed = "copy";
        card.classList.add("is-dragging");
      });

      card.addEventListener("dragend", () => {
        card.classList.remove("is-dragging");
      });

      // Click to preview
      card.addEventListener("click", () => openDocument(file));

      card.innerHTML = `
        <h3>${file.title}</h3>
        <div class="result-meta">
          <span class="badge badge--category">${file.category || "Other"}</span>
          <span class="badge badge--repo">${file.repo || "Unknown"}</span>
        </div>
        <p class="result-summary">${file.summary || "No summary."}</p>
      `;
      categoryContent.appendChild(card);
    });

    // Toggle functionality
    categoryHeader.querySelector(".category-toggle").addEventListener("click", () => {
      const isExpanded = categoryContent.style.display !== "none";
      categoryContent.style.display = isExpanded ? "none" : "block";
      categoryHeader.querySelector(".category-toggle").setAttribute("aria-expanded", !isExpanded);
      categoryHeader.querySelector(".toggle-icon").style.transform = isExpanded ? "rotate(-90deg)" : "rotate(0deg)";
    });

    categoryGroup.appendChild(categoryHeader);
    categoryGroup.appendChild(categoryContent);
    fragment.appendChild(categoryGroup);
  });
  refs.results.appendChild(fragment);
}

// --- Drag and Drop & Selection ---

function setupDragAndDrop() {
  const zone = refs.selectionZone;

  zone.addEventListener("dragover", (e) => {
    e.preventDefault(); // Allow drop
    e.dataTransfer.dropEffect = "copy";
    zone.classList.add("drag-over");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("drag-over");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("drag-over");
    try {
      const data = JSON.parse(e.dataTransfer.getData("text/plain"));
      addToSelection(data);
    } catch (err) {
      console.error("Drop error", err);
    }
  });
}

function addToSelection(file) {
  if (state.selection.some(f => f.path === file.path)) return;
  state.selection.push(file);
  renderSelection();
  switchTab('selection');
}

function removeFromSelection(path) {
  state.selection = state.selection.filter(f => f.path !== path);
  renderSelection();
}

function renderSelection() {
  const zone = refs.selectionZone;
  if (state.selection.length === 0) {
    zone.innerHTML = `<p class="muted" style="text-align: center; margin-top: 2rem;">Drag items here to select them</p>`;
    return;
  }

  zone.innerHTML = "";
  state.selection.forEach(file => {
    const el = document.createElement("div");
    el.className = "selection-item";
    el.innerHTML = `
      <span>${file.title}</span>
      <button type="button" aria-label="Remove">&times;</button>
    `;
    el.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromSelection(file.path);
    });
    // Click to preview from selection
    el.addEventListener("click", () => openDocument(file));
    zone.appendChild(el);
  });
}

// --- Preview & Tabs ---

async function openDocument(file) {
  switchTab('preview');
  refs.preview.innerHTML = `<p class="muted">Loading ${file.title}...</p>`;

  try {
    // Fetch the markdown file directly from the docs directory
    const res = await fetch(`../${file.path}`);
    if (!res.ok) throw new Error("Failed to load file");
    const markdown = await res.text();

    // Simple markdown to HTML conversion
    let html = markdown
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
      .replace(/\n$/gim, '<br />')
      .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>');

    refs.preview.innerHTML = `<div class="markdown-content">${html}</div>`;
  } catch (err) {
    refs.preview.innerHTML = `<p class="muted">Error: ${err.message}</p>`;
  }
}

function setupTabs() {
  refs.tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });
}

function switchTab(tabName) {
  state.activeTab = tabName;
  refs.tabs.forEach(t => t.classList.toggle("active", t.dataset.tab === tabName));
  refs.tabContents.forEach(c => {
    c.style.display = c.id === `tab-${tabName}` ? "block" : "none";
  });
}

// --- Active Filters Display ---

function updateActiveFilters() {
  const filters = [];
  if (refs.search.value.trim()) {
    filters.push({ type: 'search', label: `"${refs.search.value}"`, value: refs.search.value });
  }
  if (refs.category.value !== "all") {
    filters.push({ type: 'category', label: formatLabel(refs.category.value), value: refs.category.value });
  }
  if (refs.repo.value !== "all") {
    filters.push({ type: 'repo', label: formatLabel(refs.repo.value), value: refs.repo.value });
  }

  if (filters.length === 0) {
    refs.activeFilters.style.display = "none";
    return;
  }

  refs.activeFilters.style.display = "block";
  refs.filterChips.innerHTML = filters.map(filter => `
    <span class="filter-chip">
      <span class="filter-chip-label">${filter.label}</span>
      <button type="button" class="filter-chip-remove" data-type="${filter.type}" aria-label="Remove filter">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </span>
  `).join("");

  // Add remove handlers
  refs.filterChips.querySelectorAll(".filter-chip-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      if (type === 'search') {
        refs.search.value = "";
        refs.clearSearch.style.display = "none";
      } else if (type === 'category') {
        refs.category.value = "all";
      } else if (type === 'repo') {
        refs.repo.value = "all";
      }
      applyFilters();
    });
  });
}

// --- Event Listeners ---

refs.search.addEventListener("input", (e) => {
  refs.clearSearch.style.display = e.target.value ? "block" : "none";
  debounce(applyFilters, 300)();
});

refs.clearSearch.addEventListener("click", () => {
  refs.search.value = "";
  refs.clearSearch.style.display = "none";
  applyFilters();
});

refs.category.addEventListener("change", applyFilters);
refs.repo.addEventListener("change", applyFilters);
refs.sort.addEventListener("change", applyFilters);

refs.clear.addEventListener("click", () => {
  refs.search.value = "";
  refs.category.value = "all";
  refs.repo.value = "all";
  refs.clearSearch.style.display = "none";
  applyFilters();
});

// Expand/Collapse All
refs.expandAll.addEventListener("click", () => {
  document.querySelectorAll(".category-content").forEach(content => {
    content.style.display = "block";
    const toggle = content.previousElementSibling.querySelector(".category-toggle");
    toggle.setAttribute("aria-expanded", "true");
    toggle.querySelector(".toggle-icon").style.transform = "rotate(0deg)";
  });
});

refs.collapseAll.addEventListener("click", () => {
  document.querySelectorAll(".category-content").forEach(content => {
    content.style.display = "none";
    const toggle = content.previousElementSibling.querySelector(".category-toggle");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".toggle-icon").style.transform = "rotate(-90deg)";
  });
});

refs.exportBtn.addEventListener("click", () => {
  if (!state.selection.length) return alert("Selection is empty!");
  const names = state.selection.map(f => f.title).join("\n");
  alert(`Exporting ${state.selection.length} items:\n${names}`);
});

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// Start
loadIndex();

