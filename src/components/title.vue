<script>
    export default {
        name: 'vuetitle',
        props: ['title'],
        watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = this.title;
                }
            }
        },
    }
</script>