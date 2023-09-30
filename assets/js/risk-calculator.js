function calculateRisk() {
    // Get input values
    const assetValue = parseFloat(document.getElementById("assetValue").value);
    const efCategory = parseFloat(document.getElementById("efCategory").value);
    const threat = parseFloat(document.getElementById("threat").value);
    const securityCost = parseFloat(document.getElementById("securityCost").value)
    // Calculate SLE and ALE
    const sle = assetValue * efCategory;
    const ale = sle * threat
    // Calculate the cost of implementing the security measure
    const totalCost = ale > securityCost ? securityCost : 0
    // Display results
    document.getElementById("sleResult").textContent = `Single Loss Expectancy (SLE): $${sle.toFixed(2)}`;
    document.getElementById("aleResult").textContent = `Annual Loss Expectancy (ALE): $${ale.toFixed(2)}`;
    document.getElementById("costResult").textContent = `Cost of Implementing Security Measure: $${totalCost.toFixed(2)}`
    // Determine recommendation
    if (ale > securityCost) {
        document.getElementById("recommendation").textContent = "Recommendation: Implement the security measure.";
    } else {
        document.getElementById("recommendation").textContent = "Recommendation: The cost of the security measure may not be justified.";
    }
}