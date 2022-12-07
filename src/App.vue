<script setup>
import Nav from './components/Nav.vue';
import Carousel from "./components/Carousel.vue";
import Album from "./components/Album.vue";

</script>

<template>
  <Nav :handleTabChange="handleTabChange" />
  <Carousel v-if="selectedTab === 0" />
  <Album v-else />
</template>

<script>

const requestURL = `https://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${import.meta.env.VITE_KEY}/koop/472e39ce-9ddc-494a-a222-b5f22bee7aea/`;

export default {
  data() {
    return {
      selectedTab: 0,
    }
  },
  created() {
    this.$store.commit('isLoading', true)    // set loading state
    fetch(requestURL).then(async (response) => {
      let listingData = await response.json();
      this.$store.commit('isLoading', false)
      this.$store.commit('updateListingImages', listingData)
    }).catch(console.error)

  },
  methods:{
    handleTabChange(tab) { // just a quick solution to handle tab change, normally i would use vue router
      this.selectedTab = tab;
    }
  }
}

</script>

<style scoped>
</style>
