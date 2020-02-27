'use strict';

function get(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      return error;
    });
}

async function getWithAwait(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error', error.message);
  }
}
