<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="true"
      :right="$vuetify.rtl"
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
    <v-app-bar
      :clipped-left="!$vuetify.rtl"
      :clipped-right="$vuetify.rtl"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="'El Nozom'" />
      <v-spacer />
      <v-icon
        class="pointer mr-4"
        @click.prevent="switchLanguage"
      >mdi-earth</v-icon>
      <v-icon
        class="pointer"
        @click.prevent="switchTheme"
      >mdi-weather-night</v-icon>
    </v-app-bar>
  </div>
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