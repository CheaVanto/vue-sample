export default {
    name: "detail-user",
    props: {
        user: Object
    },
    data() {
        return {

        }
    },
    components: {
    },
    created() {

    },
    mounted() {
        
    },
    watch: {

    },
    computed: {

    },
    methods: { 
        onClose(){
            this.$emit('onClose')
        }
    }
}