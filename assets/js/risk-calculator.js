function calculateRisk() {
    // Get input values
    const assetValue = parseFloat(document.getElementById("assetValue").value);
    const efCategory = parseFloat(document.getElementById("efCategory").value);
    const threat = parseFloat(document.getElementById("threat").value);
    const securityCost = parseFloat(document.getElementById("securityCost").value);

    // Calculate SLE and ALE
    const sle = assetValue * efCategory;
    const ale = sle * threat;

    // Determine recommendation
    let recommendationText = "";

    if (ale >= 0) {
        if (ale >= securityCost) {
            recommendationText = "It's advisable to implement the security measure to mitigate potential losses.";
        } else {
            recommendationText = "The cost of the security measure might not be a good investment considering the possible losses";
        }
    } else {
        recommendationText = "Your existing security measures are sufficient to cover potential losses. Additional measures may not be necessary.";
    }

    // Calculate the cost of implementing the security measure
    const totalCost = ale >= 0 ? (ale >= securityCost ? securityCost : 0) : 0;

    // Display results
    document.getElementById("sleResult").textContent = `* Single Loss Expectancy (SLE): $${sle.toFixed(2)}`;
    document.getElementById("aleResult").textContent = `* Annual Loss Expectancy (ALE): $${ale.toFixed(2)}`;
    document.getElementById("costResult").textContent = `* Cost of Implementing Security Measure: $${totalCost.toFixed(2)}`;
    document.getElementById("recommendation").textContent = recommendationText;
}
