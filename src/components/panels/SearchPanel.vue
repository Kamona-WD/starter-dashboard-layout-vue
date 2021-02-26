<template>
  <Panel :show="show" @close="close" title="Search">
    <div class="flex-1 max-h-full p-4 space-y-4 overflow-hidden hover:overflow-y-auto">
      <form action="#">
        <input
          type="text"
          placeholder="Search..."
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        />
      </form>

      <div>
        <!--  -->
      </div>
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
