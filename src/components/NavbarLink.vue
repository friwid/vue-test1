<template>
  <li>
    <a
      class="nav-link"
      :class="activeClasses"
      :href="page.link.url"
      :title="page.link.text"
      @click.prevent="$bus.$emit('navbarLinkActivated', index)"
      >{{ page.link.text }}
    </a>
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
