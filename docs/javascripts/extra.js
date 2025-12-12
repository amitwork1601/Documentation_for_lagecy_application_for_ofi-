// Collapsible Navigation for SUMMARY page
document.addEventListener('DOMContentLoaded', function () {
    // Helper function to check if an element is within a target section
    const isInTargetSection = (element, targetHeading) => {
        if (!targetHeading) return false;
        let current = element;
        while (current && current !== document.body) {
            // Check if we've passed the target heading
            if (current === targetHeading) return true;
            // Check if we're after the target heading but before the next same-level heading
            if (current.previousElementSibling === targetHeading) return true;
            // Check parent's previous sibling
            if (current.parentElement && current.parentElement.previousElementSibling === targetHeading) return true;
            // Stop if we hit another h2 (next section)
            if (current.tagName === 'H2' && current !== targetHeading) return false;
            current = current.parentElement;
        }
        return false;
    };

    // Make nested lists collapsible
    const makeCollapsible = () => {
        // Find target heading if hash exists
        const hasHash = window.location.hash && window.location.hash.length > 1;
        const hashValue = hasHash ? window.location.hash.substring(1).toLowerCase() : '';
        let targetHeading = null;
        if (hasHash) {
            // Try multiple selectors to find the target heading
            targetHeading = document.querySelector(`h2[id="${hashValue}"], h2[id*="${hashValue}"], h1[id="${hashValue}"], h1[id*="${hashValue}"]`) ||
                document.querySelector(`h2:contains("${hashValue}"), h1:contains("${hashValue}")`);
            // Fallback: find by text content
            if (!targetHeading) {
                const allHeadings = document.querySelectorAll('.md-content h1, .md-content h2');
                allHeadings.forEach(h => {
                    if (h.textContent.toLowerCase().includes(hashValue) ||
                        h.id.toLowerCase().includes(hashValue)) {
                        targetHeading = h;
                    }
                });
            }
        }

        // Find all list items that contain nested lists
        const listItems = document.querySelectorAll('.md-content li');

        listItems.forEach(item => {
            // Skip if toggle already exists
            if (item.querySelector('.toc-toggle')) {
                return;
            }

            const nestedList = item.querySelector('ul');

            if (nestedList) {
                // Create toggle button
                const toggle = document.createElement('span');
                toggle.className = 'toc-toggle';
                toggle.innerHTML = '▼';
                toggle.style.cssText = `
          cursor: pointer;
          margin-right: 0.5rem;
          color: var(--md-primary-fg-color, #6B4C9A);
          font-size: 0.8em;
          display: inline-block;
          transition: transform 0.2s;
          user-select: none;
        `;

                // Insert toggle before the first text node
                const firstChild = item.firstChild;
                item.insertBefore(toggle, firstChild);

                // Check if this item is in the target section
                const isTargetSection = hasHash && targetHeading && isInTargetSection(item, targetHeading);

                // Check if the nested list is already visible
                const inlineDisplay = nestedList.style.display;
                const computedDisplay = window.getComputedStyle(nestedList).display;
                const isCurrentlyVisible = inlineDisplay !== 'none' && computedDisplay !== 'none';

                // Behavior: 
                // - If navigating to a specific section (hash), expand only that section
                // - On first load (no hash), collapse everything by default
                if (hasHash) {
                    // We're navigating to a specific section
                    if (isTargetSection) {
                        // Expand the target section
                        nestedList.style.display = 'block';
                        toggle.style.transform = 'rotate(0deg)';
                        item.classList.remove('collapsed');
                    } else {
                        // Collapse all other sections
                        nestedList.style.display = 'none';
                        toggle.style.transform = 'rotate(-90deg)';
                        item.classList.add('collapsed');
                    }
                } else {
                    // First load without hash - collapse everything by default
                    // User can use "Expand All" button to expand all sections
                    nestedList.style.display = 'none';
                    toggle.style.transform = 'rotate(-90deg)';
                    item.classList.add('collapsed');
                }

                // Toggle on click
                toggle.addEventListener('click', (e) => {
                    e.stopPropagation();

                    if (item.classList.contains('collapsed')) {
                        nestedList.style.display = 'block';
                        toggle.style.transform = 'rotate(0deg)';
                        item.classList.remove('collapsed');
                    } else {
                        nestedList.style.display = 'none';
                        toggle.style.transform = 'rotate(-90deg)';
                        item.classList.add('collapsed');
                    }
                });
            }
        });
    };

    // Run on page load
    makeCollapsible();

    // Re-run after a short delay to catch any late-rendered content
    setTimeout(() => {
        makeCollapsible();
    }, 100);

    // Also listen for hash changes (when navigating to sections)
    window.addEventListener('hashchange', () => {
        setTimeout(() => {
            makeCollapsible();
        }, 200);
    });

    // Use MutationObserver to detect when new content is added
    let observerTimeout;
    const observer = new MutationObserver((mutations) => {
        let shouldUpdate = false;
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                // Check if any added nodes contain list items
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        if (node.tagName === 'LI' || node.querySelector('li')) {
                            shouldUpdate = true;
                        }
                    }
                });
            }
        });
        if (shouldUpdate) {
            // Debounce to avoid too many calls
            clearTimeout(observerTimeout);
            observerTimeout = setTimeout(() => {
                makeCollapsible();
            }, 150);
        }
    });

    const content = document.querySelector('.md-content');
    if (content) {
        observer.observe(content, {
            childList: true,
            subtree: true
        });
    }

    // Listen for MkDocs Material instant navigation events
    // MkDocs Material may dispatch custom events when content is updated
    const navigationEvents = ['md-navigation', 'navigation', 'location'];
    navigationEvents.forEach(eventName => {
        document.addEventListener(eventName, () => {
            setTimeout(() => {
                makeCollapsible();
            }, 200);
        });
    });

    // Also listen for popstate (back/forward navigation)
    window.addEventListener('popstate', () => {
        setTimeout(() => {
            makeCollapsible();
        }, 200);
    });

    // Fallback: periodically check for new elements (only on SUMMARY page)
    // This ensures we catch any elements that might be added asynchronously
    if (window.location.pathname.includes('SUMMARY') ||
        window.location.pathname.includes('summary') ||
        document.title.includes('Overview')) {
        setInterval(() => {
            // Check for list items with nested lists that don't have toggles
            const allListItems = document.querySelectorAll('.md-content li');
            let foundItemsWithoutToggle = false;
            allListItems.forEach(item => {
                const nestedList = item.querySelector('ul');
                const hasToggle = item.querySelector('.toc-toggle');
                if (nestedList && !hasToggle) {
                    foundItemsWithoutToggle = true;
                }
            });
            if (foundItemsWithoutToggle) {
                makeCollapsible();
            }
        }, 1000);
    }

    // Build document list from SUMMARY page for navigation
    const buildDocumentList = async () => {
        try {
            const summaryUrl = new URL('../SUMMARY/', window.location.href);
            const response = await fetch(summaryUrl);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const links = [];
            const seenHrefs = new Set(); // Track seen hrefs to avoid duplicates

            doc.querySelectorAll('.md-content a[href]').forEach(link => {
                const href = link.getAttribute('href');
                // Skip anchors, external links, and navigation links
                if (href &&
                    !href.includes('#') &&
                    !href.startsWith('http') &&
                    !href.includes('SUMMARY') &&
                    !href.includes('explorer') &&
                    href !== '../' &&
                    href !== '/' &&
                    !seenHrefs.has(href)) { // Avoid duplicates
                    seenHrefs.add(href);
                    links.push({
                        href: href,
                        title: link.textContent.trim()
                    });
                }
            });

            return links;
        } catch (error) {
            console.error('Error building document list:', error);
            return [];
        }
    };

    // Add search and filter functionality on SUMMARY page
    const addSearchAndFilters = () => {
        const content = document.querySelector('.md-content');
        if (!content) return;

        // Create filter container
        const filterContainer = document.createElement('div');
        filterContainer.style.cssText = `
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    `;

        // Create search box
        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.placeholder = 'Search documentation...';
        searchBox.style.cssText = `
      width: 100%;
      padding: 0.75rem;
      margin-bottom: 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      font-family: 'Poppins', Arial, sans-serif;
      font-size: 0.95rem;
    `;

        // Create filter row
        const filterRow = document.createElement('div');
        filterRow.style.cssText = `
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    `;

        // Category filter
        const categoryLabel = document.createElement('label');
        categoryLabel.textContent = 'Category:';
        categoryLabel.style.cssText = `
      font-weight: 500;
      color: #3C3228;
    `;

        const categorySelect = document.createElement('select');
        categorySelect.style.cssText = `
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      font-family: 'Poppins', Arial, sans-serif;
      background: white;
    `;

        const categories = ['All Categories', 'Controllers', 'Services', 'Entities', 'Repositories', 'Commands', 'Events', 'Plugins', 'Other'];
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat === 'All Categories' ? '' : cat;
            option.textContent = cat;
            categorySelect.appendChild(option);
        });

        // Repository filter
        const repoLabel = document.createElement('label');
        repoLabel.textContent = 'Repository:';
        repoLabel.style.cssText = `
      font-weight: 500;
      color: #3C3228;
      margin-left: 1rem;
    `;

        const repoSelect = document.createElement('select');
        repoSelect.style.cssText = `
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      font-family: 'Poppins', Arial, sans-serif;
      background: white;
    `;

        const repos = ['All Repositories', 'Backend', 'Frontend', 'CMS'];
        repos.forEach(repo => {
            const option = document.createElement('option');
            option.value = repo === 'All Repositories' ? '' : repo.toLowerCase();
            option.textContent = repo;
            repoSelect.appendChild(option);
        });

        // Clear filters button
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear Filters';
        clearButton.className = 'clear-filters-btn';
        clearButton.style.marginLeft = 'auto';

        clearButton.onclick = () => {
            searchBox.value = '';
            categorySelect.value = '';
            repoSelect.value = '';
            filterContent();
        };

        // Assemble filter row
        filterRow.appendChild(categoryLabel);
        filterRow.appendChild(categorySelect);
        filterRow.appendChild(repoLabel);
        filterRow.appendChild(repoSelect);
        filterRow.appendChild(clearButton);

        // Assemble filter container
        filterContainer.appendChild(searchBox);
        filterContainer.appendChild(filterRow);

        // Filter function
        const filterContent = () => {
            const searchTerm = searchBox.value.toLowerCase();
            const selectedCategory = categorySelect.value.toLowerCase();
            const selectedRepo = repoSelect.value.toLowerCase();

            // Get all h2 sections (Controllers, Services, etc.)
            const sections = content.querySelectorAll('h2');

            sections.forEach(section => {
                const sectionTitle = section.textContent.toLowerCase();
                const sectionContent = section.nextElementSibling;

                // Check if section matches category filter
                const categoryMatch = !selectedCategory || sectionTitle.includes(selectedCategory);

                if (sectionContent && sectionContent.tagName === 'UL') {
                    let hasVisibleItems = false;

                    // Filter list items
                    const items = sectionContent.querySelectorAll('li');
                    items.forEach(item => {
                        const text = item.textContent.toLowerCase();
                        const link = item.querySelector('a');
                        const linkHref = link ? link.getAttribute('href') : '';

                        // Check search match
                        const searchMatch = !searchTerm || text.includes(searchTerm);

                        // Check repository match (based on file path patterns)
                        let repoMatch = !selectedRepo;
                        if (selectedRepo && linkHref) {
                            if (selectedRepo === 'backend' && linkHref.includes('src_')) repoMatch = true;
                            if (selectedRepo === 'frontend' && linkHref.includes('api_')) repoMatch = true;
                            if (selectedRepo === 'cms' && linkHref.includes('cms_')) repoMatch = true;
                        }

                        // Show/hide item
                        if (searchMatch && categoryMatch && repoMatch) {
                            item.style.display = '';
                            hasVisibleItems = true;
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    // Show/hide section
                    if (hasVisibleItems && categoryMatch) {
                        section.style.display = '';
                        sectionContent.style.display = '';
                    } else {
                        section.style.display = 'none';
                        sectionContent.style.display = 'none';
                    }
                }
            });
        };

        // Add event listeners
        searchBox.addEventListener('input', filterContent);
        categorySelect.addEventListener('change', filterContent);
        repoSelect.addEventListener('change', filterContent);

        // Insert filter container
        const firstHeading = content.querySelector('h1');
        if (firstHeading && firstHeading.nextSibling) {
            firstHeading.parentNode.insertBefore(filterContainer, firstHeading.nextSibling);
        }
    };

    // Add "Expand All" / "Collapse All" buttons
    const addExpandCollapseButtons = () => {
        const content = document.querySelector('.md-content');
        if (!content) return;

        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
      margin-bottom: 1rem;
      display: flex;
      gap: 0.5rem;
    `;

        const expandAll = document.createElement('button');
        expandAll.textContent = 'Expand All';
        expandAll.className = 'md-button md-button--primary expand-all-btn';

        const collapseAll = document.createElement('button');
        collapseAll.textContent = 'Collapse All';
        collapseAll.className = 'md-button collapse-all-btn';

        expandAll.addEventListener('click', () => {
            // Expand all nested lists
            document.querySelectorAll('.md-content ul ul').forEach(ul => {
                ul.style.display = 'block';
            });
            // Update all toggle icons and remove collapsed class
            document.querySelectorAll('.toc-toggle').forEach(toggle => {
                toggle.style.transform = 'rotate(0deg)';
                toggle.parentElement.classList.remove('collapsed');
            });
        });

        collapseAll.addEventListener('click', () => {
            document.querySelectorAll('.md-content ul ul').forEach(ul => {
                ul.style.display = 'none';
            });
            document.querySelectorAll('.toc-toggle').forEach(toggle => {
                toggle.style.transform = 'rotate(-90deg)';
                toggle.parentElement.classList.add('collapsed');
            });
        });

        buttonContainer.appendChild(expandAll);
        buttonContainer.appendChild(collapseAll);

        // Find filter container and insert after it
        const filterContainer = content.querySelector('div');
        if (filterContainer && filterContainer.nextSibling) {
            filterContainer.parentNode.insertBefore(buttonContainer, filterContainer.nextSibling);
        }
    };

    // Add features if on SUMMARY page
    console.log('Current pathname:', window.location.pathname);
    console.log('Current href:', window.location.href);

    if (window.location.pathname.includes('SUMMARY') ||
        window.location.pathname.includes('summary') ||
        window.location.href.includes('SUMMARY') ||
        document.title.includes('Overview')) {
        console.log('On SUMMARY page - adding search and filters');
        addSearchAndFilters();
        addExpandCollapseButtons();
    } else {
        console.log('Not on SUMMARY page');
    }

    // Normalize path for reliable matching
    const normalizePath = (path) => {
        if (!path) return '';
        const url = new URL(path, window.location.href);
        return url.pathname
            .replace(/\/index\.html?$/i, '')
            .replace(/\/$/, '')
            .toLowerCase();
    };

    // Add Previous/Start/Next navigation buttons on document pages
    const addPrevNextButtons = async () => {
        const isSummary = window.location.pathname.includes('SUMMARY');
        const isExplorer = window.location.pathname.includes('explorer');
        // Check if we're on the Home/index page
        const pathname = window.location.pathname;
        const isIndex = pathname === '/' ||
            pathname === '/index.html' ||
            pathname.endsWith('/index.html') ||
            pathname.endsWith('/index') ||
            pathname.match(/\/index\.html?$/i) ||
            (!pathname.includes('/') && pathname.length <= 1);
        if (isSummary || isExplorer || isIndex) return;

        const content = document.querySelector('.md-content__inner') || document.querySelector('.md-content') || document.body;

        const docList = await buildDocumentList();
        if (docList.length === 0) return;

        const summaryUrl = new URL('../SUMMARY/', window.location.href);
        const normalizedDocs = docList.map((doc) => {
            const resolved = new URL(doc.href, summaryUrl);
            const normalized = normalizePath(resolved.pathname);
            return {
                ...doc,
                normalized: normalized,
                resolvedHref: resolved.href
            };
        });

        // Remove duplicates based on normalized path
        const uniqueDocs = [];
        const seenNormalized = new Set();
        normalizedDocs.forEach(doc => {
            if (!seenNormalized.has(doc.normalized)) {
                seenNormalized.add(doc.normalized);
                uniqueDocs.push(doc);
            }
        });

        const currentPath = normalizePath(window.location.pathname);

        // More precise matching: try exact match first, then endsWith
        let currentIndex = uniqueDocs.findIndex((doc) => {
            const docPath = doc.normalized;
            // Exact match
            if (currentPath === docPath) return true;
            // Ends with the normalized path (handles trailing slashes)
            const pathWithoutSlash = currentPath.replace(/\/$/, '');
            const docPathWithoutSlash = docPath.replace(/\/$/, '');
            return pathWithoutSlash === docPathWithoutSlash ||
                pathWithoutSlash.endsWith('/' + docPathWithoutSlash);
        });

        // Fallback: try less strict matching only if exact match failed
        if (currentIndex === -1) {
            currentIndex = uniqueDocs.findIndex((doc) => {
                const docPath = doc.normalized.replace(/\/$/, '');
                const pathWithoutSlash = currentPath.replace(/\/$/, '');
                // Check if current path ends with doc path or vice versa
                return pathWithoutSlash.endsWith(docPath) || docPath.endsWith(pathWithoutSlash);
            });
        }

        if (currentIndex === -1) return;

        const prevDoc = currentIndex > 0 ? uniqueDocs[currentIndex - 1] : null;
        const nextDoc = currentIndex < uniqueDocs.length - 1 ? uniqueDocs[currentIndex + 1] : null;

        const buildButton = (label, target, disabled = false) => {
            const btn = document.createElement('a');
            btn.textContent = label;
            btn.href = disabled || !target ? '#' : target;
            btn.className = 'nav-button';
            if (disabled) {
                btn.style.opacity = '0.45';
                btn.style.pointerEvents = 'none';
                btn.style.filter = 'grayscale(0.2)';
            }
            return btn;
        };

        const createNavRow = () => {
            const container = document.createElement('div');
            container.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin: 1.75rem 0;
        padding: 1rem 0;
        border-top: 2px solid #e2e8f0;
      `;

            // Create wrapper for previous button (left)
            const prevWrapper = document.createElement('div');
            prevWrapper.style.flex = '1';
            prevWrapper.style.display = 'flex';
            prevWrapper.style.justifyContent = 'flex-start';
            prevWrapper.appendChild(buildButton('‹ previous', prevDoc?.resolvedHref || '', !prevDoc));

            // Create wrapper for next button (right)
            const nextWrapper = document.createElement('div');
            nextWrapper.style.flex = '1';
            nextWrapper.style.display = 'flex';
            nextWrapper.style.justifyContent = 'flex-end';
            nextWrapper.appendChild(buildButton('next ›', nextDoc?.resolvedHref || '', !nextDoc));

            container.appendChild(prevWrapper);
            container.appendChild(nextWrapper);

            return container;
        };

        const topNav = createNavRow();
        const firstElement = content.firstElementChild;
        if (firstElement) {
            content.insertBefore(topNav, firstElement);
        }
    };

    // Initialize
    addPrevNextButtons();

    // Build and inject navigation sidebar
    buildNavigationSidebar();
});

