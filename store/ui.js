export const state = () => ({
    isLoading: true
})

export const getters ={
    isLoading: state => {
        return state.isLoading
      }
}

export const mutations = {
    appLoaded(state) {
        state.isLoading = false
    }
}
