<template>
  <v-app-bar
    :clipped-left="!$vuetify.rtl"
    :clipped-right="$vuetify.rtl"
    fixed
    app
  >
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
</template>

<script>
import { switchLanguage } from '@/utils/helpers/Global.js'
export default {
  methods: {
    switchLanguage() {
      const locale = this.$i18n.locale === 'ar' ? 'en' : 'ar'
      switchLanguage(locale, this)
    },
    switchTheme() {
      const mode = this.$vuetify.theme.dark ? 'light' : 'dark'
      localStorage.setItem('mode', mode)
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>