const utilsPlayground = require("utils-playground");

const listar = async (req, res) => {
  try {
    const lista = await utilsPlayground.listarPokemons();
    return res.json(lista.results);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Ocorreu um erro ao listar os pokémons." });
  }
};

const detalhar = async (req, res) => {
  const { id, name } = req.params;
  if (id) {
    try {
      const pokemon = await utilsPlayground.detalharPokemon(id);
      return res.json({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species,
      });
    } catch (erro) {
      console.log(erro.message);
      res.status(500).json({ error: "Ocorreu um erro ao detalhar o pokémon." });
    }
  }
  if (name) {
    try {
      const pokemon = await utilsPlayground.detalharPokemon(name);
      return res.json({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        base_experience: pokemon.base_experience,
        forms: pokemon.forms,
        abilities: pokemon.abilities,
        species: pokemon.species,
      });
    } catch (erro) {
      console.log(erro.message);
      res.status(500).json({ error: "Ocorreu um erro ao detalhar o pokémon." });
    }
  }
};

module.exports = { listar, detalhar };
