<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom body-direct"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">체성분</v-toolbar-title>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body pb-8">
        <div class="flex-shrink-0 modal-body-container">
          <div class="bar-date">2023.08.03(월) 11:00</div>

          <!-- 체중 -->
          <div class="bar-top pt-7">
            <Tooltip
              class="body-tooltip"
              btnText="체중"
              text="일반적인 신체의 무게로 발육이나 영양상태, 건강의 지표가 됩니다."
            >
            </Tooltip>

            <v-spacer></v-spacer>
            <div class="bar-data">60kg</div>
          </div>
          <div class="bar-graph pt-7">
            <div class="bar bar-1"></div>
            <div class="bar bar-2 active"></div>
            <div class="bar bar-3"></div>
            <div class="bar bar-4"></div>
            <div class="bar bar-5"></div>
          </div>
          <div class="bar-graph pt-2">
            <span class="bar bar-text">저체중</span>
            <span class="bar bar-text">정상</span>
            <span class="bar bar-text">비만전 단계</span>
            <span class="bar bar-text">비만</span>
            <span class="bar bar-text">고도비만</span>
          </div>
          <div class="pt-6">표준 체중입니다. 현재 상태를 계속 유지하세요</div>

          <!-- BMI -->
          <div class="section-page mt-8">
            <div class="bar-top">
              <Tooltip
                class="body-tooltip"
                btnText="BMI"
                text="BMI(신체질량지수)는 체중과 신장에 대한 체지방 축적을 반영한 지표입니다. 비만 정도를 판정 할 경우 중요한 지표로 사용합니다."
              >
              </Tooltip>
              <v-spacer></v-spacer>
              <div class="bar-data">20kg/m2</div>
            </div>
            <div class="bar-graph pt-7">
              <div class="bar bar-1"></div>
              <div class="bar bar-2 active"></div>
              <div class="bar bar-3"></div>
              <div class="bar bar-4"></div>
              <div class="bar bar-5"></div>
            </div>
            <div class="bar-graph pt-2">
              <span class="bar bar-text">저체중</span>
              <span class="bar bar-text">정상</span>
              <span class="bar bar-text">비만전 단계</span>
              <span class="bar bar-text">비만</span>
              <span class="bar bar-text">고도비만</span>
            </div>
            <div class="pt-6 bar-desc">
              BMI 지표지수 입니다. 현재 상태를 계속 유지하시기 바랍니다.
            </div>
          </div>

          <!-- 기초대사량 -->
          <div class="section-page">
            <div class="bar-top">
              <Tooltip
                class="body-tooltip"
                btnText="기초대사량"
                text="인체의 기관에 최소한으로 필요한 에너지로 사람이 안정된 휴식을 취하고 있을때 필요한 에너지 입니다. 기초대사량이 높으면 같은 체중이라도 쉽게 체중 감량이 가능합니다."
              >
              </Tooltip>
              <v-spacer></v-spacer>
              <div class="bar-data">200kcal</div>
            </div>
            <div class="bar-graph pt-7">
              <div class="bar bar-5"></div>
              <div class="bar bar-2"></div>
            </div>
            <div class="bar-graph pt-2">
              <span class="bar bar-text">낮음</span>
              <span class="bar bar-text">높음</span>
            </div>
            <div class="pt-6 bar-desc">
              BMI 지표지수 입니다. 현재 상태를 계속 유지하시기 바랍니다.
            </div>
          </div>

          <!-- 허리둘레 -->
          <div class="section-page">
            <div class="bar-top">
              <Tooltip
                class="body-tooltip"
                btnText="허리둘레"
                text="근육이 많은 사람은 체질량 기준으로 비만일 수 있지만, 건강상에서는 문제가 없을 수 있으므로 정확도에 대한 단점을 보완해주며 복부의 지방을 반영해주는 지표입니다."
              >
              </Tooltip>
              <v-spacer></v-spacer>
              <div class="bar-data">102cm</div>
            </div>
            <div class="bar-graph pt-7">
              <div class="bar bar-2"></div>
              <div class="bar bar-5 active"></div>
            </div>
            <div class="bar-graph pt-2">
              <span class="bar bar-text">정상</span>
              <span class="bar bar-text">복부비만</span>
            </div>
            <div class="pt-6 bar-desc">
              WHO에서는 허리둘레 측정치를 이용하여 복부미만을 분류하고 있습니다.
              허리둘레는 남성 90cm(약 35inch)이상, 여성 80cm(약 31inch)이상인
              경우에 건강 위험을 나타낼 수 있습니다.
            </div>
          </div>

          <!-- 체지방량 -->
          <div class="section-page">
            <div class="bar-top">
              <Tooltip
                class="body-tooltip"
                btnText="체지방량"
                text="신체성분 중 지방조직이 차지하는 비율 지방율을 측정하는 것은 단순히 체중만 측정하는 것 보다 비만의 정도를 더 잘 알 수 있습니다."
              >
              </Tooltip>
              <v-spacer></v-spacer>
              <div class="bar-data">-%</div>
            </div>
            <div class="bar-graph pt-7">
              <div class="bar bar-1"></div>
              <div class="bar bar-2"></div>
              <div class="bar bar-3"></div>
              <div class="bar bar-5"></div>
            </div>
            <div class="bar-graph pt-2">
              <span class="bar bar-text">운동선수급</span>
              <span class="bar bar-text">낮음</span>
              <span class="bar bar-text">표준</span>
              <span class="bar bar-text">높음</span>
            </div>
          </div>

          <!-- 골격근량 -->
          <div class="section-page">
            <div class="bar-top">
              <Tooltip
                class="body-tooltip"
                btnText="골격근량"
                text="뼈에 붙는 근육으로 골격근의 감소는 관절의 하중부담을 늘리고 연골의 퇴행 또는 뼈의 변형을 가속화 시키기 때문에 퇴행성 관절염, 근감소증 등의 원인이 될 수 있습니다."
              >
              </Tooltip>
              <v-spacer></v-spacer>
              <div class="bar-data">-%</div>
            </div>
            <div class="bar-graph pt-7">
              <div class="bar bar-1"></div>
              <div class="bar bar-2 active"></div>
              <div class="bar bar-5"></div>
            </div>
            <div class="bar-graph pt-2">
              <span class="bar bar-text">낮음</span>
              <span class="bar bar-text">표준</span>
              <span class="bar bar-text">높음</span>
            </div>
            <div class="mt-6 bar-desc">
              키를 바탕으로 한 평균수치 입니다. 기기를 연동하시면 더욱 정확한
              정보를 얻을 수 있습니다.
            </div>
          </div>

          <!-- 내장지방지수 -->
          <div class="section-page">
            <div class="bar-top">
              <Tooltip
                class="body-tooltip"
                btnText="내장지방지수"
                text="내장 지방은 내장 여러 주변 복강내에 저장된 체지방 입니다. 수치가 높지 않도록 유지해주세요."
              >
              </Tooltip>
              <v-spacer></v-spacer>
              <div class="bar-data">-level</div>
            </div>
            <div class="bar-graph pt-7">
              <div class="bar bar-5"></div>
              <div class="bar bar-2"></div>
            </div>
            <div class="bar-graph pt-2">
              <span class="bar bar-text">높음</span>
              <span class="bar bar-text">표준</span>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56" class="btn-summit">확인</v-btn>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref } from 'vue'
  import Tooltip from '@/components/Tooltip.vue'

  export default {
    components: { Tooltip },
    props: ['modal'],
    emits: ['update', 'close'],
    setup() {
      const dialog = false
      const name = ref('2023.06.21')
      const name2 = ref('오전 9시 30분')

      return {
        dialog,
        name,
        name2,
        Tooltip
      }
    }
  }
</script>
