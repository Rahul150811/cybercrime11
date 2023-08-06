$(document).ready(function() {
  $("#scan").click(function() {
    var fileOrUrl = $("#file-or-url").val();
    var apiKey = "1a82c50b0b02b73e8e038fb496f4208972ea672c440ada17cc56fdb5c0c838dc";
    var url = "https://www.virustotal.com/api/v3/files/scan";
    var data = {"apikey": apiKey, "file": fileOrUrl};
    $.ajax({
      url: url,
      data: data,
      type: "POST",
      success: function(response) {
        var results = JSON.parse(response);
        $("#results").html(results);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});