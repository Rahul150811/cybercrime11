// Get the search input element
const searchInput = document.getElementById('searchInput');

// Add an event listener to the input field to detect changes with a debounce
let debounceTimer;
searchInput.addEventListener('input', function () {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    // Get the search query from the input field
    const query = searchInput.value.trim().toLowerCase();

    // Check if the search query is empty (contains only whitespace)
    if (!query) {
      clearSearchResults();
      return;
    }

    // Get all the accordion items
    const accordionItems = document.querySelectorAll('.js-accordion-item');

    // Array to store matching accordion items with bodies
    const matchingAccordionItems = [];

    // Loop through all accordion items to find matches
    accordionItems.forEach(item => {
      const h4Element = item.querySelector('h4');
      if (h4Element.textContent.trim().toLowerCase().includes(query)) {
        matchingAccordionItems.push(item);
      }
    });

    // Call a function to display the search results
    displaySearchResults(matchingAccordionItems);
  }, 300); // Adjust the debounce timeout (in milliseconds) as needed
});

// Function to display search results
function displaySearchResults(results) {
  // Get a reference to an element where you want to display the results
  const resultsContainer = document.getElementById('searchResults');

  // Clear previous results
  resultsContainer.innerHTML = '';

  // If there are no search results, display a "Not found" message
  if (results.length === 0) {
    const notFoundMessage = document.createElement('p');
    notFoundMessage.textContent = 'Not found. Please try again.';
    resultsContainer.appendChild(notFoundMessage);
  } else {
    // Append the matching accordion items to the results container
    results.forEach(item => {
      // Clone the matching accordion item and add it to the results container
      const clonedItem = item.cloneNode(true);
      resultsContainer.appendChild(clonedItem);

      // Add click event listener to the header for accordion functionality in search results
      clonedItem.querySelector('.js-accordion-header').addEventListener('click', () => {
        clonedItem.classList.toggle('active');
      });
    });

    // Hide the original accordion container
    const accordionContainer = document.querySelector('.js-accordion');
    accordionContainer.style.display = 'none';
  }
}

// Function to clear search results and show the original accordion
function clearSearchResults() {
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  const accordionContainer = document.querySelector('.js-accordion');
  accordionContainer.style.display = 'block';
}

// Add click event listener to the header for accordion functionality in the original accordion
const originalAccordionItems = document.querySelectorAll('.js-accordion-item');
originalAccordionItems.forEach(item => {
  item.querySelector('.js-accordion-header').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});