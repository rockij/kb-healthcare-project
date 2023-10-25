<template>
  <article class="article-info">
    <HospitalCard
      v-for="item in lists"
      :key="item.id"
      :articleClass="item.articleClass"
      :titleBisde="item.titleBisde"
      :title="item.title"
      :titleClass="'fs-20'"
      :title2="item.title2"
      :title2Class="'mt-5'"
      :road="item.road"
      :subject="item.subject"
      :tagDivider="item.tagDivider"
      :tags="item.tags"
      :state="item.state"
      :stateClass="item.stateClass"
      :path="item.path"
      @update="goPath"
    />
    <buttonSns
      :phoneNumber="'02-554-5547'"
      @share="funcSns"
      @favorit="funcFavorit"
      @map="funcMap"
      class="mt-4"
    />
  </article>
</template>
<script>
  import router from '@/router'
  import buttonSns from '@/components/ButtonSns.vue'
  import HospitalCard from '@/components/CardHospital.vue'
  import { ref, reactive } from 'vue'
  export default {
    props: ['lists'],
    components: {
      HospitalCard,
      buttonSns
    },
    setup() {
      function goPath(val) {
        router.push(val)
      }
      function funcSns() {
        alert('공유하기')
      }
      function funcFavorit() {
        alert('즐겨찾기')
      }
      function funcMap() {
        alert('길찾기')
      }
      return {
        goPath,
        funcSns,
        funcFavorit,
        funcMap
      }
    }
  }
</script>
