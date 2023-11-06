<template>
  <div class="contents">
    <!-- TermsModal -->
    <DocumentModal
      modalTitle="모든 성격유형"
      v-model="documentModal"
      @close="documentModal = false"
    >
      <template #modalBody>
        <div class="all-per-type">
            <div class="all-per-type-head">
                <p>11가지 성격유형을<br>확인해보세요</p>
            </div>
            <div class="all-per-type-cont">
                <div class="tab-line">
                    <v-tabs v-model="tabInit" align-tabs="start">
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
                    <v-window v-model="tabInit" class="mt-7">
                        <v-window-item
                            v-for="(item, i) in tabItems"
                            :key="i"
                        >   
                            <div class="type-cont">
                                <div class="card-img">
                                    <v-img
                                        :src="`/src/assets/images/` + item.card"
                                    ></v-img>
                                </div>
                                <span class="score-icon good"><span class="num">x2</span></span>
                                <p class="text">{{ item.text }}</p>
                            </div>
                        </v-window-item>
                    </v-window>
                </div>
            </div>
        </div>
      </template>
    </DocumentModal>
    <!-- //TermsModal -->
  </div>
</template>

<script>
    import { ref } from 'vue'
    import DocumentModal from '@/components/DocumentModal.vue'
    export default {
        components: { DocumentModal },
        setup() {
            const documentModal = ref(true)

            const tabInit = ref(null)
            const tabItems = ref([
                { 
                    titleTab: '성장지향',
                    card: 'per-result1.png',
                    text: '당신은 누구보다 하루하루를 성실하게 열심히 살고 있네요. 생활이 상당히 규칙적이고 일상에서 경험하는 지루함을 잘 견디며, 늘 한결같은 사람입니다. 끈기와 꾸준함이 자신의 감정이며, 성실함을 매우 중요한 가치로 여길 수 있어요. 다만 정해진 규칙만을 지나치게 고집하지 않도록 주의가 필요하며, 합리적인 변화를 수용하는 유연함을 잃지 않는다면 성실함은 당신의 가장 큰 장점일 수 있습니다.'
                },
                { 
                    titleTab: '성실/끈기',
                    card: 'per-result2.png',
                    text: '당신은 누구보다 하루하루를 성실하게 열심히 살고 있네요. 생활이 상당히 규칙적이고 일상에서 경험하는 지루함을 잘 견디며, 늘 한결같은 사람입니다. 끈기와 꾸준함이 자신의 감정이며, 성실함을 매우 중요한 가치로 여길 수 있어요. 다만 정해진 규칙만을 지나치게 고집하지 않도록 주의가 필요하며, 합리적인 변화를 수용하는 유연함을 잃지 않는다면 성실함은 당신의 가장 큰 장점일 수 있습니다.'
                },
                { 
                    titleTab: '자기유능감',
                    card: 'per-result3.png',
                    text: '당신은 누구보다 하루하루를 성실하게 열심히 살고 있네요. 생활이 상당히 규칙적이고 일상에서 경험하는 지루함을 잘 견디며, 늘 한결같은 사람입니다. 끈기와 꾸준함이 자신의 감정이며, 성실함을 매우 중요한 가치로 여길 수 있어요. 다만 정해진 규칙만을 지나치게 고집하지 않도록 주의가 필요하며, 합리적인 변화를 수용하는 유연함을 잃지 않는다면 성실함은 당신의 가장 큰 장점일 수 있습니다.'
                },
            ])

            return {
                documentModal,
                tabInit,
                tabItems
            }
        }
    }
</script>
