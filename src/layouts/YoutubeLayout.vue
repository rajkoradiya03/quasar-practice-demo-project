<template>
  <q-layout view="hHh Lpr fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
        <q-btn flat no-wrap no-caps class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon :name="fabYoutube" color="red" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold"
            >YouTube</q-toolbar-title
          >
        </q-btn>

        <q-space />

        <div class="yl-toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            placeholder="Search"
            class="bg-white col"
          />
          <q-btn
            icon="search"
            unelevated
            class="yl-toolbar-input-btn"
            color="grey-3"
            text-color="grey-8"
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-toggle
            v-model="value"
            @click="toggleTheme"
            color="grey"
            checked-icon="nightlight"
            unchecked-icon="sunny"
          />
          <q-btn
            flat
            round
            dense
            icon="video_call"
            color="grey-8"
            v-if="$q.screen.gt.sm"
            ><q-tooltip>Create a video or post</q-tooltip></q-btn
          >
          <q-btn
            flat
            round
            dense
            icon="apps"
            color="grey-8"
            v-if="$q.screen.gt.sm"
            ><q-tooltip>Apps</q-tooltip></q-btn
          >
          <q-btn
            flat
            round
            dense
            icon="message"
            color="grey-8"
            v-if="$q.screen.gt.sm"
            ><q-tooltip>Messages</q-tooltip></q-btn
          >
          <q-btn
            flat
            round
            dense
            icon="notifications"
            color="grey-8"
            v-if="$q.screen.gt.sm"
          >
            <q-badge color="red" text-color="white" floating="">2</q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn flat round>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="user" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered :width="240">
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit">
        <div>
          <q-list padding>
            <q-item clickable to="/home" v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="home" />
              </q-item-section>

              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="whatshot" />
              </q-item-section>

              <q-item-section>Trending</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="subscriptions" />
              </q-item-section>

              <q-item-section>Subscriptions</q-item-section>
            </q-item>

            <q-separator class="q-my-md" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="folder" />
              </q-item-section>

              <q-item-section>Library</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="restore" />
              </q-item-section>

              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="watch_later" />
              </q-item-section>

              <q-item-section>Watch later</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="thumb_up_alt" />
              </q-item-section>

              <q-item-section>Liked videos</q-item-section>
            </q-item>

            <q-separator class="q-mt-md q-mb-xs" />

            <q-item-label class="text-weight-bold text-uppercase" header
              >More From Youtube
            </q-item-label>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" :name="fabYoutube" />
              </q-item-section>

              <q-item-section>YouTube Premium</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="local_movies" />
              </q-item-section>

              <q-item-section>Movies & Shows</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="videogame_asset" />
              </q-item-section>

              <q-item-section>Gaming</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="live_tv" />
              </q-item-section>

              <q-item-section>Live</q-item-section>
            </q-item>

            <q-separator class="q-my-md" />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="settings" />
              </q-item-section>

              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="flag" />
              </q-item-section>

              <q-item-section>Report history</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="help" />
              </q-item-section>

              <q-item-section>Help</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon color="grey-6" name="feedback" />
              </q-item-section>

              <q-item-section>Send feedback</q-item-section>
            </q-item>

            <q-separator class="q-mt-md q-mb-lg" />

            <div class="q-px-md text-grey-9">
              <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  About
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Press
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Copyright
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Contact us
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Creators
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Advertise
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Developers
                </a>
              </div>
            </div>

            <div class="q-px-md q-py-md text-grey-9">
              <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Terms
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Privacy
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Policy & Safety
                </a>
                <a href="javascript:void(0)" class="yl-drawer-footer-link">
                  Test new features
                </a>
              </div>
            </div>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <div class="row">
        <q-card v-for="i in 10" :key="i" class="q-ma-md col-11 col-sm-3">
          <q-skeleton height="200px" square />

          <q-item>
            <q-item-section avatar>
              <q-skeleton type="QAvatar" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fabYoutube } from "@quasar/extras/fontawesome-v6";
import { useQuasar } from "quasar";

export default {
  // name: 'LayoutName',

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);

    const value = ref(false);
    const toggleTheme = () => {
      $q.dark.toggle();
    };

    return {
      fabYoutube,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleTheme,
      value,
    };
  },
};
</script>

<style>
.yl-toolbar-input-container {
  min-width: 100px;
  width: 55%;
}

.yl-toolbar-input-btn {
  border-radius: 0;
  border-style: solid;
  border-width: 1px 1px 1px 0;
  border-color: rgba(0, 0, 0, 0.24);
  max-width: 60px;
  width: 100%;
}

.yl-drawer-footer-link {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.75rem;
}

body.body--dark {
  background: #1d1d1d !important;
  color: white !important;

  .q-header {
    background: #1d1d1d !important;
    color: white !important;
  }

  .yl-toolbar-input-btn {
    border-color: white !important;
    color: #616161 !important;
  }

  .q-btn {
    color: white !important;
  }

  .q-page-container {
    background: #1d1d1d !important;
  }
}
</style>
