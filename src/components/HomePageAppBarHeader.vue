<template>
  <div class="appbar__header">
    <div class="logo">
      <Logo />
    </div>
    <div class="appbar__header--action">
      <home-page-header-notification-button />
      <home-page-switch-lang />
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.appbar__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 $spacing * 4;
    & .logo {
        cursor: pointer;
        box-shadow: $shadow-1;
        border-radius: $border-radius * 2;
        &:hover {
            box-shadow: $shadow-2;
        }
    }
    &--action {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: $spacing * 4;
    }
}
</style>
