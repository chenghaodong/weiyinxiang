<template>
  <div class="text-center pagenations">
    <b-pagination size="md" align="center" :total-rows="total" v-model="currentPage" :per-page="size" @change="select">
    </b-pagination>
    <div class="right">
      共 <span class="customer-color">{{Math.ceil(total/size)}}</span> 页 , <span class="customer-color">{{total}}</span> 条
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagenation',
  props: ['total', 'size', 'page'],
  data() {
    return {
      currentPage: this.page
    };
  },
  methods: {
    select(page) {
      this.$emit('changePage', page);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
