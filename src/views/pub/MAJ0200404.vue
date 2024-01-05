<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="화면편집"
      v-model="documentModal"
      @close="documentModal = false"
    >
      <template #modalBody>
        <div class="title-area">
          <p class="subTit-01">라이프로그 항목을<br>추가/삭제할 수 있어요</p><!-- 20231208 수정 -->
        </div>
        <div class="icon-list-setting">
          <div class="icon-set-item"
            v-for="item in iconList"
            :key="item.id"
            :class="{
              'wide': item.lb === '걸음' || item.lb === '식사' || item.lb === '운동'
            }"
          >
            <div class="inner">
              <v-btn v-if="item.remove" class="btn-remove"><span class="offscreen">삭제하기</span></v-btn>
              <i class="icon"
                :class="{
                  'walk': item.lb === '걸음',
                  'feel': item.lb === '기분',
                  'sleep': item.lb === '수면',
                  'meal': item.lb === '식사',
                  'body': item.lb === '체성분',
                  'menstruation': item.lb === '여성건강',
                  'exercise': item.lb === '운동',
                  'moisture': item.lb === '수분',
                  'drinking': item.lb === '음주',
                  'smoking': item.lb === '흡연',
                  'heart': item.lb === '심박',
                  'talk-med': item.lb === '복약',
                  'blood-pre': item.lb === '혈압',
                  'blood-sugar': item.lb === '혈당'
                }"
              ></i>
              <span>{{ item.lb }}</span>
            </div>
          </div>
        </div>
        <div class="section-page">
          <div class="title-area">
            <p class="subTit-02">추가해서 관리해 보세요</p><!-- 20231208 수정 -->
          </div>
          <div class="icon-list-setting not-sel">
            <div class="icon-set-item"
              v-for="item in iconList"
              :key="item.id"
              :class="{
                'wide': item.lb === '걸음' || item.lb === '식사' || item.lb === '운동',
                'not-sel': item.isSel
              }"
            >
              <div class="inner">
                <v-btn v-if="item.add" class="btn-add"><span class="offscreen">추가하기</span></v-btn>
                <i class="icon"
                  :class="{
                    'walk': item.lb === '걸음',
                    'feel': item.lb === '기분',
                    'sleep': item.lb === '수면',
                    'meal': item.lb === '식사',
                    'body': item.lb === '체성분',
                    'menstruation': item.lb === '여성건강',
                    'exercise': item.lb === '운동',
                    'moisture': item.lb === '수분',
                    'drinking': item.lb === '음주',
                    'smoking': item.lb === '흡연',
                    'heart': item.lb === '심박',
                    'talk-med': item.lb === '복약',
                    'blood-pre': item.lb === '혈압',
                    'blood-sugar': item.lb === '혈당'
                  }"
                ></i>
                <span>{{ item.lb }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #modalButton>
        <v-btn
          variant="text"
          height="48"
          class="bdr-8 btn-summit"
          @click="documentModal = false"
          >완료</v-btn
        >
      </template>
    </DocumentModal>
    <!-- //TermsModal -->
  </div>
</template>
  
  <script>
import { ref } from 'vue'
import DocumentModal from '@/components/DocumentModal.vue'
export default {
  components: { DocumentModal },
  setup() {
    const documentModal = ref(true)

    const iconList = ref([
      {
        lb: '걸음',
      },
      {
        lb: '기분',
      },
      {
        lb: '수면',
      },
      {
        lb: '식사',
      },
      {
        lb: '체성분',
      },
      {
        lb: '여성건강',
      },
      {
        lb: '운동',
        remove: true
      },
      {
        lb: '수분',
        remove: true,
        add: true,
      },
      {
        lb: '음주',
        remove: true,
        add: true,
      },
      {
        lb: '흡연',
        remove: true,
        add: true,
      },
      {
        lb: '심박',
        remove: true,
        add: true,
      },
      {
        lb: '복약',
        remove: true,
        add: true,
      },
      {
        lb: '혈압',
        remove: true,
        add: true,
      },
      {
        lb: '혈당',
        remove: true,
        add: true,
      }
    ])

    return {
      documentModal,
      iconList,
    }
  }
}
</script>
  