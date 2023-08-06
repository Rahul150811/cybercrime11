$("#upload-form").submit(function (event) {
    event.preventDefault();
    
    var formData = new FormData();
    formData.append("file", $("#file")[0].files[0]);
    
    $.ajax({
        url: "https://www.virustotal.com/api/v3/files",
        type: "POST",
        data: formData,
        headers: {
            "x-apikey": "1a82c50b0b02b73e8e038fb496f4208972ea672c440ada17cc56fdb5c0c838dc"
        },
        contentType: false,
        processData: false,
        success: function (data) {
            var analysisId = data.data.id;
            checkAnalysisStatus(analysisId);
        },
        error: function (xhr, status, error) {
            $("#result").html("<p>Error: " + error + "</p>");
        }
    });
});

function checkAnalysisStatus(analysisId) {
    $.ajax({
        url: "https://www.virustotal.com/api/v3/analyses/" + analysisId,
        type: "GET",
        headers: {
            "x-apikey": "1a82c50b0b02b73e8e038fb496f4208972ea672c440ada17cc56fdb5c0c838dc"
        },
        success: function (data) {
            if (data.data.attributes.status === "completed") {
                var results = data.data.attributes.results;
                var categorizedResults = categorizeScanResults(results);
                displayCategorizedResults(categorizedResults);
            } else {
                setTimeout(function () {
                    checkAnalysisStatus(analysisId);
                }, 5000); // Poll every 5 seconds
            }
        },
        error: function (xhr, status, error) {
            $("#result").html("<p>Error: " + error + "</p>");
        }
    });
}

function categorizeScanResults(results) {
    var categories = {
        safe: 0,
        partialSafe: 0,
        malicious: 0,
        error: 0
    };

    for (var engine in results) {
        var result = results[engine].result;
        if (result === null) {
            categories.safe++;
        } else if (result === "malicious") {
            categories.malicious++;
        } else if (result === "error") {
            categories.error++;
        } else {
            categories.partialSafe++;
        }
    }

    return categories;
}

function displayCategorizedResults(categories) {
    var resultHtml = "<h2>Scan Results:</h2>";
    resultHtml += "<p>Safe: " + categories.safe + "</p>";
    resultHtml += "<p>Partial Safe: " + categories.partialSafe + "</p>";
    resultHtml += "<p>Malicious: " + categories.malicious + "</p>";
    resultHtml += "<p>Error: " + categories.error + "</p>";
    $("#result").html(resultHtml);
}