import axios from 'axios';

export function getDataById(id: number) {
  axios
    .get('https://www.rijksmuseum.nl/api/en/collection/{id}?key=4qJ0emUy')
    .then(function (response) {
      console.log(response.data.artObject.webImage.url);
      console.log(response.data.artObject);
    })
    .catch(function (error) {
      console.log('error', error);
    });
}

export function getData() {
  axios
    .get('https://www.rijksmuseum.nl/api/en/collection?key=4qJ0emUy&ps=100')
    .then(function (response) {
      for (let i = 1; i < response.data.artObjects.length; i += 2) {
        console.log(response.data.artObjects[i].webImage.url);
      }
    })
    .catch(function (error) {
      console.log('error', error);
    });
}