<template>
  <div class="flex flex-center">
    <q-btn
      @click="$q.notify('My Msg')"
      color="secondary"
      label="show my message"
    />
    <q-btn
      @click="showNotification"
      color="primary"
      label="show another my message"
    />
  </div>
  <div>
    <q-select
      v-model="lang"
      :options="langOption"
      label="language-option"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 150px"
    />
    <div>{{ $q.lang.label.close }}</div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref, watch } from "vue";
import languages from "quasar/lang/index.json";

const modules = import.meta.glob(
  "../../node_modules/quasar/lang/(de|en-US|es).js"
);

defineOptions({
  name: "IndexPage",
});

const $q = useQuasar();

function showNotification() {
  $q.notify("Some other my message");
}

const appLanguages = languages.filter((lang) =>
  ["de", "en-US", "es"].includes(lang.isoName)
);

const langOption = appLanguages.map((lang) => ({
  label: lang.nativeName,
  value: lang.isoName,
}));

const lang = ref($q.lang.isoName);

watch(lang, (val) => {
  modules[`../../node_modules/quasar/lang/${val}.js`]().then((lang) => {
    $q.lang.set(lang.default);
  });
});
</script>
