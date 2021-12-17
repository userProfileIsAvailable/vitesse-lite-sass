<template>
  <div class="switchLang h5">
    <n-select v-model:value="value" :options="options" />
  </div>
</template>
<script lang="ts" setup>
const value = ref(null)
const options = [{
  label: 'en',
  value: 'en',
}, {
  label: '中文',
  value: 'zh-CN',
}]
</script>
<style lang="scss">
.switchLang {
    display: flex;
    align-items: center;
    gap: $spacing * 2;
    width: 8rem;
}
.icon {
    color: $grey-700;
    position: relative;
    &:hover,
    &:active {
        color: $black;
    }
}
</style>
