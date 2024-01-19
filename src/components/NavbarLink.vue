<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link"
      :class="activeClasses"
      aria-current="page"
      :title="page.link.text"
      >{{ page.link.text }}
    </router-link>
</li>
</template>

<script>
export default {
  props: [
    "page",
    "index",
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
