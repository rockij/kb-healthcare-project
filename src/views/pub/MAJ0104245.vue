<template>
    <div class="contents">
        <div class="evt-temp">
            <div class="evt-temp-img">
                <img src="@/assets/images/event-attend1.png" alt="출석체크 : 매일매일 포인트 지급! (기간 : 2023.09.01 ~ 2023.09.30)" />
            </div>
            <div class="evt-temp-cont">
                <div class="evt-bg">
                    <img src="@/assets/images/event-attend-bg.png" alt="" />
                </div>
                <div class="evt-attend-chk">
                    <div class="evt-attend-chk-box">
                        <ul class="evt-attend-chk-list">
                            <li
                                v-for="(item, index) in stampList"
                                :key="index"
                            >
                                <button type="button" class="stamp" @click="evtAttend(index)">
                                    <span class="stamp-day">
                                        <span v-if="!item.point.state">{{ item.day }}<br>DAY</span>
                                        <span v-if="item.point.state">{{ item.point.value }}</span>
                                    </span>
                                    <span v-if="item.isChk && !item.point.state && !isPerfect.value" class="stamp-chk"><span class="offscreen">출석<br>완료</span></span>
                                    <span v-if="item.isChk && item.point.state" class="stamp-point"><span>{{ item.point.value }}</span></span>
                                    <span v-if="item.isChk && isPerfect && index + 1 == stampList.length" class="stamp-perfect"><span class="offscreen">perfect</span></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="evt-temp-img">
                <img src="@/assets/images/event-attend2.png" alt="유의사항 : 이벤트 주관사의 사정으로 이벤트 내용이 변경되거나 조기 종료 될 수 있습니다." />
            </div>
        </div>
        <div class="btn-share">
            <v-btn variant="outlined" rounded="lg" class="btn-share">
                <template v-slot:prepend>
                    <img src="@/assets/images/icon-share.svg" alt="" />
                </template>
                공유하기
            </v-btn>
        </div>
        <div class="btn-bottom">
            <div class="btn-area d-flex">
                <v-btn variant="text" height="56px" class="btn-summit">나의 건강 정보 업데이트하기</v-btn>
            </div>
        </div>
        <v-dialog v-model="dialog" class="event-dialog">
            <v-card>
                <div class="modal-body">
                    <div class="event-alert-guide">
                        <div class="icon i1"></div>
                        <p class="alert-txt1">이벤트 응모 완료</p>
                        <p class="alert-txt2">이벤트에 응모되었습니다.</p>
                    </div>
                </div>
                <v-card-actions class="d-flex">
                <v-btn class="btn-event-close" @click="dialog = false"><span class="offscreen">팝업닫기</span></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" class="modal-dialog common-popup">
            <v-card>
            <div class="modal-body">
                <div class="answer-items">
                <v-avatar size="100" color="#F8F8F8">
                    <template v-if="isAttend">축하</template>
                    <template v-else>감동</template>
                </v-avatar>
                <template v-if="isAttend">
                    <div class="text-point type-1 my-4">축하합니다</div>
                    <div>출석체크가 완료되었습니다.</div>
                    <div>000,000P가 지급되었스비니다.</div>
                </template>
                <template v-else>
                    <div class="text-point type-1 my-4">축하합니다</div>
                    <div>이번 달 하루도 빠짐없이 출석하였습니다</div>
                    <div>000,000P가 지급되었스비니다.</div>
                </template>
                </div>
            </div>
            <v-card-actions class="d-flex justify-center">
                <v-btn
                variant="flat"
                color="#3B4A65"
                class="btn-close"
                @click="dialog = false"
                >
                <img src="@/assets/images/icon-close.svg" alt="" />
                </v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
export default {
    setup() {
        const isAttend = ref(true)
        const dialog = ref(false)

        let isPerfect = ref();
        function evtAttend(index) {
            stampList[index].isChk = true
            if(index + 1 == stampList.length) {
                isAttend.value = false
                dialog.value = true
            }
        }
        isPerfect = computed(() => {
            const stampToatl = stampList.length
            const dayChkNum = stampList.filter((i)=> i.isChk === true).length
            return stampToatl == dayChkNum
        });
        

        const stampList = reactive([
            {
                day: '1',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '2',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '3',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '4',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '5',
                isChk: false,
                point: {
                    state: true,
                    value: '500P'
                }
            },
            {
                day: '6',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '7',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '8',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '9',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '10',
                isChk: false,
                point: {
                    state: true,
                    value: '500P'
                }
            },
            {
                day: '11',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '12',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '13',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '14',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '15',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '16',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '17',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '18',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '19',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '20',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '21',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '22',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '23',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '24',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '25',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '26',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '27',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '28',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '29',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '30',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
            {
                day: '31',
                isChk: false,
                point: {
                    state: false,
                    value: null
                }
            },
        ])

        return {
            isAttend,
            dialog,
            stampList,
            isPerfect,
            evtAttend
        }
    }
}
</script>

<style lang="scss" scoped></style>