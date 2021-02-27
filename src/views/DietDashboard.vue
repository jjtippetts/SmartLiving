<template lang="pug">
  div.container-fluid
    div.row
      div.col-3
        div#diet-selection-component.bg-light.border.rounded-3.shadow-lg.mt-3
          div.p-3
            h4.fw-bolder All Diet Plans
            hr.mt-0
            form
              div.form-group
                label.form-label Create a New Diet Plan
                div.input-group
                  input.form-control(placeholder="Diet Name")
                  button.btn.btn-primary
                    Plus
            hr
            div.list-group-flush.w-100
              button.list-group-item.list-group-item-action.w-100.bg-transparent.fs-4(v-for="diet in userDiets" :key="diet.name" v-on:click="selectedDiet = diet") {{diet.name}}
                p.fs-6 &#8226; {{caloriesInDiet(diet)}} Cal &#8226; {{carbsInDiet(diet)}} g &#8226; {{fatInDiet(diet)}} g &#8226; {{proteinInDiet(diet)}} g
        div#food-selection-component.bg-light.border.rounded-3.shadow-lg.mt-3
          div.p-3
            h4.fw-bolder Search for Food
            hr.mt-0
            form
              div.form-group
                label.form-label.d-none
                div.input-group
                  button.btn.btn-primary
                    Search
                  input.form-control(placeholder="Search by Name")
      div.col-9
        div#diet-view-component.mt-3(v-if="selectedDiet != null")
          div.p-3
            div.d-flex.justify-content-between.align-items-center
              h1 {{selectedDiet.name}}
              div.d-flex
                btn.btn.btn-primary.btn-lg.me-2 Save
                btn.btn.btn-secondary.btn-lg Download
            form(v-on:submit.prevent="addFood(meal)")
              table.table.table-primary.table-striped.table-sm.caption-top(v-for="meal in selectedDiet.meals")
                caption {{meal.name}}
                thead
                  tr
                    th(scope="col") Name
                    th(scope="col") Calories
                    th(scope="col") Carbs
                    th(scope="col") Fat
                    th(scope="col") Protein
                    th(scope="col")
                tbody
                  tr(v-for="food in meal.foods")
                    td {{food.name}}
                    td {{food.calories}}
                    td {{food.carbs}}
                    td {{food.fat}}
                    td {{food.protein}}
                    td
                      button.btn.btn-sm.btn-primary(v-on:click="removeFood(meal, food)")
                        Delete
                  tr
                    td
                      label.form-label.d-none
                      input.form-control(placeholder="Strawberries" type="text")
                    td
                      input.form-control(placeholder="40")
                    td
                      input.form-control(placeholder="9")
                    td
                      input.form-control(placeholder="0")
                    td
                      input.form-control(placeholder="1")
                    td
                      button.btn.btn-sm.btn-primary(type="submit")
                        Plus
                tfoot
                  tr
                    td
                    td {{caloriesInMeal(meal)}}
                    td {{carbsInMeal(meal)}}
                    td {{fatInMeal(meal)}}
                    td {{proteinInMeal(meal)}}
                    td
              table.table.table-primary.table-striped.table-sm.caption-top
                caption Diet Totals
                thead
                  tr
                    th(scope="col" width="19%") Name
                    th(scope="col" width="19%") Calories
                    th(scope="col" width="19%") Carbs
                    th(scope="col" width="19%") Fat
                    th(scope="col" width="19%") Protein
                    th(scope="col" width="19%")
                tbody
                  tr
                    td(scope="col") {{selectedDiet.name}}
                    td(scope="col") {{caloriesInDiet(selectedDiet)}}
                    td(scope="col") {{carbsInDiet(selectedDiet)}}
                    td(scope="col") {{fatInDiet(selectedDiet)}}
                    td(scope="col") {{proteinInDiet(selectedDiet)}}
                    td(scope="col")

</template>

