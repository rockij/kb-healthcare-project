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
                            <dt>성격유형검사란?</dt>
                            <dd>성격 특성이 내 생활에 미치는 영향을 알아볼 수 있어요. 직업과 대인관계에 영향을 많이 주는 5가지 특성을 자세히 분석해서 알려드려요.</dd><!-- 20231226 : 오타수정 -->
                            <dt>검사대상 및 문항</dt>
                            <dd>어른이라면 누구나 할 수 있어요.<br>
성격 유형을 판단하는 27개의 문항으로 구성돼요.<br>
시간은 약 5분 정도 걸려요.</dd>
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
