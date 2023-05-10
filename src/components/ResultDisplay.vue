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
      <button @click="twitterShare">ツイッターでシェアする</button>
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
  methods: {
    twitterShare(){
      const url = "https://twitter.com/intent/tweet?text=" +  this.result + "&url=https://veesapp-83915.web.app/" + "&hashtags=ブイズ診断";
      location.href = url;
    }
  }
};
</script>