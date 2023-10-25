
<template>
  <div id="mainWrap">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<script>
import Layout from '@/layout/Index.vue'
import '@/assets/scss/style.scss'

export default {
  components: { Layout }
}
</script>