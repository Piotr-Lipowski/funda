<script setup>

const props = defineProps({
  handleTabChange: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <v-tabs fixed-tabs bg-color="#f7a100">
    <v-tab @click="() => props.handleTabChange(0)"> <!-- should be a router..-->
      Carousel
    </v-tab>
    <v-tab @click="() => props.handleTabChange(1)">
      Album
    </v-tab>
  </v-tabs>
</template>
