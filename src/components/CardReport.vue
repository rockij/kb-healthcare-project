<template>
  <v-card variant="flat" class="card-report">
    <v-card-title>
      <div class="d-flex align-center">
        <div class="text-date"><slot name="date">날짜</slot></div>
      </div>
      <!-- 버튼영역 -->

      <div class="btn-area" v-if="btn">
        <!-- 기능버튼 -->
        <v-btn
          icon
          variant="flat"
          density="compact"
          @click="$emit('handleClick')"
        >
          <img src="/assets/images/icon-more.svg" alt="삭제" />
        </v-btn>
      </div>
    </v-card-title>
    <v-card-item>
      <slot name="content">내용</slot>
    </v-card-item>
  </v-card>
</template>

<script>
  export default {
    props: ['btn'],
    setup() {
      return {}
    }
  }
</script>
