// Get all tab elements
const tabs = document.querySelectorAll('.tab');
// Get all tab content elements
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-tab');

    // Remove 'active' class from all tabs and tab contents
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the selected tab and tab content
    tab.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});