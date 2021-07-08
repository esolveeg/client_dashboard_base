export const switchLanguage = (locale, ctx) => {
  localStorage.setItem('locale', locale)
  ctx.$vuetify.rtl = locale === 'ar'
  ctx.$i18n.setLocale(locale)
}

export const initApp = ctx => new Promise((resolve) => {
  // handle default  language
  const locale = localStorage.getItem('locale')
  if (locale) switchLanguage(locale, ctx)

  // handle default  theme
  const mode = localStorage.getItem('mode')
  // check if mode is set to make the change
  if (mode) {
    ctx.$vuetify.theme.dark = mode !== 'light'
  }

  setTimeout(() => {
    ctx.$store.commit('ui/appLoaded')
  }, 2000);

  resolve(true)
})
