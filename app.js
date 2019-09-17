var topics = ["The Little Mermaid", "Ariel", "Prince Eric", "Sebastian", "Flounder"];

function renderButtons() {
    $("#buttonLibrary").empty();
    for (var i = 0; i < topics.length; i++) {
        var item = $("<button>");
        $(item).addClass("subject");
        $(item).attr("data-topic", topics[i]);
        $(item).text(topics[i]);
        $("#buttonLibrary").append(item);
    }
}

renderButtons();


$("#searchButton").on("click", function () {
    event.preventDefault();
    var entry = $("#searchBox").val().trim();
    topics.push(entry);
    renderButtons(entry);
})

function displayGifs () {
$(".subject").on("click", function () {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=B512iYGR2yIt5fyZEJzMSAMKwAQbh5xX";
    console.log("i got clicked");
    $.ajax({
        url: queryURL,
        method: "GET",
        data: {
            q: $(this).attr("data-topic"),
            limit: 10,
        }
    }).then(function (response) {
        var results = response.data;
        var newGif = $("<div class='card'>");
        var textBody = $("<div class='text-body'>");
        var image = $("<img>");
        for (i = 0; i < results.length; i++) {
            image = $("<img>").attr("src", results[i].images.fixed_height_still.url).attr("class", "card-img-top").attr("data-state","still");
            console.log(image);
            var rating = $("<p>").attr("class", "card-text").text(results[i].rating.toUpperCase());
            $("#gifBox").append(newGif, image, textBody, rating);
            var state = $(image).attr("data-state");
            console.log(state);
            $("<img>").on("click", function () {
                if (state === "still") {
                    $(image).attr("src", results[i].images.fixed_height.url);
                    $(image).attr("data-state", "animate");
                    // above is a setter!!! first get, then set
                } else {
                    $(this).attr("src", results[i].images.fixed_height_still.url);
                    $(this).attr("data-state", "still");
                }
            })
        }


    });
})
}




$(document).on("click", ".subject", displayGifs);

