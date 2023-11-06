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
      path: '/MAJ0104640/no-data',
      name: 'MAJ0104640Nodata',
      meta: { title: '검색결과X' },
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
      meta: { title: '1:1 문의 상세 - 답변완료' },
      component: () => import('@/views/pub/MAJ0104660.vue')
    },
    {
      path: '/MAJ0104660/waiting',
      name: 'MAJ0104660Waiting',
      meta: { title: '1:1 문의 상세 - 접수대기중' },
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
      path: '/MAJ0203392',
      name: 'MAJ0203392',
      meta: { title: '심박기록' },
      component: () => import('@/views/pub/MAJ0203392.vue')
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
      path: '/MAJ0203420',
      name: 'MAJ0203420',
      meta: { title: '복약' },
      component: () => import('@/views/pub/MAJ0203420.vue')
    },
    {
      path: '/MAJ0203424',
      name: 'MAJ0203424',
      meta: { title: '약,영양제 목록' },
      component: () => import('@/views/pub/MAJ0203424.vue')
    },
    {
      path: '/MAJ0203520',
      name: 'MAJ0203520',
      meta: { title: '약 알림 확인' },
      component: () => import('@/views/pub/MAJ0203520.vue')
    },
    {
      path: '/MAJ0203570',
      name: 'MAJ0203570',
      meta: { title: '약 알림 추가하기' },
      component: () => import('@/views/pub/MAJ0203570.vue')
    },
    {
      path: '/MAJ0203521',
      name: 'MAJ0203521',
      meta: { title: '약 검색' },
      component: () => import('@/views/pub/MAJ0203521.vue')
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
      path: '/MAJ0104230',
      name: 'MAJ0104230',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104230.vue')
    },
    {
      path: '/MAJ0104240',
      name: 'MAJ0104240',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104240.vue')
    },
    {
      path: '/MAJ0104241',
      name: 'MAJ0104241',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104241.vue')
    },
    {
      path: '/MAJ0104242',
      name: 'MAJ0104242',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104242.vue')
    },
    {
      path: '/MAJ0104243',
      name: 'MAJ0104243',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104243.vue')
    },
    {
      path: '/MAJ0104244',
      name: 'MAJ0104244',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104244.vue')
    },
    {
      path: '/MAJ0104246',
      name: 'MAJ0104246',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104246.vue')
    },
    {
      path: '/MAJ0104247',
      name: 'MAJ0104247',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104247.vue')
    },
    {
      path: '/MAJ0104250',
      name: 'MAJ0104250',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104250.vue')
    },
    {
      path: '/MAJ0104260',
      name: 'MAJ0104260',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104260.vue')
    },
    {
      path: '/MAJ0104261',
      name: 'MAJ0104261',
      meta: { title: '친구초대 이벤트' },
      component: () => import('@/views/pub/MAJ0104261.vue')
    },
    {
      path: '/MAJ0104262',
      name: 'MAJ0104262',
      meta: { title: '친구초대 이벤트' },
      component: () => import('@/views/pub/MAJ0104262.vue')
    },
    {
      path: '/MAJ0104245',
      name: 'MAJ0104245',
      meta: { title: '이벤트' },
      component: () => import('@/views/pub/MAJ0104245.vue')
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
    },
    {
      path: '/MAJ0407001-1',
      name: 'MAJ0407001-1',
      meta: { title: '챌린지 안내 - AI 추천 챌린지' },
      component: () => import('@/views/pub/MAJ0407001-1.vue')
    },
    {
      path: '/MAJ0407001-2',
      name: 'MAJ0407001-2',
      meta: { title: '챌린지 안내 - 혈당 개선 전문 챌린지' },
      component: () => import('@/views/pub/MAJ0407001-2.vue')
    },
    {
      path: '/MAJ0407001-3',
      name: 'MAJ0407001-3',
      meta: { title: '챌린지 안내 - 혈압 개선 전문 챌린지' },
      component: () => import('@/views/pub/MAJ0407001-3.vue')
    },
    {
      path: '/MAJ0407001-4',
      name: 'MAJ0407001-4',
      meta: { title: '챌린지 안내 - 혈관건강 전문 챌린지' },
      component: () => import('@/views/pub/MAJ0407001-4.vue')
    },
    {
      path: '/MAJ0407001-5',
      name: 'MAJ0407001-5',
      meta: { title: '챌린지 안내 - 체중감량 전문 챌린지' },
      component: () => import('@/views/pub/MAJ0407001-5.vue')
    },
    {
      path: '/MAJ0407001-6',
      name: 'MAJ0407001-6',
      meta: { title: '챌린지 안내 - 근력향상 전문 챌린지' },
      component: () => import('@/views/pub/MAJ0407001-6.vue')
    },
    {
      path: '/MAJ0407001-7',
      name: 'MAJ0407001-7',
      meta: { title: '챌린지 안내 - 요요방지 전문 챌린지' },
      component: () => import('@/views/pub/MAJ0407001-7.vue')
    },
    {
      path: '/MAJ0204051',
      name: 'MAJ0204051',
      meta: { title: '챌린지 안내 - 걷기 챌린지' },
      component: () => import('@/views/pub/MAJ0204051.vue')
    },
    {
      path: '/MAJ0204060-1',
      name: 'MAJ0204060-1',
      meta: { title: '기간선택' },
      component: () => import('@/views/pub/MAJ0204060-1.vue')
    },
    {
      path: '/MAJ0204060-2',
      name: 'MAJ0204060-2',
      meta: { title: '플랫폼 연결 안내' },
      component: () => import('@/views/pub/MAJ0204060-2.vue')
    },
    {
      path: '/MAJ0407002-1',
      name: 'MAJ0407002-1',
      meta: { title: '챌린지 안내 - 1주 체험 안내' },
      component: () => import('@/views/pub/MAJ0407002-1.vue')
    },
    {
      path: '/MAJ0407002-2',
      name: 'MAJ0407002-2',
      meta: { title: '챌린지 안내 - 1주 체험 안내(바텀시트)' },
      component: () => import('@/views/pub/MAJ0407002-2.vue')
    },
    {
      path: '/MAJ0407003-1',
      name: 'MAJ0407003-1',
      meta: { title: '챌린지 인증 답변형' },
      component: () => import('@/views/pub/MAJ0407003-1.vue')
    },
    {
      path: '/MAJ0407003-2',
      name: 'MAJ0407003-2',
      meta: { title: '챌린지 인증 답변형 : 인증완료(토스트)' },
      component: () => import('@/views/pub/MAJ0407003-2.vue')
    },
    {
      path: '/MAJ0407003-3',
      name: 'MAJ0407003-3',
      meta: { title: '챌린지 인증 답변형 : 중단(팝업)' },
      component: () => import('@/views/pub/MAJ0407003-3.vue')
    },
    {
      path: '/MAJ0407004-1',
      name: 'MAJ0407004-1',
      meta: { title: '챌린지 인증 퀴즈형 - Disabled' },
      component: () => import('@/views/pub/MAJ0407004-1.vue')
    },
    {
      path: '/MAJ0407004-2',
      name: 'MAJ0407004-2',
      meta: { title: '챌린지 인증 퀴즈형 - 오답' },
      component: () => import('@/views/pub/MAJ0407004-2.vue')
    },
    {
      path: '/MAJ0407004-3',
      name: 'MAJ0407004-3',
      meta: { title: '챌린지 인증 퀴즈형 - 정답' },
      component: () => import('@/views/pub/MAJ0407004-3.vue')
    },
    {
      path: '/MAJ0407004-4',
      name: 'MAJ0407004-4',
      meta: { title: '챌린지 인증 퀴즈형 - 인증완료' },
      component: () => import('@/views/pub/MAJ0407004-4.vue')
    },
    {
      path: '/MAJ0407005-1',
      name: 'MAJ0407005-1',
      meta: { title: 'TODO Tip1' },
      component: () => import('@/views/pub/MAJ0407005-1.vue')
    },
    {
      path: '/MAJ0407005-2',
      name: 'MAJ0407005-2',
      meta: { title: 'TODO Tip2' },
      component: () => import('@/views/pub/MAJ0407005-2.vue')
    },
    {
      path: '/MAJ0407005-3',
      name: 'MAJ0407005-3',
      meta: { title: 'TODO Tip3' },
      component: () => import('@/views/pub/MAJ0407005-3.vue')
    },
    {
      path: '/MAJ0407005-4',
      name: 'MAJ0407005-4',
      meta: { title: 'TODO Tip4' },
      component: () => import('@/views/pub/MAJ0407005-4.vue')
    },
    {
      path: '/MAJ0407007-1',
      name: 'MAJ0407007-1',
      meta: { title: '챌린지 인증 사진형' },
      component: () => import('@/views/pub/MAJ0407007-1.vue')
    },
    {
      path: '/MAJ0407007-2',
      name: 'MAJ0407007-2',
      meta: { title: '챌린지 인증 사진형 - 인증완료' },
      component: () => import('@/views/pub/MAJ0407007-2.vue')
    },
    {
      path: '/MAJ0407008-1',
      name: 'MAJ0407008-1',
      meta: { title: '수행 캘린더 - 인증 전' },
      component: () => import('@/views/pub/MAJ0407008-1.vue')
    },
    {
      path: '/MAJ0407008-2',
      name: 'MAJ0407008-2',
      meta: { title: '수행 캘린더 - 인증 후' },
      component: () => import('@/views/pub/MAJ0407008-2.vue')
    },
    {
      path: '/MAJ0407009-1',
      name: 'MAJ0407009-1',
      meta: { title: '챌린지 포기' },
      component: () => import('@/views/pub/MAJ0407009-1.vue')
    },
    {
      path: '/MAJ0407009-2',
      name: 'MAJ0407009-2',
      meta: { title: '챌린지 포기 : 포기완료(토스트)' },
      component: () => import('@/views/pub/MAJ0407009-2.vue')
    },
    {
      path: '/MAJ0407018',
      name: 'MAJ0407018',
      meta: { title: '건강 행동별 챌린지 수행률' },
      component: () => import('@/views/pub/MAJ0407018.vue')
    },
    {
      path: '/MAJ0407023-1',
      name: 'MAJ0407023-1',
      meta: { title: '챌린지 인증 건강정보 열람 인증형' },
      component: () => import('@/views/pub/MAJ0407023-1.vue')
    },
    {
      path: '/MAJ0407023-2',
      name: 'MAJ0407023-2',
      meta: { title: '챌린지 인증 건강정보 열람 인증형 - 인증완료' },
      component: () => import('@/views/pub/MAJ0407023-2.vue')
    },
    {
      path: '/MAJ0407024-1',
      name: 'MAJ0407024-1',
      meta: { title: '챌린지 완료 : 리뷰작성' },
      component: () => import('@/views/pub/MAJ0407024-1.vue')
    },
    {
      path: '/MAJ0407024-2',
      name: 'MAJ0407024-2',
      meta: { title: '챌린지 완료 : 등록완료(토스트)' },
      component: () => import('@/views/pub/MAJ0407024-2.vue')
    },
    {
      path: '/MAJ0407024-3',
      name: 'MAJ0407024-3',
      meta: { title: '챌린지 완료 : 2,000자(토스트)' },
      component: () => import('@/views/pub/MAJ0407024-3.vue')
    },
    {
      path: '/MAJ0407025',
      name: 'MAJ0407025',
      meta: { title: '챌린지 리뷰 목록' },
      component: () => import('@/views/pub/MAJ0407025.vue')
    },
    {
      path: '/MAJ0407026-1',
      name: 'MAJ0407026-1',
      meta: { title: '챌린지 리뷰 상세' },
      component: () => import('@/views/pub/MAJ0407026-1.vue')
    },
    {
      path: '/MAJ0407026-2',
      name: 'MAJ0407026-2',
      meta: { title: '챌린지 리뷰 상세 : 수정(바텀시트)' },
      component: () => import('@/views/pub/MAJ0407026-2.vue')
    },
    {
      path: '/MAJ0407026-3',
      name: '/MAJ0407026-3',
      meta: { title: '챌린지 리뷰 상세 : 등록완료(토스트)/수정, 삭제(팝업)' },
      component: () => import('@/views/pub/MAJ0407026-3.vue')
    },
    {
      path: '/MAJ0407026-4',
      name: 'MAJ0407026-4',
      meta: { title: '챌린지 리뷰 상세 : 삭제완료(토스트), 삭제(팝업)' },
      component: () => import('@/views/pub/MAJ0407026-4.vue')
    },
    {
      path: '/CmmPopup1',
      name: 'CmmPopup1',
      meta: { title: '공통 팝업1' },
      component: () => import('@/views/pub/CmmPopup1.vue')
    },
    {
      path: '/CmmPopup2',
      name: 'CmmPopup2',
      meta: { title: '공통 팝업2' },
      component: () => import('@/views/pub/CmmPopup2.vue')
    },
    {
      path: '/MAJ0100060',
      name: 'MAJ0100060',
      meta: { title: '서비스오류 안내' },
      component: () => import('@/views/pub/MAJ0100060.vue')
    },
    {
      path: '/CmmPopupSns',
      name: 'CmmPopupSns',
      meta: { title: '공유하기 팝업' },
      component: () => import('@/views/pub/CmmPopupSns.vue')
    },
    {
      path: '/MAJ0202770',
      name: 'MAJ0202770',
      meta: { title: '건강뉴스 목록' },
      component: () => import('@/views/pub/MAJ0202770.vue')
    },
    {
      path: '/MAJ0202771',
      name: 'MAJ0202771',
      meta: { title: '관심뉴스 설정' },
      component: () => import('@/views/pub/MAJ0202771.vue')
    },
    {
      path: '/MAJ0202781',
      name: 'MAJ0202781',
      meta: { title: '건강뉴스 검색' },
      component: () => import('@/views/pub/MAJ0202781.vue')
    },
    {
      path: '/MAJ0202782',
      name: 'MAJ0202782',
      meta: { title: '건강뉴스 - 카테고리 설정' },
      component: () => import('@/views/pub/MAJ0202782.vue')
    },
    {
      path: '/MAJ0202785',
      name: 'MAJ0202785',
      meta: { title: '건강뉴스 - 퀴즈팝업' },
      component: () => import('@/views/pub/MAJ0202785.vue')
    },
    {
      path: '/MAJ0202780',
      name: 'MAJ0202780',
      meta: { title: '건강뉴스 상세' },
      component: () => import('@/views/pub/MAJ0202780.vue')
    },
    {
      path: '/MAJ0202780/Quiz2',
      name: 'MAJ0202780Quiz2',
      meta: { title: '건강뉴스 상세' },
      component: () => import('@/views/pub/MAJ0202780.vue')
    },
    {
      path: '/MAJ0305800',
      name: 'MAJ0305800',
      meta: { title: '건강검진결과 인덱스' },
      component: () => import('@/views/pub/MAJ0305800.vue')
    },
    {
      path: '/MAJ0305800-1',
      name: 'MAJ0305800-1',
      meta: { title: '건강검진결과 인덱스 케이스' },
      component: () => import('@/views/pub/MAJ0305800-1.vue')
    },
    {
      path: '/MAJ0305820',
      name: 'MAJ0305820',
      meta: { title: '건강검진결과 검사항목 상세' },
      component: () => import('@/views/pub/MAJ0305820.vue')
    },
    {
      path: '/MAJ0305820-1',
      name: 'MAJ0305820-1',
      meta: { title: '건강검진결과 검사항목 상세 (최대)' },
      component: () => import('@/views/pub/MAJ0305820-1.vue')
    },
    {
      path: '/MAJ0305820-2',
      name: 'MAJ0305820-2',
      meta: { title: '건강검진결과 검사항목 상세 (정상)' },
      component: () => import('@/views/pub/MAJ0305820-2.vue')
    },
    {
      path: '/Tooltip',
      name: 'Tooltip',
      meta: { title: 'Tooltip' },
      component: () => import('@/views/pub/Tooltip.vue')
    },
    {
      path: '/MAJ0203001',
      name: 'MAJ0203001',
      meta: { title: '혈압 측정 방법' },
      component: () => import('@/views/pub/MAJ0203001.vue')
    },
    {
      path: '/MAJ0106801',
      name: 'MAJ0106801',
      meta: { title: '성격특질검사 결과' },
      component: () => import('@/views/pub/MAJ0106801.vue')
    },
    {
      path: '/MAJ0106802',
      name: 'MAJ0106802',
      meta: { title: '모든 성격유형' },
      component: () => import('@/views/pub/MAJ0106802.vue')
    },
    {
      path: '/MAJ0106804',
      name: 'MAJ0106804',
      meta: { title: '성격유형검사 결과' },
      component: () => import('@/views/pub/MAJ0106804.vue')
    },
    {
      path: '/MAJ0106813',
      name: 'MAJ0106813',
      meta: { title: '성격특질검사 안내' },
      component: () => import('@/views/pub/MAJ0106813.vue')
    },
    {
      path: '/MAJ0106814',
      name: 'MAJ0106814',
      meta: { title: '성격특질검사 시작' },
      component: () => import('@/views/pub/MAJ0106814.vue')
    },
    {
      path: '/MAJ0106815',
      name: 'MAJ0106815',
      meta: { title: '성격유형검사 안내' },
      component: () => import('@/views/pub/MAJ0106815.vue')
    },
    {
      path: '/MAJ0106816',
      name: 'MAJ0106816',
      meta: { title: '성격유형검사 시작' },
      component: () => import('@/views/pub/MAJ0106816.vue')
    },
    {
      path: '/MAJ0106817',
      name: 'MAJ0106817',
      meta: { title: '초대코드 입력' },
      component: () => import('@/views/pub/MAJ0106817.vue')
    },
    {
      path: '/MAJ0106818',
      name: 'MAJ0106818',
      meta: { title: '마음건강검사 안내' },
      component: () => import('@/views/pub/MAJ0106818.vue')
    },
    {
      path: '/MAJ0106819',
      name: 'MAJ0106819',
      meta: { title: '마음건강검사 시작' },
      component: () => import('@/views/pub/MAJ0106819.vue')
    },
    {
      path: '/LoadCounter',
      name: 'LoadCounter',
      meta: { title: 'text counter' },
      component: () => import('@/views/pub/LoadCounter.vue')
    }
  ]
})

export default router
