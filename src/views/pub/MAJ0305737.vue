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
            v-for="item in hospitalList"
            :key="item.id"
            :title="item.title"
            :titleClass="'star fs-18'"
            :title2="item.title2"
            :title2Class="'mt-4'"
            :subject="item.subject"
            :state="item.state"
            :stateClass="item.stateClass"
            :path="item.path"
            :toastMsgOn="'내 병원에서 등록 되었습니다'"
            :toastMsgOff="'내 병원에서 해제 되었습니다'"
            class="mt-3"
            @update="goPath"
          />
          <Nodata :icon="true">
            <div class="fs-16">찜한 병원이 없습니다.</div>
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
    setup(props) {
      const hospitalList = reactive([
        {
          id: 1,
          title: '강남초이스영상의학과의원',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          subject: '이비인후과 전문의 1명, 내과전문의 1명',
          state: '진료종료',
          stateClass: 'waiting',
          path: '/MAJ0305740'
        },
        {
          id: 2,
          title: '하트강남영상의학과',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          subject: '안과, 내과, 기타 진료과목명',
          state: '진료중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title: '하트강남영상의학과',
          title2: '서울특별시 강남구 테헤란로 401 0층 0호',
          state: '진료중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        },
        {
          id: 3,
          title:
            '제목이길어서 두줄처리테스트 제목이길어서두줄처리테스트제목이길',
          title2:
            '주소가 길어서 두줄테스트 주소가 길어서 두줄테스트 두줄테스트 401호',
          road: '500m',
          subject: '안과, 내과, 기타 진료과목명',
          tags: '#여의사 #남의사 #야간진료 #주말진료',
          state: '진료중',
          stateClass: 'ing',
          path: '/MAJ0305740'
        }
      ])
      const dialog = ref(props.modal3)
      function goPath(val) {
        router.push(val)
      }
      return { dialog, hospitalList, goPath }
    }
  }
</script>
