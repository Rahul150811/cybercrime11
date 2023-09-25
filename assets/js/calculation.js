// Define the scoring system for each question (adjust weights as needed)
const questionScores = {
    'password1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Implement a Password Manager: </span></b>Consider using a reputable password manager to generate and securely store complex passwords for each account.',
        'bestPractices': [
            '<b><span style="color: red">Strong & Unique Passwords: </span></b>Use long and complex passwords with a combination of letters, numbers, and symbols.',
        ],
    },
    'password2': { 
        'frequently': 3, 
        'occasionally': 2, 
        'rarely': 1, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Use a password manager: </span></b>Either change your passwords periodically or use a password manager to help with this.',
        'bestPractices': [
            '<b><span style="color: red">Change passwords regularly: </span></b>Aim to change your passwords at least every few months for added security.'
        ],
    },
    'password3': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Implement a Password Manager: </span></b>Implement a password manager to create and manage strong, unique passwords for each of your online accounts.', 
        'bestPractices': [
            '<b><span style="color: red">Use a Password Manager: </span></b>Consider using a reputable password manager to store and generate complex passwords for each of your online accounts. Password managers can help you keep track of your passwords securely.'
        ],
    },
    'mfa1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Learn about MFA methods: </span></b>Familiarize yourself with different MFA methods such as SMS codes, authenticator apps, and hardware tokens.',
        'bestPractices': [
            '<b><span style="color: red">Enable MFA wherever available: </span></b>Activate MFA for your accounts to add an extra layer of protection.'
        ],
    },
    'mfa2': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Explore MFA documentation: </span></b>Take time to research and understand the MFA methods that are available and suitable for you.',
        'bestPractices': [
            '<b><span style="color: red">Understand MFA methods: </span></b>Be aware of the various MFA methods and their advantages.'
        ],
    },
    'device1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Set automatic updates: </span></b>Enable automatic updates to ensure your devices stay protected.',
        'bestPractices': [
            '<b><span style="color: red">Regularly update your devices: </span></b>Regularly update and secure your devices.'
        ],
    },
    'device2': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Regularly update security software: </span></b> Keep your security software updated for optimal protection.',
        'bestPractices': [
            '<b><span style="color: red">Install security software: Use reputable security software to safeguard your devices.</span></b>'
        ],
    },
    'device3': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Activate device lock: </span></b>Ensure your smartphone has a lock screen for added security to prevent unauthorized access.',
        'bestPractices': [
            '<b><span style="color: red">Secure your Smart Devices:</span></b> Use PINs, passwords, or biometric authentication to secure your devices.'
        ],
    },
    'social1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Practice safe information sharing: </span></b> Be especially careful when asked for personal information online or over the phone..',
        'bestPractices': [
            '<b><b><span style="color: red">Exercise caution with personal information: </span></b> Avoid sharing sensitive personal details on the internet or with unknown callers.</b>'
        ],
    },
    'social2': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Stay Informed: </span></b> Keep up to date with the latest phishing and scam tactics to protect yourself.',
        'bestPractices': [
            '<b><span style="color: red">Learn to recognize phishing attempts: </span></b>Educate yourself on common signs of phishing emails and scam calls.'
        ],
    },
    'data1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Automate backups: </span></b> Set up automated backups to ensure consistency.',
        'bestPractices': [
            '<b><span style="color: red">Frequent data backups: </span></b> Regularly back up your important data to prevent data loss.'
        ],
    },
    'data2': { 
        'frequently': 3, 
        'occasionally': 2, 
        'rarely': 1, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Verify backup integrity: </span></b>Ensure that your backups are functional and reliable.',
        'bestPractices': [
            '<b><span style="color: red">Test data restoration: </span></b>Periodically test your backups to confirm they can be successfully restored.'
        ],
    },
    'download1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Avoid third-party sources: </span></b> Refrain from downloading software from unofficial or suspicious websites.',
        'bestPractices': [
            '<b><span style="color: red">Download from trusted sources: </span></b> Obtain software and apps only from official and reputable sources.'
        ],
    },
    'download2': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Limit unnecessary permissions: </span></b>Avoid granting unnecessary access to your device data and features.',
        'bestPractices': [
            '<b><span style="color: red">Review app permissions: </span></b> Carefully review and consider app permissions before granting them.'
        ],
    },
    'privacy1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Limit public sharing: </span></b> Minimize the amount of personal information visible to the public',
        'bestPractices': [
            '<b><span style="color: red">Review and adjust privacy settings: </span></b> Regularly review and adjust privacy settings to ensure sensitive data is protected.'
        ],
    },
    'privacy2': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Share selectively: </span></b>Avoid oversharing personal details that can compromise your privacy',
        'bestPractices': [
            '<b><span style="color: red">Exercise discretion: </span></b>Be mindful of the personal information you share on social media.'
        ],
    },
    'watch1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Use trusted sources: </span></b> Stick to reputable sources for downloading content to prevent malware or scams.',
        'bestPractices': [
            '<b><span style="color: red">Avoid downloading from unknown sites: </span></b> Refrain from downloading content from unfamiliar or suspicious websites.'
        ],
    },
    'watch2': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': '<b><span style="color: red">Verify website legitimacy: </span></b> Verify the credibility of websites before interacting with them to avoid potential threats.',
        'bestPractices': [
            '<b><span style="color: red">Exercise caution with unknown sites: </span></b> Approach unknown websites with caution, as they can pose risks.'
        ],
    },
};

