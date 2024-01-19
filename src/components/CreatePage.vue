<template>
  <form action="" class="container mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label"> Page Title </label>
          <input 
            type="text" 
            class="form-control" 
            v-model="pageTitle" 
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Content </label>
          <textarea
            type="text"
            class="form-control"
            rows="5"
            v-model="content"
          ></textarea>
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label for="" class="form-label"> Link Text </label>
          <input 
            type="text" 
            class="form-control" 
            v-model="linkText"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label"> Link URL </label>
          <input 
            type="text" 
            class="form-control" 
            v-model="linkUrl" 
          />
        </div>
        <div class="row mb-3">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="published"
            />
            <label class="form-check-label" for="gridCheck1"> Published </label>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <button
        class="btn btn-primary"
        :disabled="isFormInvalid"
        @click.prevent="submitForm"
      >
        Create Page
      </button>
    </div>
  </form>
</template>

<script>
export default {
  emits: {
    /**
     * Validates the page object and emits it if valid.
     * @param {Object} page - The page object to be emitted.
     * @returns {boolean} Returns true if the page object is valid, otherwise false.
     */
    pageCreated({ pageTitle, content, link }) {
      if (!pageTitle || !content || !link || link.text || !link.url) {
        return false;
      }

      return true;
    },
  },
  computed: {
    /**
     * Checks if the form is invalid.
     * @returns {boolean} Returns true if the form is invalid, otherwise false.
     */
    isFormInvalid() {
      return (
        !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
      );
    },
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      linkText: "",
      linkUrl: "",
      published: true,
    };
  },
  methods: {
    /**
     * Submits the form and emits the 'pageCreated' event. Clears the form afterwards.
     * @returns {void} No return value
     */
    submitForm() {
      if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
        alert("Please fill the form.");
        return;
      }

      this.$emit("pageCreated", {
        pageTitle: this.pageTitle,
        content: this.content,
        link: {
          text: this.linkText,
          url: this.linkUrl,
        },
        published: this.published,
      });

      this.pageTitle = "";
      this.content = "";
      this.linkText = "";
      this.linkUrl = "";
      this.published = true;
    },
  },
  watch: {
    /**
     * Updates the link text in the form when the page title changes.
     * @param {string} newTitle - The new page title.
     * @param {string} oldTitle - The old page title.
     * @returns {void} No return value
     */
    pageTitle(newTitle, oldTitle) {
      if (this.linkText == oldTitle) {
        this.linkText = newTitle;
      }
    },
  },
};
</script>
