<template>
  <div class="contents">
    <div class="title-area">
      <p class="subTit-01">증상을 알려주세요</p>
    </div>
    <div class="chatting-content mt-7">
      <div class="logo-dot"></div>
      <div class="loading-dot"><span class="dot"></span></div>
      <div class="sentence">김매디님, 안녕하세요</div>
      <div class="sentence">
        <strong class="title">2차부위에 증상이 나타나고 있나요?</strong>
        지금부터 드리는 몇가지 질문을 읽으시고 해당되는 답을 체크해 주세요.
        질문이 끝나면 어떤 조치가 필요한지 알려드립니다.
      </div>
      <div class="sentence">2차부위에 어떤 증상이 있는지 선택하세요.</div>
      <div class="qna-area">
        <div role="tablit" class="tabs-simple2">
          <v-btn
            variant="text"
            role="tab"
            :aria-selected="qnaBtn === btn.id ? 'true' : 'false'"
            v-for="btn in qnaBtns"
            :key="btn.id"
            @click="qnaSelected(btn.id)"
            >{{ btn.q }}</v-btn
          >
        </div>
        <div class="ansbox">
          <p
            class="sentence"
            v-for="btn in qnaBtns"
            :class="qnaBtn === btn.id ? 'on' : ''"
            :key="btn.id"
            @click="qnaSelected(btn.id)"
          >
            {{ btn.a }}
          </p>
        </div>
      </div>
      <div class="logo-dot"></div>
      <div class="sentence">마지막 질문입니다.</div>
      <div class="sentence">마지막 질문은 다른 형식으로 노출됩니다</div>
      <div class="qna-area">
        <div class="tabs-simple2">
          <v-btn
            variant="text"
            :aria-selected="qna2Btn === btn.id ? 'true' : 'false'"
            v-for="btn in qna2Btns"
            :key="btn.id"
            @click="qna2Selected(btn.id)"
            >{{ btn.text }}</v-btn
          >
        </div>
      </div>

      <div class="logo-dot"></div>
      <div class="sentence2 font-weight-bold">
        다음과 같은 증상이 함께 있나요?
      </div>
      <div class="sentence2 pt-5 pb-5">
        <v-checkbox
          v-for="item in checkTemplet"
          :key="item.id"
          class="checked-agree"
        >
          <template v-slot:label v-if="item.html"
            ><div v-html="item.html"></div
          ></template>
          <template v-slot:label v-else>{{ item.text }}</template>
        </v-checkbox>
        <v-btn variant="text" class="rounded-lg fs-15 mt-5 btn-skip"
          >선택완료</v-btn
        >
      </div>

      <div class="logo-dot"></div>
      <div class="sentence2 font-weight-bold">
        다음과 같은 증상이 함께 있나요?
      </div>
      <div class="sentence2 pt-5 pb-5">
        <v-radio-group>
          <v-radio
            v-for="item in checkTemplet2"
            :key="item.id"
            :label="`Radio-${item.id}`"
            :value="item.id"
            class="radio-basic"
          >
            <template v-slot:label v-if="item.html"
              ><div v-html="item.html"></div
            ></template>
            <template v-slot:label v-else>{{ item.text }}</template>
          </v-radio>
        </v-radio-group>
      </div>
      <div class="ansbox">
        <p class="sentence on">위 질문에 대한 답변입니다</p>
      </div>

      <div class="logo-dot"></div>
      <div class="sentence2 font-weight-bold">위치가 어디인가요?</div>
      <div class="sentence2 pt-5 pb-5">
        <v-radio-group>
          <v-radio
            v-for="item in checkTemplet3"
            :key="item.id"
            :label="`Radio-${item.id}`"
            :value="item.id"
            class="radio-basic"
          >
            <template v-slot:label>
              {{ item.text }}
              <div class="check-imgarea" :class="item.text ? 'mt-2' : ''">
                <img
                  v-if="item.img"
                  :src="`/assets/images/${item.img}`"
                  alt=""
                />
                <img
                  v-if="item.img2"
                  :src="`/assets/images/${item.img2}`"
                  alt=""
                />
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </div>

      <div class="logo-dot"></div>
      <div class="sentence2 font-weight-bold">
        아래와 같이 앉아서 5분간 코를 꽉 잡고 난 뒤에도 코피가 계속 나나요?
      </div>
      <div class="sentence2 pt-5 pb-5">
        <v-img
          src="/assets/images/dummy-thumb2.jpg"
          :width="'100%'"
          :height="'auto'"
          cover
          class="rounded-lg"
          alt=""
        />
      </div>
      <div class="tabs-simple2">
        <v-btn
          variant="text"
          :aria-selected="qna2Btn === btn.id ? 'true' : 'false'"
          v-for="btn in qna2Btns"
          :key="btn.id"
          @click="qna2Selected(btn.id)"
          >{{ btn.text }}</v-btn
        >
      </div>
    </div>
    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <v-btn variant="text" height="56px" class="btn-summit">결과보기</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      document.body.style.backgroundColor = '#E6ECF5'

      const qnaBtn = ref()
      const qnaBtns = ref([
        {
          id: 1,
          q: '콧물/코막힘',
          a: '코막힘 증상이 있어요'
        },
        {
          id: 2,
          q: '코피',
          a: '코피 증상이 있어요'
        }
      ])
      function qnaSelected(val) {
        qnaBtn.value = val
      }
      const qna2Btn = ref()
      const qna2Btns = ref([
        {
          id: 1,
          text: '네'
        },
        {
          id: 2,
          text: '아니오'
        }
      ])
      function qna2Selected(val) {
        qna2Btn.value = val
      }

      const checkTemplet = ref([
        {
          id: 1,
          text: '38도 이상의 발열'
        },
        {
          id: 2,
          text: '아랫배 복통 또는 골반통'
        },
        {
          id: 3,
          text: '오심(메스꺼움), 구토'
        },
        {
          id: 4,
          text: '해당되는 것이 없음'
        }
      ])
      const checkTemplet2 = ref([
        {
          id: 1,
          text: '38도 이상의 발열'
        },
        {
          id: 2,
          text: '아랫배 복통 또는 골반통'
        },
        {
          id: 3,
          html: '탈수증상<div class="check-subtext"><strong>[탈수여부 확인]</strong><br/>가장 쉽게 알수 있는 탈수 증상은 혀밑에 침이 고이는지 보는 것입니다. 침이 거의 고여있지 않다면 꽤 심한 탈수입니다. 그 외에도 입술이 바짝 마르거나, 눈이 움푹 들어가거나, 소변이 잘 나오지 않거나 진한 색이라면 탈수를 생각할 수 있습니다.</div>'
        },
        {
          id: 4,
          text: '해당되는 것이 없음'
        }
      ])
      const checkTemplet3 = ref([
        {
          id: 1,
          text: '눈꺼풀 테두리 주변부',
          img: 'dummy-thumb.jpg',
          img2: 'dummy-thumb2.jpg'
        },
        {
          id: 2,
          text: '약간 눈을 뒤집어야 보임',
          img: 'dummy-thumb4.jpg'
        },
        {
          id: 3,
          text: '눈 주변에 볼록하게 튀어나와 있음'
        }
      ])
      return {
        qnaBtn,
        qnaBtns,
        qna2Btn,
        qna2Btns,
        qnaSelected,
        qna2Selected,
        checkTemplet,
        checkTemplet2,
        checkTemplet3
      }
    },
    beforeUnmount() {
      document.body.style.backgroundColor = ''
    }
  }
</script>
