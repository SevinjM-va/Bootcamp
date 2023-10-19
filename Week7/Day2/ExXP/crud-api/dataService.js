const express = require('express');
const axios = require('axios')

function fetchPosts(){
  const fetch = axios.get('https://jsonplaceholder.typicode.com/posts');
  const data = fetch.data;
  console.log(data);
}
//Buda status 200-du anca ekranda bir sey yoxdur

  module.exports = fetchPosts;