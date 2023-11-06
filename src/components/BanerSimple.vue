<template>
  <div class="box-banner" :class="classOption">
    <v-btn
      variant="flat"
      href="#none"
      data-case="medical"
      class="link-banner"
      color="#F8F8F8"
    >
      <span class="txbox">
        <slot></slot>
      </span>
      <template #append>
        <img :src="`/src/assets/images/${iconName}`" class="icon" alt="" />
      </template>
    </v-btn>
  </div>
</template>
<script>
  export default {
    props: ['classOption', 'iconName']
  }
</script>
