# giphy-gif-search

This project connects to the Giphy API and lets users search for gifs via the API.

When the user visits the page, there are a series of buttons already on the page. These buttons are all related to characters from the Little Mermaid, to go along with the Disney theme. When the user clicks one of these buttons, a search for that button's topic is conducted and ten still images are displayed on the DOM. On the backend, the tex of that buttons becomes the search query for the Giphy API. If the user clicks on the image, the image will animate! And if they user clicks on the animated image, it will revert to its still form.

A user can press the Add to Favorites button for an individual gif, at which point the selected gif will be displayed in a "Favorites" section at the bottom of the page. The animated gif will be stored in the user's local storage and will remain on the page if the user refreshes the page. 

In addition, the user can enter a new search topic in the search bar, and upon clicking the Submit button, a new button will be generated in the top button section containing the search text. When the new button is clicked, it will behave like the buttons already there!

Areas for Improvement:
- Currently, when a gif is added to the favorites, it does stay in local storage when the user refreshes the page. However, if the user were to select new favorites after the refresh, the original favorites will be replaced by the new favorites. It would be better if newly selected favorites would be added below the original favorites instead of replacing them.
- It would be nice if the user's text were edited to capitalize the first letters before displaying the new button, so that the buttons were uniformally formatted. 
