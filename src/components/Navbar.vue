<template>
     <nav 
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">bgame</a>
            <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            ria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li v-for="(page, index) in pages" class="nav-item" :key="index">
                    <a 
                    class="nav-link" 
                    :class="{active: activePage == index}"
                    :href="page.pageLink.linkUrl" 
                    :title="page.pageLink.linkText"
                    @click.prevent="navLinkClick(index)"
                    >{{ page.pageLink.linkText }}</a>
                </li>
                </ul>
                <div class="form-check form-switch">
                <input 
                class="form-check-input" 
                type="checkbox" 
                role="switch" 
                id="theme" 
                @click="changeTheme()" 
                checked
                >
                <label :class="`text-${themeSwitch}`" for="theme">Go {{ themeSwitch }}</label>
                </div> 
            </div>
        </div>
    </nav>   
</template>

<script>
export default {
    props: ['pages', 'activePage', 'navLinkClick'],
    data() {
        return {
        theme: 'light',
        themeSwitch: 'dark'
        }
    },
    methods: {
        /**
         * Switches the theme of the webpage between 'light' and 'dark'.
         * @returns {void} No return value
         */
        changeTheme() {
        let theme = 'light';
        let themeSwitch = 'dark';

        if (this.theme == 'light') {
            theme = 'dark';
            themeSwitch = 'light';
        }

        this.theme = theme;
        this.themeSwitch = themeSwitch;
        }
    }
}   
</script>