<template lang="pug">
tr
  form#hi(v-on:submit.prevent="addFood(meal)")
  td
    input.form-control(placeholder="Strawberries" type="text" v-model.number="food.name" required form="hi")
  td
    input.form-control(placeholder="40" type="number" v-model.number="food.calories" min="0" required form="hi")
  td
    input.form-control(placeholder="9" type="number" v-model.number="food.carbs" min="0" required form="hi")
  td
    input.form-control(placeholder="0" type="number" v-model.number="food.fat" min="0" required form="hi")
  td
    input.form-control(placeholder="1" type="number" v-model.number="food.protein" min="0" required form="hi")
  td
    button.btn.btn-sm.btn-primary(type="submit" form="hi")
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
      let newFood = this.food;
      console.log(newFood);
      meal.foods.push(newFood);
    }
  }
}
</script>

<style scoped>

</style>