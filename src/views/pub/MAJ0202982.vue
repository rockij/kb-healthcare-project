<template>
  <v-dialog
    activator
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">수분 등록</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div>
            <div class="numcount-area mt-4 px-3">
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
            <div class="relative mt-7 water-tooltip type-2">
              <Tooltip
                class=""
                btnText="나의 권장 수분량 1,800ml"
                text="일반적으로 체중 1kg당 30ml의 수분을 섭취해야 해요. 날씨가 덥거나, 운동을 많이 하거나 특별한 날에는 이것보다 조금 더 마셔주세요"
              >
              </Tooltip>
            </div>
            <div class="text-center my-7">
              <v-btn
                variant="flat"
                height="32"
                color="#F2F4F6"
                class="text-blue fs-13"
                @click="modal = true"
                aria-selected="true"
              >
                1회 단위 : {{ name4 }}ml
              </v-btn>
            </div>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block @click="onClicked"
          >저장하기</v-btn
        >
      </v-card-actions>
    </v-card>
    <MAJ0202948 v-model="modal" @update="addText" @close="modal = false" />
  </v-dialog>
</template>

<script>
  import MAJ0202948 from './MAJ0202948.vue'
  import { ref, reactive, computed } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    props: ['modal3'],
    emits: ['update', 'close'],
    components: {
      Tooltip,
      MAJ0202948
    },
    setup(props, context) {
      const modal = ref(false)
      const numcount = ref(0)
      const { emit } = context
      const selBtn = ref({})
      const name4 = ref('')
      const text1 = ref()

      const listDesc = reactive([
        {
          value: 1,
          text: '종이컵 1컵이 250ml 정도에요'
        },
        {
          value: 2,
          text: '500ml 이상 섭취하지 않는 것이 좋아요'
        }
      ])
      const btns = reactive([
        {
          value: 1,
          text: '150'
        },
        {
          value: 2,
          text: '200'
        }
      ])

      const dialog = computed({
        // getter
        get(val) {
          return val
        },
        // setter
        set(newVal) {
          newVal = val
        }
      })
      function addText(val1, val2) {
        text1.value = val1
        name4.value = val2
        modal.value = false
      }
      function onClicked() {
        emit('update', selBtn.value.text, name4.value)
        console.log('selBtn', selBtn.value.text)
        console.log('name4', name4.value)
      }

      return {
        modal,
        numcount,
        listDesc,
        name4,
        dialog,
        selBtn,
        btns,
        onClicked,
        addText
      }
    }
  }
</script>
