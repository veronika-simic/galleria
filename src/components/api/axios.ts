import axios from 'axios';

export async function getDataById(id: string | undefined){
  try {
    const response = await axios.get(
      `https://www.rijksmuseum.nl/api/en/collection/${id}?key=4qJ0emUy`
    );
    return response;
  } catch (err) {
    return err;
  }
}

export async function getData() {
  try {
    const response = await axios.get(
      'https://www.rijksmuseum.nl/api/en/collection?key=4qJ0emUy&ps=50'
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


