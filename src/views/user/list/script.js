import UserService from "../../../utils/services/UserService"
import DetailModal from "./components/detail"

export default {
    name: "list-user",
    data() {
        return {
            users: [],
            detail: {}
        }
    },
    components: {
        DetailModal
    },
    created() {
        this.getList()
    },
    mounted() {
        
    },
    watch: {

    },
    computed: {

    },
    methods: { 
        getList(){
            UserService.getList().then(response => {
                if(response){
                    this.users = response
                }
            })
        },

        removeUser(userIndex){
            let userId = this.users[userIndex].id
            UserService.delete(userId).then(() => {
                this.users.splice(userIndex, 1)
            })
        }
    }
}