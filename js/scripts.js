'use strict';

let category = 'dev';

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');
const categoryChangeForm = document.querySelector('#categoryChangeForm');

function getQuote(category) {
  const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const chuckSaysParagraph = document.querySelector('#chuckSays');

  get(apiUrl).then(function(response) {
    chuckSaysParagraph.innerHTML = response.value;
  });
}

function getCategories() {
  const apiUrl = `https://api.chucknorris.io/jokes/categories`;
  const categorySelectLabel = document.querySelector('#categorySelectLabel');

  get(apiUrl).then(function(response) {
    const categoryList = response.filter(function(category) {
      if (category != 'explicit') {
        return category;
      }
    });
    // Create a select element for our categories
    const categoryElement = document.createElement('select');
    // Create the options for the select element
    categoryList.map(function(category) {
      const categoryOption = document.createElement('option');
      categoryOption.value = category;
      categoryOption.text = category;
      categoryElement.append(categoryOption);
    });
    categorySelectLabel.appendChild(categoryElement);
  });
}

refreshQuoteButton.addEventListener('click', function(e) {
  e.preventDefault();
  getQuote(category);
});

submitFormButton.addEventListener('click', function(e) {
  e.preventDefault();
  const categoryInput = document.querySelector('#categoryChangeForm select');

  category = categoryInput.value;
  getQuote(category);
});

getQuote(category);
getCategories();
