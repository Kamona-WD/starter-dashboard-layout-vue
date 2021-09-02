import { computed, defineComponent } from 'vue'
import { RouterView, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter()
    const Layout = computed(() => {
      return currentRoute.value.meta.layout
    })

    return () => (
      <Layout.value>
        <RouterView />
      </Layout.value>
    )
  },
})
