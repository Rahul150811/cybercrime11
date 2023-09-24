// Define the scoring system for each question (adjust weights as needed)
const questionScores = {
    'password1': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': 'Implement a password manager to create and manage strong, unique passwords for each of your online accounts.',
        'bestPractices': [
            'Use long and complex passwords with a combination of letters, numbers, and symbols.',
            'Consider using a reputable password manager to store and generate passwords.'
        ],
    },
    'password2': { 
        'frequently': 3, 
        'occasionally': 2, 
        'rarely': 1, 
        'no': 0, 
        'recommendation': 'Using a password manager can help improve your password security.',
        'bestPractices': [
            'Either change your password once a month or use a password manager.'
        ],
    },
    'password3': { 
        'yes': 5, 
        'no': 0, 
        'recommendation': 'Using password manager will make your life easy' 
    },
    'mfa1': { 'yes': 5, 'no': 0, 'recommendation': 'Enable Multi-Factor Authentication (MFA) for added security.' },
    'mfa2': { 'yes': 5, 'no': 0, 'recommendation': 'Consider enabling Multi-Factor Authentication (MFA) for added security.' },
    'device1': { 'yes': 5, 'no': 0, 'recommendation': 'Regularly update and secure your devices.' },
    'device2': { 'yes': 5, 'no': 0, 'recommendation': 'Consider improving the security of your devices.' },
    'device3': { 'yes': 5, 'no': 0, 'recommendation': 'Ensure your devices are protected against unauthorized access.' },
    'social1': { 'yes': 5, 'no': 0, 'recommendation': 'Be cautious about sharing personal information on social media.' },
    'social2': { 'yes': 5, 'no': 0, 'recommendation': 'Review your social media privacy settings.' },
    'data1': { 'yes': 5, 'no': 0, 'recommendation': 'Protect sensitive data with encryption and access controls.' },
    'data2': { 'frequently': 3, 'occasionally': 2, 'rarely': 1, 'no': 0, 'recommendation': 'Consider enhancing the security of your data.' },
    'download1': { 'yes': 5, 'no': 0, 'recommendation': 'Only download files from trusted sources.' },
    'download2': { 'yes': 5, 'no': 0, 'recommendation': 'Exercise caution when downloading files from the internet.' },
    'privacy1': { 'yes': 5, 'no': 0, 'recommendation': 'Review and adjust your privacy settings regularly.' },
    'privacy2': { 'yes': 5, 'no': 0, 'recommendation': 'Consider enhancing your online privacy practices.' },
    'watch1': { 'yes': 5, 'no': 0, 'recommendation': 'Never Download Movies or TV Shows from Torrent Sites.' },
    'watch2': { 'yes': 5, 'no': 0, 'recommendation': 'You will get infected by virus or malware.' },
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
        recommendationsElement.innerHTML += '<p>No recommendations available for this score.</p>';
    } else {
        recommendationsElement.innerHTML += '<h3>Best Practices:</h3>';
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
        
        recommendationsElement.innerHTML += '<h3>Recommendations:</h3>';
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

calculateRisk();

