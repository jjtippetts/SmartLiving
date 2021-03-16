<template lang="pug">
form(v-on:submit.prevent="addDiet()")
  div.form-group
    label.form-label Create a New Diet Plan
    div.input-group
      input.form-control(v-model="newDietName" placeholder="Diet Name" required)
      button.btn.btn-primary(type="submit")
        Plus
</template>

<script>
import Plus from 'vue-material-design-icons/Plus.vue';

export default {
  name: "AddDiet",
  props: {
    userDiets: Array
  },
  components: {
    Plus
  },
  data(){
    return {
      newDietName: ""
    }
  },
  methods: {
    addDiet(){
      let newDiet = {
        name: this.newDietName,
        meals: []
      }
      this.userDiets.push(newDiet)
    }
  }
}
</script>

<style scoped>

</style>