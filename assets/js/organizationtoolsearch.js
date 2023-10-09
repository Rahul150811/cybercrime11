const examples = {
    Password: [
        {
            title: "No More Ransom",
            imageUrl: "/assets/images/resources/nomoreransom.png",
            description: "A service that analyzes files and URLs for potential malware using multiple antivirus engines and provides detailed reports.",
            link: "https://www.nomoreransom.org/en/index.html",
        },
        // Add more Password category cards here...
    ],
    Ransomware: [
        {
            title: "Virustotal",
            imageUrl: "/assets/images/resources/virustotal.png",
            description: "VirusTotal is a user-friendly online tool that scans files and URLs for potential threats. It analyzes them using multiple antivirus engines, giving you a comprehensive view of their safety status.",
            link: "https://www.virustotal.com/gui/home/upload",
        },
    ],
    webscanner: [
        {
            title: "URLScan.io",
            imageUrl: "/assets/images/resources/urlscan.png",
            description: "This service allows you to scan and analyze websites for potential threats, including phishing and malware.",
            link: "https://urlscan.io/",
        },
    ],
    breachcheck: [
        {
            title: "Have I been Pwned?",
            imageUrl: "/assets/images/resources/haveibeenpwned.png",
            description: "Check if your email address or passwords have been compromised in data breaches to enhance your online security.",
            link: "https://haveibeenpwned.com/",
        },
        {
            title: "StopNCII.org",
            imageUrl: "/assets/images/resources/stopncii.png",
            description: "Visit stopncii.org to quickly assess if your personal information, including email addresses and passwords, has been compromised in data breaches. Safeguard your online security by staying informed about potential vulnerabilities.",
            link: "https://stopncii.org/",
        },
    ],
};


const categoryDropdown = document.getElementById("category");
const searchInput = document.getElementById("search");
const contentSection = document.getElementById("content");

categoryDropdown.addEventListener("change", function () {
    const selectedCategory = categoryDropdown.value;
    const cards = examples[selectedCategory];

    // Clear previous cards
    contentSection.innerHTML = "";

    // Display cards for the selected category
    cards.forEach(function (card) {
        contentSection.innerHTML += `
            <div class="card">
                <img src="${card.imageUrl}" alt="${card.title}">
                <div class="card-content">
                    <a href="${card.link}" target="_blank" class="external-link" data-redirect-url="${card.link}">
                        <div class="card-title">${card.title}</div>
                        <p>${card.description}</p>
                    </a>
                </div>
            </div>
        `;
    });

    // Update the result message
    updateResultMessage(selectedCategory, "", "");
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
            const imageUrl = examples[category];

            // Check if the example matches the selected category, subcategory, or search term
            if (
                (selectedCategory === "all" || selectedCategory === category) && 
                (searchTerm === "" || imageUrl.toLowerCase().includes(searchTerm))
            ) {
                results.push(imageUrl);
            }
        
    });

    // Display the filtered images
    contentSection.innerHTML = results.map(function (imageUrl) {
        return `<div class="image-container"><img src="${imageUrl}" alt="Image"></div>`;
    }).join("");
    // Update the result message
updateResultMessage(selectedCategory, searchTerm);
});

// Function to update the result message
function updateResultMessage(category, search) {
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
