<template>
  <div class="contents">
    <!-- tab-line -->
    <div class="tab-line">
      <v-tabs v-model="tabInit" align-tabs="start">
        <v-tab
          v-for="(item, i) in items"
          :key="item"
          :value="i"
          :ripple="false"
          class="fs-20"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </div>
    <v-window v-model="tabInit" class="mt-7">
      <!-- 포인트리 가져오기 -->
      <v-window-item value="1">
        <div class="tit-03 lh-4">
          홍길동님의 포인트리를<br />
          리워드포인트로 가져올게요
        </div>
        <v-checkbox
          v-model="selected"
          :value="checkbox"
          class="checked-agree"
          @change="text = selected"
        >
          <template v-slot:label>{{ checkbox }} 모두입력</template>
        </v-checkbox>
        <div class="textfield-area pt-0">
          <v-text-field
            class="input-basic textfield-default"
            v-model="text"
            label="교환할 포인트리"
            placeholder="교환할 포인트리를 입력해주세요"
            required
            clearable
            persistent-placeholder
            variant="outlined"
            @click:clear="onClear"
          >
          </v-text-field>
        </div>
        <v-card variant="flat" rounded="lg" color="#F8F8F8" class="pa-4 mt-7">
          <div class="tit-01 color pb-4">이용안내</div>
          <ul class="list-circle type-2">
            <li v-for="(item, i) in list1" :key="i">{{ item }}</li>
          </ul>
        </v-card>
      </v-window-item>
      <!-- 포인트리로 보내기 -->
      <v-window-item value="2">
        <div class="tit-03 lh-4">
          홍길동님의 리워드포인트를<br />
          포인트리로 내보낼게요
        </div>
        <v-checkbox
          v-model="selected"
          :value="checkbox"
          class="checked-agree"
          @change="text = selected"
        >
          <template v-slot:label>{{ checkbox }} 모두입력</template>
        </v-checkbox>
        <div class="textfield-area pt-0">
          <v-text-field
            class="input-basic textfield-default"
            v-model="text"
            label="교환할 리워드포인트"
            placeholder="교환할 리워드포인트를 입력해주세요"
            required
            clearable
            persistent-placeholder
            variant="outlined"
            @click:clear="onClear"
          >
          </v-text-field>
        </div>
        <v-card variant="flat" rounded="lg" color="#F8F8F8" class="pa-4 mt-7">
          <div class="tit-01 color pb-4">이용안내</div>
          <ul class="list-circle type-2">
            <li v-for="(item, i) in list2" :key="i">{{ item }}</li>
          </ul>
        </v-card>
      </v-window-item>
    </v-window>

    <div class="btn-bottom">
      <div class="btn-area d-flex">
        <!-- <v-btn variant="text" height="56px" class="btn-cancel">삭제하기</v-btn> -->
        <v-btn variant="text" height="56px" class="btn-summit">교환하기</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup() {
      const tabInit = ref(0)
      const items = ref([
        { title: '포인트리 가져오기' },
        { title: '포인트리 보내기' }
      ])
      const selected = ref([])
      const text = ref('')
      const checkbox = ref('10,151')
      const list1 = ref([
        '포인트리는 1P는 포인트리 1P로 교환됩니다',
        '포인트리는 0000단위로 교환되며, 월 최대 0000P까지 교환 가능합니다',
        '스타포인트는 포인트리로 교환이 불가합니다',
        '리워드포인트로 교환완료 시 취소 및 정정이 불가합니다',
        '교환 신청 후 리워드포인트로 들어오는데 다소 시간이 걸릴 수 있습니다'
      ])
      const list2 = ref([
        '리워드포인트는 1P는 포인트리 1P로 교환됩니다',
        '리워드포인트는 0000단위로 교환되며, 월 최대 0000P까지 교환 가능합니다',
        '스타포인트는 리워드포인트로 교환이 불가합니다',
        '포인트리로 교환완료 시 취소 및 정정이 불가합니다',
        '교환 신청 후 포인트리로 들어오는데 다소 시간이 걸릴 수 있습니다'
      ])
      function onClear() {
        text.value = ''
      }
      return {
        tabInit,
        items,
        checkbox,
        selected,
        text,
        list1,
        list2,
        onClear
      }
    }
  }
</script>
