<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'activity',
  created() {
    if (this.$route.name === 'activity') {
      this.$router.replace({ name: 'activityList' });
    }
  }
};
</script>

<style>
</style>
