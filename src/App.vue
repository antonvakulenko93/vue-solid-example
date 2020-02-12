<template>
  <v-app>
    <Container></Container>
  </v-app>

</template>

<script lang="ts">
import Vue from 'vue'
import Container from '@/components/Container.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Container
  }
})
</script>
