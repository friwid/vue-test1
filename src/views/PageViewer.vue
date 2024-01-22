<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ["index"],
  inject: ["$pages"],

  /**
   * Fetches the page data based on the index prop.
   */
  created() {
      this.page = this.$pages.getSinglePage(this.index);

    /* 
    this.$watch(() => this.$route.params, (newParams, prevParams) => {
      this.page = this.$pages.getSinglePage(newParams.index);
    }); 
    */
  },

  data() {
    return {
      page: null,     
    };
  },

  watch: {
    /**
     * Updates the page data when the index changes.
     * @param {Number} newIndex - The new index.
     * @param {Number} oldIndex - The old index.
     */
    index(newIndex, oldIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>
