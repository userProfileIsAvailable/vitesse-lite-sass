<template>
  <div class="appbar">
    <HomePageAppBarHeader />
    <HomePageAppBarToolBar />
  </div>
  <div class="container">
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

</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
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
    gap: $spacing * 4;
  }
}
.appbar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: $spacing * 4;
  padding: $spacing * 4;
  box-shadow: $shadow-1;
}
</style>
