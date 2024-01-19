<template>
  <a
    class="nav-link"
    :class="activeClasses"
    :href="page.link.url"
    :title="page.link.text"
    >{{ page.link.text }}
  </a>
</template>

<script>
export default {
  props: [
    "page",
    "isActive"
  ],
  computed: {
    /**
     * Returns an object containing CSS classes based on whether the page is active.
     * @returns {Object} An object containing CSS classes.
     */
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};

</script>

<style scoped>
.emphasize {
  text-decoration: underline;
}
</style>
