<template>
  <div class="contents">
    <div class="title-area d-flex align-center">
      <h2 class="subTit-01">나의 활동</h2>
      <v-btn
        variant="flat"
        rounded="lg"
        height="32"
        color="#F2F4F6"
        class="text-primary px-3 ml-auto"
        >닉네임설정</v-btn
      >
    </div>
    <div class="tab-line mt-6">
      <v-tabs v-model="tabInit" align-tabs="start" class="mb-8">
        <v-tab
          v-for="(item, i) in tabItems"
          :key="item.id"
          :value="i"
          :ripple="false"
          :data-count="item.tabCount"
        >
          {{ item.titleTab }}
        </v-tab>
      </v-tabs>
    </div>
    <v-window v-model="tabInit">
      <v-window-item>
        <div class="list-area type-5">
          <ul class="list">
            <li class="question" v-for="(item, i) in ActivityList" :key="i">
              <v-btn variant="text" class="linkbox" block @click="linkFunc">
                <div class="d-flex gap-8 align-center">
                  <span class="badge" :class="getStyle(item.badge)">{{
                    item.badge
                  }}</span>
                  <span class="badge" :class="getStyle(item.badge2)">{{
                    item.badge2
                  }}</span>
                  <v-btn
                    variant="flat"
                    density="compact"
                    icon="mdi-garbage"
                    class="ml-auto"
                    @click.stop="garbageFunc"
                    height="28"
                  ></v-btn>
                </div>
                <p class="summary pt-3">{{ item.summary }}</p>
                <div class="data-area mt-4">
                  <div class="left-text">
                    <span v-if="item.master">{{ item.master }}</span>
                    <span v-if="item.date">{{ item.date }}</span>
                  </div>
                  <div class="right-text">
                    <span
                      ><v-icon class="icon-reply mr-2" />댓글&nbsp;{{
                        item.reply
                      }}</span
                    >
                    <span
                      ><v-icon class="icon-eye mr-2" />조회수&nbsp;{{
                        item.hit
                      }}</span
                    >
                  </div>
                </div>
              </v-btn>
            </li>
          </ul>
        </div>
      </v-window-item>
      <v-window-item>
        <div class="list-area type-5">
          <ul class="list">
            <li class="question" v-for="(item, i) in ActivityList2" :key="i">
              <v-btn variant="text" class="linkbox" block @click="linkFunc">
                <div class="d-flex gap-8 align-center">
                  <span class="badge" :class="getStyle(item.badge)">{{
                    item.badge
                  }}</span>
                  <v-btn
                    variant="flat"
                    density="compact"
                    icon="mdi-garbage"
                    class="ml-auto"
                    @click.stop="garbageFunc"
                    height="28"
                  ></v-btn>
                </div>
                <p class="summary pt-3">{{ item.summary }}</p>
                <p class="summary-a pt-3">{{ item.summaryReply }}</p>
                <div class="mt-4 fs-14 text-grey">
                  {{ item.date }}
                </div>
              </v-btn>
            </li>
          </ul>
        </div>
      </v-window-item>
    </v-window>
  </div>
</template>
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const tabInit = ref(null)
      const tabItems = ref([
        { titleTab: '내가 쓴 글', tabCount: '4' },
        { titleTab: '내가 쓴 댓글', tabCount: '3' }
      ])
      const ActivityList = ref([
        {
          badge: '답변대기',
          badge2: '기타',
          summary: '문제가 있는 것 같아요. 어떻게 하면 좋을까요?',
          master: '의사선생님',
          date: '2022.11.24',
          reply: '1',
          hit: '2'
        },
        {
          badge: '답변완료',
          badge2: '다이어트',
          summary: '문제가 있는 것 같아요. 어떻게 하면 좋을까요?',
          master: '의사선생님선생님',
          date: '2022.11.24',
          reply: '100',
          hit: '2000'
        },
        {
          badge: '답변완료',
          badge2: '다이어트',
          summary: '문제가 있는 것 같아요. 어떻게 하면 좋을까요?',
          date: '2022.11.24',
          reply: '1',
          hit: '2'
        },
        {
          badge: '답변대기',
          badge2: '다이어트',
          summary: '문제가 있는 것 같아요. 어떻게 하면 좋을까요?',
          date: '2022.11.24',
          reply: '1',
          hit: '100'
        }
      ])
      const ActivityList2 = ref([
        {
          badge: '피부미용',
          summary: '얼굴에 뭐가 났어요',
          summaryReply: '저도 그런 현상이 있었어요. 지금은 괜찮아요.',
          date: '2022.11.24'
        },
        {
          badge: '피부미용',
          summary: '얼굴에 뭐가 났어요',
          summaryReply: '저도 그런 현상이 있었어요. 지금은 괜찮아요.',
          date: '2022.11.24'
        },
        {
          badge: '게시글 카테고리',
          summary:
            '얼굴에 뭐가 났어요얼굴에 뭐가 났어요얼굴에 뭐가 났어요얼굴에 뭐가 났어요',
          summaryReply:
            '저도 그런 현상이 있었어요. 지금은 괜찮아요. 저도 그런 현상이 있었어요. 지금은 괜찮아요.',
          date: '2022.11.24'
        }
      ])
      function getStyle(id) {
        switch (id) {
          case '답변대기':
            return 'waiting'
          case '답변완료':
            return 'ing'
          default:
            return 'accept'
        }
      }
      const linkFunc = () => {
        alert('올라케어 상세이동')
      }
      const garbageFunc = () => {
        alert('글 삭제')
      }
      return {
        tabInit,
        tabItems,
        ActivityList,
        ActivityList2,
        getStyle,
        linkFunc,
        garbageFunc
      }
    }
  }
</script>
