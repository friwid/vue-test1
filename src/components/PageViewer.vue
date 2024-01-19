<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * The page object.
     * @type {Object}
     * @property {string} pageTitle - The title of the page.
     * @property {string} content - The content of the page.
     * @default {pageTitle: "", content: ""}
     */
    page: {
      type: Object,
      default(rawProps) {
        return {
          pageTitle: "",
          content: "",
        };
      },
    },
  },
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>
