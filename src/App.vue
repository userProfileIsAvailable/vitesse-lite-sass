<template>
  <router-view />
  <VueQueryDevTools />
</template>
<script lang="ts">
import { VueQueryDevTools } from 'vue-query/devtools'
export default defineComponent({
  name: 'App',
  components: { VueQueryDevTools },
})
</script>
