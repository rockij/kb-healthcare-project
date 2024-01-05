<template>
    <div class="contents">
        <h1 class="mt-8">수면입력-건강메인</h1>
        <div class="mt-4" style="position: relative;">
            <ui-sleep-range
                :sleepOptions = sleepOptionList2
                :isMain = false
            />
        </div>
        <h1 class="mt-8">수면입력</h1>
        <div class="mt-4" style="position: relative;">
            <ui-sleep-range
                @timeState = 'getTimeEvt'
                :sleepOptions = sleepOptionList
            />
        </div>
        <h1 class="mt-8">혈압(버블)</h1>
        <div class="mt-4" style="position: relative;">
            <div class="ui-bubble-wrap">
                <ui-bubble-chart :chartData = "chartData" />
            </div>
        </div>
        <h1 class="mt-8">운동</h1>
        <div class="mt-4" style="position: relative;">
            <life-log-chart
                radial
                exer
                :weekCal="1532"
                :size="204" 
                stroke="#3F86F1"
                iconBg="#2056A8"
                color="#222222" 
                :border="28" 
                :per="80"
                :numbering="1300"
                :endImg="'icon-radial-exer.svg'"
            />
            <!--
                radial - radial 차트
                exer - 운동
                :weekCal="1532" - 1주일 칼로리
                :size="204" - 차트 사이즈
                stroke="#3F86F1" - 차트 컬러
                iconBg="#FFB800" - 아이콘 배경컬러
                color="#3F86F1" - 수치 컬러
                :border="20" - 차트 두께
                :per="80" - 수치값
                :numbering="300" - 오늘 칼로리
                :endImg="'icon-radial-exer.svg'" - 차트 끝 이미지
            -->
        </div>
        <h1 class="mt-8">걸음</h1>
        <div class="mt-4" style="position: relative;">
            <life-log-chart
                radial
                walk
                :size="204" 
                stroke="#FFD633"
                iconBg="#FFB800"
                color="#222222"
                :border="28" 
                :per="80"
                :numbering="10000"
                :endImg="'icon-radial-walk.svg'"
            />
            <!--
                radial - radial 차트
                걸음 - 수면 차트
                :size="204" - 차트 사이즈
                stroke="#FFD633" - 차트 컬러
                iconBg="#FFB800" - 아이콘 배경컬러
                color="#FFBC00" - 수치 컬러
                :border="20" - 차트 두께
                :per="80" - 수치값
                :numbering="10000 " - 목표걸음
                :endImg="'icon-radial-walk.svg'" - 차트 끝 이미지
            -->
        </div>
        <h1 class="mt-8">수면</h1>
        <div class="mt-4" style="position: relative;">
            <life-log-chart
                radial
                sleep
                :size="204"
                stroke="#EB5147"
                iconBg="#C93127"
                :border="28"
                :startTime="'13:00'"
                :endTime="'00:00'"
                :startImg="'icon-radial-sleep-afternoon.svg'"
                :endImg="'icon-radial-sleep-morning.svg'"
            />
            <!-- <life-log-chart
                radial
                sleep
                :size="204" 
                stroke="#EB5147"
                iconBg="#C93127"
                :startTime="'6:00'"
                :endTime="'24:00'"
                afternoon="11:40"
                morning="8:40"
                :border="28"
                :startImg="'icon-radial-sleep-afternoon.svg'"
                :endImg="'icon-radial-sleep-morning.svg'"
            /> -->
            <!--
                radial - radial 차트
                sleep - 수면 차트
                :size="204" - 차트 사이즈
                stroke="#FFD633" - 차트 컬러
                iconBg="#FFB800" - 아이콘 배경컬러
                afternoon="11:40" - 오후 시간
                morning="8:40" - 오전 시간
                :border="20" - 차트 두께
                :per="80" - 수치값
                :startImg="'icon-radial-sleep-afternoon.svg'" - 차트 시작 이미지
                :endImg="'icon-radial-sleep-morning.svg'" - 차트 끝 이미지
            -->
        </div>
    </div>
    <div class="btn-bottom">
        <div class="btn-area d-flex">
            <v-btn variant="text" height="56" class="btn-summit" @click="dialogTime = true">수면시간설정 팝업열기</v-btn>
        </div>
    </div>
    <v-dialog
        activator
        v-model="dialogTime"
        fullscreen
        :scrim="true"
        transition="dialog-bottom-transition"
        class="modal-bottom"
    >
        <v-card>
            <v-toolbar dark color="white" height="auto">
            <v-toolbar-title class="modal-title">수면시간설정</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialogTime = false" class="btn-modal-close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            </v-toolbar>

            <div class="modal-body">
                <ui-sleep-range
                    :sleepOptions = sleepOptionList
                />
            </div>

            <v-card-actions>
                <v-btn height="48px" @click="dialogTime = false" class="bdr-8 btn-yellow" block>확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { ref, onMounted } from 'vue'
import lifeLogChart from '@/components/lifeLogChart.vue' // 라이프로그차트
import uiBubbleChart from '@/components/uiBubbleChart.vue' // 버블차트
import uiSleepRange from '@/components/uiSleepRange.vue' // 수면기간 셋팅

export default {
    components: {
        lifeLogChart,
        uiBubbleChart,
        uiSleepRange
    },
    setup() {
        const chartData = ref(
            { 저혈압: 3, 정상: 2, 고혈압전단계: 1, 고혈압1단계: 1, 고혈압2단계: 1 }
        )
        const sleepOptionList = ref(
            {
                width: 240,
                height: 240,
                indicatorWidth: 38,
                handleRadius: 19,
                handleStrokeWidth: 0,
                accentColor: '#ffd633',
                handleIconColor: '#fff',
                handleStrokeColor: '#fff',
                handleFillColorStart: '#ffbc00',
                handleFillColorEnd: '#ffbc00',
                indicatorBackgroundColor: '#d9d9d9',
                data: {'start':'13:00', 'end':'00:00'}
            }
        )
        const sleepOptionList2 = ref(
            {
                width: 104,
                height: 104,
                indicatorWidth: 12,
                handleRadius: 6,
                handleStrokeWidth: 0,
                accentColor: '#ffd633',
                handleIconColor: '#fff',
                handleStrokeColor: '#fff',
                handleFillColorStart: '#ffd633',
                handleFillColorEnd: '#ffd633',
                indicatorBackgroundColor: '#d9d9d9',
                data: {'start':'13:00', 'end':'00:00'}
            }
        )
        const dialogTime = ref(false)
        const startTime = ref(null)
        const endTime = ref(null)

        function getTimeEvt(start, end) {
            startTime.value = start
            endTime.value = end
            console.log(startTime.value, endTime.value)
        }

        onMounted(() => {
            
        })
        return {
            chartData,
            sleepOptionList,
            sleepOptionList2,
            dialogTime,
            startTime,
            endTime,
            getTimeEvt
        }
    }
}
</script>

<style lang="scss" scoped></style>
