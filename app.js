var topics = ["The Little Mermaid", "Ariel", "Prince Eric", "Sebastian", "Flounder"];



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
