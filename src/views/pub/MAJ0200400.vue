<template>
  <div class="contents px-4"><!-- 20231222 : 수정 -->
    <div class="health-main">
      <!-- 전시관리배너 -->
      <!-- <ManageBaner2 /> -->
      <!--/ 전시관리배너 -->
      <!-- 건강체크 -->
      <div class="h-m-health-chk">
        <swiper
          :slides-per-view="1"
          :space-between="24"
          :pagination="true"
          :modules="modules"
          class="health-chk-slide"
        >
          <swiper-slide>
            <!-- 건강 - 검진x 라이프로그x -->
            <div class="health-chk-item">
              <div class="h-c-head">
                <v-btn variant="text" class="btn-health-chk"
                  >신체 건강체크</v-btn
                >
                <span class="conn-con">플랫폼 미연결</span>
              </div>
              <div class="h-c-cont">
                <div class="tooltip">
                  <v-btn
                    variant="text"
                    class="btn-tooltip"
                    @click="toolTip = true"
                    ><span class="offscreen">툴팁열기</span></v-btn
                  >
                  <!-- 20231129 수정 -->
                  <Transition :duration="{ leave: 300 }">
                    <div v-if="toolTip" class="tooltip-info">
                      <p>삼성헬스를 연결해 보세요</p>
                      <v-btn
                        variant="text"
                        class="btn-tooltip-close"
                        @click="toolTip = false"
                        ><span class="offscreen">툴팁닫기</span></v-btn
                      >
                    </div>
                  </Transition>
                </div>
                <div class="bottom-area">
                  <div class="health-chk-no-data">
                    <p>
                      신체 건강상태를 체크하고<br /><strong class="text-blue"
                        >맞춤 솔루션</strong
                      >을 제안 받으세요
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" class="link"
                onclick="alert('이벤트확인')"
              ></a>
            </div>
            <div class="health-chk-etc">
              <v-btn variant="text" class="btn-info conn">
                <p>흩어져있는 건강정보 연결하기</p>
              </v-btn>
            </div>
            <!--/ 건강 - 검진x 라이프로그x -->
          </swiper-slide>
          <swiper-slide>
            <!-- 건강 - 검진o 라이프로그o -->
            <div class="health-chk-item">
              <div class="h-c-head">
                <v-btn variant="text" class="btn-health-chk"
                  >신체 건강체크</v-btn
                >
                <span class="conn-con on">삼성헬스 연결</span>
              </div>
              <div class="h-c-cont">
                <div class="tooltip">
                  <v-btn
                    variant="text"
                    class="btn-tooltip"
                    @click="toolTip = true"
                    ><span class="offscreen">툴팁열기</span></v-btn
                  >
                  <Transition :duration="{ leave: 300 }">
                    <div v-if="toolTip" class="tooltip-info">
                      <p>삼성헬스를 연결해 보세요</p>
                      <v-btn
                        variant="text"
                        class="btn-tooltip-close"
                        @click="toolTip = false"
                        ><span class="offscreen">툴팁닫기</span></v-btn
                      >
                    </div>
                  </Transition>
                </div>
                <div class="health-chk-info">
                  <p class="health-chk-head">
                    건강 분석 결과,<br /><strong class="text-blue">당뇨</strong>
                    관리가 필요해요!
                  </p>
                  <div class="chk-chips">
                    <span
                      class="chip"
                      v-for="(item, i) in chkChipsList"
                      :key="i"
                      >{{ item }}</span
                    >
                  </div>
                  <div class="bottom-area">
                    <p class="health-chk-guide">
                      매일 건강기록을 관리하고 건강개선도를 체크해보세요
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" class="link"
                onclick="alert('이벤트확인')"
              ></a>
            </div>
            <div class="health-chk-etc">
              <!-- 연결된 라이프로그 1개 일때 -->
              <v-btn variant="text" class="btn-info life-log">
                <div class="log-item bad">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>가장 주의 필요</span>
                    <strong>혈당</strong>
                  </div>
                </div>
              </v-btn>
              <!--/ 연결된 라이프로그 1개 일때 -->
              <!-- 라이프로그 미연결(검정) -->
              <v-btn v-if="false" variant="text" class="btn-info life-log">
                <div class="log-item dis">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>라이프로그</span>
                    <strong>미연결</strong>
                  </div>
                </div>
              </v-btn>
              <!--/ 라이프로그 미연결(검정) -->
              <!-- 라이프로그  악화/개선 -->
              <v-btn v-if="false" variant="text" class="btn-info life-log">
                <div class="log-item bad">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>가장 주의 필요</span>
                    <strong>악화</strong>
                  </div>
                </div>
                <div class="log-item good">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>가장 잘 관리중</span>
                    <strong>개선</strong>
                  </div>
                </div>
              </v-btn>
              <!--/ 라이프로그  악화/개선 -->
              <!-- 라이프로그 유지/집계중 -->
              <v-btn v-if="false" variant="text" class="btn-info life-log">
                <div class="log-item normal">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>라이프로그</span>
                    <strong>유지</strong>
                  </div>
                </div>
                <div class="log-item dis">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>라이프로그</span>
                    <strong>집계중</strong>
                  </div>
                </div>
              </v-btn>
              <!--/ 라이프로그 유지/집계중 -->
            </div>
            <!--/ 건강 - 검진o 라이프로그o -->
          </swiper-slide>
          <swiper-slide>
            <!-- 건강 - 검진o 라이프로그x -->
            <div class="health-chk-item">
              <div class="h-c-head">
                <v-btn variant="text" class="btn-health-chk"
                  >신체 건강체크</v-btn
                >
                <span class="conn-con on">삼성헬스 연결</span>
              </div>
              <div class="h-c-cont">
                <div class="tooltip">
                  <v-btn
                    variant="text"
                    class="btn-tooltip"
                    @click="toolTip = true"
                    ><span class="offscreen">툴팁열기</span></v-btn
                  >
                  <Transition :duration="{ leave: 300 }">
                    <div v-if="toolTip" class="tooltip-info">
                      <p>삼성헬스를 연결해 보세요</p>
                      <v-btn
                        variant="text"
                        class="btn-tooltip-close"
                        @click="toolTip = false"
                        ><span class="offscreen">툴팁닫기</span></v-btn
                      >
                    </div>
                  </Transition>
                </div>
                <div class="health-chk-info">
                  <p class="health-chk-head">
                    건강 분석 결과,<br /><strong class="text-blue">당뇨</strong>
                    관리가 필요해요!
                  </p>
                  <div class="chk-chips">
                    <span
                      class="chip"
                      v-for="(item, i) in chkChipsList"
                      :key="i"
                      >{{ item }}</span
                    >
                  </div>
                  <div class="bottom-area">
                    <p class="health-chk-guide">
                      매일 건강기록을 관리하고 건강개선도를 체크해보세요
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" class="link"
                onclick="alert('이벤트확인')"
              ></a>
            </div>
            <div class="health-chk-etc">
              <v-btn variant="text" class="btn-info view" @click="evtTab">
                <span class="tip-point">1,000P</span>
                <p>라이프로그 연결하고 상세분석 정보 보기</p>
              </v-btn>
            </div>
            <!--/ 건강 - 검진o 라이프로그x -->
          </swiper-slide>
          <swiper-slide>
            <!-- 검진x 라이프로그o -->
            <div class="health-chk-item">
              <div class="h-c-head">
                <v-btn variant="text" class="btn-health-chk"
                  >신체 건강체크</v-btn
                >
                <span class="conn-con on">삼성헬스 연결</span>
              </div>
              <div class="h-c-cont">
                <div class="tooltip">
                  <v-btn
                    variant="text"
                    class="btn-tooltip"
                    @click="toolTip = true"
                    ><span class="offscreen">툴팁열기</span></v-btn
                  >
                  <Transition :duration="{ leave: 300 }">
                    <div v-if="toolTip" class="tooltip-info">
                      <p>삼성헬스를 연결해 보세요</p>
                      <v-btn
                        variant="text"
                        class="btn-tooltip-close"
                        @click="toolTip = false"
                        ><span class="offscreen">툴팁닫기</span></v-btn
                      >
                    </div>
                  </Transition>
                </div>
                <div class="health-chk-info">
                  <p class="health-chk-head">
                    건강 분석 결과,<br /><strong class="text-blue">당뇨</strong>
                    관리가 필요해요!
                  </p>
                  <div class="bottom-area">
                    <v-btn variant="text" class="btn-health-chk-guide">
                      <span class="tip-point">1,000P</span>
                      흩어져있던 건강정보를 한번에 연결하기
                    </v-btn>
                  </div>
                </div>
              </div>
              <a href="#" class="link"
                onclick="alert('이벤트확인')"
              ></a>
            </div>
            <div class="health-chk-etc">
              <!-- 라이프로그  악화/개선 -->
              <v-btn variant="text" class="btn-info life-log">
                <div class="log-item bad">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>가장 주의 필요</span>
                    <strong>혈당</strong>
                  </div>
                </div>
                <div class="log-item good">
                  <div class="txt"><!-- 20231222 : 수정 -->
                    <span>가장 잘 관리중</span>
                    <strong>걸음</strong>
                  </div>
                </div>
              </v-btn>
              <!--/ 라이프로그  악화/개선 -->
            </div>
            <!--/ 검진x 라이프로그o -->
          </swiper-slide>
          <swiper-slide>
            <!-- 심리 - 검사 안함 -->
            <div class="health-chk-item">
              <div class="h-c-head">
                <v-btn variant="text" class="btn-health-chk trial">심리</v-btn> <!-- 20231226 'trial'클래스 추가 -->
              </div>
              <div class="h-c-cont">
                <div class="health-chk-info">
                  <p class="health-chk-head">
                    <strong class="text-blue">오늘하루</strong>는 어떠셨나요?<br />하고
                    싶은 이야기를 공유해주세요
                  </p>
                  <div class="bottom-area">
                    <v-btn variant="text" class="btn-health-chk-guide">
                      <span class="tip-point">30P</span>
                      내 기분 기록하기
                    </v-btn>
                  </div>
                </div>
              </div>
              <a href="#" class="link"
                onclick="alert('이벤트확인')"
              ></a>
            </div>
            <div class="health-chk-etc">
              <div class="psy-test-list">
                <ul>
                  <li v-for="(item, i) in psyTestList" :key="i">
                    <v-btn
                      v-if="false"
                      variant="text"
                      class="psy-test-item"
                      :class="{
                        t1: item.lb === '마음 건강',
                        t2: item.lb === '성격 유형',
                        t3: item.lb === '성격 특질'
                      }"
                    >
                      <span>{{ item.lb }}</span>
                      <strong>{{ item.type }}</strong>
                    </v-btn>
                    <v-btn v-else variant="text" class="psy-test-item no-psy">
                      <span>{{ item.lb }}</span>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <!--/ 심리 - 검사 안함 -->
          </swiper-slide>
          <swiper-slide>
            <!-- 심리 - 검사함 -->
            <div class="health-chk-item">
              <div class="h-c-head">
                <v-btn variant="text" class="btn-health-chk trial">심리</v-btn> <!-- 20231226 'trial'클래스 추가 -->
              </div>
              <div class="h-c-cont">
                <div class="health-chk-info">
                  <p class="health-chk-head">요즘 내 감정</p>
                  <div class="chk-chips left">
                    <span
                      class="chip"
                      v-for="(item, i) in chkChipsList2"
                      :key="i"
                      >{{ item }}</span
                    >
                  </div>
                  <div class="my-emotion">
                    <div class="emotion-item">
                      <img src="/assets/images/icon-result-emoji1.svg" alt="" />
                    </div>
                    <div class="emotion-item">
                      <i class="sub-emotion" data-emoji="걱정하다"></i><!-- 20231214 수정 -->
                      <!-- <i class="sub-emotion" data-emoji="짜증나다"></i>
                      <i class="sub-emotion" data-emoji="슬프다"></i>
                      <i class="sub-emotion" data-emoji="무섭다"></i>
                      <i class="sub-emotion" data-emoji="후회하다"></i>
                      <i class="sub-emotion" data-emoji="우울하다"></i>
                      <i class="sub-emotion" data-emoji="불안하다"></i>
                      <i class="sub-emotion" data-emoji="창피하다"></i>
                      <i class="sub-emotion" data-emoji="외롭다"></i>
                      <i class="sub-emotion" data-emoji="심심하다"></i>
                      <i class="sub-emotion" data-emoji="당황하다"></i>
                      <i class="sub-emotion" data-emoji="긴장하다"></i>
                      <i class="sub-emotion" data-emoji="시원섭섭하다"></i>
                      <i class="sub-emotion" data-emoji="싱숭생숭하다"></i>
                      <i class="sub-emotion" data-emoji="무덤덤하다"></i>
                      <i class="sub-emotion" data-emoji="기쁘다"></i>
                      <i class="sub-emotion" data-emoji="즐겁다"></i>
                      <i class="sub-emotion" data-emoji="편하다"></i>
                      <i class="sub-emotion" data-emoji="만족하다"></i>
                      <i class="sub-emotion" data-emoji="상쾌하다"></i>
                      <i class="sub-emotion" data-emoji="자신만만하다"></i> -->
                    </div>
                  </div>
                  <div class="bottom-area">
                    <p class="health-chk-guide">
                      최근 14일의 감정 중 기쁘다가 가장 많았어요
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" class="link"
                onclick="alert('이벤트확인')"
              ></a>
            </div>
            <div class="health-chk-etc">
              <div class="psy-test-list">
                <ul>
                  <li v-for="(item, i) in psyTestList" :key="i">
                    <v-btn
                      v-if="item.isPsy"
                      variant="text"
                      class="psy-test-item"
                      :class="{
                        t1: item.lb === '마음 건강',
                        t2: item.lb === '성격 유형',
                        t3: item.lb === '성격 특질'
                      }"
                    >
                      <span>{{ item.lb }}</span>
                      <strong>{{ item.type }}</strong>
                    </v-btn>
                    <v-btn v-else variant="text" class="psy-test-item no-psy">
                      <span>{{ item.lb }}</span>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <!--/ 심리 - 검사함 -->
          </swiper-slide>
          <swiper-slide>
            <!-- 유전자 -->
            <div class="health-chk-item">
              <div class="h-c-head">
                <v-btn variant="text" class="btn-health-chk gene">유전자</v-btn>
              </div>
              <div class="h-c-cont">
                <div class="gene-coming-soon">
                  <p>
                    <strong class="text-blue">Coming Soon</strong><br />내가
                    타고난 유전적 능력을<br />확인할 수 있어요!
                  </p>
                </div>
              </div>
              <a href="#" class="link"
                onclick="alert('이벤트확인')"
              ></a>
            </div>
            <!--/ 유전자 -->
          </swiper-slide>
        </swiper>
      </div>
      <!--/ 건강체크 -->
      <!-- 전시관리배너 -->
      <ManageBaner1 class="mt-8" />
      <!--/ 전시관리배너 -->
      <div class="h-m-tab mt-8" ref="scrollTarget">
        <v-tabs
          v-model="tabInit"
          fixed-tabs
          align-tabs="center"
          class="tab-line"
        >
          <v-tab v-for="(item, i) in tabItems" :key="i" :ripple="false">
            {{ item }}
          </v-tab>
        </v-tabs>
      </div>
      <v-window class="mt-7" v-model="tabInit" :disabled="isSwiper">
        <v-window-item>
          <div class="h-m-life-log">
            <div class="life-log-report">
              <v-btn variant="text">
                <p class="text">
                  <strong>월간 건강 리포트가 도착했어요</strong>2023년 9월
                </p>
                <i class="icon">
                  <v-img src="/assets/images/icon-report.svg"></v-img>
                </i>
              </v-btn>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item walk wide">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>걸음<span class="ass">1시간 전</span></h3>
                    <p>1,341kcal을 소모했어요!</p>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart
                        radial
                        numData
                        :size="124"
                        stroke="#FFD633"
                        iconBg="#FFB800"
                        color="#FFBC00"
                        :border="20"
                        :per="80"
                        :endImg="'icon-radial-walk.svg'"
                      />
                      <!--
                          radial - radial 차트
                          numData - 수치 표기
                          :size="124" - 차트 사이즈
                          stroke="#FFD633" - 차트 컬러
                          iconBg="#FFB800" - 아이콘 배경컬러
                          color="#FFBC00" - 수치 컬러
                          :border="20" - 차트 두께
                          :per="80" - 수치값
                          :endImg="'icon-radial-walk.svg'" - 차트 끝 이미지
                      -->
                    </div>
                    <div class="i-data"><strong>800</strong> / 3,000 걸음</div>
                    <span class="i-guide">더 걸어볼까요?</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>걸음</h3>
                  <span class="txt">오늘의 걸음수는?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item emotion">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>감정</h3>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <div
                        class="emoji"
                        :class="{
                          good: emotionBg === '긍정',
                          normal: emotionBg === '보통',
                          bad: emotionBg === '부정'
                        }"
                      ></div>
                    </div>
                    <div class="i-data"><strong>좋음</strong> / 기대되는</div>
                    <span class="i-guide">마음관리 필요해요</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>감정</h3>
                  <span class="txt">오늘 기분은 어때요?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
              <div class="h-m-item sleep">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>수면</h3>
                    <span
                      class="ste"
                      :class="{
                        's-1': sleepBg === '적정',
                        's-3': sleepBg === '부족',
                        's-2': sleepBg === '과다'
                      }"
                      >{{ sleepBg }}</span
                    >
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <!-- 2023-12-20 수정 -->
                      <life-log-chart
                        radial
                        :size="64"
                        stroke="#00C378"
                        :border="12"
                        :startTime="'13:00'"
                        :endTime="'00:00'"
                        @timeDurationSet = 'timeDurationSet'
                      />
                      <!--
                          radial - radial 차트
                          :size="64" - 차트 사이즈
                          stroke="#FFD633" - 차트 컬러
                          :border="20" - 차트 두께
                          :startTime="'13:00'" - 수면시작시간
                          :endTime="'00:00'" - 수면종료시간
                      -->
                    </div>
                    <div class="i-data">
                      <strong>{{ durationH }}시간 {{ durationM }}분</strong>
                    </div>
                    <span class="i-guide">잘자야 혈압유지</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>수면</h3>
                  <span class="txt">나의 수면 시간은?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item meal wide matching">
                <!-- 건강검진 결과에 따라 매칭 -->
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>식사<span class="ass">점심 기록 완료</span></h3>
                    <span class="ste s-3">20% 초과</span>
                    <ul class="ratio">
                      <li class="r-1">탄 80%</li>
                      <li class="r-2">단 30%</li>
                      <li class="r-3">지 15%</li>
                    </ul>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart
                        radial
                        meal
                        lunch
                        :size="98"
                        stroke="#EB5147"
                        :border="12"
                        :per="90"
                      />
                      <!--
                          radial - radial 차트
                          meal - 식사 차트
                          breakfast - 아침식사
                          lunch - 점심식사
                          dinner - 저녁식사
                          :size="98" - 차트 사이즈
                          stroke="#FFD633" - 차트 컬러
                          :border="12" - 차트 두께
                          :per="90" - 수치값
                      -->
                    </div>
                    <div class="i-data"><strong>2,200</strong> / 2,000kcal</div>
                    <span class="i-guide">과식은 혈당 주범</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>식사</h3>
                  <span class="txt">오늘 무엇을 드셨나요?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item body">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>체성분<span class="ass">오늘</span></h3>
                    <span
                      class="ste"
                      :class="{
                        's-3': bodyBg === '높음',
                        's-1': bodyBg === '표준',
                        's-2': bodyBg === '낮음',
                        's-2': bodyBg === '선수'
                      }"
                      >{{ bodyBg }}</span
                    >
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart
                        line
                        female
                        body
                        :chartData="bodyChartList"
                      />
                      <!--
                          line - line 차트
                          male - 남성
                          female - 여성
                          body - 체성분 차트
                          :chartData = "bodyChartList" - 수치 데이터
                      -->
                    </div>
                    <div class="i-data">
                      <strong>55.2kg</strong>
                    </div>
                    <span class="i-guide">정상-혈당에 도움</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>체성분</h3>
                  <span class="txt">오늘 나의 체성분은?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
              <div class="h-m-item mens">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>여성건강</h3>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart life-img">
                      <img src="/assets/images/icon-menstruation.svg" alt="" />
                    </div>
                    <div class="i-data">
                      <strong>D-DAY 1</strong>
                    </div>
                    <span class="i-guide">요며칠 속상해요?</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>여성건강</h3>
                  <span class="txt">월경일이<br />등록되지 않았어요</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div
                class="h-m-item water"
                :class="{
                  dis: !isLifeLog
                }"
              >
                <div class="inner">
                  <div class="i-head">
                    <h3>수분</h3>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <div class="wave">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          style="display: none"
                        >
                          <symbol id="wave">
                            <path
                              d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
                            ></path>
                            <path
                              d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
                            ></path>
                            <path
                              d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
                            ></path>
                            <path
                              d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
                            ></path>
                          </symbol>
                        </svg>
                        <div class="wave-box" v-if="fillWater">
                          <div ref="water" class="water">
                            <svg
                              viewBox="0 0 560 20"
                              class="water_wave water_wave_back"
                            >
                              <use xlink:href="#wave"></use>
                            </svg>
                            <svg
                              viewBox="0 0 560 20"
                              class="water_wave water_wave_front"
                            >
                              <use xlink:href="#wave"></use>
                            </svg>
                            <div class="bubble_1"></div>
                            <div class="bubble_2"></div>
                            <div class="bubble_3"></div>
                          </div>
                        </div>
                        <div class="wave-box" v-else></div>
                      </div>
                      <observer-scroll @triggerIntersected="waterWave(50)" />
                    </div>
                    <div class="i-data">
                      <div class="numcount-area">
                        <v-btn
                          variant="text"
                          class="handle decrease type-yellow"
                          :class="{ disabled: numcount === 0 }"
                          title="감소"
                          :disabled="numcount === 0"
                          @click="numcount > 0 ? numcount-- : ''"
                        ></v-btn>
                        <strong class="number">{{ numcount }}ml</strong>
                        <v-btn
                          variant="text"
                          class="handle increase type-yellow"
                          title="증가"
                          @click="numcount++"
                        ></v-btn>
                      </div>
                    </div>
                    <span class="i-guide">1~2시간에 한잔씩</span>
                  </div>
                </div>
              </div>
              <div class="h-m-item smoking">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>흡연</h3>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart life-img">
                      <img src="/assets/images/icon-smoking.svg" alt="" />
                    </div>
                    <div class="i-data">
                      <strong>2개비/15ml</strong>
                    </div>
                    <span class="i-guide">조금씩 줄여보아요</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>흡연</h3>
                  <span class="txt">오늘은 노담중</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item drinking">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>음주</h3>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart life-img">
                      <img src="/assets/images/icon-beercup.svg" alt="" />
                    </div>
                    <div class="i-data">
                      <strong>3600ml</strong>
                    </div>
                    <span class="i-guide">과음은 그만</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>음주</h3>
                  <span class="txt">오늘은 금주중</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item exer wide matching">
                <!-- 건강검진 결과에 따라 매칭 -->
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>운동</h3>
                    <div class="i-data">
                      <strong>1,000kcal</strong>
                    </div>
                    <span class="i-guide">소모 칼로리 달성</span>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart
                        radial
                        numData
                        :size="124"
                        stroke="#3F86F1"
                        iconBg="#2056A8"
                        color="#3F86F1"
                        :border="20"
                        :per="80"
                        :endImg="'icon-radial-exer.svg'"
                      />
                      <!--
                                                radial - radial 차트
                                                numData - 수치 표기
                                                :size="124" - 차트 사이즈
                                                stroke="#3F86F1" - 차트 컬러
                                                iconBg="#FFB800" - 아이콘 배경컬러
                                                color="#3F86F1" - 수치 컬러
                                                :border="20" - 차트 두께
                                                :per="80" - 수치값
                                                :endImg="'icon-radial-exer.svg'" - 차트 끝 이미지
                                            -->
                    </div>
                    <div class="today-top">
                      <h4>오늘의 TOP 3</h4>
                      <ul>
                        <li>
                          <i class="icon-sports muscle"></i
                          ><span class="offscreen">근력운동</span>
                        </li>
                        <li>
                          <i class="icon-sports running"></i
                          ><span class="offscreen">달리기</span>
                        </li>
                        <li>
                          <i class="icon-sports cycle"></i
                          ><span class="offscreen">자전거</span>
                        </li>
                        <!-- <li><i class="icon-sports hiking"></i><span class="offscreen">하이킹</span></li>
                          <li><i class="icon-sports stairs"></i><span class="offscreen">계단오르기</span></li>
                          <li><i class="icon-sports golf"></i><span class="offscreen">골프</span></li>
                          <li><i class="icon-sports basketball"></i><span class="offscreen">농구</span></li>
                          <li><i class="icon-sports billiards"></i><span class="offscreen">당구</span></li>
                          <li><i class="icon-sports m-climbing"></i><span class="offscreen">등산</span></li>
                          <li><i class="icon-sports walk-m"></i><span class="offscreen">머닝머신(걷기)</span></li>
                          <li><i class="icon-sports running-m"></i><span class="offscreen">러닝머신(달리기)</span></li>
                          <li><i class="icon-sports badminton"></i><span class="offscreen">배드민턴</span></li>
                          <li><i class="icon-sports boxing"></i><span class="offscreen">복싱</span></li>
                          <li><i class="icon-sports boxling"></i><span class="offscreen">볼링</span></li>
                          <li><i class="icon-sports swimming"></i><span class="offscreen">수영</span></li>
                          <li><i class="icon-sports squash"></i><span class="offscreen">스쿼시</span></li>
                          <li><i class="icon-sports spinning"></i><span class="offscreen">스피닝</span></li>
                          <li><i class="icon-sports baseball"></i><span class="offscreen">야구</span></li>
                          <li><i class="icon-sports aerobic"></i><span class="offscreen">에어로빅</span></li>
                          <li><i class="icon-sports yoga"></i><span class="offscreen">요가</span></li>
                          <li><i class="icon-sports f-valleyball"></i><span class="offscreen">족구</span></li>
                          <li><i class="icon-sports jump-rope"></i><span class="offscreen">즐넘기</span></li>
                          <li><i class="icon-sports soccer"></i><span class="offscreen">축구</span></li>
                          <li><i class="icon-sports ping-pong"></i><span class="offscreen">탁구</span></li>
                          <li><i class="icon-sports tennis"></i><span class="offscreen">테니스</span></li>
                          <li><i class="icon-sports pilates"></i><span class="offscreen">필라테스</span></li>
                          <li><i class="icon-sports jiu-jitsu"></i><span class="offscreen">주짓수</span></li>
                          <li><i class="icon-sports taekwondo"></i><span class="offscreen">태권도</span></li>
                          <li><i class="icon-sports judo"></i><span class="offscreen">유도</span></li>
                          <li><i class="icon-sports valleyball"></i><span class="offscreen">배구</span></li>
                          <li><i class="icon-sports climbing"></i><span class="offscreen">클라이밍</span></li>
                          <li><i class="icon-sports dance"></i><span class="offscreen">댄스</span></li> -->
                      </ul>
                    </div>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>운동</h3>
                  <span class="txt">오늘 어떤 운동을 하셨나요?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item t-medi matching">
                <!-- 건강검진 결과에 따라 매칭 -->
                <div v-if="false" class="inner">
                  <div class="i-head">
                    <h3>복약<span class="ass">06.23</span></h3>
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart
                        radial
                        :size="64"
                        stroke="#00C378"
                        :border="12"
                        :per="70"
                      />
                      <!--
                          radial - radial 차트
                          :size="64" - 차트 사이즈
                          stroke="#00C378" - 차트 컬러
                          :border="12" - 차트 두께
                          :per="70" - 수치
                      -->
                    </div>
                    <div class="i-data"><strong>9</strong> / 18건</div>
                    <span class="i-guide">제때에 챙겨요</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>복약</h3>
                  <span class="txt">약 또는 영양제를<br />복용중이신가요?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
              <div class="h-m-item blood-pressure matching">
                <!-- 건강검진 결과에 따라 매칭 -->
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>혈압<span class="ass">06.23</span></h3>
                    <span
                      class="ste"
                      :class="{
                        's-1': bloodPressureBg === '정상',
                        's-2': bloodPressureBg === '주의',
                        's-3': bloodPressureBg === '위험'
                      }"
                      >{{ bloodPressureBg }}</span
                    >
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart
                        blood
                        :chartData="bloodPressureChartList"
                      />
                      <!--
                          blood - 혈압 차트
                          :chartData = "bloodPressureChartList" - 수치 데이터
                      -->
                    </div>
                    <div class="i-data">
                      <strong>120/80mmHg</strong>
                    </div>
                    <span class="i-guide">주의! 약간 상승</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>혈압</h3>
                  <span class="txt">오늘 내 혈압은?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-dv">
              <div class="h-m-item blood-sugar matching">
                <!-- 건강검진 결과에 따라 매칭 -->
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>혈당<span class="ass">06.23</span></h3>
                    <span
                      class="ste"
                      :class="{
                        's-1': bloodSugarBg === '정상',
                        's-2': bloodSugarBg === '주의',
                        's-3': bloodSugarBg === '위험'
                      }"
                      >{{ bloodSugarBg }}</span
                    >
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart
                        line
                        bloodSugar
                        :chartData="bloodSugarChartList"
                      />
                      <!-- 
                          line - 라인차트
                          bloodSugar - 혈당
                          :chartData = "bloodSugarChartList" - 수치데이터
                      -->
                    </div>
                    <div class="i-data">
                      <strong>90mg/dl</strong>
                    </div>
                    <span class="i-guide">혈당 조절 굿~</span>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>혈당</h3>
                  <span class="txt">오늘 내 혈당은?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
              <div class="h-m-item heart-rate">
                <div v-if="isLifeLog" class="inner">
                  <div class="i-head">
                    <h3>심박<span class="ass">오늘</span></h3>
                    <span
                      class="ste"
                      :class="{
                        's-1': heartRateBg === '정상',
                        's-2': heartRateBg === '주의',
                        's-3': heartRateBg === '위험'
                      }"
                      >{{ heartRateBg }}</span
                    >
                  </div>
                  <div class="i-cont">
                    <div class="i-chart">
                      <life-log-chart heart :chartData="heartRateChartList" />
                      <!--
                            heart - 하트차트
                            :chartData = "heartRateChartList" - 수치데이터
                        -->
                    </div>
                    <div class="i-data">
                      <strong>50bpm</strong>
                    </div>
                  </div>
                </div>
                <div v-else class="life-log-no-data">
                  <h3>심박</h3>
                  <span class="txt">오늘 내 심박수는?</span>
                  <div class="life-log-connect">
                    <v-btn variant="text" class="btn-life-log-connect"
                      ><span class="offscreen">연결하기</span></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-m-btn-set">
            <v-btn variant="text" class="btn-h-m-set">화면편집</v-btn>
            <v-btn variant="text" class="btn-h-m-set">순서변경</v-btn>
          </div>
        </v-window-item>
        <v-window-item>
          <div class="h-m-medi-log">
            <div class="h-m-medi-section">
              <div class="h-m-medi-head">
                  <h3>10.12 <strong class="text-blue">서울시</strong>의 질환주의보</h3><!-- 20231207 수정 -->
              </div>
              <div class="h-m-medi-cont">
                <swiper
                  :slidesPerView="1"
                  class="health-weather-swiper"
                  :pagination="true"
                  :modules="modules"
                  :loop="true"
                  @touch-start="touchStartEvt"
                  @touch-end="touchEndEvt"
                >
                  <swiper-slide v-for="(item, i) in healthWeatherList" :key="i"><!-- 20231207 수정 -->
                    <div class="health-weather-item"
                        :class="{ 
                            'hw-1': item.title === '감기가능지수',
                            'hw-2': item.title === '눈병지수',
                            'hw-3': item.title === '식중독지수',
                            'hw-4': item.title === '천식지수',
                            'hw-5': item.title === '피부염지수',
                            'hw-6': item.title === '온열질환지수',
                            'hw-7': item.title === '심혈관질환지수'
                        }"
                    >
                        <h4>{{ item.title }}</h4>
                        <span class="ste"
                            :class="{ 
                                's-1': item.state === '낮음',
                                's-2': item.state === '주의',
                                's-3': item.state === '높음',
                                's-4': item.state === '매우높음'
                            }"
                        >{{ item.state }}</span>
                        <p>{{ item.text }}</p>
                        <span class="source">출처 건강보험공단</span><!-- 20231201 추가 -->
                    </div>
                  </swiper-slide>
                </swiper>
                <!-- <v-btn variant="text" class="msg-follow-up"><strong>오건강님,</strong>증상검색후 안과 진료는 받으셨나요?</v-btn> -->
              </div>
            </div>
            <div class="h-m-medi-section">
              <div class="h-m-medi-head">
                <h3>건강검진결과</h3>
                <v-btn variant="text" class="btn-update-result">업데이트</v-btn>
              </div>
              <div class="h-m-medi-cont">
                <div class="no-data-h-c-result">
                  <p>
                    건강검진 결과로 알아보는<br /><strong
                      >‘나의 건강 취약 항목’</strong
                    >은?
                  </p>
                  <v-btn variant="text" class="btn-import"
                    >건강검진 결과 가져오기</v-btn
                  >
                </div>
                <div class="h-c-result">
                  <ul>
                    <li class="s-1">의심<strong>1</strong></li>
                    <li class="s-2">주의<strong>3</strong></li>
                    <li class="s-3">정상<strong>7</strong></li>
                  </ul>
                  <span class="date-chk">2023.09.27 검진</span>
                </div>
              </div>
            </div>
            <div class="h-m-medi-section">
              <div class="h-m-medi-head">
                <h3>아플 때, 참지 마세요!</h3>
              </div>
              <div class="h-m-medi-cont">
                <v-btn variant="text" class="medi-guide-link">
                  <div class="text">
                    <p>
                      오건강님, 증상 검색 후<br /><strong class="text-blue"
                        >안과 진료</strong
                      >는 받으셨나요?
                    </p>
                    <span>가까운 안과를 찾아보세요</span>
                  </div>
                </v-btn>
                <div class="q-my-medi">
                  <h4>지금, 어디가 아픈가요?</h4>
                  <p>나와 내 가족, 지인들의 건강도<br />함께 챙길수 있어요!</p>
                  <div class="btn-set">
                    <v-btn variant="text" class="link">내 증상</v-btn>
                    <v-btn variant="text" class="link">우리 가족 증상</v-btn>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-m-medi-section">
              <v-btn variant="text" class="medi-history-view">
                <div class="text">
                  <p>증상기록 보기</p>
                  <span>과거 증상을 확인해보세요</span>
                </div>
              </v-btn>
            </div>
            <div class="h-m-medi-section">
              <div class="h-m-medi-head">
                <h3>지금, 병원/약국을 찾는다면?</h3>
              </div>
              <div class="h-m-medi-cont">
                <div class="hos-pha-list">
                  <v-btn
                    variant="text"
                    class="hos-pha-item"
                    v-for="(item, i) of hosPhaList"
                    :key="i"
                  >
                    <i class="icon">
                      <v-img :src="`/assets/images/` + item.icon"></v-img>
                    </i>
                    <p class="text">
                      <strong>{{ item.title }}</strong
                      >{{ item.text }}
                    </p>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script>
  import { ref, onUnmounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import ManageBaner1 from '@/views/pub/MainBaner1.vue' // 전시관리배너
  import ManageBaner2 from '@/views/pub/MainBaner2.vue' // 전시관리배너
  import lifeLogChart from '@/components/lifeLogChart.vue' // 라이프로그차트
  import observerScroll from '@/components/observerScroll.vue'

  export default {
    components: {
      ManageBaner1,
      ManageBaner2,
      lifeLogChart,
      observerScroll,
      Swiper,
      SwiperSlide
    },
    setup() {
      const tabInit = ref()
      const tabItems = ref(['라이프로그', ' 메디로그'])
      const toolTip = ref(true)
      const isLifeLog = ref(true)
      const emotionBg = ref('긍정')
      const sleepBg = ref('적정')
      const bodyBg = ref('높음')
      const bloodPressureBg = ref('위험')
      const bloodSugarBg = ref('정상')
      const heartRateBg = ref('주의')
      const durationH  = ref(null) // 2023-12-20 추가
      const durationM  = ref(null) // 2023-12-20 추가
      const healthWeatherList = ref([
        {
            title: '감기가능지수',
            state: '낮음',
            text: '감기 예방을 위해 환기를 자주시켜 깨끗한 환경을 유지하세요.'
        },
        {
            title: '눈병지수',
            state: '주의',
            text: '눈병 예방을 위해 손을 자주 씻고, 수건 등은 혼자 사용하세요.'
        },
        {
            title: '식중독지수',
            state: '높음',
            text: '오늘은 음식물 조리, 보관에 각별히 주의하셔야 해요.'
        },
        {
            title: '천식지수',
            state: '낮음',
            text: '흡연, 찬바람, 찬음식 등과 급격한 온도 변화는 피하세요.'
        },
        {
            title: '피부염지수',
            state: '매우높음',
            text: '식품첨가물, 방부제, 가려움을 유발하는 음식물 섭취를 피하세요.'
        },
        {
            title: '온열질환지수',
            state: '높음',
            text: '오늘은 갈증이 나지 않아도 규칙적인 휴식, 수분 섭취를 해주세요.'
        },
        {
            title: '심혈관질환지수',
            state: '매우높음',
            text: '급격한 날씨 변화가 가능하니 몸상태에 각별히 주의하셔야 해요.'
        }
      ])
      const hosPhaList = ref([
        {
          icon: 'icon-hospital.svg',
          title: '손쉽게 병원 찾기',
          text: '병원 이름 혹은 진료과를 알고 있으신가요?'
        },
        {
          icon: 'icon-pharmacy.svg',
          title: '손쉽게 약국 찾기',
          text: '나에게 가장 가까운 약국을 찾고 계신가요?'
        },
        {
          icon: 'icon-pharmacy-off.svg',
          title: '휴일에 일하는 약국 찾기',
          text: '주말/ 공휴일에도 운영하는 약국을 알려드려요'
        }
      ])
      const chkChipsList = ref(['운동', '혈당', '혈압', '식사', '복약'])
      const chkChipsList2 = ref(['긍정', '기쁘다'])
      const psyTestList = ref([
        {
          isPsy: true,
          lb: '마음 건강',
          type: '3등급'
        },
        {
          isPsy: true,
          lb: '성격 유형',
          type: 'CP-E'
        },
        {
          isPsy: true,
          lb: '성격 특질',
          type: '성실/끈기'
        },
        {
          isPsy: false,
          lb: '추가 검사'
        }
      ])
      const bodyChartList = ref([14, 16, 22, 24, 28, 26, 12])
      const bloodPressureChartList = ref([
        {
          sis: 90,
          dia: 60
        },
        {
          sis: 120,
          dia: 80
        },
        {
          sis: 130,
          dia: 85
        },
        {
          sis: 170,
          dia: 110
        },
        {
          sis: 100,
          dia: 70
        },
        {
          sis: 100,
          dia: 50
        },
        {
          sis: 125,
          dia: 85
        }
      ])
      const heartRateChartList = ref([60, 80, 100, 60, 50, 40, 30])
      const bloodSugarChartList = ref([
        { key: '식후', val: 65 },
        { key: '식후', val: 80 },
        { key: '식전', val: 120 },
        { key: '식전', val: 90 },
        { key: '식후', val: 130 },
        { key: '식전', val: 90 },
        { key: '식후', val: 130 }
      ])

      const isSwiper = ref(false)

      const touchStartEvt = () => {
        isSwiper.value = true
      }

      const touchEndEvt = () => {
        setTimeout(() => {
          isSwiper.value = false
        }, 100)
      }

      const isWave = ref(true)
      const numcount = ref(0)
      const fillWater = true
      const water = ref()
      const percent = ref(0)
      const waterWave = (e) => {
        if (waterWave !== null && isWave.value) {
          const interval = setInterval(function () {
            percent.value++
            water.value.style.transform =
              'translate(0' + ',' + (100 - percent.value) + '%)'
            if (percent.value == e || e == 0) {
              clearInterval(interval)
            }
          }, 40)
        }
        isWave.value = false
      }
      // 2023-12-05 수정 : 시작
      const header = document.querySelector('header')

      const space = header ? 64 : 0

      const wrap = document.querySelector('#mainWrap')
      const scrollTarget = ref(null)
      const evtTab = () => {
        const tarTop = scrollTarget.value.offsetTop - space
        wrap.scrollTo({ top: tarTop, behavior: 'smooth' })
        const healthTarget = document.querySelectorAll('.h-m-item')[0]
        healthTarget.classList.add('active')
        setTimeout(() => {
          healthTarget.classList.remove('active')
        }, 800)
      }

      const headChk = (e) => {
        scrollTarget.value.style.top = `${space}px`
      }

      wrap.addEventListener('scroll', headChk)

      onUnmounted(() => {
        wrap.removeEventListener('scroll', headChk)
      })
      // 2023-12-05 수정 : 끝
      // 2023-12-20 추가 : 시작
      const timeDurationSet = (time) => {
        durationH.value = time.hours
        durationM.value = time.minutes
      }
      // 2023-12-20 추가 : 끝

      return {
        ManageBaner1,
        ManageBaner2,
        tabInit,
        tabItems,
        toolTip,
        isLifeLog,
        emotionBg,
        sleepBg,
        bodyBg,
        bloodPressureBg,
        bloodSugarBg,
        heartRateBg,
        durationH, // 2023-12-20 추가
        durationM, // 2023-12-20 추가
        healthWeatherList,
        hosPhaList,
        chkChipsList,
        chkChipsList2,
        psyTestList,
        bodyChartList,
        bloodPressureChartList,
        heartRateChartList,
        bloodSugarChartList,
        isSwiper,
        touchStartEvt,
        touchEndEvt,
        isWave,
        numcount,
        fillWater,
        water,
        waterWave,
        scrollTarget,
        evtTab,
        headChk,
        timeDurationSet,
        modules: [Autoplay, Pagination]
      }
    }
  }
</script>

<style lang="scss" scoped></style>
