<template>
  <v-app>
    <v-main>
      <v-container fill-height>
          <v-flex xs12 class="text-center">
            <p>直感でブイズを選んでください</p>
          </v-flex>
          <v-row>
            <v-col cols="4" v-for="pokemon in pokemons" :key="pokemon.name">
              <v-sheet>
                <img :src="pokemon.sprite" alt="pokemon sprite" @click="selectPokemon(pokemon)" width="200" height="200"/>
              </v-sheet>
            </v-col>
          </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import axios from "axios";

export default {
  name: "PokemonData",
  props: ["name"],
  data() {
    return {
      pokemons: [],
      selectedPokemon: null,
      pokemonMessages: {
        シャワーズ: "おとなしめ",
        サンダース: "目立ちたがり屋",
        ブースター: "天才！優しい！モテる！最強！",
        エーフィ: "サイコパス",
        イーブイ: "ミーハー",
        ブラッキー: "厨二病",
        リーフィア: "想像力豊か",
        グレイシア: "潔癖症",
        ニンフィア: "メンヘラ",
      },
      resultComments: {
        シャワーズ: "静かな海にも、深みあり。おとなしパワー発揮！",
        サンダース: "光り輝くスター、君こそ！目立ちたがりは才能だよ！",
        ブースター: "全宇宙に輝く、君こそ最強！天才・優しさ・モテ力、全開！",
        エーフィ: "サイコパス? 間違いなくあなたは独創的な思考の持ち主です！",
        イーブイ: "トレンドに敏感な君はミーハーの鏡！流行の先駆者だ！",
        ブラッキー: "『我が名は、闇を照らす者！』君も厨二病者の仲間入り！",
        リーフィア:
          "君の豊かな想像力は無限大！創造力あふれるアイデア、期待大！",
        グレイシア: "清潔さは美の秘訣！心も体もピカピカの潔癖症最高！",
        ニンフィア: "闇を抱えた魂、その痛みも君の魅力！メンヘラ最高！",
      },
    };
  },
  async mounted() {
    const pokedexNumbers = [134, 135, 136, 196, 133, 197, 470, 471, 700];
    for (const number of pokedexNumbers) {
      await this.fetchPokemonData(number);
    }
  },
  methods: {
    async fetchPokemonData(pokedexNumber) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokedexNumber}`
        );
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
          description: flavorTextEntries.find(
            (entry) => entry.language.name === "ja"
          ).flavor_text,
        };

        this.pokemons.push(pokemon);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    },
    selectPokemon(pokemon) {
      this.selectedPokemon = pokemon;
      const result = `${this.selectedPokemon.name}を選んだ${this.name}さんは${
        this.pokemonMessages[this.selectedPokemon.name]
      }です`;
      const comment = this.resultComments[this.selectedPokemon.name];
      this.$store.dispatch("selectPokemon", pokemon);
      this.$router.push({
        name: "ResultDisplay",
        params: { name: this.name, result: result, comment: comment },
      });
    },
  },
};
</script>