<script>
// import * as fb from "@/firebase";
import Delete from 'vue-material-design-icons/Delete.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import Search from 'vue-material-design-icons/Magnify.vue';

export default {
  components: {
    Delete,
    Plus,
    Search
  },
  data(){
    return {
      selectedDiet: null,
      userDiets: [
        {
          name: 'smart diet',
          meals: [
            {
              name: "Breakfast",
              foods: [
                {
                  name: "apple",
                  calories: 100,
                  carbs: 10,
                  fat: 0,
                  protein: 1
                },
                {
                  name: "greek yogurt",
                  calories: 120,
                  carbs: 6,
                  fat: 3,
                  protein: 10
                }
              ]
            },
            {
              name: "Lunch",
              foods: [
                {
                  name: "pear",
                  calories: 100,
                  carbs: 10,
                  fat: 0,
                  protein: 1
                },
                {
                  name: "milk",
                  calories: 120,
                  carbs: 6,
                  fat: 3,
                  protein: 10
                }
              ]
            },
          ],
          calories: 3000,
        },
        {
          name: 'loose fat',
          meals: [
            {
              name: "Breakfast",
              foods: [
                {
                  name: "apple",
                  calories: 100,
                  carbs: 10,
                  fat: 0,
                  protein: 1
                },
                {
                  name: "greek yogurt",
                  calories: 120,
                  carbs: 6,
                  fat: 3,
                  protein: 10
                }
              ]
            },
          ],
          calories: 2000,
        },
        {
          name: 'gain weight',
          meals: [
            {
              name: "Breakfast",
              foods: [
                {
                  name: "apple",
                  calories: 100,
                  carbs: 10,
                  fat: 0,
                  protein: 1
                },
                {
                  name: "greek yogurt",
                  calories: 120,
                  carbs: 6,
                  fat: 3,
                  protein: 10
                }
              ]
            },
          ],
          calories: 4000,
        }
      ]
    }
  },
  methods: {
    addFood(meal, food){
      meal.foods.push(food)
    },
    removeFood(meal, food){
      meal.foods.splice(meal.foods.indexOf(food), 1)
    },
    caloriesInDiet: function(diet){
      let totalCalories = 0;
      console.log(diet)
      diet.meals.forEach(function(meal){
        totalCalories += this.caloriesInMeal(meal);
      }, this)
      return totalCalories;
    },
    carbsInDiet: function(diet){
      let totalCarbs = 0;
      diet.meals.forEach(function(meal){
        totalCarbs += this.carbsInMeal(meal);
      }, this)
      return totalCarbs;
    },
    fatInDiet: function(diet){
      let totalFat = 0;
      diet.meals.forEach(function(meal){
        totalFat += this.fatInMeal(meal)
      }, this)
      return totalFat;
    },
    proteinInDiet: function(diet){
      let totalProtein = 0;
      diet.meals.forEach(function (meal){
        totalProtein += this.proteinInMeal(meal);
      }, this)
      return totalProtein;
    },
    caloriesInMeal: function(meal){
      let totalCalories = 0;
      meal.foods.forEach(function(food){
        totalCalories += food.calories;
      })
      return totalCalories;
    },
    carbsInMeal: function(meal){
      let totalCarbs = 0;
      meal.foods.forEach(function(food){
        totalCarbs += food.carbs;
      })
      return totalCarbs;
    },
    fatInMeal: function(meal){
      let totalFat = 0;
      meal.foods.forEach(function(food){
        totalFat += food.fat;
      })
      return totalFat;
    },
    proteinInMeal: function(meal){
      let totalProtein = 0;
      meal.foods.forEach(function (food){
        totalProtein += food.protein;
      })
      return totalProtein;
    },
  },
  created(){
    // let user = fb.auth().currentUser;
    //
    // fb.usersCollection.doc(user.uid).get().then(
    //     ({data}) => this.userDiet = data
    // )
  }
}
</script>

<style lang="scss" scoped>

</style>