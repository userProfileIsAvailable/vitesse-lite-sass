<template>
  <div class="appbar__toolbar">
    <div class="userinfo">
      <n-avatar
        size="small"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-p class="h6">
        admin
      </n-p>
    </div>
    <div class="sortByTime">
      <n-button size="large">
        <n-p class="h6">
          按时间
        </n-p>

        <i-akar-icons-arrow-up-down />
      </n-button>
    </div>
    <div class="search">
      <n-input type="text" placeholder="书名搜索" clearable size="large">
        <template #suffix>
          <i-ant-design-search-outlined />
        </template>
      </n-input>
    </div>
    <div class="switchLayOut">
      <n-button size="large">
        <i-ant-design-unordered-list-outlined />
      </n-button>
      <n-button size="large">
        <i-bx-bxs-grid-alt color="currentColor" />
      </n-button>
    </div>
    <div class="addNewBook">
      <n-button size="large" :bordered="false">
        <i-ant-design-plus-outlined />添加新电子书
      </n-button>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.appbar__toolbar {
    width: 100%;
    padding: $spacing * 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing * 6;

    & .userinfo {
        display: flex;
        padding: $spacing * 2 $spacing * 4;
        align-items: center;
        justify-content: flex-start;
        gap: $spacing * 4;
    }
    & .sortByTime {
        display: flex;
        & ::v-deep(.n-button__content) {
            gap: $spacing * 2;
        }
        & ::v-deep(svg) {
            width: 2rem !important;
            height: 2rem !important;
        }
    }
    & .search {
        width: 64rem;
    }
    & .switchLayOut {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: $spacing * 6;
    }
    & .addNewBook {
        margin-left: auto;
        & ::v-deep(.n-button) {
            color: $white;
            background-color: $red-600;
            padding: $spacing * 2 $spacing * 6;
            border-radius: $border-radius * 2;
            &:hover,
            &:active {
                background-color: $red-700;
            }
        }
    }
}
</style>
