// Get references to HTML elements
const imageContainers = document.querySelectorAll('.image-container');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close-button');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const categoryDropdown = document.getElementById('category');
const subcategoryDropdown = document.getElementById('subcategory');
const searchInput = document.getElementById('search');
const resultMessage = document.getElementById('resultMessage');

// Define category-subcategory mappings
const categorySubcategoryMap = {
    category1: ["Password Reset", "Virus Alert"],
    category2: ["Tech Support Scam", "Impersonation Scam", "Dating Scams"],
    category3: ["Subcategory 5", "Subcategory 6"],
    category4: ["Subcategory 7", "Subcategory 8"],
};

let currentIndex = 0;
let hiddenIndex = 0;
let showHidden = false;

// Function to open the lightbox
function openLightbox(index) {
    if (showHidden) {
        lightboxImage.src = imageContainers[index].dataset.hiddenImage;
    } else {
        lightboxImage.src = imageContainers[index].querySelector('img').src;
    }
    lightbox.style.display = 'block';
    currentIndex = index;
    // Add a click event listener to the lightbox for closing
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Event listeners
imageContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        showHidden = false;
        openLightbox(index);
    });
});

closeButton.addEventListener('click', closeLightbox);

prevButton.addEventListener('click', () => {
    if (showHidden) {
        showHidden = false;
        openLightbox(currentIndex);
    } else {
        showHidden = true;
        hiddenIndex = currentIndex;
        openLightbox(hiddenIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (showHidden) {
        showHidden = false;
        openLightbox(currentIndex);
    } else {
        showHidden = true;
        hiddenIndex = currentIndex;
        openLightbox(hiddenIndex);
    }
});

// Populate subcategories based on the selected category
categoryDropdown.addEventListener('change', populateSubcategories);
subcategoryDropdown.addEventListener('change', filterImages);

function populateSubcategories() {
    const selectedCategory = categoryDropdown.value;
    const subcategories = categorySubcategoryMap[selectedCategory] || [];

    // Clear the subcategory dropdown
    subcategoryDropdown.innerHTML = '';

    // Add an option for all subcategories
    subcategoryDropdown.appendChild(new Option('All Subcategories', 'all'));

    // Add subcategories specific to the selected category
    for (const subcategory of subcategories) {
        subcategoryDropdown.appendChild(new Option(subcategory, subcategory));
    }
}

categoryDropdown.addEventListener('change', filterImages);
subcategoryDropdown.addEventListener('change', filterImages);

function filterImages() {
    const selectedCategory = categoryDropdown.value;
    const selectedSubcategory = subcategoryDropdown.value;

    imageContainers.forEach((container, index) => {
        const containerCategory = container.dataset.category;
        const containerSubcategory = container.dataset.subcategory;
        const isVisible = (selectedCategory === 'all' || selectedCategory === containerCategory) &&
                         (selectedSubcategory === 'all' || selectedSubcategory === containerSubcategory);
        container.style.display = isVisible ? 'block' : 'none';
    });

    // Update the result message
    const categoryText = categoryDropdown.options[categoryDropdown.selectedIndex].text;
    const subcategoryText = subcategoryDropdown.options[subcategoryDropdown.selectedIndex].text;
    resultMessage.textContent = `Showing results for ${categoryText} - ${subcategoryText}`;
}


searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value.toLowerCase();

    imageContainers.forEach((container) => {
        const containerCategory = container.dataset.category.toLowerCase();
        const isVisible = containerCategory.includes(searchQuery) ||
                         containerCategory.startsWith(searchQuery);
        container.style.display = isVisible ? 'block' : 'none';
    });
    // Update the result message
    const categoryText = categoryDropdown.options[categoryDropdown.selectedIndex].text;
    const subcategoryText = subcategoryDropdown.options[subcategoryDropdown.selectedIndex].text;
    resultMessage.textContent = `Showing results for ${categoryText} - ${subcategoryText}`
});
