const examples = {
            phishing: {
                urgentEmail: "/assets/images/resources/1password.png",
                blackmailEmail: "/assets/images/resources/avast.png",
                securityEmail: "/assets/images/resources/brave.png",
            },
            scams: {
                example1: "/assets/images/resources/dashlane.png",
                example2: "/assets/images/resources/duckduck.png",
                // Add more scam examples here
            },
            // Add more categories and subcategories with image URLs
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