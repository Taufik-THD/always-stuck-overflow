<template>
  <div class="home">
    <Homepage />
    <Header />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Homepage,
    Header
  }
}
</script>
