<template>
  <Panel :show="show" @close="close" title="Settings">
    <div class="flex-1 max-h-full p-4 overflow-hidden hover:overflow-y-auto">
      <span>Settings Content</span>
      <!-- Settings Panel Content ... -->
    </div>
  </Panel>
</template>

<script setup>
import { defineProps, useContext, defineEmit } from 'vue'
import Panel from './Panel.vue'

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})
const { emit } = useContext()
defineEmit(['close'])
const close = () => {
  emit('close')
}
</script>
