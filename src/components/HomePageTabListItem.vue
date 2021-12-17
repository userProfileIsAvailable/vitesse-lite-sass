<template>
  <div class="listItem">
    <slot name="icon" />

    <div class="listItem__text">
      <n-p class="h6">
        <slot name="text" />
      </n-p>
    </div>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.listItem {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:$spacing *4;
    flex:1;
    color:$grey-700;
}

</style>
