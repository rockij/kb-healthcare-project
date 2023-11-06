<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-full"
  >
    <v-card>
      <div class="modal-body pt-4 pb-4">
        <div class="flex-shrink-0 modal-body-container">
          <HospitalCard
            v-for="item in list"
            :key="item.id"
            :title="item.title"
            :titleClass="'star fs-18'"
            :title2Class="'mt-2'"
            :road="item.road"
            :subject="item.subject"
            :tags="item.tags"
            :state="item.state"
            :stateClass="item.stateClass"
            :path="item.path"
            :toastMsgOn="'내 병원에서 등록 되었습니다'"
            :toastMsgOff="'내 병원에서 해제 되었습니다'"
            class="mt-3"
            @update="$emit('close')"
          />
          <Nodata :icon="true">
            <div class="fs-16">찜한 약국이 없습니다.</div>
          </Nodata>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import router from '@/router'
  import HospitalCard from '@/components/CardHospital.vue'
  import Nodata from '@/components/nodata/Nodata.vue'
  import { ref, reactive } from 'vue'
  export default {
    props: ['modal3'],
    emits: ['close'],
    components: {
      HospitalCard,
      Nodata
    },
    data() {
      return {}
    },
    setup(props) {
      const list = reactive([
        {
          id: 1,
          title: '연세 후 약국',
          road: '500m',
          subject: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '영업종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 2,
          title: '삼성해든약국',
          road: '900m',
          subject: '서울특별시 강남구 테헤란로테헤란로 401 0층 0호',
          state: '일요일 휴무',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title: '소망약국',
          road: '999m',
          subject: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '영업중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title:
            '제목이길어서 두줄처리테스트 제목이길어서두줄처리테스트제목이길',
          road: '10m',
          subject:
            '주소가 길어서 두줄테스트 주소가 길어서 두줄테스트 두줄테스트 401호',
          state: '영업중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        }
      ])
      const dialog = ref(props.modal3)
      function goPath(val) {
        router.push(val)
      }
      return { dialog, list, goPath }
    }
  }
</script>
