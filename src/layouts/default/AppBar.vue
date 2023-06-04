<template>
  <v-app-bar density="compact">

    <v-app-bar-title>
      <router-link class="routerLink" to="/">
        <img src="../../assets/logo.svg" height="15" />
        Projekt China
      </router-link>
    </v-app-bar-title>
    <v-divider vertical></v-divider>
    <header-navigation title="Wiki" :routes="routes" class="mr-1 ml-1"/>
    <v-divider vertical></v-divider>
    <v-btn  color="primary" to="/quiz" class="mr-1 ml-1">Quiz 🚀</v-btn>
    <v-divider vertical></v-divider>
    <theme-switcher class="mr-2 ml-2" />
  </v-app-bar>
</template>

<script setup lang="ts">
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';

const routes = [
  {
    name: "Allgemein",
    route: "/allgemeines"
  },
  {
    name: "Kaiserreich",
    route: "/kaiserreich"
  },
  {
    name: "Opiumkrieg",
    route: "/opiumkrieg"
  },
  {
    name: "Seidenstraßenprojekt",
    route: "/seidenstrassenprojekt"
  },
  {
    name: "Innenpolitik",
    route: "/innenpolitik"
  },
  {
    name: "Außenpolitik",
    route: "/aussenpolitik"
  }
]
</script>