<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="모든 성격유형"
      v-model="documentModal"
      @close="documentModal = false"
    >
      <template #modalBody>
        <div class="title-area">
          <p class="subTit-01">
            16가지 성격유형을<br />
            확인해보세요
          </p>
        </div>
        <div class="all-per-type">
          <div class="all-per-type-cont">
            <div class="tab-box">
              <div class="toggle-set">
                <v-btn
                  class="btn-toggle-menu"
                  :class="{ close: dialogPerType == true }"
                  @click="dialogPerType = true"
                >
                  <span class="offscreen">성격유형 목록 팝업</span>
                </v-btn>
              </div>
              <v-tabs v-model="tabInit" align-tabs="start" height="100%">
                <v-tab
                  v-for="(item, i) in tabItems"
                  :key="item.id"
                  :value="i"
                  :ripple="false"
                >
                  {{ item.chip + '\n' + item.lb }}
                </v-tab>
              </v-tabs>
              <v-window v-model="tabInit" class="mt-7">
                <v-window-item v-for="(item, i) in tabItems" :key="i">
                  <div class="type-cont box">
                    <span class="chip">{{ item.chip }}</span>
                    <strong class="lb">{{ item.lb }}</strong>
                    <div class="card-img">
                      <v-img :src="`/assets/images/` + item.card"></v-img>
                    </div>
                  </div>
                  <ul class="list-circle mt-6">
                    <li v-for="(item, i) in item.list" :key="i">{{ item }}</li>
                  </ul>
                </v-window-item>
              </v-window>
            </div>
          </div>
        </div>
      </template>
    </DocumentModal>
    <!-- //TermsModal -->
    <v-dialog
      activator
      v-model="dialogPerType"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title">모든 성격유형</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            icon
            dark
            @click="dialogPerType = false"
            class="btn-modal-close"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div class="dialog-toggle-menu-list">
              <ul>
                <li v-for="(item, i) in tabItems" :key="if">
                  <v-btn
                    variant="text"
                    class="btn-toggle-item"
                    :class="{ active: tabInit === i }"
                    @click=";(tabInit = i), (dialogPerType = false)"
                  >
                    {{ item.chip + ' ' + item.lb }}
                  </v-btn>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import DocumentModal from '@/components/DocumentModal.vue'
  export default {
    components: { DocumentModal },
    setup() {
      const documentModal = ref(true)
      const dialogPerType = ref(false)
      const tabInit = ref(null)
      const tabItems = ref([
        {
          chip: 'CP-E',
          lb: '외향적인 조력자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'CP-I',
          lb: '내향적인 조력자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'CT-E',
          lb: '외향적인 행정가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'CT-I',
          lb: '내향적인 행정가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'LP-E',
          lb: '외향적인 창조자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'LP-I',
          lb: '내향적인 창조자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'LT-E',
          lb: '외향적인 혁신가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'LT-I',
          lb: '내향적인 혁신가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'PC-E',
          lb: '외향적인 후원자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'PC-I',
          lb: '내향적인 후원자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'TC-E',
          lb: '외향적인 분석가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'TC-I',
          lb: '내향적인 분석가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'PL-E',
          lb: '외향적인 열성가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'PL-I',
          lb: '내향적인 열성가',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'TL-E',
          lb: '외향적인 개혁자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        },
        {
          chip: 'TL-I',
          lb: '내향적인 개혁자',
          card: 'my-per-card1.png',
          list: [
            '구체적이고 체계적인 업무를 선호하는 실용주의자에요.',
            '자료와 경험을 토대로 진행되는 일을 선호하며, 현실적으로 필요하거나 유용한 일을 할 때 보람을 느껴요',
            '전확하고 완벽하게 해내야 하는 일에 경쟁력이 있어서 질서나 구조와 같은 체계가 존재할 때 좀 더 편안하게 나의 잠재력을 잘 발휘할 수 있어요',
            '업무를 주도적으로 추진하여 이끄는 리더쉽이 뛰어나요.'
          ]
        }
      ])

      return {
        documentModal,
        dialogPerType,
        tabInit,
        tabItems
      }
    }
  }
</script>
