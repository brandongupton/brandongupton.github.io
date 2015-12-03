$(document).ready(function() {
  function getQuotation() {
    $.ajax({
      type: "POST",
      beforeSend: function(request) {
        request.setRequestHeader("X-Mashape-Key", "y6djZneGNemshIUpwrQsEHJbIkNKp1m4gZqjsnwlMFjDJJxeHE")
      },
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
      success: function(data) {
        var response = JSON.parse(data);
        console.log('response: ' + data);
        console.log('quote: ' + response.quote);
        console.log('author: ' + response.author);
        $('#quote').text(response.quote);
        $('#author').text(response.author);
      }
    });
  }

  $('#newquote').on("click", function() {
    getQuotation();
  });

  getQuotation();
});
