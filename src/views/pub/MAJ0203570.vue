<template>
  <div class="contents">
    <div class="title-area mb-7">
      <p class="subTit-01">나의 약</p>
    </div>
    <v-btn
      block
      variant="outlined"
      rounded="xl"
      color="#FFB11B"
      height="60"
      :ripple="false"
      class="btn-search"
      @click="goPath('MAJ0203521')"
    >
      <span class="text">
        비타민D
        <img src="@/assets/images/icon-search.svg" alt="검색" />
      </span>
    </v-btn>
    <div class="textfield-area">
      <v-text-field
        class="input-basic textfield-default"
        label="약 별명"
        required
        persistent-placeholder
        placeholder="예) 혈압약, 감기약 등"
        variant="outlined"
      >
      </v-text-field>
      <div class="medialarm-double pt-4">
        <v-text-field
          class="input-basic textfield-default input-calendar medialarm-1"
          label="측정 날짜"
          required
          persistent-placeholder
          placeholder="시작일"
          variant="outlined"
          append-inner-icon="mdi-calendar"
          @click="event"
        >
        </v-text-field>

        <v-text-field
          class="input-basic textfield-default medialarm-1"
          label="기간"
          required
          persistent-placeholder
          placeholder="3일간"
          variant="outlined"
        >
        </v-text-field>
      </div>
      <div class="pt-8">
        <div class="medialarm-top">
          <div class="medialarm-subtit">먹는 기간</div>
          <v-tabs class="tabs-simple2 medialarm-tabs">
            <v-tab variant="text" @click="tab = 0">매일</v-tab>
            <v-tab variant="text" @click="tab = 1">이틀에 한번</v-tab>
          </v-tabs>
        </div>

        <v-window v-model="tab" class="tabs-container pt-6">
          <v-window-item v-for="n in 2" :key="n" :value="n - 1">
            <div class="tabs-simple2 pt-1 medialarm-tabs type-2">
              <v-btn
                variant="text"
                class="fs-16"
                v-for="btn in btns1"
                :key="btn.value"
                :aria-selected="selected1.includes(btn)"
                @click="getCondition1(btn)"
                >{{ btn.text }}</v-btn
              >
            </div>
            <v-divider class="mt-8"></v-divider>
          </v-window-item>
        </v-window>
      </div>

      <div class="medialarm-count pt-8">
        <div class="medialarm-subtit">먹는 횟수</div>
        <div class="numcount-area px-3">
          <v-btn
            variant="text"
            class="handle decrease"
            title="감소"
            @click="numcount > 0 ? numcount-- : ''"
          ></v-btn>
          <strong class="number">{{ numcount }}</strong>
          <v-btn
            variant="text"
            class="handle increase"
            title="증가"
            @click="numcount++"
          ></v-btn>
        </div>
      </div>

      <div class="medialarm-amount pt-8">
        <div class="medialarm-subtit">먹는 시간과 양</div>
        <div class="time-wrap pt-6" v-for="n in 3" :key="n - 1">
          <v-btn
            variant="outlined"
            class="time-btn"
            density="compact"
            rounded="lg"
            color="#CCC"
          >
            <span class="time-text">오전 8:00</span>
            <img src="@/assets/images/icon-arrow-down2.svg" alt="" />
          </v-btn>
          <span class="time-slash">/</span>
          <v-btn
            variant="outlined"
            class="time-btn type-2"
            density="compact"
            rounded="lg"
            color="#CCC"
            @click="modal = true"
          >
            <span class="time-text">1</span><span class="time-text">정</span>
            <img src="@/assets/images/icon-arrow-down2.svg" alt="" />
          </v-btn>
        </div>
      </div>

      <div class="medialarm-push py-8">
        <div class="push-wrap">
          <div class="medialarm-subtit">푸시 알림</div>
          <div class="medialarm-desc">
            알림을 ON으로 설정하면 약 먹을 시간을 알려드립니다
          </div>
        </div>
        <v-switch
          class="switch-default"
          :model-value="true"
          color="#FFD338"
          hide-details
          >{{ switchModel }}</v-switch
        >
      </div>

      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="48" class="btn-summit bdr-8" disabled=""
            >저장하기</v-btn
          >
        </div>
      </div>
    </div>
  </div>
  <MAJ0203581 v-model="modal" @close="modal = false" />
</template>

<script>
  import MAJ0203581 from './MAJ0203581.vue'
  import { ref, reactive } from 'vue'
  import router from '@/router'

  export default {
    components: {
      MAJ0203581
    },
    setup() {
      const modal = ref(false)
      const name2 = ref('오전 9시 30분')
      const numcount = ref(3)
      const tab = ref(0)
      const selected1 = reactive([])
      const btns1 = reactive([
        {
          value: 0,
          text: '일'
        },
        {
          value: 1,
          text: '월'
        },
        {
          value: 2,
          text: '화'
        },
        {
          value: 3,
          text: '수'
        },
        {
          value: 4,
          text: '목'
        },
        {
          value: 5,
          text: '금'
        },
        {
          value: 6,
          text: '토'
        }
      ])
      function goPath(val) {
        router.push(val)
      }
      function getCondition1(val) {
        selected1.includes(val)
          ? selected1.splice(selected1.indexOf(val), 1)
          : selected1.push(val)
      }

      function event() {
        console.log('click')
      }

      return {
        modal,
        name2,
        numcount,
        btns1,
        selected1,
        tab,
        goPath,
        event,
        getCondition1
      }
    }
  }
</script>
