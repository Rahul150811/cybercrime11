$(document).ready(function() {
    $("#check").click(function() {
      var link = $("#link").val();
      var apiKey = "1a82c50b0b02b73e8e038fb496f4208972ea672c440ada17cc56fdb5c0c838dc";
      var url = "https://www.virustotal.com/api/v3/urls/scan";
      var data = {"apikey": apiKey, "url": link};
      $.ajax({
        url: url,
        data: data,
        type: "POST",
        success: function(response) {
          var results = JSON.parse(response);
          $("#results").html(results["positives"] > 0 ? "Malicious" : "Safe");
        },
        error: function(error) {
          console.log(error);
        }
      });
    });
  });