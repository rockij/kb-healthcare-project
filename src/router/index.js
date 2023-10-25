import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/pub/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/BottomSheet',
      name: 'BottomSheet',
      meta: { title: 'BottomSheet' },
      component: () => import('@/views/pub/BottomSheet.vue')
    },
    {
      path: '/SelectList',
      name: 'SelectList',
      meta: { title: 'SelectList' },
      component: () => import('@/views/pub/SelectList.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      meta: { title: 'guide' },
      component: () => import('@/views/pub/Guide.vue')
    },
    {
      path: '/BanerState',
      name: 'BanerState',
      meta: { title: '상태 배너 유형' },
      component: () => import('@/views/pub/BanerState.vue')
    },
    {
      path: '/MAJ0104620',
      name: 'MAJ0104620',
      meta: { title: '고객센터 서브메인' },
      component: () => import('@/views/pub/MAJ0104620.vue'),
      props: true
    },
    {
      path: '/MAJ0104630',
      name: 'MAJ0104630',
      meta: { title: 'FAQ 목록' },
      component: () => import('@/views/pub/MAJ0104630.vue')
    },
    {
      path: '/MAJ0104631',
      name: 'MAJ0104631',
      meta: { title: 'FAQ 상세' },
      component: () => import('@/views/pub/MAJ0104631.vue')
    },
    {
      path: '/MAJ0104640',
      name: 'MAJ0104640',
      meta: { title: '검색결과' },
      component: () => import('@/views/pub/MAJ0104640.vue')
    },
    {
      path: '/MAJ0104650',
      name: 'MAJ0104650',
      meta: { title: '1:1 문의 목록' },
      component: () => import('@/views/pub/MAJ0104650.vue')
    },
    {
      path: '/MAJ0104660',
      name: 'MAJ0104660',
      meta: { title: '1:1 문의 상세' },
      component: () => import('@/views/pub/MAJ0104660.vue')
    },
    {
      path: '/MAJ0104670',
      name: 'MAJ0104670',
      meta: { title: '1:1 문의 문의 유형 선택' },
      component: () => import('@/views/pub/MAJ0104670.vue')
    },
    {
      path: '/MAJ0104680',
      name: 'MAJ0104680',
      meta: { title: '1:1 문의 프로그램 선택' },
      component: () => import('@/views/pub/MAJ0104680.vue')
    },
    {
      path: '/MAJ0104681',
      name: 'MAJ0104681',
      meta: { title: '1:1 문의 등록' },
      component: () => import('@/views/pub/MAJ0104681.vue')
    },
    {
      path: '/MAJ0104682',
      name: 'MAJ0104682',
      meta: { title: '이용약관' },
      component: () => import('@/views/pub/MAJ0104682.vue')
    },
    {
      path: '/MAJ0203390',
      name: 'MAJ0203390',
      meta: { title: '심박' },
      component: () => import('@/views/pub/MAJ0203390.vue')
    },
    {
      path: '/MAJ0203410',
      name: 'MAJ0203410',
      meta: { title: '식사' },
      component: () => import('@/views/pub/MAJ0203410.vue')
    },
    {
      path: '/MAJ0203412',
      name: 'MAJ0203412',
      meta: { title: '식사 기록' },
      component: () => import('@/views/pub/MAJ0203412.vue')
    },
    {
      path: '/MAJ0203120',
      name: 'MAJ0203120',
      meta: { title: '체성분' },
      component: () => import('@/views/pub/MAJ0203120.vue')
    },
    {
      path: '/MAJ0203121',
      name: 'MAJ0203121',
      meta: { title: '체성분 그래프 안내' },
      component: () => import('@/views/pub/MAJ0203121.vue')
    },
    {
      path: '/MAJ0202940',
      name: 'MAJ0202940',
      meta: { title: '수분' },
      component: () => import('@/views/pub/MAJ0202940.vue')
    },
    {
      path: '/LifelogTable1',
      name: 'LifelogTable1',
      meta: { title: '라이프로그 바텀 테이블1' },
      component: () => import('@/views/pub/LifelogTable1.vue')
    },
    {
      path: '/LifelogTable2',
      name: 'LifelogTable2',
      meta: { title: '라이프로그 바텀 테이블2' },
      component: () => import('@/views/pub/LifelogTable2.vue')
    },
    {
      path: '/LifelogImage',
      name: 'LifelogImage',
      meta: { title: '라이프로그 바텀 이미지 케이스' },
      component: () => import('@/views/pub/LifelogImage.vue')
    },
    {
      path: '/LifelogSelectPeriod',
      name: 'LifelogSelectPeriod',
      meta: { title: '라이프로그 바텀 조회기간 설정1' },
      component: () => import('@/views/pub/LifelogSelectPeriod.vue')
    },
    {
      path: '/LifelogSelectPeriod2',
      name: 'LifelogSelectPeriod2',
      meta: { title: '라이프로그 바텀 조회기간 설정2' },
      component: () => import('@/views/pub/LifelogSelectPeriod2.vue')
    },
    {
      path: '/LifelogScroll',
      name: 'LifelogScroll',
      meta: { title: '라이프로그 바텀 스크롤 케이스' },
      component: () => import('@/views/pub/LifelogScroll.vue')
    },
    {
      path: '/MAJ0202863',
      name: 'MAJ0202863',
      meta: { title: '라이프로그 바텀 단일선택' },
      component: () => import('@/views/pub/MAJ0202863.vue')
    },
    {
      path: '/LifelogMultiCheck',
      name: 'LifelogMultiCheck',
      meta: { title: '라이프로그 바텀 다중선택' },
      component: () => import('@/views/pub/LifelogMultiCheck.vue')
    },
    {
      path: '/LifelogInputList',
      name: 'LifelogInputList',
      meta: { title: '라이프로그 풀팝업 인풋리스트' },
      component: () => import('@/views/pub/LifelogInputList.vue')
    },
    {
      path: '/LifelogDevice',
      name: 'LifelogDevice',
      meta: { title: '라이프로그 바텀 기기연결안내' },
      component: () => import('@/views/pub/LifelogDevice.vue')
    },
    {
      path: '/MAJ0206003',
      name: 'MAJ0206003',
      meta: { title: '라이프로그 측정 중' },
      component: () => import('@/views/pub/MAJ0206003.vue')
    },
    {
      path: '/LifelogSetting',
      name: 'LifelogSetting',
      meta: { title: '라이프로그 설정' },
      component: () => import('@/views/pub/LifelogSetting.vue')
    },
    {
      path: '/MAJ0202850',
      name: 'MAJ0202850',
      meta: { title: '걸음' },
      component: () => import('@/views/pub/MAJ0202850.vue')
    },
    {
      path: '/MAJ0202850-1',
      name: 'MAJ0202850-1',
      meta: { title: '걸음(최초입력시)' },
      component: () => import('@/views/pub/MAJ0202850-1.vue')
    },
    {
      path: '/MAJ0202914',
      name: 'MAJ0202914',
      meta: { title: '수면' },
      component: () => import('@/views/pub/MAJ0202914.vue')
    },
    {
      path: '/MAJ0202914-1',
      name: 'MAJ0202914-1',
      meta: { title: '수면 (미등록)' },
      component: () => import('@/views/pub/MAJ0202914-1.vue')
    },
    {
      path: '/MAJ0202914-2',
      name: 'MAJ0202914-2',
      meta: { title: '수면 (당일 데이터X)' },
      component: () => import('@/views/pub/MAJ0202914-2.vue')
    },
    {
      path: '/MAJ0202912',
      name: 'MAJ0202912',
      meta: { title: '수면 입력' },
      component: () => import('@/views/pub/MAJ0202912.vue')
    },
    {
      path: '/MAJ0202920',
      name: 'MAJ0202920',
      meta: { title: '기분' },
      component: () => import('@/views/pub/MAJ0202920.vue')
    },
    {
      path: '/MAJ0202960',
      name: 'MAJ0202960',
      meta: { title: '흡연' },
      component: () => import('@/views/pub/MAJ0202960.vue')
    },
    {
      path: '/MAJ0202960-1',
      name: 'MAJ0202960-1',
      meta: { title: '흡연(기록없음)' },
      component: () => import('@/views/pub/MAJ0202960-1.vue')
    },
    {
      path: '/MAJ0202950',
      name: 'MAJ0202950',
      meta: { title: '음주' },
      component: () => import('@/views/pub/MAJ0202950.vue')
    },
    {
      path: '/MAJ0202950-1',
      name: 'MAJ0202950-1',
      meta: { title: '음주(기록없음)' },
      component: () => import('@/views/pub/MAJ0202950-1.vue')
    },
    {
      path: '/MAJ0202930',
      name: 'MAJ0202930',
      meta: { title: '월경(여성건강)' },
      component: () => import('@/views/pub/MAJ0202930.vue')
    },
    {
      path: '/MAJ0202944',
      name: 'MAJ0202944',
      meta: { title: '사랑일' },
      component: () => import('@/views/pub/MAJ0202944.vue')
    },
    {
      path: '/MAJ0202945',
      name: 'MAJ0202945',
      meta: { title: '몸 상태' },
      component: () => import('@/views/pub/MAJ0202945.vue')
    },
    {
      path: '/MAJ0202931',
      name: 'MAJ0202931',
      meta: { title: '월경기간 선택 팝업' },
      component: () => import('@/views/pub/MAJ0202931.vue')
    },
    {
      path: '/MAB3500',
      name: 'MAB3500',
      meta: { title: '캘린더-월경' },
      component: () => import('@/views/pub/MAB3500.vue')
    },
    {
      path: '/MAJ0202935',
      name: 'MAJ0202935',
      meta: { title: '월경-설정' },
      component: () => import('@/views/pub/MAJ0202935.vue')
    },
    {
      path: '/MAJ0204740',
      name: 'MAJ0204740',
      meta: { title: '나의정보 기본정보관리' },
      component: () => import('@/views/pub/MAJ0204740.vue')
    },
    {
      path: '/MAJ0204760',
      name: 'MAJ0204760',
      meta: { title: '키 정보 입력' },
      component: () => import('@/views/pub/MAJ0204760.vue')
    },
    {
      path: '/MAJ0204770',
      name: 'MAJ0204770',
      meta: { title: '해외통관번호 입력' },
      component: () => import('@/views/pub/MAJ0204770.vue')
    },
    {
      path: '/MAJ0204750',
      name: 'MAJ0204750',
      meta: { title: '이메일 인증' },
      component: () => import('@/views/pub/MAJ0204750.vue')
    },
    {
      path: '/MAJ0204780',
      name: 'MAJ0204780',
      meta: { title: '이메일 등록' },
      component: () => import('@/views/pub/MAJ0204780.vue')
    },
    {
      path: '/MAJ0204790',
      name: 'MAJ0204790',
      meta: { title: '나의리워드 서브메인' },
      component: () => import('@/views/pub/MAJ0204790.vue')
    },
    {
      path: '/MAJ0204800',
      name: 'MAJ0204800',
      meta: { title: '포인트 적립/사용 내역' },
      component: () => import('@/views/pub/MAJ0204800.vue')
    },
    {
      path: '/MAJ0204820',
      name: 'MAJ0204820',
      meta: { title: '소멸예정 리워드포인트' },
      component: () => import('@/views/pub/MAJ0204820.vue')
    },
    {
      path: '/MAJ0204821',
      name: 'MAJ0204821',
      meta: { title: '포인트 교환하기' },
      component: () => import('@/views/pub/MAJ0204821.vue')
    },
    {
      path: '/MAJ0305650',
      name: 'MAJ0305650',
      meta: { title: '우리 가족 증상 검색' },
      component: () => import('@/views/pub/MAJ0305650.vue')
    },
    {
      path: '/MAJ0305670',
      name: 'MAJ0305670',
      meta: { title: '신체부위선택 남' },
      component: () => import('@/views/pub/MAJ0305670.vue')
    },
    {
      path: '/MAJ0305670-1',
      name: 'MAJ0305670-1',
      meta: { title: '신체부위선택 여' },
      component: () => import('@/views/pub/MAJ0305670-1.vue')
    },
    {
      path: '/MAJ0305670-2',
      name: 'MAJ0305670-2',
      meta: { title: '신체부위선택 아이' },
      component: () => import('@/views/pub/MAJ0305670-2.vue')
    },
    {
      path: '/MAJ0305671',
      name: 'MAJ0305671',
      meta: { title: '신체명칭 선택' },
      component: () => import('@/views/pub/MAJ0305671.vue')
    },
    {
      path: '/MAJ0305690',
      name: 'MAJ0305690',
      meta: { title: '문진진행' },
      component: () => import('@/views/pub/MAJ0305690.vue')
    },
    {
      path: '/MAJ0305710',
      name: 'MAJ0305710',
      meta: { title: '문진진행 결과레포트' },
      component: () => import('@/views/pub/MAJ0305710.vue')
    },
    {
      path: '/MAJ0305711',
      name: 'MAJ0305711',
      meta: { title: '문진진행 결과레포트 응급' },
      component: () => import('@/views/pub/MAJ0305711.vue')
    },
    {
      path: '/MAJ0105540',
      name: 'MAJ0105540',
      meta: { title: '회원탈퇴 탈퇴사유 입력' },
      component: () => import('@/views/pub/MAJ0105540.vue')
    },
    {
      path: '/MAJ0105541',
      name: 'MAJ0105541',
      meta: { title: '회원탈퇴 탈퇴안내' },
      component: () => import('@/views/pub/MAJ0105541.vue')
    },
    {
      path: '/MAJ0105550',
      name: 'MAJ0105550',
      meta: { title: '회원탈퇴 회원탈퇴 완료' },
      component: () => import('@/views/pub/MAJ0105550.vue')
    },
    {
      path: '/MAJ0104600',
      name: 'MAJ0104600',
      meta: { title: '오케어소식 공지사항 리스트' },
      component: () => import('@/views/pub/MAJ0104600.vue')
    },
    {
      path: '/MAJ0104610',
      name: 'MAJ0104610',
      meta: { title: '오케어소식 공지사항 상세' },
      component: () => import('@/views/pub/MAJ0104610.vue')
    },
    {
      path: '/MAJ0100262',
      name: 'MAJ0100262',
      meta: { title: '설정 목록' },
      component: () => import('@/views/pub/MAJ0100262.vue')
    },
    {
      path: '/MAJ0100270',
      name: 'MAJ0100270',
      meta: { title: '자동로그인 설정' },
      component: () => import('@/views/pub/MAJ0100270.vue')
    },
    {
      path: '/MAJ0100280',
      name: 'MAJ0100280',
      meta: { title: '알림메시지 수신여부 설정' },
      component: () => import('@/views/pub/MAJ0100280.vue')
    },
    {
      path: '/MAJ0100290',
      name: 'MAJ0100290',
      meta: { title: '약관동의 목록' },
      component: () => import('@/views/pub/MAJ0100290.vue')
    },
    {
      path: '/MAJ0100300',
      name: 'MAJ0100300',
      meta: { title: '서비스 약관동의 목록 및 철회' },
      component: () => import('@/views/pub/MAJ0100300.vue')
    },
    {
      path: '/MAJ0100330',
      name: 'MAJ0100330',
      meta: { title: '사업자정보' },
      component: () => import('@/views/pub/MAJ0100330.vue')
    },

    {
      path: '/MAJ0205310',
      name: 'MAJ0205310',
      meta: { title: '기기연결' },
      component: () => import('@/views/pub/MAJ0205310.vue')
    },
    {
      path: '/MAJ0205340',
      name: 'MAJ0205340',
      meta: { title: '혈당계' },
      component: () => import('@/views/pub/MAJ0205340.vue')
    },
    {
      path: '/Dialogs',
      name: 'Dialogs',
      meta: { title: 'Dialogs' },
      component: () => import('@/views/pub/Dialogs.vue')
    },
    {
      path: '/MAJ0305720',
      name: 'MAJ0305720',
      meta: { title: '병원 최초 진입시' },
      component: () => import('@/views/pub/MAJ0305720.vue')
    },
    {
      path: '/MAJ0305721',
      name: 'MAJ0305721',
      meta: { title: '병원 검색어 결과' },
      component: () => import('@/views/pub/MAJ0305721.vue')
    },
    {
      path: '/MAJ0305730',
      name: 'MAJ0305730',
      meta: { title: '병원 목록 보기' },
      component: () => import('@/views/pub/MAJ0305730.vue')
    },
    {
      path: '/MAJ0305731',
      name: 'MAJ0305731',
      meta: { title: '병원 목록 보기(결과없음)' },
      component: () => import('@/views/pub/MAJ0305731.vue')
    },
    {
      path: '/MAJ0305735',
      name: 'MAJ0305735',
      meta: { title: '병원검색' },
      component: () => import('@/views/pub/MAJ0305735.vue')
    },
    {
      path: '/MAJ0305740',
      name: 'MAJ0305740',
      meta: { title: '병원 상세' },
      component: () => import('@/views/pub/MAJ0305740.vue')
    },
    {
      path: '/MAJ0305750',
      name: 'MAJ0305750',
      meta: { title: '약국 목록 보기' },
      component: () => import('@/views/pub/MAJ0305750.vue')
    },
    {
      path: '/MAJ0305750_02',
      name: 'MAJ0305750_02',
      meta: { title: '약국 상세' },
      component: () => import('@/views/pub/MAJ0305750_02.vue')
    },
    {
      path: '/MAJ0305752',
      name: 'MAJ0305752',
      meta: { title: '약국검색 팝업' },
      component: () => import('@/views/pub/MAJ0305752.vue')
    },
    {
      path: '/Sticky',
      name: 'Sticky',
      meta: { title: 'Sticky' },
      component: () => import('@/views/pub/Sticky.vue')
    },
    {
      path: '/Lifeanimation',
      name: 'lifeanimation',
      meta: { title: 'Lifeanimation' },
      component: () => import('@/views/pub/Lifeanimation.vue')
    },
    {
      path: '/Lifeanimation2',
      name: 'lifeanimation2',
      meta: { title: 'Lifeanimation2' },
      component: () => import('@/views/pub/Lifeanimation2.vue')
    },
    {
      path: '/MAJ0204690',
      name: 'MAJ0204690',
      meta: { title: '마이페이지 서브 메인' },
      component: () => import('@/views/pub/MAJ0204690.vue')
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      meta: { title: '달력' },
      component: () => import('@/views/pub/Calendar.vue')
    },
    {
      path: '/MAJ0100380',
      name: 'MAJ0100380',
      meta: { title: '알림 목록' },
      component: () => import('@/views/pub/MAJ0100380.vue')
    },
    {
      path: '/MAJ0202970',
      name: 'MAJ0202970',
      meta: { title: '혈압' },
      component: () => import('@/views/pub/MAJ0202970.vue')
    },
    {
      path: '/MAJ0203020',
      name: 'MAJ0203020',
      meta: { title: '혈당' },
      component: () => import('@/views/pub/MAJ0203020.vue')
    },
    {
      path: '/MAJ0202856',
      name: 'MAJ0202856',
      meta: { title: '운동' },
      component: () => import('@/views/pub/MAJ0202856.vue')
    },
    {
      path: '/MAJ0202870',
      name: 'MAJ0202870',
      meta: { title: '운동 기록' },
      component: () => import('@/views/pub/MAJ0202870.vue')
    },
    {
      path: '/MAJ0202857',
      name: 'MAJ0202857',
      meta: { title: '건강 플랫폼 미연동/ 거부 시' },
      component: () => import('@/views/pub/MAJ0202857.vue')
    },
    {
      path: '/TimeCount',
      name: 'TimeCount',
      meta: { title: 'TimeCount' },
      component: () => import('@/views/pub/TimeCount.vue')
    },
    {
      path: '/MAJ0106600',
      name: 'MAJ0106600',
      meta: { title: '심리테스트' },
      component: () => import('@/views/pub/MAJ0106600.vue')
    },
    {
      path: '/MAJ0106700',
      name: '건강검진 설문',
      meta: { title: '건강검진 설문' },
      component: () => import('@/views/pub/MAJ0106700.vue')
    },
    {
      path: '/MAJ0106800',
      name: 'MAJ0106800',
      meta: { title: '심리 설문' },
      component: () => import('@/views/pub/MAJ0106800.vue')
    },
    {
      path: '/MAJ0202847',
      name: 'MAJ0202847',
      meta: { title: '건강 - 카운트다운' },
      component: () => import('@/views/pub/MAJ0202847.vue')
    },
    {
      path: '/MAJ0202849',
      name: 'MAJ0202849',
      meta: { title: '운동 측정 종료' },
      component: () => import('@/views/pub/MAJ0202849.vue')
    },
    {
      path: '/MAJ0100130',
      name: 'MAJ0100130',
      meta: { title: '약관 팝업' },
      component: () => import('@/views/pub/MAJ0100130.vue')
    },
    {
      path: '/DocumentModal',
      name: 'DocumentModal',
      meta: { title: '풀페이지팝업' },
      component: () => import('@/views/pub/DocumentModal.vue')
    },
    {
      path: '/Toast',
      name: 'Toast',
      meta: { title: '토스트 팝업' },
      component: () => import('@/views/pub/Toast.vue')
    },
    {
      path: '/LayoutGuide',
      name: 'LayoutGuide',
      meta: { title: '컨텐츠 여백 가이드' },
      component: () => import('@/views/pub/LayoutGuide.vue')
    },
    {
      path: '/LifelogRecord',
      name: 'LifelogRecord',
      meta: { title: '상세 기록 케이스' },
      component: () => import('@/views/pub/LifelogRecord.vue')
    },
    {
      path: '/LifelogAnalysis',
      name: 'LifelogAnalysis',
      meta: { title: '상세 분석 케이스' },
      component: () => import('@/views/pub/LifelogAnalysis.vue')
    }
  ]
})

export default router
