<template>
  <v-card
    class="mx-auto mb-3"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1" v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: 'IssueCard',
  props: ['item']
}
</script>

<style scoped>

</style>
