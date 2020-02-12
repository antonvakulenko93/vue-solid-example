<template>
  <v-card
    class="mx-auto mb-3"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1" v-text="item.firstName"></v-list-item-title>
        <v-list-item-title class="headline mb-1"  v-text="item.lastName"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['item'],
  methods: {
    deleteItem () {
      this.$emit('delete', this.item.id)
    }
  }
}
</script>

<style scoped>

</style>
