<template>
  <!-- ここで認証管理してるのはどうなん？ -->
  <!-- TODO: propでユーザー情報を取得 -->
  <header>
    <router-link to="/">
      <h1>whisp.</h1>
    </router-link>
    <template v-if="currentUser">
      <div class="btns">
        <router-link :to="'/user/'+currentUser.uid">
          <button
            :style="'background-image: url(' + currentUser.photoURL + ')'"
          />
        </router-link>
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
import { db } from '../main'

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
        this.$router.push(`/user/${result.user.uid}`)
        alert('Hello,' + result.user.displayName + '!')
        this.createUser(result.user)
      })
    },
    signOut() {
      if (window.confirm('Are You Sure to Sign Out?')) {
        auth.signOut().then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/'), location.reload()
        })
      }
    },
    createUser(user) {
      db.collection('users').doc(user.uid).set(
        {
          name: user.displayName,
          photoURL: user.photoURL,
          email: user.email
        },
        { merge: true }
      )
    }
  }
}
</script>

<style scoped lang="stylus">
h1
  margin 40px 0
  text-align center

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
