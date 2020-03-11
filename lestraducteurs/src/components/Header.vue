<template>
  <!-- ここで認証管理してるのはどうなん？ -->
  <!-- TODO: propでユーザー情報を取得 -->
  <header>
    <router-link to="/">
      <h1>whisp.</h1>
    </router-link>
    <template v-if="currentUser">
      <div class="btns">
        <button :style="'background-image: url(' + currentUser.photoURL + ')'"></button>
        <button>
          <fa icon="sign-out-alt" @click="signOut" />
        </button>
      </div>
    </template>
    <template v-else>
      <div class="btns">
        <button>
          <fa icon="user" @click="signIn" />
        </button>
      </div>
    </template>
  </header>
</template>

<script>
import firebase from 'firebase'
import { auth } from '../main'

export default {
  data() {
    return {
      currentUser: {}
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.currentUser = user
    })
  },
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth.signInWithPopup(provider).then(result => {
        alert('Hello, ' + result.user.displayName + '!')
      })
    },
    signOut() {
      if (window.confirm('Are You Sure to Sign Out?')) {
        auth.signOut().then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/'), location.reload()
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
