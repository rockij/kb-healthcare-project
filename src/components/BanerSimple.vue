<template>
  <div class="box-banner" :class="classOption">
    <v-btn
      variant="flat"
      data-case="medical"
      class="link-banner"
      :color="color"
      @click="onClicked(path)"
    >
      <span class="txbox">
        <slot></slot>
      </span>
      <template #append>
        <img :src="`/assets/images/${iconName}`" class="icon" alt="" />
      </template>
    </v-btn>
  </div>
</template>
<script>
  export default {
    props: {
      classOption: {
        type: String,
        default: null
      },
      iconName: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: '#F8F8F8'
      }
    },
    emits: ['update'],
    setup(props, context) {
      const { emit } = context
      function onClicked(path) {
        emit('update', path)
      }
      return {
        onClicked
      }
    }
  }
</script>
