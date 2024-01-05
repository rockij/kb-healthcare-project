<template>
    <div class="contents">
        <div class="title-area">
            <p class="subTit-01">성격유형과 특징을<br>      알려드려요</p>
            <p class="desc pt-4">3가지 성격 판단기준(내적 판단과정, 행동양식, 대인관계)을 기반으로 총 16가지 성격유형으로 구분돼요.</p>
            <div class="box-rounded-fill mt-4">각 성격 판단기준은 개인마다 선호하는 경향이 다르다는 것을 의미해요</div>
        </div>
        <div class="per-type-info">
            <div class="per-type-info-item">
                <span class="lb">내적 판단과정</span>
                <div class="type">
                    <div class="abc c-t">T</div>
                    <strong>과제지향</strong>
                    <span>과제 중심적인 결정을 내림</span>
                </div>
                <div class="type">
                    <div class="abc c-p">P</div>
                    <strong>관계지향</strong>
                    <span>관계중심적인 결정을 내림</span>
                </div>
            </div>
            <div class="per-type-info-item">
                <span class="lb">행동양식</span>
                <div class="type">
                    <div class="abc c-c">C</div>
                    <strong>안정지향</strong>
                    <span>과제 중심적인 결정을 내림</span>
                </div>
                <div class="type">
                    <div class="abc c-l">L</div>
                    <strong>혁신지향</strong>
                    <span>관계중심적인 결정을 내림</span>
                </div>
            </div>
            <div class="per-type-info-item">
                <span class="lb">대인관계</span>
                <div class="type">
                    <div class="abc c-e">E</div>
                    <strong>외향</strong>
                    <span>보다 사교적, 자기 표현적</span>
                </div>
                <div class="type">
                    <div class="abc c-i">I</div>
                    <strong>내향</strong>
                    <span>보다 독립적, 수용적인 태도</span>
                </div>
            </div>
        </div>
        <div class="btn-bottom">
            <div class="btn-area d-flex">
                <v-btn variant="text" height="56" class="btn-summit">모든 성격유형 보기</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    //const dialog = ref(true)

    return {}
  }
}
</script>

<style lang="scss" scoped></style>
