<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="true"
    right
    :mini-variant="true"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <!-- <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content> -->
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import items from '@/utils/Sidebar.js'
export default {
  data() {
    return {
      drawer: true,
      items
    }
  }
}
</script>