<template>
  <ul class="home">
    <Item v-for="whisper in orderBy(whispers, 'date', -1)" :id="whisper.id" :key="whisper.id" :uid="whisper.uid" />
  </ul>
</template>

<script>
import Item from '@/components/Item.vue'
import { db } from '../main'
import Vue2Filters from 'vue2-filters'

export default {
  name: 'home',
  components: { Item },
  mixins: [Vue2Filters.mixin],
  data() {
    return {
      whispers: []
    }
  },
  firestore() {
    return {
      whispers: db.collection('whispers')
    }
  }
}
</script>
