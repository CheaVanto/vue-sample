import UserService from "../../../utils/services/UserService"

export default {
    name: "user-update",
    data() {
        return {
            isSaving: false,
            isSubmited: false,
            body: {
                name: "",
                email: "",
                gender: "male", //enum: male, female
                status: "active", //enum: active, inactive
            }
        }
    },
    components: { },
    created() {
        this.getDetail()
    },
    watch: {
        "$route.fullPath": function() {
            this.getDetail()
        },
    },
    mounted() {

    },
    methods: {
        getDetail(){
            let userId = this.$route.params.id
            UserService.getOne(userId).then(response => {
                if(response.id){
                    this.body = {
                        name: response.name,
                        email: response.email,
                        gender: response.gender,
                        status: response.status
                    }
                }
            })
        },
        onSave(){
            let msgValidation = this.validator(this.body)
            this.isSubmited = true
            if(msgValidation === "OK"){
                this.isSaving = true
                let userId = this.$route.params.id
                let body = {
                    "name": this.body.name,
                    "email": this.body.email,
                    "gender": this.body.gender,
                    "status": this.body.status
                }
                UserService.update(userId,body).then(response => {
                    this.isSaving = false
                    if(response.id){
                        this.body = {
                            name: "",
                            email: "",
                            gender: "male",
                            status: "active"
                        }
                        this.isSubmited = false
                        this.$router.push({name: 'list-user'})
                    }else{
                        let msg = response[0].field+" "+response[0].message
                        alert(msg)
                    }
                })
            }
        },
        validator(body){
            if(!body.name) { return "Name is required."}
            if(!body.email) { return "Email is required."}
            if(!body.gender) { return "Gender is required."}
            if(!body.status) { return "Status is required."}
            return "OK"
        }
    }
}