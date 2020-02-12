<template>
  <div>
    <div>{{name}}</div>
    <div v-for="item in items" :key="item.id">
      <Component :key="item.id" :item="item" :is="view" @delete="deleteItem">
        <v-card-actions>
          <v-btn color="error" text @click="deleteItem(item.id)">Remove</v-btn>
        </v-card-actions>
      </Component>
    </div>
    <v-btn color="primary" @click="addItem">Add random</v-btn>
  </div>
</template>

<script>

import { DataService } from '@/services/DataService'

export default {
  name: 'List',
  props: {
    name: String,
    service: DataService,
    view: Object
  },
  data: () => ({
    items: Array,
    editedItem: undefined
  }),
  mounted () {
    this.service.subscribe(this.updateItems)
  },
  beforeDestroy () {
    this.service.unsubscribe(this.updateItems)
  },
  methods: {
    addItem () {
      this.service.add()
    },
    updateItems (items) {
      this.items = items
    },
    deleteItem (id) {
      this.service.delete(id)
    }
  }
}
</script>

<style scoped>

</style>
