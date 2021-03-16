<template lang="pug">
tr
  form(v-bind:id="meal.name" v-on:submit.prevent="addFood(meal)")
  td
    input.form-control(placeholder="Strawberries" type="text" v-model.number="food.name" required v-bind:form="meal.name")
  td
    input.form-control(placeholder="40" type="number" v-model.number="food.calories" min="0" required v-bind:form="meal.name")
  td
    input.form-control(placeholder="9" type="number" v-model.number="food.carbs" min="0" required v-bind:form="meal.name")
  td
    input.form-control(placeholder="0" type="number" v-model.number="food.fat" min="0" required v-bind:form="meal.name")
  td
    input.form-control(placeholder="1" type="number" v-model.number="food.protein" min="0" required v-bind:form="meal.name")
  td
    button.btn.btn-sm.btn-primary(type="submit" v-bind:form="meal.name")
      Plus
</template>

<script>
import Plus from 'vue-material-design-icons/Plus.vue';

export default {
  name: "tableRowAddFood",
  components: {
    Plus
  },
  props: {
    meal: Object
  },
  data(){
    return {
      food: {
        name: "",
        calories: "",
        carbs: "",
        fat: "",
        protein: ""
      }
    }
  },
  methods: {
    addFood(meal){
      // Deep copy food
      let newFood = JSON.parse(JSON.stringify(this.food));
      meal.foods.push(newFood);
      this.resetForm()
    },
    resetForm(){
      this.food.name = "";
      this.food.calories = "";
      this.food.carbs = "";
      this.food.fat = "";
      this.food.protein = "";
    }
  }
}
</script>

<style scoped>

</style>