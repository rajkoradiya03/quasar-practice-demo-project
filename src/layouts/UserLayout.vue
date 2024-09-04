<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="flex justify-between">
      <q-toolbar class="toolbar-header">
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Header </q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab icon="home" to="/home" replace label="Home" />
        <q-route-tab
          icon="account_circle"
          to="/user/profile"
          replace
          label="Profile"
        />
        <q-route-tab icon="assignment" to="/user/post" replace label="Posts" />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="flex justify-center">
      <q-toolbar class="toolbar-header">
        <q-toolbar-title> Footer </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <!-- Content here -->
        <q-list class="q-gutter-sm">
          <q-tabs
            no-caps
            active-color="primary"
            indicator-color="transparent"
            class="text-grey-8"
            v-model="tab"
            vertical
          >
            <q-tabs active-color="primary">
              <q-route-tab to="/user/profile" replace label="Profile" />
            </q-tabs>
            <q-tabs active-color="primary">
              <q-route-tab to="/user/post" replace label="Posts" />
            </q-tabs>
          </q-tabs>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  // name: 'LayoutName',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      tab: ref("profile"),
    };
  },
};
</script>

<style>
.toolbar-header {
  width: fit-content;
}
</style>
