<script>
<<<<<<< HEAD
    export default {
        name: 'vuetitle',
        props: ['title'],
        watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = "Gergőke legénybúcsúja";
                }
            }
        },
    }
</script>
=======
export default {
  name: "vuetitle",
  props: ["title"],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = "Arni cica legénybúcsúja";
      },
    },
  },
};
</script>
>>>>>>> 52e0965 (added arni)
