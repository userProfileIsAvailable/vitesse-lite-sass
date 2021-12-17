<template>
  <div class="appbar">
    <HomePageAppBarHeader />
    <HomePageAppBarToolBar />
  </div>
  <div class="container">
    <div class="container__content">
      <n-tabs type="segment" class="tabs__container" pane-class="tab-pane-container">
        <n-tab-pane name="book">
          <template #tab>
            <HomePageTabListItem>
              <template #icon>
                <i-ant-design-book-outlined />
              </template>
              <template #text>
                电子书
              </template>
            </HomePageTabListItem>
          </template>
          电子书
        </n-tab-pane>
        <n-tab-pane name="photo">
          <template #tab>
            <HomePageTabListItem>
              <template #icon>
                <i-clarity-image-gallery-line />
              </template>
              <template #text>
                画册
              </template>
            </HomePageTabListItem>
          </template>
          <n-empty>
            <template #icon>
              <n-icon>
                <i-uil-jackhammer />
              </n-icon>
            </template>
            <template #extra>
              <n-p class="h3">
                画册正在开发...🚀
              </n-p>
            </template>
          </n-empty>
        </n-tab-pane>
        <n-tab-pane name="virtual">
          <template #tab>
            <HomePageTabListItem>
              <template #icon>
                <i-fa-solid-mask />
              </template>
              <template #text>
                虚拟仿真
              </template>
            </HomePageTabListItem>
          </template>
          <n-empty>
            <template #icon>
              <n-icon>
                <i-uil-jackhammer />
              </n-icon>
            </template>
            <template #extra>
              <n-p class="h3">
                虚拟仿真正在开发...🚀
              </n-p>
            </template>
          </n-empty>
        </n-tab-pane>
        <n-tab-pane name="newspaper">
          <template #tab>
            <HomePageTabListItem>
              <template #icon>
                <i-icomoon-free-newspaper />
              </template>
              <template #text>
                期刊杂志
              </template>
            </HomePageTabListItem>
          </template>
          <n-empty>
            <template #icon>
              <n-icon>
                <i-uil-jackhammer />
              </n-icon>
            </template>
            <template #extra>
              <n-p class="h3">
                期刊杂志正在开发...🚀
              </n-p>
            </template>
          </n-empty>
        </n-tab-pane>
        <n-tab-pane name="video">
          <template #tab>
            <HomePageTabListItem>
              <template #icon>
                <i-akar-icons-video />
              </template>
              <template #text>
                视频图文
              </template>
            </HomePageTabListItem>
          </template>
          <n-empty>
            <template #icon>
              <n-icon>
                <i-uil-jackhammer />
              </n-icon>
            </template>
            <template #extra>
              <n-p class="h3">
                视频图文正在开发...🚀
              </n-p>
            </template>
          </n-empty>
        </n-tab-pane>
        <n-tab-pane name="audio">
          <template #tab>
            <HomePageTabListItem>
              <template #icon>
                <i-ant-design-audio-filled />
              </template>
              <template #text>
                音频讲解
              </template>
            </HomePageTabListItem>
          </template>
          <n-empty>
            <template #icon>
              <n-icon>
                <i-uil-jackhammer />
              </n-icon>
            </template>
            <template #extra>
              <n-p class="h3">
                音频讲解正在开发...🚀
              </n-p>
            </template>
          </n-empty>
        </n-tab-pane>
      </n-tabs>
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
  @include laptop {
    max-width: 108rem;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
  @include desktop {
    max-width: 144rem;
    gap: $spacing * 4;
    &__content {
      width: 100%;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      gap: $spacing * 10;
      padding-top: $spacing * 10;
    }
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
.tabs__container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 10;

  & ::v-deep(.n-tabs-nav) {
    flex-basis: 24rem;
    align-self: stretch;
    display: flex;
  }
  & ::v-deep(.n-tabs-rail) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing * 4;
  }
  & ::v-deep(.n-tabs-tab-wrapper) {
    flex-grow: 0;
    width: 100%;
  }
  & ::v-deep(.tab-pane-container) {
    align-self: stretch;
    padding: 0;
  }
  & ::v-deep(.n-tabs-tab__label) {
    flex-basis: 100%;
    width: 100%;
    padding: $spacing * 3;
  }
  & ::v-deep(.n-tabs-tab--active) {
    .listItem {
      color: $black;
    }
  }
}
</style>
