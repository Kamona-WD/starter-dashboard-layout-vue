import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import AuthCard from '../../components/auth/AuthCard'
import GithubIcon from '../../components/icons/GithubIcon'

const Form = defineComponent({
  setup() {
    return () => (
      <>
        <form action="#" class="space-y-6">
          <input
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input
            class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <div class="relative inline-flex items-center">
                <input
                  type="checkbox"
                  name="remembr_me"
                  class="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none  toggle checked:bg-blue-500 disabled:bg-gray-200 focus:outline-none"
                />
                <span class="absolute top-0 left-0 w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm"></span>
              </div>
              <span class="ml-3 text-sm font-normal text-gray-500">Remember me</span>
            </label>

            <a
              onClick={(e) => {
                e.preventDefault()
              }}
              href="#"
              class="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              class="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 bg-blue-500 rounded-md  hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Login
            </button>
          </div>
        </form>
      </>
    )
  },
})

const Footer = defineComponent({
  setup() {
    return () => (
      <>
        <div class="flex items-center justify-center space-x-2 flex-nowrap">
          <span class="w-20 h-px bg-gray-300"></span>
          <span>OR</span>
          <span class="w-20 h-px bg-gray-300"></span>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault()
          }}
          href="#"
          class="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-all duration-200 bg-black rounded-md  hover:bg-opacity-80 focus:outline-none focus:ring"
        >
          <GithubIcon aria-hidden="true" class="w-6 h-6 text-white" />
          <span> Login with github </span>
        </a>

        <div class="text-sm text-gray-600">
          Don't have an account yet? &nbsp;
          <RouterLink to={{ name: 'Register' }} class="text-blue-600 hover:underline">
            Register
          </RouterLink>
        </div>
      </>
    )
  },
})

export default defineComponent({
  setup() {
    const slots = {
      form: () => <Form />,
      footer: () => <Footer />,
    }
    return () => <AuthCard title="Login" v-slots={slots}></AuthCard>
  },
})
