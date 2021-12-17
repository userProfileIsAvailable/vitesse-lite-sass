<template>
  <n-button :bordered="false">
    <n-badge :value="3" :max="15">
      <i-ant-design-bell-filled class="icon" />
    </n-badge>
  </n-button>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.icon {
  color: $grey-700;
  position: relative;
  &:hover,
  &:active {
    color: $black;
  }
}
</style>
