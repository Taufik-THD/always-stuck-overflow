<template>
  <div class="about">
    <navheader />
    <Answer />
  </div>
</template>

<script>
  import navheader from '@/components/navheader.vue'
  import Answer from '@/components/Answer.vue'

  export default {
    name: 'answerpage',
    components: {
      navheader,
      Answer
    }
  }
</script>