// Calculate the individual scores for each question and total scores for each category
function calculateScore() {
    // Get all the select elements
    const selectElements = document.querySelectorAll('select');

    // Initialize the total score and category scores
    let totalScore = 0;
    const categoryScores = {};
    const recommendations = {}; // Store recommendations for each question

    // Calculate the individual scores for each question and total scores for each category
    selectElements.forEach(select => {
        const questionId = select.id;
        const answer = select.value;
        const categoryName = questionId.replace(/\d/g, ''); // Extract the category name

        // Calculate the individual question score
        const questionScore = questionScores[questionId][answer];

        // Add the question score to the total score
        totalScore += questionScore;

        // Add the question score to the category score
        categoryScores[categoryName] = (categoryScores[categoryName] || 0) + questionScore;

        // Store the recommendation for this question
        const questionRecommendation = questionScores[questionId]['recommendation'];
        if (answer === 'no' && questionRecommendation) {
            recommendations[questionId] = questionRecommendation;
        }
    });

    totalScore = Math.min(totalScore, 100);

    return { totalScore, categoryScores, recommendations };
}

// Function to reset the total score and risk level to default values
function resetScore() {
    const totalScoreElement = document.getElementById('total-score');
    const calculatedScore = document.getElementById('calculated-score');
    const riskLevelValue = document.getElementById('risk-level-value');
    const recommendationsElement = document.getElementById('recommendations');

    calculatedScore.style.color = ''; // Remove the red color
    calculatedScore.textContent = ' -'; // Set the total score to '-'

    riskLevelValue.style.color = ''; // Remove the red color
    riskLevelValue.textContent = '-'; // Set the risk level to '-'

    recommendationsElement.innerHTML = ''; // Clear the recommendations
}

// Add an event listener to reset the score when the page loads
window.addEventListener('load', resetScore);

// Modify the calculateRisk function to display best practices and recommendations
function calculateRisk() {
    // Get the total score and category scores
    const { totalScore, categoryScores, recommendations } = calculateScore();

    // Calculate the risk level
    let riskLevel;
    if (totalScore > 80) {
        riskLevel = 'You are a nice person, You know stuff :)';
    }
    else if (totalScore <= 80 && totalScore >= 70) {
        riskLevel = 'Low Risk';
    }
    else if (totalScore <= 69 && totalScore >= 60) {
        riskLevel = 'Moderate Risk';
    } else if (totalScore <= 59 && totalScore >= 50) {
        riskLevel = 'High Risk';
    } else {
        riskLevel = 'Critical';
    }

    // Display the total score and risk level on the screen
    const totalScoreElement = document.getElementById('total-score');
    const totalScoreHeading = document.getElementById('total-score-heading');
    const calculatedScore = document.getElementById('calculated-score');
    const riskLevelHeading = document.getElementById('risk-level-heading');
    const riskLevelValue = document.getElementById('risk-level-value');
    const recommendationsElement = document.getElementById('recommendations');

    calculatedScore.style.color = 'red';

    totalScoreHeading.textContent = 'Total Score: ';
    calculatedScore.textContent = totalScore;

    riskLevelValue.style.color = 'red';
    riskLevelValue.textContent = riskLevel;

    // Clear previous recommendations
    recommendationsElement.innerHTML = '';

    // Display recommendations based on user answers
    if (totalScore > 80) {
        recommendationsElement.innerHTML += ' ';
    } else {
        recommendationsElement.innerHTML += '<h3><b>Based on your score here are some Best Practices:</b></h3>';
        recommendationsElement.innerHTML += '<ul>';
        Object.keys(recommendations).forEach(questionId => {
            const bestPractices = questionScores[questionId]['bestPractices'];
            if (bestPractices && Array.isArray(bestPractices)) {
                bestPractices.forEach(bestPractice => {
                    recommendationsElement.innerHTML += `<li>${bestPractice}</li>`;
                });
            }
        });
        recommendationsElement.innerHTML += '</ul>';
        
        recommendationsElement.innerHTML += '<h3><b>Based on your score here are some Recommendations:</b></h3>';
        recommendationsElement.innerHTML += '<ul>';
        Object.keys(recommendations).forEach(questionId => {
            const recommendation = questionScores[questionId]['recommendation'];
            if (recommendation) {
                recommendationsElement.innerHTML += `<li>${recommendation}</li>`;
            }
        });
        recommendationsElement.innerHTML += '</ul>';
    }

    // Display category scores (optional)
    Object.keys(categoryScores).forEach(categoryName => {
        const categoryScoreElement = document.getElementById(`${categoryName}-score`);
        if (categoryScoreElement) {
            categoryScoreElement.textContent = `${categoryName} Score: ${categoryScores[categoryName]}`;
        }
    });

    // Show the recommendations element (regardless of recommendations)
    recommendationsElement.style.display = 'block';
}

document.getElementById('calculate-button').addEventListener('click', calculateRisk);
document.getElementById('calculate-button').addEventListener('click', calculateRisk);

// Initial reset when the page loads
resetScore();


calculateRisk();

