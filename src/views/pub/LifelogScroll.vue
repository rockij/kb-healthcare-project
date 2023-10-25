<template>
  <!--contents-->
  <div class="contents">
    <v-dialog
      activator
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" dark v-bind="props"> Open Dialog </v-btn>
      </template>

      <v-card>
        <v-toolbar dark color="white" height="auto">
          <v-toolbar-title class="modal-title">몸 상태</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false" class="btn-modal-close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <div class="modal-body">
          <div class="flex-shrink-0 modal-body-container">
            <div class="category-title">증상</div>
            <div class="tabs-simple2 pt-1">
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

            <div class="category-title pt-8">분비물</div>
            <div class="tabs-simple2 pt-1">
              <v-btn
                variant="text"
                class="fs-16"
                v-for="btn in btns2"
                :key="btn.value"
                :aria-selected="selected2.includes(btn)"
                @click="getCondition2(btn)"
                >{{ btn.text }}</v-btn
              >
            </div>

            <div class="category-title pt-8">기분</div>
            <div class="tabs-simple2 pt-1">
              <v-btn
                variant="text"
                class="fs-16"
                v-for="btn in btns3"
                :key="btn.value"
                :aria-selected="selected3.includes(btn)"
                @click="getCondition3(btn)"
                >{{ btn.text }}</v-btn
              >
            </div>
          </div>
        </div>

        <v-card-actions>
          <v-btn
            height="48"
            class="bdr-8 btn-yellow"
            block
            @click="dialog = false"
            >확인</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!--//contents-->
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    props: ['modal'],
    emits: ['update', 'close'],
    setup(props, context) {
      const dialog = ref(false)
      const { emit } = context
      const selected1 = reactive([])
      const selected2 = reactive([])
      const selected3 = reactive([])

      function getCondition1(val) {
        selected1.includes(val)
          ? selected1.splice(selected1.indexOf(val), 1)
          : selected1.push(val)
      }
      function getCondition2(val) {
        selected2.includes(val)
          ? selected2.splice(selected2.indexOf(val), 1)
          : selected2.push(val)
      }
      function getCondition3(val) {
        selected3.includes(val)
          ? selected3.splice(selected3.indexOf(val), 1)
          : selected3.push(val)
      }

      const btns1 = reactive([
        {
          value: 1,
          text: '없음'
        },
        {
          value: 2,
          text: '요통'
        },
        {
          value: 3,
          text: '골반통증'
        },
        {
          value: 4,
          text: '유방통증'
        },
        {
          value: 5,
          text: '복용 안함'
        },
        {
          value: 6,
          text: '복부팽만'
        },
        {
          value: 7,
          text: '피로'
        },
        {
          value: 8,
          text: '불면'
        },
        {
          value: 9,
          text: '폭식'
        },
        {
          value: 10,
          text: '설사'
        },
        {
          value: 11,
          text: '구토'
        },
        {
          value: 12,
          text: '부정출혈'
        }
      ])

      const btns2 = reactive([
        {
          value: 1,
          text: '없음'
        },
        {
          value: 2,
          text: '물같음'
        },
        {
          value: 3,
          text: '크림같음'
        },
        {
          value: 4,
          text: '흰자같음'
        },
        {
          value: 5,
          text: '끈적끈적함'
        },
        {
          value: 6,
          text: '노란냉'
        },
        {
          value: 7,
          text: '연초록/회색냉'
        },
        {
          value: 8,
          text: '건조함'
        }
      ])

      const btns3 = reactive([
        {
          value: 1,
          text: '평온함'
        },
        {
          value: 2,
          text: '즐거움'
        },
        {
          value: 3,
          text: '행복함'
        },
        {
          value: 4,
          text: '슬픔'
        },
        {
          value: 5,
          text: '열받음'
        },
        {
          value: 6,
          text: '짜증남'
        },
        {
          value: 7,
          text: '우울함'
        },
        {
          value: 8,
          text: '속상함'
        }
      ])

      function onClicked() {
        emit('update', selected1, selected2, selected3)
      }

      return {
        dialog,
        btns1,
        btns2,
        btns3,
        getCondition1,
        getCondition2,
        getCondition3,
        selected1,
        selected2,
        selected3,
        onClicked
      }
    }
  }
</script>
