<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    class="modal-full"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title"
          >1:1 문의 프로그램 선택</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="contents">
          <div class="title-area">
            <p class="subTit-01">
              이용 중이거나 문의가 필요한 프로그램을 선택해 주세요
            </p>
          </div>
          <div class="category-area">
            <ul class="list">
              <li class="item" v-for="item in result" :key="item">
                <v-btn variant="text" block @click="onClicked">
                  {{ item.name }}
                </v-btn>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import router from '@/router'
  import { ref, computed } from 'vue'

  export default {
    props: ['modal', 'result'],
    emits: ['update', 'close'],
    setup(props, context) {
      const { emit } = context
      const dialog = computed({
        get(val) {
          return val
        },
        set(newVal) {
          newVal = val
        }
      })
      const result = ref([
        {
          path: '/MAJ0104620',
          name: '고객센터 서브메인'
        },
        {
          path: '/MAJ0104630',
          name: 'FAQ 목록/FAQ 검색결과'
        },
        {
          path: '/MAJ0104631',
          name: 'FAQ 상세'
        },
        {
          path: '/MAJ0104650',
          name: '1:1 문의 목록'
        },
        {
          path: '/MAJ0104660',
          name: '1:1 문의 상세'
        },
        {
          path: '/MAJ0104670',
          name: '1:1 문의 문의 유형 선택'
        },
        {
          path: '/MAJ0104681',
          name: '1:1 문의 등록'
        }
      ])
      function onClicked() {
        emit('update')
      }
      return {
        result,
        dialog,
        onClicked
      }
    }
  }
</script>
