var topics = ["The Little Mermaid", "Ariel", "Prince Eric", "Sebastian", "Flounder"];

$(".button").on("click", function() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api-key=B512iYGR2yIt5fyZEJzMSAMKwAQbh5xX";
    $.ajax({
        url: queryURL,
        Method: "GET",
        q: $(this).attr("data-topic"),
    })
    .then(function (response){
        var image = response.fixed_height_still.url;
        
    })
})

function renderButtons() {
    $("#buttonLibrary").empty();
    for (var i = 0; i < topics.length; i++) {
        var item = $("<button>");
        $(item).addClass("subject");
        $(item).attr("data-topic",topics[i]);
        $(item).text(topics[i]);
        $("#buttonLibrary").append(item);
    }
}
