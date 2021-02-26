<template>
  <!-- Main content header -->
  <div
    class="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
  >
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

  <!-- Start Content -->

  <!-- Chart cards (Four columns grid) -->
  <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4">
    <!-- Users chart card -->
    <StatisticsChartCard tag="a" href="#" title="Total Users" canvasID="usersChart" />
    <!-- Sessions chart card -->
    <StatisticsChartCard tag="a" href="#" title="Sessions" canvasID="sessionsChart" />
    <!-- Vists chart card -->
    <StatisticsChartCard tag="a" href="#" title="Vists" canvasID="vistsChart" />
    <!-- Articles chart card -->
    <StatisticsChartCard tag="a" href="#" title="Articles" canvasID="articlesChart" />
  </div>

  <!-- Two columns grid -->
  <div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2 xl:grid-cols-4">
    <!-- Import data card -->
    <div class="border rounded-lg shadow-sm">
      <!-- Card header -->
      <div class="flex items-center justify-between px-4 py-2 border-b">
        <h5 class="font-semibold">Import Data</h5>
        <!-- Dots button -->
        <button class="p-2 rounded-full">
          <svg
            class="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
      <p class="px-4 py-6 text-gray-600">See and talk to your users and import them into your platform.</p>
      <ul class="px-4 pb-4 space-y-4 divide-y">
        <h5 class="font-semibold">Import Users from:</h5>
        <li class="flex items-start justify-between pt-4">
          <div class="flex items-start space-x-3">
            <!-- Twitter icon -->
            <span class="flex items-center pt-1">
              <svg fill="currentColor" class="w-5 h-5 text-blue-500">
                <path
                  d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                ></path>
              </svg>
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
            <svg
              aria-hidden="true"
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </li>
        <li class="flex items-start justify-between pt-4">
          <div class="flex items-start space-x-3">
            <!-- Github icon -->
            <span class="flex items-center pt-1">
              <svg width="24" height="24" fill="currentColor" class="text-black">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                ></path>
              </svg>
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
            <svg
              aria-hidden="true"
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </li>
        <li class="pt-4 text-sm font-medium text-gray-400">
          <p>
            Or you can
            <a href="#" class="font-normal text-blue-500 hover:underline whitespace-nowrap"
              >sync data to your dashboard</a
            >
            to ensure data is always up to date.
          </p>
        </li>
      </ul>
    </div>

    <!-- Monthly chart card -->
    <div class="border rounded-lg shadow-sm xl:col-span-3">
      <!-- Card header -->
      <div class="flex items-center justify-between px-4 py-2 border-b">
        <h5 class="font-semibold">Monthly Expenses</h5>
        <!-- Dots button -->
        <button class="p-2 rounded-full">
          <svg
            class="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
      <!-- Card content -->
      <div class="flex items-center p-4 space-x-4">
        <span class="text-3xl font-medium">45%</span>
        <span class="flex items-center px-2 space-x-2 text-sm text-green-800 bg-green-100 rounded">
          <span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
              <path
                fill-rule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <span>39.2%</span>
        </span>
      </div>
      <!-- Chart -->
      <BarChart canvasID="barChart" class="min-w-0 p-4 h-80" />
    </div>
  </div>

  <!-- Table see (https://tailwindui.com/components/application-ui/lists/tables) -->
  <h3 class="mt-6 text-xl">Users</h3>
  <div class="max-w-full min-h-full mt-6 overflow-hidden overflow-x-auto border border-gray-200 rounded-md">
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
        <tr
          v-for="{ id, name, email, role, active } in users"
          :key="id"
          class="transition-all hover:bg-gray-100 hover:shadow-lg"
        >
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
                <div class="text-sm font-medium text-gray-900">{{ name }}</div>
                <div class="text-sm text-gray-500">{{ email }}</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
            <div class="text-sm text-gray-500">Optimization</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 rounded-full"
              :class="active ? 'bg-green-100' : 'bg-red-100'"
            >
              {{ active ? 'Active' : 'Not Active' }}
            </span>
          </td>
          <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{{ role }}</td>
          <td class="px-6 py-4 text-sm font-medium whitespace-nowrap">
            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import StatisticsChartCard from '../components/charts/StatisticsChartCard.vue'
import BarChart from '../components/charts/BarChart.vue'
import useData from '../hooks/useData'

const { users } = useData()
</script>
