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
        var tweetString = '"' + response.quote + '" ~ ' + response.author;
        console.log('response: ' + data);
        console.log('quote: ' + response.quote);
        console.log('author: ' + response.author);
        $('#quote').text(response.quote);
        $('#author').text(response.author);

        // Remove existing anchor and iframe
        $('#tweetBtn a').remove();
        $('#tweetBtn iframe').remove();
        // Generate new markup
        var tweetBtn = $('<a></a>')
            .addClass('twitter-share-button')
            .attr('href', 'https://twitter.com/share')
            .attr('data-size', 'large')
            .attr('data-text', tweetString)
        $('#tweetBtn').append(tweetBtn);
        twttr.widgets.load();
      }
    });
  }

  $('#newquote').on("click", function() {
    getQuotation();
  });

  getQuotation();
});
