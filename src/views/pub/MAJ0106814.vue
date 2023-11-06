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
            <v-toolbar-title class="modal-title">검사안내</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false" class="btn-modal-close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            </v-toolbar>

            <div class="modal-body">
                <div class="flex-shrink-0 modal-body-container">
                    <div class="ui-guide-list">
                        <dl>
                            <dt>성격특질검사란?</dt>
                            <dd>내가 가진 성격 특질을 알아볼 수 있어요.<br>
행동조절, 정서적인 조절, 대인과의 관계 등 다양한 사회관계 개선에 효율적으로 적용할 수 있어요.</dd>
                            <dt>이렇게 알려드려요</dt>
                            <dd>건강한 성격 특질은 ‘해’ 아이콘으로, 보완이 필요한 부분은 ‘구름’ 아이콘으로 알려드려요.</dd>
                            <dt>검사대상 및 문항</dt>
                            <dd>전 연령 누구나 할 수 있어요.<br>
총 5단계 142문항으로 구성돼요.<br>
시간은 약 20분 정도 걸려요.</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <v-card-actions>
                <v-btn height="48px" @click="dialog = false" class="bdr-8 btn-yellow" block>확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)

      return { dialog }
    }
  }
</script>

<style lang="scss" scoped></style>
