<template>
  <v-container fluid fill-height class="d-flex align-center">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-container
    >
          <v-sheet class="pa-2 ma-2">
            ブイズ診断
          </v-sheet>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NameInput",
  data() {
    return {
      name: "",
      error: "",
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
</style>