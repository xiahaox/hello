<template>
  <div>
    <cmtbox :id="this.$route.params.id"></cmtbox>
  </div>
</template>
<script>
import cmtbox from "../subcomponents/component.vue";
export default {
  data() {
    return {};
  },
  components: {
    cmtbox
  }
};
</script>
<style lang="scss" scoped>
</style>