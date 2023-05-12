<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <div v-if="selectedPokemon">
          <v-card>
            <v-card-text>
              <v-img
                :src="selectedPokemon.sprite"
                alt="selected pokemon sprite"
                width="200"
                height="200"
                class="mx-auto"
              ></v-img>
              <v-container>
                <v-row justify="center">
                  <v-col cols="12" sm="6" md="4">
                    <p class="mb-4 text-center text-h5 font-weight-bold">
                      {{ selectedPokemon.name }}
                    </p>
                    <p class="mb-4 text-center">{{ selectedPokemon.genus }}</p>
                    <p class="mb-4 text-center">
                      高さ : {{ selectedPokemon.height }} m
                    </p>
                    <p class="mb-4 text-center">
                      重さ : {{ selectedPokemon.weight }} kg
                    </p>
                  </v-col>
                </v-row>
              </v-container>
              <p class="mb-4 text-center">{{ selectedPokemon.description }}</p>
            </v-card-text>
          </v-card>
          <p class="mb-4 mt-4 text-center font-weight-bold">{{ result }}</p>
          <p class="mb-4 text-center">{{ comment }}</p>
          <div class="text-center">
            <v-btn color="#1D9BF0" text-color="white" @click="twitterShare">
              <v-icon style="color: white;">mdi-twitter</v-icon> 
              <span style="color: white;"> ツイッターでシェアする </span>
              </v-btn><br />
            <div class="mt-4">
              <router-link to="/">TOPに戻る</router-link>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
    twitterShare() {
      const url =
        "https://twitter.com/intent/tweet?text=" +
        this.result +
        "&url=https://veesapp-83915.web.app/" +
        "&hashtags=ブイズ診断";
      location.href = url;
    },
  },
};
</script>