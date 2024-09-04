<template>
  <div class="my-div">
    <q-list :dense="$q.screen.lt.md">
      <q-item>
        <q-item-section>Test 1</q-item-section>
      </q-item>

      <q-item>
        <q-item-section>Test 2</q-item-section>
      </q-item>

      <q-btn :color="btnColor" label="Click Me"></q-btn>
    </q-list>
  </div>

  <div class="flex flex-center">
    <transition-group
      appear
      enter-active-class="animated fadeIn slower delay-2s repeat-2"
      leave-active-class="animated bounce"
    >
      <p key="text">New Test Text</p>
      <q-btn key="btn" label="Animated Button" color="secondary"></q-btn>
    </transition-group>
  </div>

  <div>
    <q-btn label="menu" color="primary" id="menubtn">
      <q-menu transition-show="jump-left" transition-hide="jump-up">
        <q-list :dense="$q.screen.lt.md">
          <q-item>
            <q-item-section class="text-p">Test 1</q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="text-p">Test 2</q-item-section>
          </q-item>

          <q-btn :color="btnColor" label="Click Me"></q-btn>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
  <div class="row">
    <div class="col-8">two thirds</div>
    <div class="col-2">one sixth</div>
    <div class="col-auto">auto size based on content and available space</div>
    <div class="col">fills remaining available space</div>
  </div>
</template>

<script setup>
import { setCssVar, useQuasar } from "quasar";
import { computed } from "vue";

const $q = useQuasar();

// $q.dark.set(true);

setTimeout(() => {
  setCssVar("light", "lightblue", document.getElementById("menubtn"));
});

$q.screen.setSizes({ sm: 500, md: 600, lg: 1200, xl: 1500 });
const btnColor = computed(() => {
  return $q.screen.lt.md ? "primary" : "secondary";
});
</script>

<style>
body.screen--xs {
  .my-div {
    background-color: aqua;
  }
}

body.screen--md {
  .my-div {
    background-color: lightseagreen;
  }
}
</style>
