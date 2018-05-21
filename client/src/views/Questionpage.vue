<template>
  <div class="about">
    <navheader />
    <home />
  </div>
</template>

<script>
  import navheader from '@/components/navheader.vue'
  import home from '@/components/home.vue'

  export default {
    name: 'questionpage',
    components: {
      navheader,
      home
    }
  }
</script>
