<template>
    <div class="contents">
        <div class="per-test-result-head">
            <div class="box">
                <div class="my-per-card">
                    <div class="card-img">
                        <v-img :src="`/src/assets/images/` + item.card"></v-img>
                    </div>
                    <span class="tag-c">{{ item.tag }}</span>
                    <span class="my-per-txt">{{ item.myPer }}</span>
                    <div class="ui-chips">
                        <span class="chip"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-page">
        </div>
        <div class="section-page">
            <div class="per-link-share">
                <v-btn variant="text" class="btn-link-copy">성격특질검사<br>링크 복사<span>복사하기</span></v-btn>
                <v-btn variant="text" class="btn-sns-share">성격특질검사<br>공유하기<span>공유하기</span></v-btn>
            </div>
        </div>
        <div class="per-test-link">
            <p>보다 다양한 검사로<br>꼼꼼하게 본인을 알아가 보세요</p>
            <ul class="per-test-link-list">
                <li>
                    <v-btn variant="text" class="test-link1">남이 보는<br>내 모습</v-btn>
                </li>
                <li>
                    <v-btn variant="text" class="test-link2">마음건강<br>검사</v-btn>
                </li>
                <li>
                    <v-btn variant="text" class="test-link3">심리상태<br>검사</v-btn>
                </li>
            </ul>
        </div>
        <div class="btn-bottom">
            <div class="btn-area d-flex">
                <v-btn variant="text" height="56" class="btn-summit">다시 검사하기</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
export default {
    setup() {
        //const documentModal = ref(false)

        onMounted(() => {
        });

        return {
            //documentModal
        }
    }
  }
</script>

<style lang="scss" scoped></style>