// Build navigation sidebar from docs_index.json
async function buildNavigationSidebar() {
    // Only show sidebar on individual documentation pages (not on SUMMARY, index, or explorer)
    const isSummary = window.location.pathname.includes('SUMMARY');
    const isExplorer = window.location.pathname.includes('explorer');
    const isIndex = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');

    if (isSummary || isExplorer || isIndex) return;

    try {
        // Load docs_index.json
        const indexUrl = new URL('../docs_index.json', window.location.href);
        const response = await fetch(indexUrl);
        if (!response.ok) return;

        const data = await response.json();
        const files = data.files || [];

        if (files.length === 0) return;

        // Create order map to maintain original order from docs_index.json
        const fileOrderMap = new Map();
        files.forEach((file, index) => {
            fileOrderMap.set(file.path, index);
        });

        // Group files by category while maintaining original order
        const groupedByCategory = {};
        files.forEach(file => {
            const category = file.category || 'Other';
            if (!groupedByCategory[category]) {
                groupedByCategory[category] = [];
            }
            groupedByCategory[category].push(file);
        });

        // Sort categories
        const categoryOrder = ['Controllers', 'Services', 'Entities', 'Repositories', 'Commands', 'Events', 'Plugins', 'Other'];
        const sortedCategories = categoryOrder.filter(cat => groupedByCategory[cat]).concat(
            Object.keys(groupedByCategory).filter(cat => !categoryOrder.includes(cat)).sort()
        );

        // Get current page path - normalize it for comparison
        const currentPath = window.location.pathname.replace(/\/index\.html?$/, '').replace(/\/$/, '');
        const currentPathParts = currentPath.split('/').filter(p => p);
        const currentFileName = currentPathParts[currentPathParts.length - 1] || '';

        // Load saved sidebar state from localStorage
        const savedStateKey = 'docs-sidebar-expanded-categories';
        const scrollPositionKey = 'docs-sidebar-scroll-position';
        let savedExpandedCategories = [];
        let savedScrollPosition = 0;
        try {
            const saved = localStorage.getItem(savedStateKey);
            if (saved) {
                savedExpandedCategories = JSON.parse(saved);
            }
            const savedScroll = localStorage.getItem(scrollPositionKey);
            if (savedScroll) {
                savedScrollPosition = parseInt(savedScroll, 10) || 0;
            }
        } catch (e) {
            console.warn('Could not load sidebar state from localStorage', e);
        }

        // Create sidebar container
        const sidebar = document.createElement('div');
        sidebar.id = 'docs-sidebar';
        sidebar.className = 'docs-sidebar';

        // Create search box
        const searchContainer = document.createElement('div');
        searchContainer.className = 'sidebar-search-container';
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search documentation...';
        searchInput.className = 'sidebar-search-input';
        searchInput.addEventListener('input', (e) => filterSidebar(e.target.value));
        searchContainer.appendChild(searchInput);
        sidebar.appendChild(searchContainer);

        // Back to index button
        const backButton = document.createElement('a');
        backButton.textContent = '← back to index';
        backButton.href = new URL('../SUMMARY/', window.location.href).href;
        backButton.className = 'sidebar-back-button';
        backButton.style.cssText = `
      display: block;
      margin: 0.35rem 0 0.85rem 0;
      padding: 0.55rem 0.75rem;
      text-decoration: none;
      color: rgba(0, 162, 106);
      background: rgb(248, 252, 250);
      border: 1px solid rgb(226, 240, 233);
      border-radius: 6px;
      font-weight: 600;
      text-align: center;
      transition: all 0.16s ease-in-out;
    `;
        backButton.addEventListener('mouseenter', () => {
            backButton.style.background = 'rgb(240, 250, 245)';
            backButton.style.borderColor = 'rgb(196, 230, 214)';
            backButton.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.08)';
            backButton.style.transform = 'translateY(-1px)';
        });
        backButton.addEventListener('mouseleave', () => {
            backButton.style.background = 'rgb(248, 252, 250)';
            backButton.style.borderColor = 'rgb(226, 240, 233)';
            backButton.style.boxShadow = 'none';
            backButton.style.transform = 'translateY(0)';
        });
        sidebar.appendChild(backButton);

        // Create navigation list
        const navList = document.createElement('div');
        navList.className = 'sidebar-nav-list';

        sortedCategories.forEach(category => {
            const categorySection = document.createElement('div');
            categorySection.className = 'sidebar-category-section';
            categorySection.dataset.category = category;

            // Category header (collapsible)
            const categoryHeader = document.createElement('button');
            categoryHeader.className = 'sidebar-category-header';
            categoryHeader.setAttribute('aria-expanded', 'false');
            categoryHeader.innerHTML = `
                <span class="sidebar-category-icon">▼</span>
                <span class="sidebar-category-name">${category}</span>
                <span class="sidebar-category-count">${groupedByCategory[category].length}</span>
            `;

            // Category content - collapsed by default
            const categoryContent = document.createElement('div');
            categoryContent.className = 'sidebar-category-content';
            categoryContent.style.display = 'none'; // Collapsed by default

            // Track if this category contains the active document
            let hasActiveDocument = false;

            // Maintain original order from docs_index.json (don't sort alphabetically)
            // Files are already in the correct order as they appear in the overview
            const sortedFiles = groupedByCategory[category].sort((a, b) => {
                const orderA = fileOrderMap.get(a.path) ?? Infinity;
                const orderB = fileOrderMap.get(b.path) ?? Infinity;
                return orderA - orderB;
            });

            sortedFiles.forEach(file => {
                const link = document.createElement('a');
                // Build proper MkDocs URL: remove .md extension and add trailing slash
                const filePathWithoutExt = file.path.replace(/\.md$/, '');
                // Construct relative URL - MkDocs converts .md files to directories
                link.href = `../${filePathWithoutExt}/`;
                link.className = 'sidebar-nav-link';
                link.textContent = file.title || file.path.replace(/\.md$/, '');

                // Highlight current page - better matching logic
                const filePathNormalized = filePathWithoutExt.toLowerCase();
                const currentPathNormalized = currentFileName.toLowerCase();
                const currentFullPath = currentPath.toLowerCase();

                if (filePathNormalized === currentPathNormalized ||
                    currentFullPath.includes(filePathNormalized) ||
                    currentFullPath.endsWith(filePathNormalized)) {
                    link.classList.add('active');
                    // Mark that this category contains the active document
                    hasActiveDocument = true;
                }

                link.addEventListener('click', (e) => {
                    // Save current sidebar state before navigation
                    const expandedCategories = [];
                    document.querySelectorAll('.sidebar-category-section').forEach(section => {
                        const header = section.querySelector('.sidebar-category-header');
                        const content = section.querySelector('.sidebar-category-content');
                        if (header && content && content.style.display !== 'none') {
                            const catName = section.dataset.category;
                            if (catName) {
                                expandedCategories.push(catName);
                            }
                        }
                    });

                    // Save scroll position of the sidebar
                    const navList = document.querySelector('.sidebar-nav-list');
                    const scrollPosition = navList ? navList.scrollTop : 0;

                    try {
                        localStorage.setItem(savedStateKey, JSON.stringify(expandedCategories));
                        localStorage.setItem(scrollPositionKey, scrollPosition.toString());
                    } catch (e) {
                        console.warn('Could not save sidebar state to localStorage', e);
                    }

                    // Allow default navigation to happen
                    // The page will reload and show the new document
                    // Update active state will happen on page load
                    // Close sidebar on mobile after click
                    if (window.innerWidth <= 1219) {
                        sidebar.classList.remove('sidebar-open');
                    }
                });

                categoryContent.appendChild(link);
            });

            // Determine initial state: expand if has active document OR if it was saved as expanded
            const shouldExpand = hasActiveDocument || savedExpandedCategories.includes(category);

            if (shouldExpand) {
                categoryContent.style.display = 'block';
                categoryHeader.setAttribute('aria-expanded', 'true');
                const icon = categoryHeader.querySelector('.sidebar-category-icon');
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                // Collapsed state - icon rotated
                categoryContent.style.display = 'none';
                categoryHeader.setAttribute('aria-expanded', 'false');
                const icon = categoryHeader.querySelector('.sidebar-category-icon');
                if (icon) icon.style.transform = 'rotate(-90deg)';
            }

            // Function to save sidebar state
            const saveSidebarState = () => {
                const expandedCategories = [];
                document.querySelectorAll('.sidebar-category-section').forEach(section => {
                    const header = section.querySelector('.sidebar-category-header');
                    const content = section.querySelector('.sidebar-category-content');
                    if (header && content && content.style.display !== 'none') {
                        const catName = section.dataset.category;
                        if (catName) {
                            expandedCategories.push(catName);
                        }
                    }
                });
                try {
                    localStorage.setItem(savedStateKey, JSON.stringify(expandedCategories));
                } catch (e) {
                    console.warn('Could not save sidebar state to localStorage', e);
                }
            };

            // Toggle category on header click
            categoryHeader.addEventListener('click', () => {
                const isExpanded = categoryContent.style.display !== 'none';
                categoryContent.style.display = isExpanded ? 'none' : 'block';
                const icon = categoryHeader.querySelector('.sidebar-category-icon');
                icon.style.transform = isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)';
                categoryHeader.setAttribute('aria-expanded', !isExpanded);
                // Save state when user manually toggles
                saveSidebarState();
            });

            categorySection.appendChild(categoryHeader);
            categorySection.appendChild(categoryContent);
            navList.appendChild(categorySection);
        });

        sidebar.appendChild(navList);

        // Insert sidebar into page
        // Try to find the main content area in MkDocs structure
        const mainInner = document.querySelector('.md-main__inner');
        const mainContent = document.querySelector('.md-content__inner') || document.querySelector('.md-content');

        if (mainContent && mainInner) {
            // Create wrapper for sidebar and content
            const wrapper = document.createElement('div');
            wrapper.className = 'docs-layout-wrapper';

            // Get the parent container (usually .md-content)
            const contentParent = mainContent.parentElement;

            // Insert wrapper before mainContent
            contentParent.insertBefore(wrapper, mainContent);

            // Move main content into wrapper
            wrapper.appendChild(sidebar);
            wrapper.appendChild(mainContent);

            // Restore scroll position after sidebar is inserted into DOM
            // Use setTimeout to ensure DOM is ready and layout is calculated
            setTimeout(() => {
                const navListElement = document.querySelector('.sidebar-nav-list');
                if (navListElement && savedScrollPosition > 0) {
                    navListElement.scrollTop = savedScrollPosition;
                } else if (navListElement) {
                    // If no saved position, scroll to active link if it exists
                    const activeLink = navListElement.querySelector('.sidebar-nav-link.active');
                    if (activeLink) {
                        // Scroll to active link with some offset from top
                        const linkOffset = activeLink.offsetTop;
                        const containerHeight = navListElement.clientHeight;
                        const scrollPosition = Math.max(0, linkOffset - containerHeight / 3);
                        navListElement.scrollTop = scrollPosition;
                    }
                }
            }, 150);

            // Add toggle button for mobile
            const toggleButton = document.createElement('button');
            toggleButton.className = 'sidebar-toggle';
            toggleButton.innerHTML = '☰';
            toggleButton.setAttribute('aria-label', 'Toggle navigation');
            toggleButton.addEventListener('click', (e) => {
                e.stopPropagation();
                sidebar.classList.toggle('sidebar-open');
            });

            const header = document.querySelector('.md-header') || document.body;
            if (header) {
                // Check if toggle button already exists
                if (!header.querySelector('.sidebar-toggle')) {
                    header.appendChild(toggleButton);
                }
            }

            // Close sidebar when clicking outside on mobile
            const handleOutsideClick = (e) => {
                if (window.innerWidth <= 1219) { // 76.25em = 1219px
                    if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
                        sidebar.classList.remove('sidebar-open');
                    }
                }
            };

            // Use capture phase to catch clicks early
            document.addEventListener('click', handleOutsideClick, true);

            // Close sidebar when window is resized to desktop
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    if (window.innerWidth > 1219) {
                        sidebar.classList.remove('sidebar-open');
                    }
                }, 250);
            });
        } else {
            // Fallback: try to insert directly into body or main content
            const fallbackContainer = document.querySelector('.md-content') || document.querySelector('main') || document.body;
            if (fallbackContainer) {
                const wrapper = document.createElement('div');
                wrapper.className = 'docs-layout-wrapper';
                wrapper.style.display = 'flex';

                // Insert before the first child
                if (fallbackContainer.firstChild) {
                    fallbackContainer.insertBefore(wrapper, fallbackContainer.firstChild);
                } else {
                    fallbackContainer.appendChild(wrapper);
                }

                wrapper.appendChild(sidebar);

                // Move existing content into wrapper
                const existingContent = Array.from(fallbackContainer.children).filter(
                    child => !child.classList.contains('docs-layout-wrapper')
                );
                existingContent.forEach(child => {
                    if (child !== wrapper) {
                        wrapper.appendChild(child);
                    }
                });

                // Restore scroll position after sidebar is inserted into DOM (fallback case)
                setTimeout(() => {
                    const navListElement = document.querySelector('.sidebar-nav-list');
                    if (navListElement && savedScrollPosition > 0) {
                        navListElement.scrollTop = savedScrollPosition;
                    } else if (navListElement) {
                        // If no saved position, scroll to active link if it exists
                        const activeLink = navListElement.querySelector('.sidebar-nav-link.active');
                        if (activeLink) {
                            // Scroll to active link with some offset from top
                            const linkOffset = activeLink.offsetTop;
                            const containerHeight = navListElement.clientHeight;
                            const scrollPosition = Math.max(0, linkOffset - containerHeight / 3);
                            navListElement.scrollTop = scrollPosition;
                        }
                    }
                }, 150);
            }
        }

    } catch (error) {
        console.error('Error building sidebar:', error);
    }
}

// Filter sidebar based on search input
function filterSidebar(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
    const categorySections = document.querySelectorAll('.sidebar-category-section');

    categorySections.forEach(section => {
        const links = section.querySelectorAll('.sidebar-nav-link');
        let hasVisibleLinks = false;

        links.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (!term || text.includes(term)) {
                link.style.display = '';
                hasVisibleLinks = true;
            } else {
                link.style.display = 'none';
            }
        });

        // Show/hide category if it has visible links
        if (hasVisibleLinks) {
            section.style.display = '';
            // Auto-expand categories with matches
            if (term) {
                const content = section.querySelector('.sidebar-category-content');
                content.style.display = 'block';
                const header = section.querySelector('.sidebar-category-header');
                const icon = header.querySelector('.sidebar-category-icon');
                icon.style.transform = 'rotate(0deg)';
            }
        } else {
            section.style.display = 'none';
        }
    });
}
