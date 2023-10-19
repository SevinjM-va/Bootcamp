const express = require('express');
const axios = require('axios')

function fetchPosts(){
  const fetch = axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = fetch.data;
  console.log(data);
}
//Buda status 200-du anca ekranda bir sey yoxdur

// !!! solution
async function fetchPosts() {/*  async olmali ki await islesin  */
  try {/*  error cixarsa ne geldiyini gormek ucun try catch */
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response.data;
  } catch (error) {
    throw error; /* error versin deye */
  }
}
// !!!

  module.exports = fetchPosts;