<template>
  <v-dialog
    activator
    :v-model="`v-model`"
    fullscreen
    :scrim="true"
    transition="dialog-bottom-transition"
    class="modal-bottom"
  >
    <v-card>
      <v-toolbar dark color="white" height="auto">
        <v-toolbar-title class="modal-title">프로필 이미지</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('close')" class="btn-modal-close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div class="modal-body">
        <div class="flex-shrink-0 modal-body-container">
          <div class="list-select-profile">
            <div
              class="select-profile-items"
              v-for="profileList in profileList"
              :key="profileList"
            >
              <label :for="profileList" class="profile-items">
                <v-img
                  class="profile-img"
                  :src="`/assets/images/img-${profileList}.svg`"
                ></v-img>
                <input
                  type="radio"
                  name="profileItem"
                  :id="profileList"
                  :value="profileList"
                  v-model="imgSrc"
                  class="input-hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <v-card-actions>
        <v-btn
          height="48px"
          class="bdr-8 btn-yellow"
          block
          @click="
            $emit('update:imgSrc', 'img-' + imgSrc + '.svg'), $emit('close')
          "
          >확인</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { ref, watch } from 'vue'

  export default {
    props: ['imgSrc'],
    emits: ['close', 'update:imgSrc'],
    setup() {
      const profileList = ref([
        'profile01',
        'profile02',
        'profile03',
        'profile04',
        'profile05',
        'profile06'
      ])
      const imgSrc = ref('')
      return { profileList, imgSrc }
    }
  }
</script>
