<template>
  <div class="flex-shrink-0 p-2 border-t max-h-14">
    <Button class="w-full text-gray-700 bg-gray-200 hover:bg-gray-300">
      <LogoutIcon aria-hidden="true" class="w-6 h-6" />
      <span :class="{ 'lg:hidden': !isSidebarOpen }" class="ml-2"> Logout </span>
    </Button>
  </div>
</template>

<script setup>
import useState from '../../hooks/useState'
import Button from '../global/Button.vue'
import LogoutIcon from '../icons/LogoutIcon.vue'

const { isSidebarOpen } = useState()
</script>
