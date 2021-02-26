<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppLayout from './components/layouts/AppLayout.vue'

const { currentRoute } = useRouter()
const appLayout = 'AppLayout'
const layout = computed(() => {
  return `${currentRoute.value.meta.layout || appLayout}`
})
</script>
