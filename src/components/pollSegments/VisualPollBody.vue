<template>
  <div
    class="poll-body"
    :class="{
      'only-view': viewOnly,
    }"
  >
    <div
      class="poll-body__image-block"
      v-if="isHasImageInPoll"
      :class="imagePositionType"
    >
      <img
        :src="pollItemData.pollImage.path"
        :alt="pollItemData.pollImage.name"
        @load="imageLoaded"
      />
    </div>
    <app-text-from-editor :editorValue="pollItemData.editorValue" />

    <app-single-choise-variant
      v-if="pollItemType === 'single-choice'"
      :optionsData="pollItemData.optionsData"
      :pollItemId="pollItemId"
    />
    <app-multi-choise-variant
      v-if="pollItemType === 'multiple-choice'"
      :optionsData="pollItemData.optionsData"
      :pollItemId="pollItemId"
    />
    <app-single-select
      v-if="pollItemType === 'drop-down-list'"
      :optionsData="pollItemData.optionsData"
      :pollItemId="pollItemId"
    />

    <app-multi-select
      v-if="pollItemType === 'multiple-drop-down-list'"
      :optionsData="pollItemData.optionsData"
      :pollItemId="pollItemId"
    />

    <app-ranging-visual
      v-if="pollItemType === 'ranging'"
      :optionsData="pollItemData.optionsData"
      :pollItemId="pollItemId"
    />

    <app-custom-fields-visual
      v-if="pollItemType === 'custom-fields'"
      :optionsData="pollItemData.optionsData"
      :pollItemId="pollItemId"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import AppTextFromEditor from "./visualPollSegments/TextFromEditor.vue";
import AppSingleChoiseVariant from "./visualPollSegments/SingleChioseVariant.vue";
import AppMultiChoiseVariant from "./visualPollSegments/MultiChioseVariant.vue";
import AppSingleSelect from "./visualPollSegments/SingleSelect.vue";
import AppMultiSelect from "./visualPollSegments/MultiSelect.vue";
import AppRangingVisual from "./visualPollSegments/RangingVisual.vue";
import AppCustomFieldsVisual from "./visualPollSegments/CustomFieldsVisual.vue";
export default {
  components: {
    AppTextFromEditor,
    AppSingleChoiseVariant,
    AppMultiChoiseVariant,
    AppSingleSelect,
    AppMultiSelect,
    AppRangingVisual,
    AppCustomFieldsVisual,
  },
  props: {
    pollItemId: { type: [Number, String] },
    pollItemType: { type: String },
    pollItemData: { type: Object },
  },
  computed: {
    ...mapState({
      showCurrentAnswer: (state) => state.showCurrentAnswer,
    }),
    isHasImageInPoll() {
      const pollImage = this.pollItemData.pollImage;
      return pollImage && Object.keys(pollImage).length !== 0;
    },
    imagePositionType() {
      if (this.isHasImageInPoll) {
        return this.pollItemData.pollImage.stretchImage ? "_cover" : "_contain";
      }
    },
    viewOnly() {
      return this.showCurrentAnswer === true;
    },
  },
  methods: {
    imageLoaded(e) {
      console.log("image loaded");
    },
  },
};
</script>

<style lang="scss">
.only-view {
  pointer-events: none !important;
  .deselect-btn {
    display: none;
  }
}
</style>
