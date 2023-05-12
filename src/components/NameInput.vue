<template>
  <div
  >
    <v-app>
      <v-container fluid fill-height>
        <v-row justify="center">
          <v-col
            cols="12"
            sm="8"
            md="4"
            class="d-flex flex-column align-center"
          >
            <v-container class="text-center mb-4">
              <v-sheet class="pa-2 ma-2 my-sheet"> ブイズ診断 </v-sheet>
            </v-container>
            <v-card>
              <v-card-text>
                <v-sheet width="300" class="mx-auto">
                  <v-form @submit.prevent>
                    <v-text-field
                      v-model="name"
                      @keyup.enter="submitName"
                      placeholder="君の名前を教えてね"
                    ></v-text-field>
                    <v-btn type="submit" block class="mt-2" @click="submitName"
                      >名前を決めた</v-btn
                    >
                    <p v-if="error" class="error">{{ error }}</p>
                  </v-form>
                </v-sheet>
              </v-card-text>
            </v-card>
            <p class="mt-10 text-h5">
              尊敬する某有名ポケモン配信者様の偏見です
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "NameInput",
  data() {
    return {
      name: "",
      error: "",
      backgroundImageSrc: "/images/eevee.png",
    };
  },
  methods: {
    submitName() {
      if (this.name.trim() === "") {
        this.error = "名前を入力してください";
      } else {
        this.error = "";
        this.$router.push({
          name: "PokemonSelect",
          params: { name: this.name },
        });
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}

.my-sheet {
  font-size: 64px;
}

.bg-image {
  height: 100vh;
  background-image: url("~@/assets/images/vees.png");
  background-size: cover;
  background-position: center;
}
</style>