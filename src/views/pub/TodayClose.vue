<template>
  <!--contents-->
  <div class="contents">
    <v-btn color="primary" dark @click="dialog = true"> BottomSheet </v-btn>
    <br /><br />
    <v-btn color="primary" dark @click="dialog4 = true">
      BottomSheet (닫기)
    </v-btn>
    <br /><br />
    <v-btn color="primary" dark @click="dialog2 = true"> CenterPopup </v-btn>
    <br /><br />
    <v-btn color="primary" dark @click="dialog3 = true"> FullPopup </v-btn>
    <br /><br />
    <v-btn color="primary" dark @click="dialog5 = true">
      FullPopup (닫기)
    </v-btn>

    <v-dialog
      v-model="dialog"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <v-card>
        <div class="modal-body-img">
          <div class="flex-shrink-0 modal-body-container">
            <swiper
              :pagination="{
                type: 'fraction'
              }"
              :autoplay="{
                delay: 2500
              }"
              :loop="true"
              :modules="modules"
              class="baner-bottomsheet-slide"
            >
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-attend1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-attend1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="d-flex align-center w-100">
          <v-btn
            variant="text"
            height="54px"
            class="flex-1 px-0 fs-16 font-weight-regular"
            @click="dialog = false"
            >오늘 그만보기</v-btn
          >
          <v-divider
            class="border-opacity-100 align-self-center"
            :thickness="1"
            color="#eee"
            style="height: 26px"
            vertical
          />
          <v-btn
            prepend-icon="icon-x"
            variant="text"
            height="54px"
            class="flex-1 px-0 mx-0 fs-16 font-weight-bold"
            @click="dialog = false"
            >닫기</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
    <!-- //bottomsheet -->

    <v-dialog
      v-model="dialog4"
      fullscreen
      :scrim="true"
      transition="dialog-bottom-transition"
      class="modal-bottom"
    >
      <v-card>
        <div class="modal-body-img">
          <div class="flex-shrink-0 modal-body-container">
            <swiper
              :pagination="{
                type: 'fraction'
              }"
              :autoplay="{
                delay: 2500
              }"
              :loop="true"
              :modules="modules"
              class="baner-bottomsheet-slide"
            >
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-attend1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-attend1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="d-flex align-center justify-end w-100">
          <v-btn
            prepend-icon="icon-x"
            variant="text"
            width="90"
            height="54"
            class="px-0 mx-0 fs-16 font-weight-bold"
            @click="dialog4 = false"
            >닫기</v-btn
          >
        </div>
      </v-card>
    </v-dialog>
    <!-- //bottomsheet-닫기 -->

    <v-dialog v-model="dialog2" class="modal-dialog">
      <v-card rounded="xl">
        <div class="modal-body-img">
          <div class="flex-shrink-0 modal-body-container">
            <swiper
              :pagination="{
                type: 'fraction'
              }"
              :autoplay="{
                delay: 2500
              }"
              :loop="true"
              :modules="modules"
              class="baner-popup-slide"
            >
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-attend1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-attend1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <v-card-actions class="py-0 px-4">
          <div class="d-flex align-center w-100">
            <v-btn
              variant="text"
              height="54px"
              class="flex-0-0 fs-16 font-weight-regular justify-start ff-primary"
              @click="dialog2 = false"
              >오늘 그만보기</v-btn
            >
            <v-btn
              prepend-icon="icon-x"
              variant="text"
              height="54px"
              class="flex-0-0 ml-auto mx-0 fs-16 font-weight-bold justify-end ff-primary"
              @click="dialog2 = false"
              >닫기</v-btn
            >
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- //center-popup -->

    <v-dialog
      v-model="dialog3"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
      class="modal-full"
    >
      <v-card>
        <div class="modal-body-img scroll">
          <div class="flex-shrink-0 modal-body-container pb-14">
            <swiper
              :pagination="true"
              :autoHeight="true"
              :loop="true"
              :modules="modules"
              class="baner-fullpop-slide"
            >
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/dummy-page.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-default1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
            </swiper>
          </div>
          <v-card-actions class="py-0 bottom-area">
            <div class="d-flex align-center w-100">
              <v-btn
                variant="text"
                height="54px"
                class="flex-1 px-0 fs-16 font-weight-regular"
                @click="dialog3 = false"
                >오늘 그만보기</v-btn
              >
              <v-divider
                class="border-opacity-100 align-self-center"
                :thickness="1"
                color="#eee"
                style="height: 26px"
                vertical
              />
              <v-btn
                prepend-icon="icon-x"
                variant="text"
                height="54px"
                class="flex-1 px-0 mx-0 fs-16 font-weight-bold"
                @click="dialog3 = false"
                >닫기</v-btn
              >
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
    <!-- //full-popup -->

    <v-dialog
      v-model="dialog5"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
      class="modal-full"
    >
      <v-card>
        <div class="modal-body-img scroll">
          <div class="flex-shrink-0 modal-body-container pb-14">
            <swiper
              :pagination="true"
              :autoHeight="true"
              :loop="true"
              :modules="modules"
              class="baner-fullpop-slide"
            >
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/dummy-page.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
              <swiper-slide>
                <v-btn variant="text" height="auto" @click.stop="goPath('/')">
                  <img
                    src="/assets/images/event-default1.png"
                    alt="이미지 설명 문구"
                  />
                </v-btn>
              </swiper-slide>
            </swiper>
          </div>
          <v-card-actions class="py-0 bottom-area">
            <div class="d-flex align-center justify-end w-100">
              <v-btn
                prepend-icon="icon-x"
                variant="text"
                width="90"
                height="54"
                class="px-0 mx-0 fs-16 font-weight-bold"
                @click="dialog5 = false"
                >닫기</v-btn
              >
            </div>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
    <!-- //full-popup-닫기 -->
  </div>
  <!--//contents-->
</template>

<script>
  import router from '@/router'
  import { ref } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/pagination'
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      const dialog = ref(false)
      const dialog2 = ref(false)
      const dialog3 = ref(false)
      const dialog4 = ref(false)
      const dialog5 = ref(false)
      function goPath(val) {
        router.push(val)
      }

      return {
        dialog,
        dialog2,
        dialog3,
        dialog4,
        dialog5,
        goPath,
        modules: [Autoplay, Pagination]
      }
    }
  }
</script>
