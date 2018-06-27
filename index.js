const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

function getPokemonInfo(id) {
  pokeApi.get(id)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.error(err);
    });
}

document.getElementById("pokeButton").onclick = function () {
  getPokemonInfo("2");
};