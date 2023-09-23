<template>
  <div class="navbar border-b-2 mx-2 border-gray-600">
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
      <ul class="hidden sm:flex bg-[#BEBEBEFF] flex-nowrap menu menu-horizontal bg-base-200 rounded-full">
        <li>
          <span class="pr-2 md:pr-4 text-black pl-2">
            <SquaresPlusIcon class="h-6 w-6" />
            <router-link to="/asanas">
              <span class="hidden md:block">Asanas</span>
            </router-link>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 text-black pl-2">
            <PlayIcon class="h-6 w-6" />
            <router-link to="/vinyasa">
              <span class="hidden md:block">Vinyasa</span>
            </router-link>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 text-black pl-2">
            <ArrowsUpDownIcon class="h-6 w-6" />
            <span class="hidden md:block">Pranayama</span>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 text-black pl-2">
            <CubeTransparentIcon class="h-6 w-6" />
            <span class="hidden md:block">Meditations</span>
          </span>
        </li>
        <li>
          <span class="pr-2 md:pr-4 text-black pl-2">
            <BookOpenIcon class="h-6 w-6" />
            <span class="hidden md:block">Learn</span>
          </span>
        </li>
      </ul>
    </nav>
    <transition
      enter-active-class="transition-opacity duration-200 ease-in-out"
      leave-active-class="transition-opacity duration-200 ease-in-out"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showMenu"
        class="md:hidden absolute top-16 z-50 w-full left-1 bg-base-200 rounded-b-lg"
      >
        <ul
          class="menu menu-vertical w-full bg-base-200 rounded-box"
        >
          <li @click="closeMenu">
            <router-link to="/asanas">
              Asanas 
            </router-link>
          </li>
          <li @click="closeMenu">
            <router-link to="/vinyasa">
              Vinyasa
            </router-link>
          </li>
          <li @click="closeMenu">
            <router-link to="./">
              Pranayama
            </router-link>
          </li>
          <li @click="closeMenu">
            <router-link to="./">
              Meditation
            </router-link>
          </li>
          <li @click="closeMenu">
            <router-link to="./">
              Learn
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
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

  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false
    },
  },

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