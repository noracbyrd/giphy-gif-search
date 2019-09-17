// Opening variable for initial buttons

var topics = ["The Little Mermaid", "Ariel", "Prince Eric", "Sebastian", "Flounder"];


// Function to generate buttons for initial search topics
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
// Making the buttons display on page load
renderButtons();

// event listener to generate buttons from what the user types in the search box
$("#searchButton").on("click", function () {
    event.preventDefault();
    var entry = $("#searchBox").val().trim();
    topics.push(entry);
    renderButtons(entry);
})

// Event listener Function to pull data from Giphy API when a user clicks one of the topics buttons
// Makes sure to include .subject class, which is generated dynamically
$(document).on("click", ".subject", function () {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=B512iYGR2yIt5fyZEJzMSAMKwAQbh5xX";
    console.log("i got clicked");
    $.ajax({
        url: queryURL,
        method: "GET",
        data: {
            q: $(this).attr("data-topic"),
            limit: 10,
        }
        // Function to loop through the 10 gif results, displaying the gifs and adding relevent attributes
    }).then(function (response) {
        var results = response.data;
        $("#gifBox").empty();
        for (i = 0; i < results.length; i++) {
            var newGif = $("<div class='card'>");
            var textBody = $("<div class='text-body'>");
            var image = $("<img>").attr("src", results[i].images.fixed_height_still.url).attr("class", "card-img-top").attr("data-state", "still").attr("data-animated", results[i].images.fixed_height.url).attr('data-still', results[i].images.fixed_height_still.url)
            var rating = $("<p>").attr("class", "card-text").text(results[i].rating.toUpperCase());
            $("#gifBox").prepend(newGif, image, textBody, rating);
        };
    })
});

// Event listneer to animate/still gifs that are clicked
// Makes sure to include .card-img-top class, which is generated dynamically
$(document).on("click", ".card-img-top", function () {
    var state = $(this).attr("data-state");
    console.log(state);
    //animate the gif
    if (state === "still") {
        console.log("ooga booga");
        console.log(this);
        $(this).attr("src", $(this).attr('data-animated'));
        $(this).attr("data-state", "animate");
    //still the gif
    } else {
        console.log("arga warga");
        $(this).attr("src", $(this).attr('data-still'));
        $(this).attr("data-state", "still");
    }
});




