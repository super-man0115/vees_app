<template>
  <div>
    <div v-if="selectedPokemon">
      <img :src="selectedPokemon.sprite" alt="selected pokemon sprite" />
      <p>{{ selectedPokemon.name }}</p>
      <p>{{ selectedPokemon.height }} m</p>
      <p>{{ selectedPokemon.weight }} kg</p>
      <p>{{ selectedPokemon.genus }}</p>
      <p>{{ selectedPokemon.description }}</p>
      <p>{{ result }}</p>
      <p>{{ comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultDisplay",
  props: ["name", "result", "comment"],
  computed: {
    selectedPokemon() {
      return this.$store.state.selectedPokemon;
    },
  },
};
</script>