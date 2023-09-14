<template>
  <div class="navbar pb-1">
    <div class="font-title text-lg md:text-3xl pr-3">
      <span class="flex">
        <button
          class="sm:hidden mr-1 p-2 rounded-md text-primary hover:bg-primary hover:bg-opacity-20 focus:outline-none"
          @click="toggleMenu"
        >
          <Bars3Icon
            class="h-8 w-8 text-white"
          />
        </button>
        <span class="m-auto">
          Perfect<span class="perfect-gradient">Practice</span>
        </span>
      </span>
    </div>
    <nav
      class="flex justify-end sm:justify-center content-between grow"
    >
      <ul class="hidden sm:flex bg-[#323232FF] flex-nowrap menu menu-horizontal bg-base-200 rounded-lg">
        <li>
          <span class="pr-2 md:pr-4 lg:text-2xl text-white pl-2">
            <SquaresPlusIcon class="h-6 w-6" />
            <router-link to="/asanas">
              <span class="hidden md:block">Asanas</span>
            </router-link>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 lg:text-2xl text-white pl-2">
            <PlayIcon class="h-6 w-6" />
            <router-link to="/vinyasa">
              <span class="hidden md:block">Vinyasa</span>
            </router-link>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 lg:text-2xl text-white pl-2">
            <ArrowsUpDownIcon class="h-6 w-6" />
            <span class="hidden md:block">Pranayama</span>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 lg:text-2xl text-white pl-2">
            <CubeTransparentIcon class="h-6 w-6" />
            <span class="hidden md:block">Meditations</span>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 lg:text-2xl text-white pl-2">
            <BookOpenIcon class="h-6 w-6" />
            <span class="hidden md:block">Learn</span>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { 
  Bars3Icon, 
  PlayIcon,
  ArrowsUpDownIcon,
  CubeTransparentIcon,
  BookOpenIcon,
  SquaresPlusIcon,
} from '@heroicons/vue/24/outline'

export default {
  name: 'Navbar',

  components: {
    Bars3Icon,
    PlayIcon,
    ArrowsUpDownIcon,
    CubeTransparentIcon,
    BookOpenIcon,
    SquaresPlusIcon,
}
}
</script>