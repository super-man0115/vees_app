<template>
    <div v-for="pokemon in pokemons" :key="pokemon.name">
      <h1>{{ pokemon.name }}</h1>
      <img :src="pokemon.sprite" alt="pokemon sprite" />
      <p v-for="type in pokemon.types" :key="type.name">
        {{ type.name }}
        <img :src="type.icon" alt="type icon" />
      </p>
      <p>{{ pokemon.height }} m</p>
      <p>{{ pokemon.weight }} kg</p>
      <p>{{ pokemon.genus }}</p>
      <p>{{ pokemon.description }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PokemonData",
  data() {
    return {
      pokemons: [],
    };
  },
  async mounted() {
    const pokedexNumbers = [134, 135, 136, 196, 197, 470, 471, 700];
    for (const number of pokedexNumbers) {
      await this.fetchPokemonData(number);
    }
  },
  methods: {
    async fetchPokemonData(pokedexNumber) {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokedexNumber}`);
        const speciesUrl = response.data.species.url;
        const responseSpecies = await axios.get(speciesUrl);
        const names = responseSpecies.data.names;
        const genera = responseSpecies.data.genera;
        const flavorTextEntries = responseSpecies.data.flavor_text_entries;

        const pokemon = {
          name: names.find((name) => name.language.name === "ja").name,
          sprite: response.data.sprites.front_default,
          height: (response.data.height / 10).toFixed(1),
          weight: (response.data.weight / 10).toFixed(1),
          genus: genera.find((genus) => genus.language.name === "ja").genus,
          description: flavorTextEntries.find((entry) => entry.language.name === "ja").flavor_text,
        };

        this.pokemons.push(pokemon);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    },
  },
};
</script>

