<template>
  <div class="container">
    <div class="appbar">
      <div class="appbar__header">
        <div class="logo">
          <Logo />
        </div>
        <div class="appbar__header--action">
          <div class="notification">
            <home-page-header-notification-button />
          </div>
          <div class="switchLang">
            en
          </div>
        </div>
      </div>
      <div class="appbar__toolbar">
        toobar
      </div>
    </div>
    <div class="content__container">
      <div class="sidebar">
        sidebar
      </div>
      <div class="content">
        content
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HomePageHeaderNotificationButton from '~/components/HomePageHeaderNotificationButton.vue'

</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  align-items: center;
  @include laptop {
    max-width: 108rem;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
  @include desktop {
    max-width: 144rem;
    gap:$spacing * 4;
  }
}
.appbar {
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap:$spacing * 4;
  padding:$spacing* 4;
  box-shadow: $shadow-1;
  &__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 $spacing*4;
    & .logo {
      cursor: pointer;
      box-shadow:$shadow-1;
      border-radius:$border-radius * 2 ;
      &:hover {
        box-shadow: $shadow-2;
      }
    }
    &--action {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap:$spacing*2;
    }
  }
  &__toolbar {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:$spacing * 4;
  }
}
</style>
