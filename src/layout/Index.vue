<template>
  <v-layout>
    <v-app-bar prominent class="header">
      <v-btn flat icon @click="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h1 class="page-title font-weight-medium">
        {{ $router.currentRoute.value.meta.title }}
      </h1>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list
        v-for="(item, index) in link"
        :key="index"
        @click.stop="goPath(item)"
        class="px-4"
      >
        <div class="d-flex justify-space-between">
          {{ item.name }}
          <v-icon v-if="item.children">
            <template v-if="item.active">mdi-chevron-up</template>
            <template v-else>mdi-chevron-down</template>
          </v-icon>
        </div>
        <v-divider class="mt-2" />
        <v-expand-transition>
          <div v-if="item.active">
            <v-list
              v-for="(child, i) in item.children"
              :key="i"
              @click.stop="goPath(child)"
              class="pl-2"
            >
              <div v-html="child.name"></div>
            </v-list>
            <v-divider class="mt-2" />
          </div>
        </v-expand-transition>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script>
  import router from '@/router'
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const drawer = ref(false)
      const menu = ref(false)

      const link = reactive([
        {
          path: '/guide',
          name: '공통 가이드'
        },
        {
          path: '/LayoutGuide',
          name: '컨텐츠 여백 가이드'
        },
        {
          name: '공통 화면',
          active: false,
          children: [
            {
              path: '/CmmPopup1',
              name: '공통 팝업 - 버튼1개'
            },
            {
              path: '/CmmPopup2',
              name: '공통 팝업 - 버튼2개'
            },
            {
              path: '/BottomSheet',
              name: 'BottomSheet'
            },
            {
              path: '/SelectList',
              name: 'SelectList'
            },
            {
              path: '/Dialogs',
              name: 'Dialogs'
            },
            {
              path: '/Sticky',
              name: 'Sticky'
            },
            {
              path: '/BanerState',
              name: '상태 배너 유형'
            },
            {
              path: '/MAJ0100130',
              name: '약관상세팝업'
            },
            {
              path: '/DocumentModal',
              name: '풀페이지팝업'
            },
            {
              path: '/Toast',
              name: 'Toast'
            },
            {
              path: '/MAJ0100060',
              name: '서비스오류 안내'
            },
            {
              path: '/CmmPopupSns',
              name: '공유하기 팝업'
            },
            {
              path: '/Tooltip',
              name: 'Tooltip'
            },
            {
              path: '/LoadCounter',
              name: '데이터 숫자 카운터'
            }
          ]
        },
        {
          name: '고객센터',
          active: false,
          children: [
            {
              path: '/MAJ0104620',
              name: '고객센터 서브메인 <br /> MAJ0104630-FAQ 목록<br />MAJ0104632-FAQ 카테고리 선택'
            },
            // {
            //   path: '/MAJ0104630',
            //   name: 'FAQ 목록'
            // },
            {
              path: '/MAJ0104631',
              name: 'FAQ 상세'
            },
            {
              path: '/MAJ0104640',
              name: 'FAQ 검색결과'
            },
            {
              path: '/MAJ0104640/no-data',
              name: 'FAQ 검색결과X'
            },
            {
              path: '/MAJ0104650',
              name: '1:1 문의 목록'
            },
            {
              path: '/MAJ0104660',
              name: '1:1 문의 상세-답변완료'
            },
            {
              path: '/MAJ0104660/waiting',
              name: '1:1 문의 상세-접수대기중'
            },
            {
              path: '/MAJ0104670',
              name: '1:1 문의 문의 유형 선택'
            },
            {
              path: '/MAJ0104681',
              name: '1:1 문의 등록'
            }
          ]
        },
        {
          name: '마이페이지',
          active: false,
          children: [
            {
              path: '/MAJ0204740',
              name: '나의정보 기본정보관리'
            },
            {
              path: '/MAJ0204760',
              name: '키 정보 입력'
            },
            {
              path: '/MAJ0204770',
              name: '해외통관번호 입력'
            },
            {
              path: '/MAJ0204750',
              name: '이메일 인증'
            },
            {
              path: '/MAJ0204780',
              name: '이메일 등록'
            },
            {
              path: '/MAJ0204790',
              name: '나의리워드 서브메인'
            },
            {
              path: '/MAJ0204800',
              name: '포인트 적립/사용 내역'
            },
            {
              path: '/MAJ0204820',
              name: '소멸예정내역'
            },
            {
              path: '/MAJ0204821',
              name: '포인트 교환하기'
            },
            {
              path: '/MAJ0105540',
              name: '회원탈퇴 탈퇴사유 입력'
            },
            {
              path: '/MAJ0105541',
              name: '회원탈퇴 탈퇴안내'
            },
            {
              path: '/MAJ0105550',
              name: '회원탈퇴 회원탈퇴 완료'
            },
            {
              path: '/MAJ0104600',
              name: '오케어소식 공지사항 리스트'
            },
            {
              path: '/MAJ0205310',
              name: '기기연결'
            },
            {
              path: '/MAJ0205340',
              name: '혈당계'
            },
            {
              path: '/MAJ0204690',
              name: '마이페이지 서브 메인'
            }
          ]
        },
        {
          name: '나의건강',
          active: false,
          children: [
            {
              path: '/MAB3500',
              name: '캘린더-월경'
            },
            {
              path: '/MAJ0202930',
              name: '여성생체리듬 기록'
            },
            {
              path: '/MAJ0202931',
              name: '월경기간 선택 팝업'
            },
            {
              path: '/MAJ0202935',
              name: '설정'
            }
          ]
        },
        {
          name: '라이프로그',
          active: false,
          children: [
            {
              path: '/LifelogTable1',
              name: '바텀 테이블1'
            },
            {
              path: '/LifelogTable2',
              name: '바텀 테이블2'
            },
            {
              path: '/LifelogImage',
              name: '바텀 이미지 케이스'
            },
            {
              path: '/LifelogSelectPeriod',
              name: '바텀 조회기간 설정1'
            },
            {
              path: '/LifelogSelectPeriod2',
              name: '바텀 조회기간 설정2'
            },
            {
              path: '/LifelogScroll',
              name: '바텀 스크롤 케이스'
            },
            {
              path: '/MAJ0202863',
              name: '바텀 단일선택'
            },
            {
              path: '/LifelogMultiCheck',
              name: '바텀 다중선택'
            },
            {
              path: '/LifelogInputList',
              name: '풀팝업 인풋리스트'
            },
            {
              path: '/LifelogDevice',
              name: '바텀 기기연결'
            },
            {
              path: '/LifelogRecord',
              name: '상세 기록 케이스'
            },
            {
              path: '/LifelogAnalysis',
              name: '상세 분석 케이스'
            },
            {
              path: '/MAJ0206003',
              name: '측정 중'
            },
            {
              path: '/LifelogSetting',
              name: '바텀 설정(수정/삭제)'
            },
            {
              path: '/MAJ0203390',
              name: '심박'
            },
            {
              path: '/MAJ0203410',
              name: '식사'
            },
            {
              path: '/MAJ0203412',
              name: '식사 기록'
            },
            {
              path: '/MAJ0203120',
              name: '체성분'
            },
            {
              path: '/MAJ0202940',
              name: '수분'
            },
            {
              path: '/MAJ0203420',
              name: '복약'
            },
            {
              path: '/MAJ0202970',
              name: '혈압'
            },
            {
              path: '/MAJ0203020',
              name: '혈당'
            },
            {
              path: '/MAJ0203001',
              name: '혈압 측정 방법'
            },
            {
              path: '/MAJ0202856',
              name: '운동'
            },
            {
              path: '/MAJ0202870',
              name: '운동 기록'
            },
            {
              path: '/MAJ0202857',
              name: '건강 플랫폼 미연동/ 거부 시'
            },
            {
              path: '/MAJ0202847',
              name: '건강 - 카운트다운'
            },
            {
              path: '/MAJ0202849',
              name: '	운동 측정 종료'
            },
            {
              path: '/MAJ0202850',
              name: '걸음'
            },
            {
              path: '/MAJ0202850-1',
              name: '걸음 (최초입력시)'
            },
            {
              path: '/MAJ0202914',
              name: '수면'
            },
            {
              path: '/MAJ0202914-1',
              name: '수면 (미등록)'
            },
            {
              path: '/MAJ0202914-2',
              name: '수면 (당일 데이터X)'
            },
            {
              path: '/MAJ0202912',
              name: '수면 입력'
            },
            {
              path: '/MAJ0202920',
              name: '기분'
            },
            {
              path: '/MAJ0202960',
              name: '흡연'
            },
            {
              path: '/MAJ0202960-1',
              name: '흡연(기록없음)'
            },
            {
              path: '/MAJ0202950',
              name: '음주'
            },
            {
              path: '/MAJ0202950-1',
              name: '음주(기록없음)'
            }
          ]
        },
        {
          name: '증상검색',
          active: false,
          children: [
            {
              path: '/MAJ0305650',
              name: '우리 가족 증상 검색'
            },
            {
              path: '/MAJ0305670',
              name: '신체부위선택 남'
            },
            {
              path: '/MAJ0305670-1',
              name: '신체부위선택 여'
            },
            {
              path: '/MAJ0305670-2',
              name: '신체부위선택 아이'
            },
            {
              path: '/MAJ0305671',
              name: '신체명칭 선택'
            },
            {
              path: '/MAJ0305690',
              name: '문진진행'
            },
            {
              path: '/MAJ0305710',
              name: '문진진행 결과레포트'
            },
            {
              path: '/MAJ0305711',
              name: '문진진행 결과레포트 응급'
            }
          ]
        },
        {
          name: '건강검진결과',
          active: false,
          children: [
            {
              path: '/MAJ0305800',
              name: '인덱스'
            },
            {
              path: '/MAJ0305800-1',
              name: '인덱스 (case)'
            },
            {
              path: '/MAJ0305820',
              name: '검사항목 상세'
            },
            {
              path: '/MAJ0305820-1',
              name: '검사항목 상세 (최대)'
            },
            {
              path: '/MAJ0305820-2',
              name: '검사항목 상세 (정상)'
            }
          ]
        },
        {
          name: '병원찾기',
          active: false,
          children: [
            {
              path: '/MAJ0305720',
              name: '최초진입'
            },
            {
              path: '/MAJ0305730',
              name: '병원 목록 보기'
            },
            {
              path: '/MAJ0305740',
              name: '병원 상세'
            }
          ]
        },
        {
          name: '약국찾기',
          active: false,
          children: [
            {
              path: '/MAJ0305750',
              name: '약국 목록 보기'
            },
            {
              path: '/MAJ0305752',
              name: '약국검색 팝업'
            }
          ]
        },
        {
          name: '설정',
          active: false,
          children: [
            {
              path: '/MAJ0100262',
              name: '설정 목록'
            },
            {
              path: '/MAJ0100270',
              name: '자동로그인 설정'
            },
            {
              path: '/MAJ0100280',
              name: '알림메시지 수신여부 설정'
            },
            {
              path: '/MAJ0100290',
              name: '약관동의 목록'
            },
            {
              path: '/MAJ0100300',
              name: '서비스 약관동의 목록 및 철회'
            },
            {
              path: '/MAJ0100330',
              name: '사업자정보'
            }
          ]
        },
        {
          name: '메시지함',
          active: false,
          children: [
            {
              path: '/MAJ0100380',
              name: '메시지함 목록'
            }
          ]
        },
        {
          name: '전문가챌린지',
          active: false,
          children: [
            {
              path: '/MAJ0407001-1',
              name: 'AI 추천 챌린지'
            },
            {
              path: '/MAJ0407001-2',
              name: '혈당 개선 전문 챌린지'
            },
            {
              path: '/MAJ0407001-3',
              name: '혈압 개선 전문 챌린지'
            },
            {
              path: '/MAJ0407001-4',
              name: '혈관건강 개선 전문 챌린지'
            },
            {
              path: '/MAJ0407001-5',
              name: '체중감량 전문 챌린지'
            },
            {
              path: '/MAJ0407001-6',
              name: '근력향상 전문 챌린지'
            },
            {
              path: '/MAJ0407001-7',
              name: '요요방지 전문 챌린지'
            },
            {
              path: '/MAJ0204051',
              name: '걷기 전문 챌린지'
            },
            {
              path: '/MAJ0204060-1',
              name: '기간선택'
            },
            {
              path: '/MAJ0204060-2',
              name: '플랫폼 연결 안내'
            },
            {
              path: '/MAJ0407002-1',
              name: '1주 체험 안내'
            },
            {
              path: '/MAJ0407002-2',
              name: '1주 체험 안내(바텀시트)'
            },
            {
              path: '/MAJ0407003-1',
              name: '챌린지 인증 답변형'
            },
            {
              path: '/MAJ0407003-2',
              name: '챌린지 인증 답변형 : 인증완료(토스트)'
            },
            {
              path: '/MAJ0407003-3',
              name: '챌린지 인증 답변형 : 중단(팝업)'
            },
            {
              path: '/MAJ0407004-1',
              name: '챌린지 인증 퀴즈형 : Disabled'
            },
            {
              path: '/MAJ0407004-2',
              name: '챌린지 인증 퀴즈형 : 오답'
            },
            {
              path: '/MAJ0407004-3',
              name: '챌린지 인증 퀴즈형 : 정답'
            },
            {
              path: '/MAJ0407004-4',
              name: '챌린지 인증 퀴즈형 : 인증완료'
            },
            {
              path: '/MAJ0407005-1',
              name: 'TODO Tip1'
            },
            {
              path: '/MAJ0407005-2',
              name: 'TODO Tip2'
            },
            {
              path: '/MAJ0407005-3',
              name: 'TODO Tip3'
            },
            {
              path: '/MAJ0407005-4',
              name: 'TODO Tip4'
            },
            {
              path: '/MAJ0407007-1',
              name: '챌린지 인증 사진형'
            },
            {
              path: '/MAJ0407007-2',
              name: '챌린지 인증 사진형 : 인증완료'
            },
            {
              path: '/MAJ0407008-1',
              name: '수행 캘린더 - 인증 전'
            },
            {
              path: '/MAJ0407008-2',
              name: '수행 캘린더 - 인증 후'
            },
            {
              path: '/MAJ0407009-1',
              name: '챌린지 포기'
            },
            {
              path: '/MAJ0407009-2',
              name: '챌린지 포기 : 포기완료(토스트)'
            },
            {
              path: '/MAJ0407018',
              name: '건강 행동별 챌린지 수행률'
            },
            {
              path: '/MAJ0407023-1',
              name: '챌린지 인증 건강정보 열람 인증형'
            },
            {
              path: '/MAJ0407023-2',
              name: '챌린지 인증 건강정보 열람 인증형 : 인증완료'
            },
            {
              path: '/MAJ0407024-1',
              name: '챌린지 완료 : 리뷰작성'
            },
            {
              path: '/MAJ0407024-2',
              name: '챌린지 완료 : 등록완료(토스트)'
            },
            {
              path: '/MAJ0407024-3',
              name: '챌린지 완료 : 2,000자(토스트)'
            },
            {
              path: '/MAJ0407025',
              name: '챌린지 리뷰 목록'
            },
            {
              path: '/MAJ0407026-1',
              name: '챌린지 리뷰 상세'
            },
            {
              path: '/MAJ0407026-2',
              name: '챌린지 리뷰 상세 : 수정(바텀시트)'
            },
            {
              path: '/MAJ0407026-3',
              name: '챌린지 리뷰 상세 : 등록완료(토스트)/수정, 삭제(팝업)'
            },
            {
              path: '/MAJ0407026-4',
              name: '챌린지 리뷰 상세 : 삭제완료(토스트)'
            }
          ]
        },
        {
          name: '건강',
          active: false,
          children: [
            {
              path: '/MAJ0202770',
              name: '건강뉴스 목록'
            },
            {
              path: '/MAJ0202780',
              name: '건강뉴스 상세'
            },
            {
              path: '/MAJ0202781-1',
              name: '건강뉴스 검색'
            }
          ]
        },
        {
          name: '이벤트',
          active: false,
          children: [
            {
              path: '/MAJ0104230',
              name: '진행중인 이벤트 목록'
            },
            {
              path: '/MAJ0104240',
              name: '진행중인 이벤트 상세 및 참여'
            },
            {
              path: '/MAJ0104241',
              name: '이벤트 상세(퀴즈)'
            },
            {
              path: '/MAJ0104242',
              name: '이벤트 상세(퀴즈흰트)'
            },
            {
              path: '/MAJ0104243',
              name: '이벤트 상세(퀴즈-답변제출)'
            },
            {
              path: '/MAJ0104244',
              name: '	이벤트 상세(룰렛)'
            },
            {
              path: '/MAJ0104245',
              name: '이벤트 상세(출석)'
            },
            {
              path: '/MAJ0104250',
              name: '지난 이벤트 목록'
            },
            {
              path: '/MAJ0104260',
              name: '지난 이벤트 상세'
            },
            {
              path: '/MAJ0104261',
              name: '친구초대 코드 공유 이벤트 - Tab.1 내 초대코드'
            },
            {
              path: '/MAJ0104262',
              name: '친구초대 코드 공유 이벤트 - Tab.2 초대코드 입력'
            }
          ]
        }
      ])
      function MenuShow() {
        menu.value = !menu.value
      }
      function goPath(val) {
        if (val.path) {
          router.push(val.path)
        } else {
          val.active = !val.active
          // drawer.value = false
        }
      }

      return {
        drawer,
        menu,
        link,
        MenuShow,
        goPath
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-list {
    .v-list:first-child {
      margin-top: 8px;
    }
  }
</style>
