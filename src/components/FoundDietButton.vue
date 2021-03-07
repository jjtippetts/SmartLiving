<template lang="pug">
button.list-group-item.list-group-item-action.w-100.bg-transparent.fs-4(v-for="diet in userDiets" :key="diet.name" v-on:click="selectedDiet = diet") {{diet.name}}
  p.fs-6 &#8226; {{caloriesInDiet(diet)}} Cal &#8226; {{carbsInDiet(diet)}} g &#8226; {{fatInDiet(diet)}} g &#8226; {{proteinInDiet(diet)}} g

</template>

<script>
export default {
  name: "FoundDietButton",
  props: {
    diet: Object
  },
  data() {
    return {
      id: '',
      name: '',
      foods: []
    }
  }
}
</script>

<style scoped>

</style>