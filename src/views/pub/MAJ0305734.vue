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
      :sources="item.sources"
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
    <DialogSns
      v-model="modal"
      @close="modal = false"
      @kakao="kakaoFnc"
      @facebook="fbFnc"
      @Instagram="insFnc"
      @url="urlFnc"
      @more="moreFnc"
    />
  </article>
</template>
<script>
  import router from '@/router'
  import buttonSns from '@/components/ButtonSns.vue'
  import DialogSns from '@/components/BottomSheetSns.vue'
  import HospitalCard from '@/components/CardHospital.vue'
  import { ref } from 'vue'
  export default {
    props: ['lists'],
    components: {
      buttonSns,
      DialogSns,
      HospitalCard
    },
    setup() {
      const modal = ref(false)
      function goPath(val) {
        router.push(val)
      }
      function funcSns() {
        modal.value = true
      }
      function funcFavorit() {
        alert('즐겨찾기')
      }
      function funcMap() {
        alert('길찾기')
      }
      function kakaoFnc() {
        alert('공유하기 카카오톡')
      }
      function fbFnc() {
        alert('공유하기 페이스북')
      }
      function insFnc() {
        alert('공유하기 인스타그램')
      }
      function urlFnc() {
        alert('공유하기 URL')
      }
      function moreFnc() {
        alert('공유하기 더보기')
      }
      return {
        modal,
        goPath,
        funcSns,
        funcFavorit,
        funcMap,
        kakaoFnc,
        fbFnc,
        insFnc,
        urlFnc,
        moreFnc
      }
    }
  }
</script>
