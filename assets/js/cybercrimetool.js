const examples = {
            phishing: {
                "Received an email to blackmail you?": "/assets/images/resources/1password.png",
                "Received an email to take an immediate action?": "/assets/images/resources/avast.png",
                "Received an email with attachments?": "/assets/images/resources/brave.png",
            },
            scams: {
                "Tech Support": "/assets/images/resources/dashlane.png",
                "Impersonation ": "/assets/images/resources/duckduck.png",
                "Healthcare": "/assets/images/resources/dashlane.png",
                "Employment": "/assets/images/resources/duckduck.png",
            },
            ransomware: {
                "Locked all files and data": "/assets/images/resources/dashlane.png",
                "Asking for a payment": "/assets/images/resources/duckduck.png",
            },
            "Identity Theft": {
                "Finnace": "/assets/images/resources/dashlane.png",
                "Fraud": "/assets/images/resources/duckduck.png",
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
        });