<template>
  <div class="fixed flex justify-between w-full z-50">
    <Logo />
    <div
      class="text-black pointer-events-auto z-50 w-full flex justify-between items-center px-4 py-6 sm:px-6 md:justify-end md:space-x-10"
    >
      <nuxt-link exact to="/">index</nuxt-link>
      <nuxt-link to="/about">about</nuxt-link>
    </div>
  </div>
</template>
