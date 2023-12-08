const audioscamItems = document.querySelectorAll('.audioscam-list-item');
const categoryDropdown = document.getElementById('category');
const searchInput = document.getElementById('search');
const resultMessage = document.getElementById('resultMessage');

categoryDropdown.addEventListener('change', filterItems);
searchInput.addEventListener('input', filterItems);

function filterItems() {
    const selectedCategory = categoryDropdown.value.toLowerCase();
    const searchQuery = searchInput.value.toLowerCase();

    audioscamItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category').toLowerCase();
        const itemText = item.textContent.toLowerCase();
        const isCategoryMatch = (selectedCategory === 'all' || itemCategory === selectedCategory);
        const isTextMatch = (itemText.includes(searchQuery) || itemText.startsWith(searchQuery));
        const isVisible = isCategoryMatch && isTextMatch;
        item.style.display = isVisible ? 'block' : 'none';
    });

    // Update the result message
    const categoryText = categoryDropdown.options[categoryDropdown.selectedIndex].text;
    resultMessage.textContent = `Showing results for "${categoryText}"`;
}
