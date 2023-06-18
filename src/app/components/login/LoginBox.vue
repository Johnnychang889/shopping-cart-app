<template>
  <div id="login" class="box has-text-centered">
    <h2 class="title">Fullstack Clothing</h2>
    <div class="field">
      <label class="label is-pulled-left">ID</label>
      <div class="control">
        <input class="input" type="text" v-model="loginData.id" @focus="clear_loginfailed">
      </div>
    </div>

    <div class="field">
      <label class="label is-pulled-left">PASSWORD</label>
      <div class="control">
        <input class="input" type="password" v-model="loginData.password" @focus="clear_loginfailed">
      </div>
    </div>
    <div>
      <span v-if="loginFailed" style="color: red; display: block; margin:20px;">
        ID or PASSWORD is incorrect !
      </span>
    </div>
    <button @click="login" :class="[{'is-loading': loading}, 'button is-primary']">Login</button> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "LoginBox",
  data() {
    return {
      loginData: {
        id: 'pccu',
        password: '123',
      }
    }
  },
  computed: {
    ...mapGetters([ 'loading', 'loginFailed' ]) 
  }, 
  methods: {
    ...mapActions(['clear_loginfailed']),
    login() {
      this.$store
        .dispatch("login", this.loginData)
        .then(() => { 
          this.$router.push({ path: '/products'});
        }); 
    }
  }
};
</script>

<style scoped> 
.box {
  padding: 30px; 
}
</style>