import axios from 'axios';

export async function getDataById(id:number) {
  try {
    const response = await axios.get(
      'https://www.rijksmuseum.nl/api/en/collection/{id}?key=4qJ0emUy'
    );
    console.log(response.data.artObject.webImage.url);
    console.log(response.data.artObject);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getData() {
  try {
    const response = await axios.get(
      'https://www.rijksmuseum.nl/api/en/collection?key=4qJ0emUy&ps=100'
    );
    const allData = [];
    for (let i = 0; i < response.data.artObjects.length; i += 1) {
      allData.push(response.data.artObjects[i]);
    }
    return allData;
  } catch (err) {
    return err;
  }
}
