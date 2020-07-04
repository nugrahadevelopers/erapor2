<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form class="login100-form validate-form" @submit.prevent="login">
          <span class="login100-form-title p-b-43">
            Silahkan Login
          </span>
          <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input class="input100" type="text" name="email" id="email" v-model="email">
            <span class="focus-input100"></span>
            <span class="label-input100">Email</span>
          </div>
          <div class="wrap-input100 validate-input" data-validate="Password is required">
            <input class="input100" type="password" name="password" v-model="password">
            <span class="focus-input100"></span>
            <span class="label-input100">Password</span>
          </div>
          <div class="flex-sb-m w-full p-t-3 p-b-32">
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn">
            Login
            </button>
          </div>
        </form>
        <div class="login100-more" style="background-image: url('images/bg-01.jpg');">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'login',
      data() {
        return {
          email: '',
          password: ','
        }
      },
      methods: {
        login() {
          this.$store.dispatch('retrieveToken', {
            email: this.email,
            password: this.password,
          })
        }
      }
    }
</script>