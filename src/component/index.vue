<template>
    <div>
        <header-component></header-component>
        <router-view keep-alive transition transition-mode="out-in"></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import HeaderComponent from 'vue!./headers.vue'
    import FooterComponent from 'vue!./footers.vue'
    export default {
        components: {
            'header-component': HeaderComponent,
            'footer-component': FooterComponent
        }
    };
</script>