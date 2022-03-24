<template>
  <div class="flex flex-col">
    <div>
      <div class="inline-block p-1 border-b border-solid border-gray-500">
        <router-link
          class="page-link"
          :to="{name: 'tab-first'}"
        >
          Tab #1
        </router-link> |
        <router-link
          class="page-link"
          :to="{name: 'tab-second'}"
        >
          Tab #2
        </router-link> |
        <router-link
          class="page-link"
          :to="{name: 'tab-third'}"
        >
          Tab #3
        </router-link>
      </div>
    </div>
    <router-view class="flex flex-grow items-center justify-center" />
  </div>
</template>
