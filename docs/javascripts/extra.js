// Collapsible Navigation for SUMMARY page
document.addEventListener('DOMContentLoaded', function () {
    // Make nested lists collapsible
    const makeCollapsible = () => {
        // Find all list items that contain nested lists
        const listItems = document.querySelectorAll('.md-content li');

        listItems.forEach(item => {
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

                // Initially collapse nested lists
                nestedList.style.display = 'none';
                toggle.style.transform = 'rotate(-90deg)';
                item.classList.add('collapsed');

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

    // Build document list from SUMMARY page for navigation
    const buildDocumentList = async () => {
        try {
            const response = await fetch('../SUMMARY/');
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const links = [];
            doc.querySelectorAll('.md-content a[href]').forEach(link => {
                const href = link.getAttribute('href');
                // Skip anchors, external links, and navigation links
                if (href &&
                    !href.includes('#') &&
                    !href.startsWith('http') &&
                    !href.includes('SUMMARY') &&
                    !href.includes('explorer') &&
                    href !== '../' &&
                    href !== '/') {
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
        clearButton.style.cssText = `
      padding: 0.5rem 1rem;
      background-color: #3C3228;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: 'Poppins', Arial, sans-serif;
      margin-left: auto;
    `;

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
        expandAll.className = 'md-button md-button--primary';
        expandAll.style.cssText = `
      background-color: #6B4C9A;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
    `;

        const collapseAll = document.createElement('button');
        collapseAll.textContent = 'Collapse All';
        collapseAll.className = 'md-button';
        collapseAll.style.cssText = `
      background-color: #3C3228;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
    `;

        expandAll.addEventListener('click', () => {
            document.querySelectorAll('.md-content ul ul').forEach(ul => {
                if (ul.style.display !== 'none') {
                    ul.style.display = 'block';
                }
            });
            document.querySelectorAll('.toc-toggle').forEach(toggle => {
                if (toggle.parentElement.style.display !== 'none') {
                    toggle.style.transform = 'rotate(0deg)';
                    toggle.parentElement.classList.remove('collapsed');
                }
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

    // Add Previous/Next navigation buttons on document pages
    const addPrevNextButtons = async () => {
        // Don't add on home, SUMMARY, or explorer pages
        if (window.location.pathname.endsWith('/') ||
            window.location.pathname.includes('SUMMARY') ||
            window.location.pathname.includes('explorer') ||
            window.location.pathname.includes('index.html')) {
            return;
        }

        const content = document.querySelector('.md-content__inner') || document.querySelector('.md-content') || document.body;

        // Get all document links from SUMMARY page
        const docList = await buildDocumentList();
        if (docList.length === 0) return;

        // Find current document in the list
        const currentPath = window.location.pathname.split('/').pop();
        const currentIndex = docList.findIndex(doc => doc.href.includes(currentPath));

        if (currentIndex === -1) return;

        const prevDoc = currentIndex > 0 ? docList[currentIndex - 1] : null;
        const nextDoc = currentIndex < docList.length - 1 ? docList[currentIndex + 1] : null;

        // Create navigation container
        const createNavButtons = () => {
            const navContainer = document.createElement('div');
            navContainer.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2rem 0;
        padding: 1rem 0;
        border-top: 2px solid #e2e8f0;
        gap: 1rem;
      `;

            // Previous button
            if (prevDoc) {
                const prevBtn = document.createElement('a');
                prevBtn.href = '../' + prevDoc.href;
                prevBtn.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 1.2rem;">❮</span>
            <div>
              <div style="font-size: 0.75rem; opacity: 0.8;">Previous</div>
              <div style="font-weight: 500;">${prevDoc.title}</div>
            </div>
          </div>
        `;
                prevBtn.style.cssText = `
          background-color: #00A26A;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 4px;
          text-decoration: none;
          font-family: 'Axiforma', 'Poppins', Arial, sans-serif;
          transition: all 0.3s ease;
          flex: 1;
          max-width: 45%;
        `;
                prevBtn.onmouseover = () => {
                    prevBtn.style.backgroundColor = '#024638';
                    prevBtn.style.transform = 'translateX(-4px)';
                };
                prevBtn.onmouseout = () => {
                    prevBtn.style.backgroundColor = '#00A26A';
                    prevBtn.style.transform = 'translateX(0)';
                };
                navContainer.appendChild(prevBtn);
            } else {
                navContainer.appendChild(document.createElement('div'));
            }

            // Back to Index button (center)
            const backBtn = document.createElement('a');
            backBtn.href = '../SUMMARY/';
            backBtn.innerHTML = '📋 Index';
            backBtn.style.cssText = `
        background-color: #024638;
        color: white;
        padding: 0.75rem 1.25rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 500;
        font-family: 'Axiforma', 'Poppins', Arial, sans-serif;
        transition: all 0.3s ease;
      `;
            backBtn.onmouseover = () => {
                backBtn.style.backgroundColor = '#00A26A';
                backBtn.style.transform = 'translateY(-2px)';
            };
            backBtn.onmouseout = () => {
                backBtn.style.backgroundColor = '#024638';
                backBtn.style.transform = 'translateY(0)';
            };
            navContainer.appendChild(backBtn);

            // Next button
            if (nextDoc) {
                const nextBtn = document.createElement('a');
                nextBtn.href = '../' + nextDoc.href;
                nextBtn.innerHTML = `
          <div style="display: flex; align-items: center; gap: 0.5rem; text-align: right;">
            <div>
              <div style="font-size: 0.75rem; opacity: 0.8;">Next</div>
              <div style="font-weight: 500;">${nextDoc.title}</div>
            </div>
            <span style="font-size: 1.2rem;">❯</span>
          </div>
        `;
                nextBtn.style.cssText = `
          background-color: #00A26A;
          color: white;
          padding: 0.75rem 1.25rem;
          border-radius: 4px;
          text-decoration: none;
          font-family: 'Axiforma', 'Poppins', Arial, sans-serif;
          transition: all 0.3s ease;
          flex: 1;
          max-width: 45%;
        `;
                nextBtn.onmouseover = () => {
                    nextBtn.style.backgroundColor = '#024638';
                    nextBtn.style.transform = 'translateX(4px)';
                };
                nextBtn.onmouseout = () => {
                    nextBtn.style.backgroundColor = '#00A26A';
                    nextBtn.style.transform = 'translateX(0)';
                };
                navContainer.appendChild(nextBtn);
            } else {
                navContainer.appendChild(document.createElement('div'));
            }

            return navContainer;
        };

        // Add navigation at top
        const topNav = createNavButtons();
        const firstElement = content.firstElementChild;
        if (firstElement) {
            content.insertBefore(topNav, firstElement);
        }

        // Add navigation at bottom
        const bottomNav = createNavButtons();
        bottomNav.style.borderTop = '2px solid #e2e8f0';
        bottomNav.style.borderBottom = 'none';
        content.appendChild(bottomNav);

    };

    // Initialize - remove old content check for safety
    addPrevNextButtons();

    // Floating Back Button for all document pages (except SUMMARY)
    const addBackButton = () => {
        if (window.location.pathname.endsWith('SUMMARY/') || window.location.pathname.endsWith('SUMMARY/index.html')) {
            return;
        }

        // Create back button
        const backButton = document.createElement('div');
        backButton.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      z-index: 1000;
      background-color: #00A26A;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Axiforma', 'Poppins', sans-serif;
      transition: all 0.3s ease;
    `;
        backButton.innerHTML = '<span>←</span> Back to Index';

        backButton.onclick = () => {
            window.location.href = '../SUMMARY/';
        };

        backButton.onmouseover = () => {
            backButton.style.backgroundColor = '#024638';
            backButton.style.transform = 'translateY(-2px)';
        };

        backButton.onmouseout = () => {
            backButton.style.backgroundColor = '#00A26A';
            backButton.style.transform = 'translateY(0)';
        };

        document.body.appendChild(backButton);
    };

    addBackButton();
});
