<template>
  <div id="login">
    <section class="container-fluid overflow-auto">
      <div class="row justify-content-center align-items-center h-100">
        <transition name="fade" mode="out-in">
          <!-- User Profile-->
          <div class="col-12 col-sm-10 col-lg-6 col-xl-5 col-xxl-4 py-5">
            <!-- Form Info -->
            <h2 class="display-4 text-center">{{ title }}</h2>
            <p v-if="showUserProfileForm" class="lead text-center">First we need to know a little about you to
              personalize your diet and fitness plans</p>
            <p v-else class="lead text-center">Almost there!</p>

            <!-- Progress Bar -->
            <div class="progress my-3" style="height:50px;">
              <div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar"
                   v-bind:style="{width : progressBarWidth + '%'}" aria-valuenow="" aria-valuemin="0"
                   aria-valuemax="100"></div>
            </div>

            <!-- Sign Up component -->
            <div class="p-3 bg-light rounded-3 shadow-lg">
              <UserProfileForm v-if="showUserProfileForm" @progressBar="changeProgress" @toggleForm="toggleForm"></UserProfileForm>
              <SignUpForm v-else></SignUpForm>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import UserProfileForm from "@/components/UserProfileForm";
import SignUpForm from "@/components/SignUpForm";

export default {
  data() {
    return {
      title: "Sign Up",
      showUserProfileForm: true,
      progressBarWidth: 15
    }
  },
  components: {
    UserProfileForm,
    SignUpForm
  },
  methods: {
    toggleForm() {
      this.showUserProfileForm = !this.showUserProfileForm
    },
    changeProgress(value){
      this.progressBarWidth += value
    }
  }
}
</script>

<style lang="scss" scoped>

section {
  height: calc(100vh - #{$headerHeight});

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>