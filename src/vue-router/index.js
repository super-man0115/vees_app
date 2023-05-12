import { createRouter, createWebHistory } from 'vue-router'
import NameInput from "@/components/NameInput.vue";
import PokemonData from "@/components/Pokemon.vue";
import ResultDisplay from "@/components/ResultDisplay.vue";

const routes = [
  {
    path: "/",
    component: NameInput
  },
  {
    path: "/pokemon-select/:name",
    name: "PokemonSelect",
    component: PokemonData,
    props: true
  },
  {
    path: "/result/:name/:result/:comment",
    name: "ResultDisplay",
    component: ResultDisplay,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router