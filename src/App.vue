<template>
  <div id="app">
    <div class="container">
      <app-header/>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'app',
  components: {
    "app-header":Header,
  }
}
</script>
<style>
</style>
