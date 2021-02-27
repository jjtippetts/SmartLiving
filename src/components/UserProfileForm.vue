<template>
  <form class="row pb-3" novalidate @submit.prevent>
    <!-- Name -->
    <div class="col-12 form-floating pb-3">
      <input v-model="name.input" @change="validateName" id="name" class="form-control"
             :class="{'is-valid': name.isValid, 'is-invalid': name.isValid === false}"
             name="name" type="text" placeholder="name">
      <label for="name" class="ms-2 text-muted">Name</label>
      <p v-if="name.isValid === false" :class="{'invalid-feedback': name.isValid === false}" class="mb-0">
        {{ name.feedback }} </p>
    </div>

    <!-- Age -->
    <div class="col-12 form-floating pb-3">
      <input v-model.number="age.input" id="age" @change="validateAge" class="form-control"
             :class="{'is-valid': age.isValid, 'is-invalid': age.isValid === false}"
             name="age" type="number" min="0" max="100" placeholder="age">
      <label for="age" class="ms-2 text-muted">Age</label>
      <p v-if="age.isValid === false" :class="{'invalid-feedback': age.isValid === false}" class="mb-0"> {{
          age.feedback
        }} </p>
    </div>

    <!-- Height -->
    <div class="col-12 pb-2">
      <legend class="text-muted fs-6 mb-0 pb-2">Your Height</legend>
    </div>
    <div class="col form-floating">
      <select v-model.number="height.feet.input"
              :class="{'is-valid': height.feet.isValid, 'is-invalid': height.feet.isValid === false}"
              @change="validateHeightFeet"
              class="form-select" id="height-feet">
        <option selected disabled></option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <label class="form-label ms-2" for="height-feet">Feet</label>
    </div>
    <div class="col form-floating pb-3">
      <select v-model.number="height.inches.input"
              :class="{'is-valid': height.inches.isValid, 'is-invalid': height.inches.isValid === false}"
              @change="validateHeightInches" class="form-select" id="height-inches">
        <option selected disabled></option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
      </select>
      <label class="ms-2" for="height-inches">Inches</label>
    </div>

    <!-- Weight -->
    <div class="col-12 form-floating pb-3">
      <input v-model.number="weight.input" @change="validateWeight"
             :class="{'is-valid': weight.isValid, 'is-invalid': weight.isValid === false}" id="weight"
             class="form-control" name="weight" type="number" min="70" max="900" placeholder="weight">
      <label for="weight" class="ms-2 text-muted">Weight (lbs)</label>
      <p v-if="weight.isValid === false" :class="{'invalid-feedback': weight.isValid === false}" class="mb-0"> {{
          weight.feedback
        }} </p>
    </div>
    <div class="col form-floating pb-3">
      <input v-model.number="weight.goal.input" @change="validateWeightGoal" id="weight-goal"
             :class="{'is-valid': weight.goal.isValid, 'is-invalid': weight.goal.isValid === false}"
             class="form-control" name="weight-goal" type="number" min="50"
             max="500"
             placeholder="weight-goal">
      <label for="weight-goal" class="ms-2 text-muted">Goal Weight</label>
      <p v-if="weight.goal.isValid === false" :class="{'invalid-feedback': weight.goal.isValid === false}" class="mb-0">
        {{ weight.goal.feedback }} </p>
    </div>
    <div class="col-12 pb-3">
      <button class="btn btn-lg btn-primary col-12" @click="validateForm" type="submit">Nexttt</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      pageLoad: false,
      showPhysicalDetails: true,
      showGoals: false,
      name: {
        input: '',
        isValid: '',
        feedback: ''
      },
      age: {
        input: '',
        isValid: '',
        feedback: ''
      },
      height: {
        feet: {
          input: '',
          isValid: ''
        },
        inches: {
          input: '',
          isValid: ''
        }
      },
      weight: {
        input: '',
        isValid: '',
        feedback: '',
        goal: {
          input: '',
          isValid: '',
          feedback: ''
        }
      }
    }
  },
  methods: {
    validateName() {
      if (this.name.input.length < 2) {
        this.name.isValid = false
        this.name.feedback = "Name must be more than one character"
      } else if (!/^[a-zA-Z]+$/.test(this.name.input)) {
        this.name.isValid = false
        this.name.feedback = "No special characters"
      } else {
        this.name.isValid = true
      }
    },
    validateAge() {
      if (this.age.input < 13) {
        this.age.isValid = false
        this.age.feedback = "must be older than 13"
      } else if (this.age.input > 100) {
        this.age.isValid = false
        this.age.feedback = "must be younger than 100"
      } else {
        this.age.isValid = true
      }
    },
    validateHeightFeet() {
      this.height.feet.isValid = this.height.feet.input !== '';
    },
    validateHeightInches() {
      this.height.inches.isValid = this.height.inches.input !== '';
    }
    ,
    validateWeight() {
      if (this.weight.input < 70) {
        this.weight.isValid = false
        this.weight.feedback = "Please make sure weight was entered correctly"
      } else if (this.weight.input > 900) {
        this.weight.isValid = false
        this.weight.feedback = "Please make sure weight was entered correctly"
      } else {
        this.weight.isValid = true
      }
    },
    validateWeightGoal() {
      if (this.weight.goal.input < 70) {
        this.weight.goal.isValid = false
        this.weight.goal.feedback = "Please make sure weight was entered correctly"
      } else if (this.weight.goal.input > 900) {
        this.weight.goal.isValid = false
        this.weight.goal.feedback = "Please make sure weight was entered correctly"
      } else {
        this.weight.goal.isValid = true
      }
    },
    validateForm() {
      console.log("Hello")
      this.validateName()
      this.validateWeight()
      this.validateWeightGoal()
      this.validateAge()
      this.validateHeightFeet()
      this.validateHeightInches()
      if (this.name.isValid && this.age.isValid && this.height.feet.isValid && this.height.inches.isValid && this.weight.isValid && this.weight.goal.isValid) {
        this.$emit("progressBar",20)
        this.$emit("toggleForm")
      }
      else {
        console.log("hi");
      }
    }
  },
  computed: {
    progressBarWidth: function () {
      let count = 0
      if (this.name.isValid) {
        ++count
      }
      if (this.age.isValid) {
        ++count
      }
      if (this.height.feet.isValid) {
        ++count
      }
      if (this.height.inches.isValid) {
        ++count
      }
      if (this.weight.isValid) {
        ++count
      }
      if (this.weight.goal.isValid) {
        ++count
      }
      console.log((10 + 5 * count) + '%')
      this.$emit("progressBar", 10 + 5 * count)
      return (10 + 5 * count) + '%'
    }
  },
  mounted() {
    this.pageLoad = true
  }
}
</script>

<style lang="scss" scoped>
form {
  height: inherit;
}

</style>