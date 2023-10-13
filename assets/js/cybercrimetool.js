const examples = {
    Phishing: {
        "": "/assets/images/threatwatch/Phishing.png",
        "Sensational": "/assets/images/threatwatch/sensational phishing.png",
        "Received an email to blackmail you?": "/assets/images/threatwatch/T-Mobile Phish Email.png",
        "Received an email to take an immediate action?": "/assets/images/threatwatch/UPS scam.png",
        "Received an email with attachments?": "/assets/images/threatwatch/ups_scam2.png",
        "Fake UPS?": "/assets/images/threatwatch/package_delivery2.png",
    },
    Scams: {
        "Tech Support": "",
        "Impersonation ": "",
        "Healthcare": "",
        "Employment": "",
    },
    Ransomware: {
        "Locked all files and data": "",
        "Asking for a payment": "",
    },
    "Identity Theft": {
        "Finnace": "",
        "Fraud": "",
    },

};

// Populate subcategory options based on the selected category
const categoryDropdown = document.getElementById("category");
const subcategoryDropdown = document.getElementById("subcategory");
const searchInput = document.getElementById("search");
const contentSection = document.getElementById("content");

categoryDropdown.addEventListener("change", function () {
    const selectedCategory = categoryDropdown.value;
    const subcategories = Object.keys(examples[selectedCategory]);

    // Clear previous subcategory options
    subcategoryDropdown.innerHTML = "<option value='all'>All Subcategories</option>";

    // Create new subcategory options
    subcategories.forEach(function (subcategory) {
        const option = document.createElement("option");
        option.value = subcategory;
        option.textContent = subcategory;
        subcategoryDropdown.appendChild(option);
    });

    // Update the result message
    updateResultMessage(selectedCategory, subcategoryDropdown.value, searchInput.value);
});

    

subcategoryDropdown.addEventListener("change", function () {
    const selectedCategory = categoryDropdown.value;

    // Update the result message
    updateResultMessage(selectedCategory, subcategoryDropdown.value, searchInput.value);
});

// Handle form submission
document.querySelector(".searchbar-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedCategory = categoryDropdown.value;
    const selectedSubcategory = subcategoryDropdown.value;
    const searchTerm = searchInput.value.toLowerCase();
    let results = [];

    // Iterate through all categories and subcategories
    Object.keys(examples).forEach(function (category) {
        Object.keys(examples[category]).forEach(function (subcategory) {
            const imageUrl = examples[category][subcategory];

            // Check if the example matches the selected category, subcategory, or search term
            if (
                (selectedCategory === "all" || selectedCategory === category) &&
                (selectedSubcategory === "all" || selectedSubcategory === subcategory) &&
                (searchTerm === "" || imageUrl.toLowerCase().includes(searchTerm))
            ) {
                results.push(imageUrl);
            }
        });
    });

    // Display the filtered images
    contentSection.innerHTML = results.map(function (imageUrl) {
        return `<div class="image-container"><img src="${imageUrl}" alt="Image"></div>`;
    }).join("");
    // Update the result message
updateResultMessage(selectedCategory, selectedSubcategory, searchTerm);
});

// Function to update the result message
function updateResultMessage(category, subcategory, search) {
    let message = "Showing the result of ";
    
    if (search !== "") {
        message = `<strong>${message}</strong>` + `<strong>search: </strong>"${search}"`;
    } else {
        if (category !== "all") {
            message = `<strong>${message}</strong>` + `"${category}"`;
        } else {
            message = `<strong>${message}</strong>` + '"All Categories"';
        }
    }

    resultMessage.innerHTML = message;
}


// Handle image click to open the pop-out gallery
const imageGallery = document.getElementById("content");
const imagePopup = document.getElementById("imagePopup");
const popupImage = document.querySelector(".popup-image");
const closePopup = document.getElementById("closePopup");

imageGallery.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        popupImage.src = e.target.src;
        imagePopup.style.display = "flex";
    }
});

// Handle close button click to close the pop-out gallery
closePopup.addEventListener("click", function () {
    imagePopup.style.display = "none";
});

// Close the pop-out gallery when clicking outside the image
imagePopup.addEventListener("click", function (e) {
    if (e.target === imagePopup) {
        imagePopup.style.display = "none";
    }
});

// Ensure the pop-out gallery is responsive on window resize
window.addEventListener("resize", function () {
    if (imagePopup.style.display === "flex") {
        adjustPopupSize();
    }
});

// Function to adjust the size of the pop-out gallery
function adjustPopupSize() {
    const windowHeight = window.innerHeight;
    const imageHeight = popupImage.offsetHeight;
    if (imageHeight >= windowHeight) {
        popupImage.style.maxHeight = `${windowHeight - 40}px`; // Adjusted for padding
    } else {
        popupImage.style.maxHeight = "80vh"; // Adjust as needed
    }
}