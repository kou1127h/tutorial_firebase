<template>
  <li class="item">
    <div class="user-box">
      <div class="avatar" :style="'background-image: url('+currentUser.photoURL+')'"/>
      <p class="user-name">{{currentUser.displayName}}</p>
    </div>
    <div class="editor">
      <textarea v-model="newWhisper" placeholder="今何してる？" @keypress.enter="createWhisper"/>
      <p class="message">Press Enter</p>
    </div>
  </li>
</template>

<script>
import { db } from '../main'
export default {
  props: ['currentUser'],
  data() {
    return {
      newWhisper: ''
    }
  },
  methods: {
    createWhisper () {
      if (this.newWhisper === '') return
      const date = new Date()
      db.collection('whispers').add({
        'content': this.newWhisper,
        'date': date,
        'uid': this.currentUser.uid
      })
        .then(
          this.newWhisper = ''
        )
    }
  }
}
</script>
