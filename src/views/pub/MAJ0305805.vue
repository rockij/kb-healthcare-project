<template>
  <div class="text-center mt-6">
    <figure class="d-inline-block">
      <img width="140" height="140" :src="`/assets/images/${imgName}`" alt="" />
    </figure>
    <figcaption class="mt-3">
      <strong class="ff-second fs-20 font-weight-700">{{ title }}</strong>
      <p class="mt-2">{{ text }}</p>
    </figcaption>
  </div>
</template>
<script>
  export default {
    props: ['imgName', 'title', 'text'],
    setup() {
      return {}
    }
  }
</script>
