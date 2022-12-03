import axios from "axios";
import MainService from "./MainService";
import ApiConstant from "../constants/ApiConstant";

const UserService = {}

UserService.getList = async function () {
    return await axios
        .get(ApiConstant.user, MainService.headers())
        .then(response => {
            return response.data
        })
        .catch(error => {
            return MainService.validateError(error)
        })
}

UserService.getOne = async function (userId) {
    return await axios
        .get(ApiConstant.user+"/"+userId, MainService.headers())
        .then(response => {
            return response.data
        })
        .catch(error => {
            return MainService.validateError(error)
        })
}

UserService.create = async function (body) {
    return await axios
        .post(ApiConstant.user, body, MainService.headers())
        .then(response => {
            return response.data
        })
        .catch(error => {
            return MainService.validateError(error)
        })
}

UserService.update = async function (userId, body) {
    return await axios
        .put(ApiConstant.user+"/"+userId, body, MainService.headers())
        .then(response => {
            return response.data
        })
        .catch(error => {
            return MainService.validateError(error)
        })
}

UserService.delete = async function (userId) {
    return await axios
        .delete(ApiConstant.user+"/"+userId, {
            body : "",
            headers : MainService.headers().headers
        },)
        .then(response => {
            return response.data
        })
        .catch(error => {
            return MainService.validateError(error)
        })
}

export default UserService