<template>
  <v-container>

    <v-carousel hide-delimiters show-arrows="hover" height="18rem" progress v-if="!loading">
        <v-carousel-item v-for="item in listingImages">
          <!-- shows thumbnail of the image while the full res image is loading -->
          <v-img :src="item[3]?.Url || item[2]?.Url || item[1]?.Url" :lazy-src="item[0].Url" aspect-ratio="1" class="bg-grey-lighten-2">
            <template v-slot:placeholder>         <!-- spinner when the image is still loading -->
              <div class="d-flex align-center justify-center carousel__placeholder">
                <v-progress-circular indeterminate color="grey-lighten-5" />
              </div>
            </template>
          </v-img>
        </v-carousel-item>
    </v-carousel>

    <div v-else class="d-flex align-center justify-center carousel__placeholder">
      <v-progress-circular indeterminate color="grey-lighten-4" /> <!-- spinner when we are waiting for response from api -->
    </div>

    <v-divider class="divider"></v-divider>
  </v-container>
</template>

<script>

export default {

  computed: {
    listingImages() { // get just the images, i assume thats Categorie 1
      if (this.loading) return;
      const images = []
      const items = this.listingData.Media

      Object.keys(items).forEach((key) => {
        if (items[key].Categorie === 1) {
          images.push(items[key].MediaItems)
        }
      })
      return images;
    },

    loading() {
      return this.$store.state.loading
    },

    listingData() {
      return this.$store.state.listingData
    }
  }
}

</script>


<style scoped>
.divider {
  margin-top: 1rem;
}

.carousel__placeholder {
  height: 18rem;
}
</style>
