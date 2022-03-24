<template>
  <div
    id="nav"
    class="p-4"
  >
    <router-link
      class="page-link"
      :to="{name: 'home'}"
    >
      Homepage
    </router-link> |
    <router-link
      class="page-link"
      :to="{name: 'multi-first'}"
    >
      Multi View #1
    </router-link> |
    <router-link
      class="page-link"
      :to="{name: 'multi-second'}"
    >
      Multi View #2
    </router-link> |
    <router-link
      class="page-link"
      :to="{name: 'multi-third'}"
    >
      Multi View #3
    </router-link> |
    <router-link
      class="page-link"
      :to="{name: 'multi-fourth'}"
    >
      Multi View #4
    </router-link> |
    <router-link
      class="page-link"
      :to="{name: 'nested'}"
      :class="{'link-exact-active': ['nested', 'tab-first', 'tab-second', 'tab-third'].includes($route.name)}"
    >
      Nested Route
    </router-link>
  </div>
  <div class="bg-gray-800 h-0.5" />
  <div class="flex flex-grow md:flex-row flex-col flex-nowrap">
    <router-view class="flex-grow" />
    <router-view
      name="SubviewOne"
      class="flex-grow"
    />
    <router-view
      name="SubviewTwo"
      class="flex-grow"
    />
  </div>
</template>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply h-screen flex flex-col text-center text-main;
}

.text-main {
  @apply text-gray-800;
}

.page-link {
  @apply text-main font-bold hover:opacity-70;
}
.link-exact-active {
  @apply text-green-500;
}
</style>
