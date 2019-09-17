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
        console.log(response.data);
        for (i = 0; i < results.length; i++) {
            var newGif = $("<div class='card'>");
            var stillImage = $("<img>").attr("src", results[i].images.fixed_height_still.url).attr("class", "card-img-top");
            var textBody = $("<div class='text-body'>");
            var rating = $("<p>").attr("class", "card-text").text(results[i].rating.toUpperCase());
            $("#gifBox").append(newGif, stillImage, textBody, rating);
        }


    })
})




//$(document).on("click", ".subject", renderButtons());


/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */