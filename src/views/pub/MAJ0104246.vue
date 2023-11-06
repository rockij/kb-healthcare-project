<template>
    <div class="contents">
        <v-dialog
            activator
            v-model="dialog"
            fullscreen
            :scrim="true"
            transition="dialog-bottom-transition"
            class="modal-bottom"
        >
            <v-card>
                <v-toolbar dark color="white" height="auto">
                <v-toolbar-title class="modal-title">답변 선택</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="dialog = false" class="btn-modal-close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar>

                <div class="modal-body">
                    <div class="flex-shrink-0 modal-body-container">
                        <div class="agree-group">
                            <v-checkbox
                                v-model="checkedItem"
                                :value="item.id"
                                v-for="item in agreeItems"
                                :key="item.id"
                                class="checked-agree"
                            >
                                <template v-slot:label
                                >{{ item.text }}
                                <v-spacer></v-spacer>
                                <a
                                    target="_blank"
                                    :title="`${item.text} 약관보기`"
                                    href="https://vuetifyjs.com"
                                    @click.stop
                                >
                                    <v-icon
                                /></a>
                                </template>
                            </v-checkbox>
                        </div>
                    </div>
                </div>

                <v-card-actions>
                    <v-btn height="48px" @click="dialog = false" class="bdr-8 btn-yellow" block>확인</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const dialog = ref(true)
      const notifications = ref(false)
      const sound = ref(true)
      const widgets = ref(false)

      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 약과명1'
        },
        {
          id: 2,
          text: '[필수] 약과명2'
        }
      ])

      return { dialog, notifications, sound, widgets, agreeItems }
    }
  }
</script>

<style lang="scss" scoped></style>
