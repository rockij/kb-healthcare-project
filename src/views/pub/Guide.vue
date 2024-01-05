<template>
  <div class="contents">
    <h3 class="tit-pub-guide">_variables.scss</h3>
    <div class="pub-guide">
      <prism language="css">
        {{
          `$black: #26282c;
$white: #fff;
$vheight: 100dvh;
%defaultPadding { padding: 24px; }
$contentsPadding: 24px;
$contentsPaddingN: -24px;
`
        }}
      </prism>
    </div>
    <h3 class="tit-pub-guide">_mixin.scss</h3>
    <div class="pub-guide">
      <prism language="css">
        {{
          `background-image: 기본 포맷은 svg
@include bgimg('img-nodata');
font-weight: @include fontWeight(semibold);
width: toRem(275);
@include mediaScroller(toRem(8), toRem(104), toRem(96));
@include textOverflow(2);
`
        }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.title-area: 페이지 상단 타이틀 + 설명</h3>

    <div class="pub-guide-sample elevation-2">
      <div class="title-area">
        <p class="subTit-01">오건강님의 <br />문의 내역이에요</p>
        <p class="desc pt-4">
          문의가 많을 경우 시간이 걸릴 수 있으니 양해 부탁 드려요
        </p>
        <v-btn variant="text" class="slink">신체명칭 선택</v-btn>
      </div>
    </div>

    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="title-area">
          <p class="subTit-01">오건강님의 <br />문의 내역이에요</p>
          <p class="desc pt-4">
            문의가 많을 경우 시간이 걸릴 수 있으니 양해 부탁 드려요
          </p>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.tit-01: 페이지 내에 섹션별 타이틀</h3>
    <div class="pub-guide-sample elevation-2">
      <h2 class="tit-01 mt-7">FAQ</h2>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <h2 class="tit-01 mt-7">FAQ</h2>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">> 뱃지: 완료 = default / 대기중 = .waiting</h3>
    <div class="pub-guide-sample elevation-2">
      <span class="badge waiting">대기중</span>
      <span class="badge ing">진행중</span>
      <span class="badge">완료</span>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <span class="badge waiting">대기중</span>
        <span class="badge ing">진행중</span>
        <span class="badge">완료</span>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">공통버튼</h3>
    <div class="pub-guide-sample elevation-2">
      <v-btn
        variant="flat"
        rounded="lg"
        height="32"
        color="#F2F4F6"
        class="text-primary px-3 ml-2"
        >주소복사</v-btn
      >
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <v-btn
          variant="flat"
          rounded="lg"
          height="32"
          color="#F2F4F6"
          class="text-primary px-3 ml-2"
          >주소복사</v-btn
        >
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">
      .info-group: 리스트에서 date + type / type 하나인 경우
    </h3>
    <div class="pub-guide-sample elevation-2">
      <div class="info-group">
        <span class="date">2013.09.10</span>
        <span class="type">정보연동</span>
      </div>
      <div class="info-group">
        <span class="type">정보연동</span>
      </div>
    </div>

    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="info-group">
          <span class="date">2013.09.10</span>
          <span class="type">정보연동</span>
        </div>
        <div class="info-group">
          <span class="type">정보연동</span>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.btn-bottom 하나</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56" class="btn-summit">문의하기</v-btn>
        </div>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="btn-bottom">
          <div class="btn-area d-flex">
            <v-btn variant="text" height="56" class="btn-summit"
              >문의하기</v-btn
            >
          </div>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.btn-bottom 두개</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56" class="btn-cancel">삭제하기</v-btn>
          <v-btn variant="text" height="56" class="btn-summit">문의하기</v-btn>
        </div>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="btn-bottom">
          <div class="btn-area d-flex">
            <v-btn variant="text" height="56" class="btn-cancel"
              >삭제하기</v-btn
            >
            <v-btn variant="text" height="56" class="btn-summit"
              >문의하기</v-btn
            >
          </div>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">btn-area2 두개</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="btn-area2">
        <v-btn
          variant="text"
          height="48px"
          class="bdr-8 fs-16 font-weight-bold cancel"
          block
          >초기화</v-btn
        >
        <v-btn
          variant="text"
          height="48px"
          class="bdr-8 fs-16 font-weight-bold skip"
          block
          >확인</v-btn
        >
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="btn-area2">
          <v-btn
            variant="text"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold cancel"
            block
            >초기화</v-btn
          >
          <v-btn
            variant="text"
            height="48px"
            class="bdr-8 fs-16 font-weight-bold skip"
            block
            >확인</v-btn
          >
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">disabled button</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="btn-bottom">
        <div class="btn-area d-flex">
          <v-btn variant="text" height="56" class="btn-summit" disabled
            >문의하기</v-btn
          >
        </div>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="btn-bottom">
          <div class="btn-area d-flex">
            <v-btn variant="text" height="56" class="btn-summit" disabled
              >문의하기</v-btn
            >
          </div>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">
      .btn-double : default 두개(백그라운드 없음, fixed 없음)
    </h3>
    <div class="pub-guide-sample elevation-2">
      <div class="btn-double">
        <v-btn variant="text" height="56" class="btn-cancel">삭제하기</v-btn>
        <v-btn variant="text" height="56" class="btn-summit">문의하기</v-btn>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="btn-double d-flex">
          <v-btn variant="text" height="56" class="btn-cancel">삭제하기</v-btn>
          <v-btn variant="text" height="56" class="btn-summit">문의하기</v-btn>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">바텀시트 하단 버튼(백그라운드 있음)</h3>
    <v-card-actions>
      <v-btn height="48" class="bdr-8 btn-yellow" block @click="onClicked"
        >확인</v-btn
      >
    </v-card-actions>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <v-card-actions>
          <v-btn height="48" class="bdr-8 btn-yellow" block @click="onClicked"
            >확인</v-btn
          >
        </v-card-actions>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">section 구분선</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="section-page">섹션</div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="section-page">섹션</div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">textfield 기본형: hint, error없음</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="textfield-area">
        <v-text-field
          class="input-basic textfield-default"
          v-model="name"
          label="제목"
          required
          clearable
          persistent-placeholder
          variant="outlined"
          readonly
        >
        </v-text-field>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="textfield-area">
          <v-text-field
            class="input-basic textfield-default"
            v-model="name"
            label="제목"
            required
            persistent-placeholder
            variant="outlined"
          >
          </v-text-field>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">textfield hint(caption)</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="textfield-area">
        <v-text-field
          class="input-hint textfield-default"
          v-model="caption"
          label="레이블"
          required
          clearable
          persistent-placeholder
          variant="outlined"
          placeholder="홍길동"
          hint="안내문구 영역입니다."
        ></v-text-field>
      </div>
      <div class="smDesc pt-2 pb-0 gap-4">
        <v-icon class="icon-caption" />
        <span class="text">
          의료진에게 묻기 서비스를 이용하기 위해 닉네임 설정이 필요합니다
        </span>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <v-text-field
          class="input-hint textfield-default"
          v-model="caption"
          label="레이블"
          required
          persistent-placeholder
          variant="outlined"
          placeholder="홍길동"
          clearable
          hint="안내문구 영역입니다."
        ></v-text-field>
        <div class="smDesc d-flex pt-2 pb-0">
          <v-avatar color="#ccc" size="16"
            ><span class="text-white" style="font-size: 8px">!</span></v-avatar
          >
          <span class="text">
            의료진에게 묻기 서비스를 이용하기 위해 닉네임 설정이 필요합니다
          </span>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">textfield error</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="textfield-area">
        <v-text-field
          class="textfield-default"
          :rules="[
            (v) => !!v || '인증번호를 입력해주세요',
            (v) =>
              (v && v.length <= 4) ||
              '인증번호가 잘못되었습니다. 재요청해주세요'
          ]"
          label="인증번호"
          required
          persistent-placeholder
          clearable
          variant="outlined"
        >
          <span class="input-count">5:00</span>
        </v-text-field>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <v-text-field
          class="textfield-default"
          :rules="[
            (v) => !!v || '인증번호를 입력해주세요',
            (v) =>
              (v && v.length <= 4) ||
              '인증번호가 잘못되었습니다. 재요청해주세요'
          ]"
          label="인증번호"
          required
          persistent-placeholder
          clearable
          variant="outlined"
        >
          <span class="input-count">5:00</span>
        </v-text-field>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">검색 textfield</h3>
    <div class="pub-guide-sample elevation-2">
      <v-text-field
        variant="outlined"
        rounded="xl"
        clearable
        placeholder="궁금하신 내용을 입력해 주세요"
        append-inner-icon="mdi-magnify"
        persistent-placeholder
        class="fs-16"
      ></v-text-field>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-text-field
          variant="outlined"
          rounded="xl"
          clearable
          placeholder="궁금하신 내용을 입력해 주세요"
          append-inner-icon="mdi-magnify"
          persistent-placeholder
          class="fs-16"
        ></v-text-field>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">loading dot</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="loading-dot"><span class="dot"></span></div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="loading-dot"><span class="dot"></span></div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">checkbox</h3>
    <div class="pub-guide-sample elevation-2">
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
          <a target="_blank" href="https://vuetifyjs.com" @click.stop>
            <v-icon>mdi-chevron-right</v-icon></a
          >
        </template>
      </v-checkbox>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `<v-checkbox
          v-model="checkedItem"
          :value="item.id"
          v-for="item in agreeItems"
          :key="item.id"
          class="checked-agree"
        >
          <template v-slot:label
            >\{\{ item.text \}\}
            <v-spacer></v-spacer>
            <a target="_blank" href="https://vuetifyjs.com" @click.stop>
              <v-icon>mdi-chevron-right</v-icon></a
            >
          </template> </v-checkbox
        >` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">checkbox(전체동의)</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="agree-group">
        <v-checkbox
          v-model="checkAll"
          label="전체동의"
          class="checked-agree checked-all mt-1"
        ></v-checkbox>
        <div class="agree-items mt-4">
          <v-checkbox
            v-model="checkedItem"
            :value="item.id"
            v-for="item in agreeItems"
            :key="item.id"
            class="checked-agree checked-sub"
          >
            <template v-slot:label
              >{{ item.text }}
              <v-spacer></v-spacer>
              <a target="_blank" href="https://vuetifyjs.com" @click.stop>
                <v-icon>mdi-chevron-right</v-icon></a
              >
            </template>
          </v-checkbox>
        </div>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <div class="agree-group">
          <v-checkbox
            v-model="checkAll"
            label="전체동의"
            class="checked-agree checked-all mt-1"
          ></v-checkbox>
          <div class="agree-items mt-4">
            <v-checkbox
              v-model="checkedItem"
              :value="item.id"
              v-for="item in agreeItems"
              :key="item.id"
              class="checked-agree checked-sub"
            >
              <template v-slot:label
                >\{\{ item.text \}\}
                <v-spacer></v-spacer>
                <a target="_blank" href="https://vuetifyjs.com" @click.stop>
                  <v-icon>mdi-chevron-right</v-icon></a
                >
              </template>
            </v-checkbox>
          </div>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">radio</h3>
    <div class="pub-guide-sample elevation-2">
      <v-radio-group>
        <v-radio
          v-for="list in radioList"
          :key="list.id"
          :label="`Radio-${list.id}`"
          :value="list.id"
          class="radio-basic"
        >
          <template v-slot:label>{{ list.text }}</template>
        </v-radio>
      </v-radio-group>
      <v-radio-group>
        <v-radio
          v-for="list in radioList"
          :key="list.id"
          :label="`Radio-${list.id}`"
          :value="list.id"
          class="radio-basic type"
        >
          <template v-slot:label>{{ list.text }}</template>
        </v-radio>
      </v-radio-group>
    </div>
    <div class="pub-guide">
      <prism language="markup">
        {{ `
        <v-radio-group>
          <v-radio
            v-for="list in radioList"
            :key="list.id"
            :label="\`\Radio-\$\{\list.id\}\`\"
            :value="list.id"
            class="radio-basic"
          >
            <template v-slot:label>\{\{\ list.text \}\}\</template>
          </v-radio>
        </v-radio-group>

        <v-radio-group>
          <v-radio
            v-for="list in radioList"
            :key="list.id"
            :label="\`\Radio-\$\{\list.id\}\`\"
            :value="list.id"
            class="radio-basic type"
          >
            <template v-slot:label>\{\{\ list.text \}\}\</template>
          </v-radio>
        </v-radio-group>
        `}}
      </prism>
    </div>

    <h3 class="tit-pub-guide">textarea default + focused</h3>
    <div class="pub-guide-sample elevation-2">
      <v-textarea
        class="textarea-basic textfield-default pt-4"
        persistent-counter
        :maxlength="1000"
        counter
        variant="outlined"
        no-resize
      >
        <template v-slot:counter="{ value, max }">
          <span class="current-value">{{ value }}</span> /
          <span class="max-length">{{ max }}</span>
        </template>
      </v-textarea>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-textarea
          class="textarea-basic textfield-default pt-4"
          persistent-counter
          :maxlength="1000"
          counter
          variant="outlined"
          no-resize
        >
          <template v-slot:counter="{ value, max }">
            <span class="current-value">\{\{ value \}\}</span> /
            <span class="max-length">\{\{ max \}\}</span>
          </template>
        </v-textarea>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">textarea readonly</h3>
    <div class="pub-guide-sample elevation-2">
      <v-textarea
        class="textarea-basic textfield-default pt-4"
        persistent-counter
        :maxlength="1000"
        :model-value="textareaValue"
        counter
        variant="outlined"
        no-resize
        readonly
      >
        <template v-slot:counter="{ value, max }">
          <span class="current-value">{{ value }}</span> /
          <span class="max-length">{{ max }}</span>
        </template>
      </v-textarea>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-textarea
          class="textarea-basic textfield-default pt-4"
          persistent-counter
          :maxlength="1000"
          :model-value="textareaValue"
          counter
          variant="outlined"
          no-resize
          readonly
        >
          <template v-slot:counter="{ value, max }">
            <span class="current-value">\{\{ value \}\}</span> /
            <span class="max-length">\{\{ max \}\}</span>
          </template>
        </v-textarea>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">avatar</h3>
    <div class="pub-guide-sample elevation-2">
      <v-avatar color="#cccccc" size="16"
        ><span class="text-white" style="font-size: 8px">!</span></v-avatar
      >
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-avatar color="#cccccc" size="16"
          ><span class="text-white" style="font-size: 8px">!</span></v-avatar
        >
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">chip</h3>
    <div class="pub-guide-sample elevation-2">
      <v-chip
        v-if="chip"
        class="file-chip mt-4"
        closable
        @click:close="chip = false"
      >
        IMG_1234.png
      </v-chip>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-chip
          v-if="chip"
          class="file-chip mt-4"
          closable
          @click:close="chip = false"
        >
          IMG_1234.png
        </v-chip>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">switch</h3>
    <div class="pub-guide-sample elevation-2">
      <v-switch
        class="switch-default"
        v-model="switchModel"
        label="default"
        color="#FFD338"
        value="on"
        hide-details
      ></v-switch>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-switch
          class="switch-default"
          v-model="switchModel"
          label="default"
          color="#FFD338"
          value="on"
          hide-details
        ></v-switch>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">switch on/disabled</h3>
    <div class="pub-guide-sample elevation-2">
      <v-switch
        class="switch-default"
        v-model="switchModel"
        label="on disabled"
        color="#FFD338"
        :model-value="true"
        hide-details
        disabled
      ></v-switch>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-switch
          class="switch-default"
          v-model="switchModel"
          label="on disabled"
          color="#FFD338"
          :model-value="true"
          hide-details
          disabled
        ></v-switch>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">switch off/disabled</h3>
    <div class="pub-guide-sample elevation-2">
      <v-switch
        class="switch-default"
        v-model="switchModel"
        label="off disabled"
        color="#FFD338"
        :model-value="false"
        hide-details
        disabled
      ></v-switch>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-switch
          class="switch-default"
          v-model="switchModel"
          label="off disabled"
          color="#FFD338"
          :model-value="false"
          hide-details
          disabled
        ></v-switch>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">switch on/off</h3>
    <div class="pub-guide-sample elevation-2">
      <v-switch
        class="switch-default switch-text"
        v-model="switchOff"
        :label="switchOff"
        color="#FFD338"
        true-value="on"
        false-value="off"
        hide-details
      ></v-switch>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-switch
          class="switch-default switch-text"
          v-model="switchOff"
          :label="switchOff"
          color="#FFD338"
          true-value="on"
          false-value="off"
          hide-details
        ></v-switch>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">label 바인딩</h3>
    <div class="pub-guide-sample elevation-2">
      <v-checkbox
        v-model="selected"
        :value="item.value"
        v-for="item in textItems"
        :key="item.id"
        class="checked-agree"
      >
        <template v-slot:label>{{ item.text }} </template>
      </v-checkbox>
      <div class="textfield-area pt-0">
        <v-text-field
          class="input-basic textfield-default"
          v-model="selected"
          label="교환할 포인트"
          required
          clearable
          persistent-placeholder
          variant="outlined"
        >
        </v-text-field>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-checkbox
          v-model="selected"
          :value="item.value"
          v-for="item in textItems"
          :key="item.id"
          class="checked-agree"
        >
          <template v-slot:label>\{\{ item.text \}\}</template>
        </v-checkbox>
        <div class="textfield-area pt-0">
          <v-text-field
            class="input-basic textfield-default"
            v-model="selected"
            label="교환할 포인트"
            required
            clearable
            persistent-placeholder
            variant="outlined"
          >
          </v-text-field>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">autocomplate</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="textfield-area autocomplete">
        <v-combobox
          class="input-basic textfield-default"
          label="이메일주소"
          :items="[
            'hong@naver.com',
            'hong@daum.net',
            'hong@gmail.com',
            'hong@nate.com',
            'hong@hanmail.net'
          ]"
          menu-icon=""
          required
          clearable
          type="email"
          placeholder="이메일 주소 입력"
          variant="outlined"
          v-model="email"
          @click:clear="onClear"
          :rules="emailRules"
          hide-no-data="true"
          return-object
        >
          <template v-slot:append>
            <span class="input-count"
              ><v-btn
                variant="tonal"
                color="primary"
                type="submit"
                class="flex-wrap btn-input-submit"
                v-if="!isActiveEmail"
                :disabled="!disable"
                @click="isActiveEmail = !isActiveEmail"
                >인증</v-btn
              >
              <v-btn
                variant="tonal"
                color="primary"
                :ripple="false"
                class="flex-wrap btn-input-submit"
                v-if="isActiveEmail"
                :disabled="!disable"
                >재발송</v-btn
              >
            </span>
          </template>
        </v-combobox>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="javascript"
        >{{ `
        <div class="textfield-area autocomplete">
          <v-combobox
            class="input-basic textfield-default"
            label="이메일주소"
            :items="[
              'hong@naver.com',
              'hong@daum.net',
              'hong@gmail.com',
              'hong@nate.com',
              'hong@hanmail.net'
            ]"
            menu-icon=""
            required
            clearable
            type="email"
            placeholder="이메일 주소 입력"
            variant="outlined"
            v-model="email"
            @click:clear="onClear"
            :rules="emailRules"
            hide-no-data="true"
            return-object
          >
            <template v-slot:append>
              <span class="input-count"
                ><v-btn
                  variant="tonal"
                  color="primary"
                  type="submit"
                  class="flex-wrap btn-input-submit"
                  v-if="!isActive"
                  :disabled="!disable"
                  @click="isActive = !isActive"
                  >인증</v-btn
                >
                <v-btn
                  variant="tonal"
                  color="primary"
                  :ripple="false"
                  class="flex-wrap btn-input-submit"
                  v-if="isActive"
                  :disabled="!disable"
                  >재발송</v-btn
                >
              </span>
            </template>
          </v-combobox>
        </div>

        const isActive = ref(false) const email = ref('') const disable =
        ref(false) const emailRules = ref([ (value) => !!value || '이메일을
        입력해주세요.', (value) => { if
        (/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
        value ) ) { disable.value = true return true } else { disable.value =
        false return '옳바른 이메일 양식이 아닙니다.' } } ]) const onClear = ()
        => { disable.value = false } return { isActive, email, emailRules,
        disable, onClear } ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">리스트</h3>
    <div class="pub-guide-sample elevation-2">
      <ul class="list-circle mt-4">
        <li v-for="(item, i) in list" :key="i">{{ item }}</li>
      </ul>
      <ul class="list-circle type mt-4">
        <li v-for="(item, i) in list" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <ul class="list-circle mt-4">
          <li v-for="(item, i) in list" :key="i">\{\{ item \}\}</li>
        </ul>
        <ul class="list-circle type mt-4">
          <li v-for="(item, i) in list" :key="i">\{\{ item \}\}</li>
        </ul>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.list-article</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="list-article">
        <ul>
          <li>
            <v-btn variant="text" class="btn-box" :href="``">
              <h3 class="title arrow">연세 밝은 세상 안과</h3>
              <span class="title2">서울특별시 강남구 테헤란로 401 0층 0호</span>
              <span class="datalst">
                <span class="road">205m</span>
                <span>09:00~1900</span>
              </span>
              <span class="text">안과, 기타 진료과목명1</span>
            </v-btn>
          </li>
          <li>
            <v-btn variant="text" class="btn-box" :href="``">
              <h3 class="title star">강남초이스영상의학과의원</h3>
              <span class="title2">서울특별시 강남구 테헤란로 401 0층 0호</span>
              <span class="datalst">
                <span class="road">5m</span>
                <span>09:00~1900</span>
              </span>
              <span class="text">안과, 기타 진료과목명</span>
              <v-divider class="border-opacity-100 mb-3 mt-3" color="#eee" />
              <span class="tags">#여의사 #야간진료 #주말진료</span>
            </v-btn>
            <v-btn
              variant="text"
              :class="`btn-state ${isActive ? 'selected' : ''}`"
              @click="isActive = !isActive"
            >
              <span class="state" data-state="진료종료">진료종료</span>
              <i class="icon-star" />
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="list-article">
          <ul>
            <li>
              <v-btn variant="text" class="btn-box" :href="">
                <h3 class="title arrow">연세 밝은 세상 안과</h3>
                <span class="title2"
                  >서울특별시 강남구 테헤란로 401 0층 0호</span
                >
                <span class="datalst">
                  <span class="road">205m</span>
                  <span>09:00~1900</span>
                </span>
                <span class="text">안과, 기타 진료과목명1</span>
              </v-btn>
            </li>
            <li>
              <v-btn variant="text" :href="">
                <h3 class="title star">강남초이스영상의학과의원</h3>
                <span class="title2"
                  >서울특별시 강남구 테헤란로 401 0층 0호</span
                >
                <span class="datalst">
                  <span class="road">5m</span>
                  <span>09:00~1900</span>
                </span>
                <span class="text">안과, 기타 진료과목명</span>
                <span class="tags">#여의사 #야간진료 #주말진료</span>
              </v-btn>
              <v-btn
                variant="text"
                :class="\`btn-state \${isActive ? 'selected' : ''}\`\"
                @click="isActive = !isActive"
              >
                <span class="state" data-state="진료종료">진료종료</span>
                <i class="icon-star" />
              </v-btn>
            </li>
          </ul>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.list-thumb</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="list-thumb">
        <ul>
          <li>
            <v-btn variant="text" :href="'javsscript:;'">
              <img src="/assets/images/dummy-thumb.jpg" alt="" />
              <p class="text">
                눈 건강 가이드 연령별 매일 실천하면 지킬 수 있어요.눈 건강
                가이드 연령별 매일 실천하면 지킬 수 있어요.눈 건강 가이드 연령별
                매일 실천하면 지킬 수 있어요.눈 건강 가이드 연령별 매일 실천하면
                지킬 수 있어요.
              </p>
            </v-btn>
          </li>
          <li>
            <v-btn variant="text" :href="'javsscript:;'">
              <img src="/assets/images/dummy-thumb.jpg" alt="" />
              <p class="text">
                눈 건강 가이드 연령별 매일 실천하면 지킬 수 있어요.눈 건강
                가이드 연령별 매일 실천하면 지킬 수 있어요.
              </p>
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="list-thumb">
          <ul>
            <li>
              <v-btn variant="text" :href="">
                <img src="/assets/images/dummy-thumb.jpg" alt="" />
                <p class="text">
                  눈 건강 가이드 연령별 매일 실천하면 지킬 수 있어요.눈 건강
                  가이드 연령별 매일 실천하면 지킬 수 있어요.
                </p>
              </v-btn>
            </li>
          </ul>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.list-thumb2</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="list-thumb2 media-slide">
        <ul>
          <li>
            <v-btn variant="text" class="play" :href="'javsscript:;'">
              <span class="img"
                ><img src="/assets/images/dummy-thumb2.jpg" alt=""
              /></span>
              <p class="text">
                실명까지 올수 있다?! 여름철 눈관리 중요한 이유!
              </p>
            </v-btn>
          </li>
          <li>
            <v-btn variant="text" class="play" :href="'javsscript:;'">
              <span class="img"
                ><img src="/assets/images/dummy-thumb2.jpg" alt=""
              /></span>
              <p class="text">
                실명까지 올수 있다?! 여름철 눈관리 중요한 이유!
              </p>
            </v-btn>
          </li>
          <li>
            <v-btn variant="text" class="play" :href="'javsscript:;'">
              <span class="img"
                ><img src="/assets/images/dummy-thumb2.jpg" alt=""
              /></span>
              <p class="text">
                실명까지 올수 있다?! 여름철 눈관리 중요한 이유!
              </p>
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="list-thumb2 media-slide">
          <ul>
            <li>
              <v-btn variant="text" class="play" :href="">
                <span class="img"
                  ><img src="/assets/images/dummy-thumb2.jpg" alt=""
                /></span>
                <p class="text">
                  실명까지 올수 있다?! 여름철 눈관리 중요한 이유!
                </p>
              </v-btn>
            </li>
          </ul>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.list-iconbtn</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="list-iconbtn">
        <ul>
          <li>
            <v-btn variant="text" :href="'javsscript:;'">
              <figure class="icon-note" />
              <span class="text"
                >건강검진을 통해서 종합적인 관리를 할 수 있어요!
                <strong>건강검진 결과보기</strong></span
              >
            </v-btn>
          </li>
          <li>
            <v-btn variant="text" :href="'javsscript:;'">
              <figure class="icon-time" />
              <span class="text"
                >건강관리를 위해 작은 목표를 시작해 보아요!
                <strong>챌린지 시작하기</strong></span
              >
            </v-btn>
          </li>
        </ul>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="list-iconbtn">
          <ul>
            <li>
              <v-btn variant="text" :href="">
                <figure class="icon-note" />
                <span class="text"
                  >건강검진을 통해서 종합적인 관리를 할 수 있어요!
                  <strong>건강검진 결과보기</strong></span
                >
              </v-btn>
            </li>
          </ul>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.list-iconlst2</h3>
    <div class="pub-guide-sample elevation-2">
      <div
        v-for="list in nalcoholList"
        :key="list.id"
        class="list-iconlst2 mt-2"
      >
        <i :class="`icon${list.id}`"></i>
        <p>{{ list.text }}</p>
      </div>
      <br />
      <v-btn
        variant="text"
        v-for="list in nalcoholList"
        :key="list.id"
        class="list-iconlst2 mt-2"
      >
        <i :class="`icon${list.id}`"></i>
        <p>{{ list.text }}</p>
      </v-btn>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div
          v-for="list in nalcoholList"
          :key="list.id"
          class="list-iconlst2 mt-2"
        >
          <i :class="\`icon\$\{list.id\}\`\"></i>
          <p>\{\{\ list.text \}\}\</p>
        </div>

        <v-btn
          variant="text"
          v-for="list in nalcoholList"
          :key="list.id"
          class="list-iconlst2 mt-2"
        >
          <i :class="\`icon\$\{list.id\}\`\"></i>
          <p>\{\{\ list.text \}\}\</p>
        </v-btn>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.tabs-simple</h3>
    <div class="pub-guide-sample elevation-2">
      <div role="tablist" class="tabs-simple">
        <v-btn variant="text" role="tab" aria-selected="true">tab1</v-btn>
        <v-btn variant="text" role="tab" aria-selected="false">tab2</v-btn>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div role="tablist" class="tabs-simple">
          <v-btn variant="text" role="tab" aria-selected="true">몸 앞</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">몸 뒤</v-btn>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.tabs-simple type1</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="tabs-simple type1">
        <v-btn variant="text" class="btn-filter" title="필터" data-num="6" />
        <v-btn variant="text" class="active">이비인후과</v-btn>
        <v-btn variant="text">증상/질환</v-btn>
        <v-divider vertical />
        <v-btn variant="text" class="btn-clinic">진료중</v-btn>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="tabs-simple type1">
          <v-btn variant="text" class="btn-filter" title="필터" data-num="6" />
          <v-btn variant="text" class="active">이비인후과</v-btn>
          <v-btn variant="text">증상/질환</v-btn>
          <v-divider vertical />
          <v-btn variant="text" class="btn-clinic">진료중</v-btn>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.tabs-simple2</h3>
    <div class="pub-guide-sample elevation-2">
      <div role="tablit" class="tabs-simple2">
        <v-btn variant="text" role="tab" aria-selected="true">tab1</v-btn>
        <v-btn variant="text" role="tab" aria-selected="false">tab2</v-btn>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div role="tablist" class="tabs-simple2">
          <v-btn variant="text" role="tab" aria-selected="true">몸 앞</v-btn>
          <v-btn variant="text" role="tab" aria-selected="false">몸 뒤</v-btn>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">tab-line</h3>
    <div class="pub-guide-sample elevation-2">
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
      </div>
      <v-window v-model="tabInit" class="mt-7">
        <v-window-item> 컨텐츠1 </v-window-item>
        <v-window-item> 컨텐츠2 </v-window-item>
      </v-window>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="tab-line">
          <v-tabs v-model="tabInit" align-tabs="start">
            <v-tab
              v-for="(item, i) in tabItems"
              :key="item.id"
              :value="i"
              :ripple="false"
              :data-count="item.tabCount"
            >
              \{\{\ item.titleTab \}\}\
            </v-tab>
          </v-tabs>
        </div>
        <v-window v-model="tabInit" class="mt-7">
          <v-window-item> 컨텐츠1 </v-window-item>
          <v-window-item> 컨텐츠2 </v-window-item>
        </v-window>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">tabs-roundbox</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="tabs-roundbox">
        <v-tabs v-model="tab2Init" align-tabs="start" slider-color="#fff">
          <v-tab v-for="n in 2" :key="n" :value="n" :ripple="false">
            타이틀 {{ n }}
          </v-tab>
        </v-tabs>
        <v-window v-model="tab2Init" class="mt-7">
          <v-window-item v-for="n in 2" :key="n" :value="n">
            컨텐츠 {{ n }}
          </v-window-item>
        </v-window>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="tabs-roundbox">
          <v-tabs v-model="tabInit" align-tabs="start" slider-color="#fff">
            <v-tab v-for="n in 2" :key="n" :value="n" :ripple="false">
              타이틀 \{\{\ n \}\}\
            </v-tab>
          </v-tabs>
          <v-window v-model="tabInit" class="mt-7">
            <v-window-item v-for="n in 2" :key="n" :value="n">
              컨텐츠 \{\{\ n \}\}\
            </v-window-item>
          </v-window>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">.banner-coding</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="banner-coding">
        <v-btn variant="text" :href="``" data-case="medical">
          <span class="txbox">
            <strong class="title">의료진에게 묻기</strong>
            <span class="text"
              >좀 더 자세한 증상 문의를 하고 싶다면 의료진에게 물어보세요</span
            >
          </span>
          <figure />
        </v-btn>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="banner-coding">
          <v-btn variant="text" :href="" data-case="medical">
            <span class="txbox">
              <strong class="title">의료진에게 묻기</strong>
              <span class="text"
                >좀 더 자세한 증상 문의를 하고 싶다면 의료진에게
                물어보세요</span
              >
            </span>
            <figure />
          </v-btn>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">라운드 박스</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="box-rounded">라운드 박스</div>
      <br />
      <div class="box-rounded-fill">라운드 박스 배경</div>
      <br />
      <div class="box-rounded-shadow py-6 px-4">라운드 박스 그림자</div>
      <br />
      <v-card variant="flat" rounded="xl" class="box-rounded-fill pa-6"
        >라운드 박스 배경</v-card
      >
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="box-rounded">라운드 박스</div>

        <div class="box-rounded-fill">라운드 박스 배경</div>

        <div class="box-rounded-shadow py-6 px-4">라운드 박스 그림자</div>

        <v-card variant="flat" rounded="xl" class="box-rounded-fill pa-6"
          >라운드 박스 배경</v-card
        >
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">기기연결/미연결</h3>
    <div class="pub-guide-sample elevation-2">
      <v-chip label size="small" class="chip-default">
        <span class="text-dot">미연결</span>
      </v-chip>
      <v-chip label size="small" class="chip-default ml-2">
        <span class="text-dot success">연결</span>
      </v-chip>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-chip label size="small" class="chip-default">
          <span class="text-dot">미연결</span>
        </v-chip>
        <v-chip label size="small" class="chip-default">
          <span class="text-dot success">연결</span>
        </v-chip>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">기록 상태별 색상</h3>
    <div class="pub-guide-sample elevation-2">
      <v-chip
        label
        size="small"
        color="primary"
        class="chip-default chip-color"
      >
        안정
      </v-chip>
      <v-chip
        label
        size="small"
        color="light-green"
        class="chip-default chip-color"
      >
        좋음
      </v-chip>
      <v-chip label size="small" color="green" class="chip-default chip-color">
        매우좋음
      </v-chip>
      <v-chip label size="small" color="error" class="chip-default chip-color">
        매우나쁨
      </v-chip>
      <v-chip label size="small" color="orange" class="chip-default chip-color">
        나쁨
      </v-chip>
      <v-chip
        label
        size="small"
        color="yellow-darken-1"
        class="chip-default chip-color"
      >
        보통
      </v-chip>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-chip
          label
          size="small"
          color="primary"
          class="chip-default chip-color"
        >
          안정
        </v-chip>
        <v-chip
          label
          size="small"
          color="light-green"
          class="chip-default chip-color"
        >
          좋음
        </v-chip>
        <v-chip
          label
          size="small"
          color="green"
          class="chip-default chip-color"
        >
          매우좋음
        </v-chip>
        <v-chip
          label
          size="small"
          color="error"
          class="chip-default chip-color"
        >
          매우나쁨
        </v-chip>
        <v-chip
          label
          size="small"
          color="orange"
          class="chip-default chip-color"
        >
          나쁨
        </v-chip>
        <v-chip
          label
          size="small"
          color="yellow-darken-1"
          class="chip-default chip-color"
        >
          보통
        </v-chip>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">테이블</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="table-flex">
        <ul class="table">
          <li class="thead">
            <span class="ws-104">점수</span>
            <span>최근 30일 최고 걸음수</span>
          </li>
          <li v-for="list in tableList" :key="list.id" class="tbody">
            <span class="ws-104">{{ list.title }}</span>
            <span>{{ list.text }}</span>
          </li>
        </ul>
      </div>

      <br />

      <div class="table-flex">
        <ul class="table">
          <li class="thead">
            <span class="ws-110">구분</span>
            <span>정상수치</span>
            <span>조절목표</span>
          </li>
          <li v-for="list in tableList2" :key="list.id" class="tbody">
            <span class="ws-110 th"><span v-html="list.title"></span></span>
            <span v-html="list.text"></span>
            <span v-html="list.text2"></span>
          </li>
        </ul>
        <p class="table-caution">
          대한당뇨병학회 홈페이지 기준입니다대한당뇨병학회 홈페이지
          기준입니다대한당뇨병학회 홈페이지 기준입니다
        </p>
      </div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="table-flex">
          <ul class="table">
            <li class="thead">
              <span class="ws-104">점수</span>
              <span>최근 30일 최고 걸음수</span>
            </li>
            <li v-for="list in tableList" :key="list.id" class="tbody">
              <span class="ws-104">\{\{\ list.title \}\}\</span>
              <span>\{\{\ list.text \}\}\</span>
            </li>
          </ul>
        </div>

        <div class="table-flex">
          <ul class="table">
            <li class="thead">
              <span class="ws-110">구분</span>
              <span>정상수치</span>
              <span>조절목표</span>
            </li>
            <li v-for="list in tableList2" :key="list.id" class="tbody">
              <span class="ws-110 th"><span v-html="list.title"></span></span>
              <span v-html="list.text"></span>
              <span v-html="list.text2"></span>
            </li>
          </ul>
          <p class="table-caution">대한당뇨병학회 홈페이지 기준입니다</p>
        </div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">바텀호출 셀렉스타일 버튼</h3>
    <div class="pub-guide-sample elevation-2">
      <v-text-field
        class="input-basic textfield-default select-field"
        :class="name2 ? 'hasData' : ''"
        label="운동 시간"
        required
        persistent-placeholder
        variant="outlined"
        v-model="name2"
        readonly
        clearable
        @click="event"
      >
        <template v-slot:append-inner
          ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
        /></template>
      </v-text-field>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-text-field
          class="input-basic textfield-default select-field"
          :class="name2 ? 'hasData' : ''"
          label="운동 시간"
          required
          persistent-placeholder
          variant="outlined"
          v-model="name2"
          readonly
          clearable
          @click="event"
        >
          <template v-slot:append-inner
            ><img src="/assets/images/icon-arrow-down2.svg" alt="검색"
          /></template>
        </v-text-field>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">관심뉴스 버튼</h3>
    <div class="pub-guide-sample elevation-2">
      <v-btn variant="outlined" rounded="lg" class="btn-share">
        <template v-slot:prepend>
          <img src="/assets/images/icon-share.svg" alt="" />
        </template>
        공유하기
      </v-btn>
      <v-btn
        variant="outlined"
        rounded="lg"
        class="btn-share"
        @click="news = !news"
      >
        <template v-slot:prepend>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            :class="['news', { active: news }]"
          >
            <path
              d="M11.1443 1C9.99672 1 8.74973 1.50151 8.00765 2.51181C7.26557 1.50151 6.01858 1 4.87104 1C2.80546 1 1.03825 2.57723 1 4.81587C1.00765 5.03392 1.0306 5.33919 1.0459 5.49909C1.39781 8.21744 4.31257 10.7832 7.18142 12.7456C7.42623 12.9128 7.71694 13 8 13C8.29071 13 8.57377 12.9128 8.81858 12.7456C11.6951 10.7832 14.6098 8.22471 14.9541 5.49909C14.977 5.33919 14.9923 5.03392 15 4.81587C14.977 2.57723 13.2098 1 11.1443 1Z"
            />
          </svg>
        </template>
        관심뉴스
      </v-btn>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-btn variant="outlined" rounded="lg" class="btn-share">
          <template v-slot:prepend>
            <img src="/assets/images/icon-share.svg" alt="" />
          </template>
          공유하기
        </v-btn>
        <v-btn
          variant="outlined"
          rounded="lg"
          class="btn-share"
          @click="news = !news"
        >
          <template v-slot:prepend>
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              :class="['news', { active: news }]"
            >
              <path
                d="M11.3689 0.5C10.1393 0.5 8.80328 1.04331 8.0082 2.1378C7.21311 1.04331 5.87705 0.5 4.64754 0.5C2.43443 0.5 0.540984 2.20866 0.5 4.63386C0.508197 4.87008 0.532787 5.20079 0.54918 5.37402C0.926229 8.3189 4.04918 11.0984 7.12295 13.2244C7.38525 13.4055 7.69672 13.5 8 13.5C8.31147 13.5 8.61475 13.4055 8.87705 13.2244C11.959 11.0984 15.082 8.32677 15.4508 5.37402C15.4754 5.20079 15.4918 4.87008 15.5 4.63386C15.4754 2.20866 13.582 0.5 11.3689 0.5Z"
              />
            </svg>
          </template>
          관심뉴스
        </v-btn>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">공유하기 버튼</h3>
    <div class="pub-guide-sample elevation-2">
      <v-btn variant="outlined" rounded="lg" class="btn-share">
        <template v-slot:prepend>
          <img src="/assets/images/icon-share.svg" alt="" />
        </template>
        공유하기
      </v-btn>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <v-btn variant="outlined" rounded="lg" class="btn-share">
          <template v-slot:prepend>
            <img src="/assets/images/icon-share.svg" alt="" />
          </template>
          공유하기
        </v-btn>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">Tooltip (풍선모양)</h3>
    <div class="pub-guide-sample elevation-2">
      <div class="tooltip-balloon arrow-left icon-emoji">
        <span class="text-yellow">오건강님,</span> 이것부터 확인하세요!
      </div>
      <br /><br />
      <div class="tooltip-balloon arrow-bottom icon-walk">
        툴팁 메시지 문구 입니다.
      </div>
      <br /><br />
      <div class="tooltip-balloon arrow-bottom-front">
        툴팁 메시지 문구 입니다.
      </div>
      <br /><br />
      <div class="tooltip-balloon arrow-right">툴팁 메시지 문구 입니다.</div>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <div class="tooltip-balloon arrow-left icon-emoji">
          <span class="text-yellow">오건강님,</span> 이것부터 확인하세요!
        </div>

        <div class="tooltip-balloon arrow-bottom icon-walk">
          툴팁 메시지 문구 입니다.
        </div>

        <div class="tooltip-balloon arrow-bottom-front">
          툴팁 메시지 문구 입니다.
        </div>

        <div class="tooltip-balloon arrow-right">툴팁 메시지 문구 입니다.</div>
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">
      운동 아이콘(56X56), 24X24 size는 addClass small, 아이콘만 단독 사용가능
      (record-card-name X)
    </h3>
    <div class="pub-guide-sample elevation-2">
      <span class="record-card-name"
        ><i class="icon-sports bicycle"></i
        ><span class="text">자전거</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports ping-pong"></i
        ><span class="text">탁구</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports baseball"></i
        ><span class="text">야구</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports golf"></i><span class="text">골프</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports muscular"></i
        ><span class="text">근력운동</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports running"></i
        ><span class="text">달리기</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports hiking"></i
        ><span class="text">하이킹</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports stairs"></i
        ><span class="text">계단오르기</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports basketball"></i
        ><span class="text">농구</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports billiards"></i
        ><span class="text">당구</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports climb"></i><span class="text">등산</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports runningMachine"></i
        ><span class="text">런닝머신(걷기)</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports runningMachine"></i
        ><span class="text">런닝머신(달리기)</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports badminton"></i
        ><span class="text">배드민턴</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports boxing"></i><span class="text">복싱</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports bowling"></i><span class="text">볼링</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports swim"></i><span class="text">수영</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports squash"></i
        ><span class="text">스쿼시</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports spinning"></i
        ><span class="text">스피닝</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports aerobic"></i
        ><span class="text">에어로빅</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports yoga"></i><span class="text">요가</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports footVolleyball"></i
        ><span class="text">족구</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports jumpRope"></i
        ><span class="text">줄넘기</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports footVolleyball"></i
        ><span class="text">축구</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports tennis"></i
        ><span class="text">테니스</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports yoga"></i
        ><span class="text">필라테스</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports jiuJitsu"></i
        ><span class="text">주짓수</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports taekwondo"></i
        ><span class="text">태권도</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports judo"></i><span class="text">유도</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports volleyball"></i
        ><span class="text">배구</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports climbing"></i
        ><span class="text">클라이밍</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports dance"></i><span class="text">댄스</span></span
      >
      <span class="record-card-name"
        ><i class="icon-sports jump-rope"></i
        ><span class="text">줄넘기</span></span
      >
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `
        <span class="record-card-name"
          ><i class="icon-sports bicycle"></i
          ><span class="text">자전거</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports ping-pong"></i
          ><span class="text">탁구</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports baseball"></i
          ><span class="text">야구</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports golf"></i><span class="text">골프</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports muscular"></i
          ><span class="text">근력운동</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports running"></i
          ><span class="text">달리기</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports hiking"></i
          ><span class="text">하이킹</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports stairs"></i
          ><span class="text">계단오르기</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports basketball"></i
          ><span class="text">농구</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports billiards"></i
          ><span class="text">당구</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports climb"></i><span class="text">등산</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports runningMachine"></i
          ><span class="text">런닝머신(걷기)</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports runningMachine"></i
          ><span class="text">런닝머신(달리기)</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports badminton"></i
          ><span class="text">배드민턴</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports boxing"></i
          ><span class="text">복싱</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports bowling"></i
          ><span class="text">볼링</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports swim"></i><span class="text">수영</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports squash"></i
          ><span class="text">스쿼시</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports spinning"></i
          ><span class="text">스피닝</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports aerobic"></i
          ><span class="text">에어로빅</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports yoga"></i><span class="text">요가</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports footVolleyball"></i
          ><span class="text">족구</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports jumpRope"></i
          ><span class="text">줄넘기</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports footVolleyball"></i
          ><span class="text">축구</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports tennis"></i
          ><span class="text">테니스</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports yoga"></i
          ><span class="text">필라테스</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports jiuJitsu"></i
          ><span class="text">주짓수</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports taekwondo"></i
          ><span class="text">태권도</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports judo"></i><span class="text">유도</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports volleyball"></i
          ><span class="text">배구</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports climbing"></i
          ><span class="text">클라이밍</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports dance"></i><span class="text">댄스</span></span
        >
        <span class="record-card-name"
          ><i class="icon-sports jump-rope"></i
          ><span class="text">줄넘기</span></span
        >
        ` }}
      </prism>
    </div>

    <h3 class="tit-pub-guide">tab container 100%</h3>
    <div class="pub-guide-sample elevation-2">
      <v-tabs v-model="tabInit" fixed-tabs align-tabs="center" class="tab-line">
        <v-tab
          v-for="(item, i) in tabItems"
          :key="i"
          :value="i"
          :ripple="false"
        >
          {{ item.titleTab }}
        </v-tab>
      </v-tabs>

      <v-window v-model="tabInit" class="mt-7">
        <v-window-item> 컨텐츠1 </v-window-item>
        <v-window-item> 컨텐츠2 </v-window-item>
      </v-window>
    </div>
    <div class="pub-guide">
      <prism language="markup"
        >{{ `

        <v-tabs
          v-model="tabInit"
          fixed-tabs
          align-tabs="center"
          class="tab-line"
        >
          <v-tab
            v-for="(item, i) in tabItems"
            :key="i"
            :value="i"
            :ripple="false"
          >
            \{\{\ item.titleTab \}\}\
          </v-tab>
        </v-tabs>

        <v-window v-model="tabInit" class="mt-7">
          <v-window-item> 컨텐츠1 </v-window-item>
          <v-window-item> 컨텐츠2 </v-window-item>
        </v-window>
        ` }}
      </prism>
    </div>
  </div>
</template>

<script>
  import { ref, reactive, computed } from 'vue'
  import Prism from 'vue-prism-component'
  import 'prismjs'
  import 'prismjs/themes/prism-tomorrow.css'
  export default {
    data() {
      return {
        select: { state: '선택해주세요', value: 0 },
        selectList: [
          { state: '선택해주세요', value: 0 },
          { state: '아들', value: 1 },
          { state: '딸', value: 2 }
        ]
      }
    },
    setup() {
      const textareaValue = ref('입력텍스트')
      const news = ref(false)
      const name2 = ref('오전 9시 30분')
      const isActive = ref(false)
      const switchOff = ref('off')
      const selected = ref([])
      const switchModel = ref('')
      const name = ref('건강검진 연동이 되지 않아요')
      const caption = ref()
      const model = ref('')
      const chip = ref(true)
      const checkedItem = ref([])
      const agreeItems = reactive([
        {
          id: 1,
          text: '[필수] 개인정보 수집 및 이용동의'
        },
        {
          id: 2,
          text: '[필수] 고유식별정보 처리 동의'
        }
      ])
      const textItems = reactive([
        {
          id: 1,
          text: '11,105 모두입력',
          value: '11,105'
        }
      ])

      const list = ref([
        '유효기간 경과로 소멸이 예상되는 포인트입니다',
        '30일 내의 소멸예정 포인트만 조회합니다',
        '적립된 리워드포인트는 적립 월 기준 12개월 경과 후 일단위로 소멸됩니다'
      ])

      const tabInit = ref(null)
      const tabItems = ref([
        { titleTab: '메뉴명1', tabContents: `메뉴명1 contents` },
        { titleTab: '메뉴명2', tabContents: `메뉴명2 contents`, tabCount: '2' }
      ])
      const tab2Init = ref(null)
      const tab2items = ref([
        { titleTab: '메뉴명1', tabContents: `메뉴명1 contents` },
        { titleTab: '메뉴명2', tabContents: `메뉴명2 contents` }
      ])

      const checkAll = computed({
        get() {
          return checkedItem.value.length === agreeItems.length
        },
        set(value) {
          checkedItem.value = []
          if (value) {
            for (let i = 1; i <= agreeItems.length; i++) {
              checkedItem.value.push(i)
            }
          }
        }
      })

      const isActiveEmail = ref(false)
      const email = ref('')
      const disable = ref(false)
      const emailRules = ref([
        (value) => !!value || '이메일을 입력해주세요.',
        (value) => {
          if (
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
              value
            )
          ) {
            disable.value = true
            return true
          } else {
            disable.value = false
            return '옳바른 이메일 양식이 아닙니다.'
          }
        }
      ])
      const onClear = () => {
        disable.value = false
      }

      const analysisList = ref([
        {
          id: 1,
          title:
            '<strong class="font-weight-bold mr-1">최고</strong> 수면 시간',
          count: '적정 7시 30분',
          dot: 'success'
        },
        {
          id: 2,
          title:
            '<strong class="font-weight-bold mr-1">최저</strong> 수면 시간',
          count: '부족 5시 50분',
          dot: 'warning',
          dot: 'caution'
        },
        {
          id: 3,
          title:
            '<strong class="font-weight-bold mr-1">최저</strong> 수면 시간',
          count: '과다 13시 00분',
          chip: '고협압 2기',
          chipColor: 'error'
        },
        {
          id: 4,
          title: '수면 시간 평균',
          count: '6시 5분',
          chip: '고협압 2기',
          chipColor: 'orange'
        },
        {
          id: 5,
          title: '<strong class="font-weight-bold mr-1">수축기</strong>평균',
          count: '132mmHg'
        }
      ])

      const tableList = ref([
        {
          id: 1,
          title: '200점',
          text: '2만 걸음 이상'
        },
        {
          id: 2,
          title: '150점',
          text: '1만 걸음 이상'
        },
        {
          id: 3,
          title: '100점',
          text: '7천 걸음 ~ 1만 걸음'
        },
        {
          id: 4,
          title: '50점',
          text: '3천 걸음 ~ 7천 걸음'
        },
        {
          id: 5,
          title: '30점',
          text: '3천 걸음 미만'
        }
      ])

      const tableList2 = ref([
        {
          id: 1,
          title: '공복혈당',
          text: '70~100<br/>mg/dL',
          text2: '80~130<br/>mg/dL'
        },
        {
          id: 2,
          title: '식후 2시간 혈당',
          text: '70~100<br/>mg/dL',
          text2: '80~130<br/>mg/dL'
        },
        {
          id: 3,
          title: '식후 2시간 혈당 식후 2시간 혈당',
          text: '70~100<br/>mg/dL',
          text2: '80~130<br/>mg/dL'
        }
      ])
      function event() {
        console.log('click')
      }

      const tabTargetBtn = ref()
      const tabTargetBtns = ref([
        {
          value: 1,
          text: '소아',
          text2: '(2세~13세)'
        },
        {
          value: 2,
          text: '여자'
        },
        {
          value: 3,
          text: '남자'
        }
      ])
      function tabTargetSelected(val) {
        tabTargetBtn.value = val
      }
      const radioList = ref([
        {
          id: 1,
          text: '서울특별시 동작구 대방동'
        },
        {
          id: 2,
          text: '서울특별시 동작구 대방동'
        },
        {
          id: 3,
          text: '서울특별시 동작구동작구 대방동대방동'
        }
      ])
      const nalcoholList = ref([
        {
          id: 1,
          text: '지방간 수치가 떨어저요'
        },
        {
          id: 2,
          text: '피부 혈색이 좋아져요'
        },
        {
          id: 3,
          text: '몸무게가 줄어요'
        }
      ])

      return {
        textareaValue,
        news,
        event,
        name2,
        isActive,
        name,
        model,
        caption,
        agreeItems,
        checkedItem,
        checkAll,
        chip,
        switchModel,
        selected,
        textItems,
        tabInit,
        tabItems,
        tab2Init,
        tab2items,
        list,
        switchOff,
        isActiveEmail,
        email,
        emailRules,
        disable,
        onClear,
        analysisList,
        tableList,
        tableList2,
        tabTargetBtn,
        tabTargetBtns,
        tabTargetSelected,
        radioList,
        nalcoholList
      }
    },

    components: {
      Prism
    }
  }
</script>

<style lang="scss" scoped>
  .tit-pub-guide {
    background-color: #111;
    color: #fff;
    font-size: 16px;
    padding: 15px;
  }
  .pub-guide {
    padding-bottom: 30px;
  }
  .btn-bottom {
    padding: 0;
  }
  .btn-area {
    position: relative;
    padding: 0;
    width: 100%;
  }

  .pub-guide-sample {
    padding: 25px;
    margin: 20px 0;
    .record-card-name {
      display: flex;
    }
  }
</style>
