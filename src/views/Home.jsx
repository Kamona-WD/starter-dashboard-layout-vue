import { defineComponent } from 'vue'
import { DotsVerticalIcon, ExternalLinkIcon, TrendingUpIcon } from '@heroicons/vue/outline'
import StatisticsChartCard from '../components/charts/StatisticsChartCard'
import BarChart from '../components/charts/BarChart'
import GithubIcon from '../components/icons/GithubIcon'
import TwitterIcon from '../components/icons/TwitterIcon'
import { users } from '../data/users'

const Card = defineComponent({
  setup(props, { slots }) {
    return () => (
      <div class="border rounded-lg shadow-sm">
        {slots.header && <div class="flex items-center justify-between px-4 py-2 border-b">{slots.header()}</div>}
        {slots.body && <div class="p-4">{slots.body()}</div>}
      </div>
    )
  },
})

export default defineComponent({
  setup() {
    return () => (
      <main class="p-5">
        <div class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
          <h1 class="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
          <a
            href="https://github.com/Kamona-WD/starter-dashboard-layout-vue"
            target="_blank"
            class="inline-flex items-center justify-center px-4 py-1 space-x-1 transition-colors bg-gray-200 rounded-md shadow hover:bg-gray-300"
          >
            <svg aria-hidden="true" class="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <span>View on Github</span>
          </a>
        </div>

        {/*  */}
        <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
          <StatisticsChartCard tag="a" href="#" title="Total Users" canvasID="usersChart" />
          <StatisticsChartCard tag="a" href="#" title="Sessions" canvasID="sessionsChart" />
          <StatisticsChartCard tag="a" href="#" title="Vists" canvasID="vistsChart" />
          <StatisticsChartCard tag="a" href="#" title="Articles" canvasID="articlesChart" />
        </div>

        {/*  */}
        <div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-4">
          {/*  */}
          <Card>
            {{
              header: () => (
                <>
                  <h5 class="font-semibold">Import Data</h5>
                  <button class="p-2 rounded-full">
                    <DotsVerticalIcon aria-hidden="true" class="w-6 h-6 text-gray-600" />
                    <span class="sr-only">More actions</span>
                  </button>
                </>
              ),
              body: () => (
                <>
                  <p class="text-gray-600">See and talk to your users and import them into your platform.</p>
                  <ul class="mt-4 space-y-4 divide-y">
                    <h5 class="font-semibold">Import Users from:</h5>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                        <span class="flex items-center pt-1">
                          <TwitterIcon class="w-6 h-6 text-[rgb(29,155,240)]" />
                        </span>
                        <div>
                          <h5 class="font-semibold">Twitter</h5>
                          <span class="text-sm font-medium text-gray-400">Users</span>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="flex items-center px-2 py-1 space-x-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring"
                      >
                        <span>Launch</span>
                        <ExternalLinkIcon aria-hidden="true" class="w-4 h-4" />
                      </a>
                    </li>
                    <li class="flex items-start justify-between pt-4">
                      <div class="flex items-start space-x-3">
                        <span class="flex items-center pt-1">
                          <GithubIcon aria-hidden="true" class="w-6 h-6 text-black" />
                        </span>
                        <div>
                          <h5 class="font-semibold">Github</h5>
                          <span class="text-sm font-medium text-gray-400">Users</span>
                        </div>
                      </div>
                      <a
                        href="#"
                        class="flex items-center px-2 py-1 space-x-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring"
                      >
                        <span>Launch</span>
                        <ExternalLinkIcon aria-hidden="true" class="w-4 h-4" />
                      </a>
                    </li>
                    <li class="pt-4 text-sm font-medium text-gray-400">
                      <p>
                        Or you can
                        <a href="#" class="font-normal text-blue-500 hover:underline whitespace-nowrap">
                          sync data to your dashboard
                        </a>
                        to ensure data is always up to date.
                      </p>
                    </li>
                  </ul>
                </>
              ),
            }}
          </Card>

          <Card class="xl:col-span-3">
            {{
              header: () => (
                <>
                  <h5 class="font-semibold">Monthly Expenses</h5>
                  <button class="p-2 rounded-full">
                    <DotsVerticalIcon aria-hidden="true" class="w-6 h-6 text-gray-600" />
                    <span class="sr-only">More actions</span>
                  </button>
                </>
              ),
              body: () => (
                <>
                  <div class="flex items-center p-4 space-x-4">
                    <span class="text-3xl font-medium">45%</span>
                    <span class="flex items-center px-2 space-x-2 text-sm text-green-800 bg-green-100 rounded">
                      <TrendingUpIcon class="w-4 h-4" />
                      <span>39.2%</span>
                    </span>
                  </div>
                  <BarChart canvasID="barChart" class="min-w-0 p-4 h-80" />
                </>
              ),
            }}
          </Card>
        </div>

        {/*  */}
        <h3 class="mt-6 text-xl">Users</h3>
        <div class="min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-200 rounded-md">
          <table class="w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Role
                </th>
                <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {users.map(({ name, email, role, active }) => (
                <tr class="transition-all hover:bg-gray-100">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{name}</div>
                        <div class="text-sm text-gray-500">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                    <div class="text-sm text-gray-500">Optimization</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class={[
                        'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 rounded-full',
                        active ? 'bg-green-100' : 'bg-red-100',
                      ]}
                    >
                      {active ? 'Active' : 'Not Active'}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{role}</td>
                  <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    )
  },
})
