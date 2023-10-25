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
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <!-- <div class="tabs-simple2">
            <v-btn
              variant="text"
              class="fs-16"
              v-for="btn in btns"
              :key="btn.value"
              :aria-selected="selBtn === btn"
              @click="selBtn = btn"
              >{{ btn.text }}</v-btn
            >
          </div> -->

          <v-text-field
            class="input-basic textfield-default suffix"
            :class="name4 ? 'hasData' : ''"
            label="1회 섭취 단위"
            required
            persistent-placeholder
            variant="outlined"
            placeholder="250"
            v-model="name4"
            clearable
          >
            <template v-slot:append-inner>ml</template>
          </v-text-field>

          <v-card
            variant="flat"
            rounded="xl"
            class="mt-2 card-dot"
            color="#f8f8f8"
          >
            <v-card-text class="cont">
              <ul class="list-circle type-3">
                <li>종이컵 1컵이 250ml 정도에요</li>
                <li>500ml 이상 섭취하지 않는 것이 좋아요</li>
              </ul>
            </v-card-text>
          </v-card>
        </div>
      </div>

      <v-card-actions>
        <v-btn height="48" class="bdr-8 btn-yellow" block @click="onClicked"
          >저장하기</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, reactive, computed } from 'vue'

  export default {
    props: ['modal'],
    emits: ['update', 'close'],
    setup(props, context) {
      const { emit } = context
      const selBtn = ref({})
      const name4 = ref('')

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

      function onClicked() {
        emit('update', selBtn.value.text, name4.value)
        console.log('selBtn', selBtn.value.text)
        console.log('name4', name4.value)
      }

      return {
        listDesc,
        name4,
        dialog,
        selBtn,
        btns,
        onClicked
      }
    }
  }
</script>
