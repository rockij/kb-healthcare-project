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
                            <!-- 20231222 : 수정 시작 -->
                            <dd>성격특질은 이모지로 쉽게 알려드려요.
                                <div class="emoji-guide">
                                    <span class="score-icon good">장점이예요</span>
                                    <span class="score-icon bad">보완이 필요해요</span>
                                </div>
                            </dd>
                            <!-- 20231222 : 수정 끝 -->
                            <dt>검사대상 및 문항</dt>
                            <dd>전 연령 누구나 할 수 있어요.<br>
총 5단계 142문항으로 구성돼요.<br>
시간은 약 20분 정도 걸려요.</dd>
                        </dl>
                    </div>
                    <!-- 20231222 : 추가 시작 -->
                    <div class="checkbox-area mt-6">
                        <v-checkbox
                            v-model="checkedItem"
                            :value="item.id"
                            v-for="item in agreeItems"
                            :key="item.id"
                            class="checked-agree"
                        >
                            <template v-slot:label
                            ><span class="fs-18 font-weight-bold">{{ item.text }}</span>
                            <v-spacer></v-spacer>
                            <v-btn variant="text" class="px-0"
                                ><span class="fs-14 color-ccc">보기</span></v-btn
                            >
                            </template>
                        </v-checkbox>
                    </div>
                    <!-- 20231222 : 추가 끝 -->
                </div>
            </div>

            <v-card-actions>
                <v-btn height="48px" @click="dialog = false" class="bdr-8 btn-yellow" block>시작하기</v-btn><!-- 20231222 : 수정 -->
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)

      // 20231222 : 추가
      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        }
      ])

      return { dialog, agreeItems }
    }
  }
</script>

<style lang="scss" scoped></style>
