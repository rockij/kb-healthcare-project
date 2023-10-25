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
          path: '/LayoutGuide',
          name: '컨텐츠 여백 가이드'
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
              path: '/MAJ0104650',
              name: '1:1 문의 목록'
            },
            {
              path: '/MAJ0104660',
              name: '1:1 문의 상세'
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
              path: '/MAJ0202970',
              name: '혈압'
            },
            {
              path: '/MAJ0203020',
              name: '혈당'
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
              path: '/MAJ0305731',
              name: '병원 목록 보기(결과없음)'
            },
            {
              path: '/MAJ0305735',
              name: '병원검색 팝업'
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
