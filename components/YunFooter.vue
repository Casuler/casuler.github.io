<script setup lang="ts">
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <YunFooter>
    <div>本站总访问量 <span id="busuanzi_value_site_pv"/> 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv"/> 人次</div>
  </YunFooter>
</template>

<style scoped>

</style>
