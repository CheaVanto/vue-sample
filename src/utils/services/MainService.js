import VueCookies from "vue-cookies";

const MainService = {}
const token = "437bbabdbdd45a10dc1f92bfeec09c9715893e67426eab77b85a7d20032b088b" //VueCookies.get('accessToken')

MainService.headers = function () {
    if (token) {
        let header = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        }
        return header
    } else {
        MainService.logout()
    }
}

MainService.headersFormData = function () {
    let token = VueCookies.get('accessToken')
    if (token) {
        let header = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        }
        return header
    }
}

MainService.headerWithoutToken = async function () {
    let header = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return header
}

MainService.validateError = async function (error) {
    if (error?.response?.data) {
        return error?.response?.data
    } 
    return 'Something when wrong.'
}

MainService.logout = async function () {
    VueCookies.remove("accessToken")
    VueCookies.remove("refreshToken")
    location.reload()
}

export default MainService