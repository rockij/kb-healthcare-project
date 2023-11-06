<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-full"
    @click:outside="$emit('close')"
  >
    <v-card>
      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container pt-3">
          <!-- 맥주 -->
          <h4 class="fs-18 font-weight-bold">맥주</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal = true"
              class="numcount-select ws-145 mr-2"
              >{{ modalListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="beerList"
              :title="modalTitle"
              v-model="modal"
              @close="modal = false"
              @update="modalCategory"
            />
            <CountList />
          </div>
          <!-- //맥주 -->

          <!-- 소주 -->
          <h4 class="fs-18 font-weight-bold">소주</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal2 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal2ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="sojuList"
              :title="modalTitle"
              v-model="modal2"
              @close="modal2 = false"
              @update="modal2Category"
            />
            <CountList />
          </div>
          <!-- //소주 -->

          <!-- 청주 -->
          <h4 class="fs-18 font-weight-bold">청주</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal3 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal3ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="cheongjuList"
              :title="modalTitle"
              v-model="modal3"
              @close="modal3 = false"
              @update="modal3Category"
            />
            <CountList />
          </div>
          <!-- //청주 -->

          <!-- 양주 -->
          <h4 class="fs-18 font-weight-bold">양주</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal6 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal6ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="liquorList"
              :title="modalTitle"
              v-model="modal6"
              @close="modal6 = false"
              @update="modal6Category"
            />
            <CountList />
          </div>
          <!-- //양주 -->

          <!-- 막걸리 -->
          <h4 class="fs-18 font-weight-bold">막걸리</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal4 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal4ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="makgeolliList"
              :title="modalTitle"
              v-model="modal4"
              @close="modal4 = false"
              @update="modal4Category"
            />
            <CountList />
          </div>
          <!-- //막걸리 -->

          <!-- 와인 -->
          <h4 class="fs-18 font-weight-bold">와인</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal5 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal5ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="wineList"
              :title="modalTitle"
              v-model="modal5"
              @close="modal5 = false"
              @update="modal5Category"
            />
            <CountList />
          </div>
          <!-- //와인 -->

          <!-- 샴페인 -->
          <h4 class="fs-18 font-weight-bold">샴페인</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal7 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal7ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="champagneList"
              :title="modalTitle"
              v-model="modal7"
              @close="modal7 = false"
              @update="modal7Category"
            />
            <CountList />
          </div>
          <!-- //샴페인 -->

          <!-- 양주 -->
          <h4 class="fs-18 font-weight-bold">고량주</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal9 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal9ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="liquorList"
              :title="modalTitle"
              v-model="modal9"
              @close="modal9 = false"
              @update="modal9Category"
            />
            <CountList />
          </div>
          <!-- //양주 -->

          <!-- 기타 -->
          <h4 class="fs-18 font-weight-bold">기타</h4>
          <div class="d-flex align-center mt-1 mb-5">
            <v-btn
              variant="text"
              @click="modal8 = true"
              class="numcount-select ws-145 mr-2"
              >{{ modal8ListBtn }}</v-btn
            >
            <DialogSelectList
              :lists="etcList"
              :title="modalTitle"
              v-model="modal8"
              @close="modal8 = false"
              @update="modal8Category"
            />
            <CountList />
          </div>
          <!-- //기타 -->

          <div class="btn-bottom">
            <div class="btn-area d-flex">
              <v-btn
                variant="text"
                height="48"
                class="bdr-8 btn-summit"
                @click="$emit('close')"
                >수정하기</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
  import CountList from '@/views/pub/MAJ0202986-1.vue'
  import DialogSelectList from '@/components/DialogSelectList.vue'
  import { ref } from 'vue'
  export default {
    components: {
      CountList,
      DialogSelectList
    },
    emits: ['close', 'update'],
    setup(props, context) {
      const { emit } = context
      const dialog = ref(false)

      const lists = ref([
        {
          value: 1,
          text: '맥주'
        },
        {
          value: 2,
          text: '소주'
        },
        {
          value: 3,
          text: '청주'
        },
        {
          value: 6,
          text: '양주'
        },
        {
          value: 4,
          text: '막걸리'
        },
        {
          value: 5,
          text: '와인'
        },
        {
          value: 7,
          text: '샴페인'
        },
        {
          value: 8,
          text: '고량주'
        },
        {
          value: 0,
          text: '기타'
        }
      ])

      //맥주
      const beerList = ref([
        {
          value: 0,
          text: '잔(500ml)'
        },
        {
          value: 1,
          text: '캔(330ml)'
        },
        {
          value: 2,
          text: '병(640ml)'
        }
      ])

      //소주
      const sojuList = ref([
        {
          value: 0,
          text: '잔(50ml)'
        },
        {
          value: 1,
          text: '병(360ml)'
        }
      ])

      //청주
      const cheongjuList = ref([
        {
          value: 0,
          text: '잔(50ml)'
        },
        {
          value: 1,
          text: '병(300ml)'
        }
      ])

      //양주
      const liquorList = ref([
        {
          value: 0,
          text: '잔(50ml)'
        },
        {
          value: 1,
          text: '병(700ml)'
        }
      ])

      //막걸리
      const makgeolliList = ref([
        {
          value: 0,
          text: '잔(200ml)'
        },
        {
          value: 1,
          text: '병(935ml)'
        }
      ])

      //와인
      const wineList = ref([
        {
          value: 0,
          text: '잔(125ml)'
        },
        {
          value: 1,
          text: '병(750ml)'
        }
      ])

      //샴페인
      const champagneList = ref([
        {
          value: 0,
          text: '잔(150ml)'
        },
        {
          value: 1,
          text: '병(750ml)'
        }
      ])

      //고량주
      const goliangliquorList = ref([
        {
          value: 0,
          text: '잔(50ml)'
        },
        {
          value: 1,
          text: '병(250ml)'
        }
      ])

      //기타
      const etcList = ref([
        {
          value: 0,
          text: '잔(250ml)'
        }
      ])

      const modalTitle = ref('음주')

      const modal = ref(false)
      const modalListBtn = ref('잔')
      function modalCategory(val) {
        modal.value = false
        return (modalListBtn.value = val.text)
      }

      const modal2 = ref(false)
      const modal2ListBtn = ref('잔')
      function modal2Category(val) {
        modal2.value = false
        return (modal2ListBtn.value = val.text)
      }

      const modal3 = ref(false)
      const modal3ListBtn = ref('잔')
      function modal3Category(val) {
        modal3.value = false
        return (modal3ListBtn.value = val.text)
      }

      const modal4 = ref(false)
      const modal4ListBtn = ref('잔')
      function modal4Category(val) {
        modal4.value = false
        return (modal4ListBtn.value = val.text)
      }

      const modal5 = ref(false)
      const modal5ListBtn = ref('잔')
      function modal5Category(val) {
        modal5.value = false
        return (modal5ListBtn.value = val.text)
      }

      const modal6 = ref(false)
      const modal6ListBtn = ref('잔')
      function modal6Category(val) {
        modal6.value = false
        return (modal6ListBtn.value = val.text)
      }

      const modal7 = ref(false)
      const modal7ListBtn = ref('잔')
      function modal7Category(val) {
        modal7.value = false
        return (modal7ListBtn.value = val.text)
      }

      const modal8 = ref(false)
      const modal8ListBtn = ref('잔')
      function modal8Category(val) {
        modal8.value = false
        return (modal8ListBtn.value = val.text)
      }

      const modal9 = ref(false)
      const modal9ListBtn = ref('잔')
      function modal9Category(val) {
        modal9.value = false
        return (modal9ListBtn.value = val.text)
      }

      return {
        dialog,

        lists,

        beerList,
        sojuList,
        cheongjuList,
        makgeolliList,
        wineList,
        liquorList,
        champagneList,
        etcList,
        goliangliquorList,

        modalTitle,
        modal,
        modalListBtn,
        modalCategory,
        modal2,
        modal2ListBtn,
        modal2Category,
        modal3,
        modal3ListBtn,
        modal3Category,
        modal4,
        modal4ListBtn,
        modal4Category,
        modal5,
        modal5ListBtn,
        modal5Category,
        modal6,
        modal6ListBtn,
        modal6Category,
        modal7,
        modal7ListBtn,
        modal7Category,
        modal8,
        modal8ListBtn,
        modal8Category,
        modal9,
        modal9ListBtn,
        modal9Category
      }
    }
  }
</script>
