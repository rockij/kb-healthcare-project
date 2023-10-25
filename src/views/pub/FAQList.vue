<template>
  <ul class="list-faq">
    <li
      v-for="(item, i) in filteredList()"
      :key="i"
      @click="onClicked(item.path)"
    >
      <v-chip label size="small" class="chip-default mb-1">
        {{ getCategory(item.id) }}
      </v-chip>
      <div v-html="hightlight(item.title)" v-if="text"></div>
      <div v-else>{{ item.title }}</div>
    </li>
  </ul>
  <!-- no data -->
  <Nodata v-if="filteredList().length === 0" :icon="false">
    <div class="text-info-black">원하는 검색 결과가 없나요?</div>
    <div class="text-info-grey fs-16 mt-2">1:1 문의 주시면 답변 드릴게요</div>
    <v-btn
      variant="flat"
      rounded="lg"
      height="40"
      color="#F2F4F6"
      class="text-primary mt-7"
      @click="onClicked('MAJ0104670')"
    >
      1:1 문의하기
    </v-btn>
  </Nodata>
</template>

<script>
  import Nodata from '@/components/nodata/Nodata.vue'

  export default {
    props: ['text', 'list', 'getCategory', 'filteredList', 'hightlight'],
    emits: ['update'],
    components: { Nodata },
    setup(props, context) {
      const { emit } = context
      function onClicked(path) {
        emit('update', path)
      }

      return {
        onClicked
      }
    }
  }
</script>
