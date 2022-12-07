import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      listingData: {},
      loading: true,
    }
  },
  mutations: {
    updateListingImages (state, value) {
      state.listingData = value;
    },
    isLoading (state, value) {
      state.loading = value
    }
  }
})

export default store