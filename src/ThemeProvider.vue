<template>
  <NConfigProvider
    abstract
    :theme-overrides="themeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <NMessageProvider>
      <NNotificationProvider>
        <NDialogProvider>
          <App />
        </NDialogProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>
<script lang="ts">
import { NConfigProvider, GlobalThemeOverrides, zhCN, dateZhCN, NMessageProvider, NNotificationProvider, NDialogProvider } from 'naive-ui'
import App from './App.vue'
const themeOverrides: GlobalThemeOverrides = {
  Typography: {
    pMargin: '0px',
  },
}
export default defineComponent({
  components: { App, NConfigProvider, NMessageProvider, NNotificationProvider, NDialogProvider },
  setup() {
    return { themeOverrides, zhCN, dateZhCN }
  },
})
</script>
