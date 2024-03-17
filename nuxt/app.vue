<template>
  <div>Cookies in NUXT</div>
  <div>
    <div>Данные useFetch <b> http://localhost:4000/get </b></div>
    <div>{{ get }}<button @click="refresh()">refresh</button></div>
  </div>
  <div>
    <div>Данные useFetch <b> http://localhost:4000/get-cookie </b></div>
    <div>{{ getCookie }}</div>
  </div>
  <div class="btns">
    <button @click="g">http://localhost:4000/get</button>
    <div>{{ btns[0] }}</div>

    <button @click="gC">http://localhost:4000/get-cookie</button>
    <div>{{ btns[1] }}</div>

    <button @click="c">http://localhost:4000/clear-cookie</button>
    <div>{{ btns[2] }}</div>
  </div>
</template>
<script lang="ts" setup>
const headers = useRequestHeaders(["cookie"]);

const { data: get, refresh } = await useFetch("http://localhost:4000/get", {
  headers,
  credentials: "include",
});
const { data: getCookie } = await useFetch("http://localhost:4000/get-cookie", {
  headers,
  credentials: "include",
});

const btns = ref<[string, string, string]>(["", "", ""]);

function g() {
  $fetch("http://localhost:4000/get", {
    credentials: "include",
  }).then((res) => {
    btns.value[0] = JSON.stringify(res);
  });
}

function gC() {
  $fetch("http://localhost:4000/get-cookie", {
    credentials: "include",
  }).then((res) => {
    btns.value[1] = JSON.stringify(res);
  });
}

function c() {
  $fetch("http://localhost:4000/clear-cookie", {
    credentials: "include",
  }).then((res) => {
    btns.value[2] = JSON.stringify(res);
  });
}
</script>
<style>
.btns {
  display: grid;
  grid-template-columns: 250px 1fr;
}
</style>
