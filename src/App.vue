<template>
  <div id="app" class="row p16">
    <div class="row mb12 bg-secondary p12">
      <router-link :to="{name: 'dashboard'}" class="txt-dark hover font16 mh12">Dashboard</router-link>
      <router-link :to="{name: 'list-user'}" class="txt-dark hover font16 mh12">User</router-link>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  created() {},
  components: {},
  methods: {},
};
</script>
<style>
* {
  box-sizing: border-box;
}
body{
  background: var(--white)
}
</style>