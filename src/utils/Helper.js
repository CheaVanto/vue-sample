import Vue from "vue";
import Toasted from "vue-toasted";

let Options = {
    position: 'bottom-right',
    duration: 3000,
    keepOnHover: true,
}
Vue.use(Toasted, Options)

const Helper = {}

Helper.getMediaType = function (url) {
    if (url) {
        const images = ["jpg", "jpeg", "gif", "png"]
        const videos = ["mp4", "mov", "3gp", "ogg"]
        const extension = url.split(".").pop()
        if (images.includes(extension)) { return "image" }
        else if (videos.includes(extension)) { return "video" }
        else { return "unknown" }
    } else { return "empty" }
}

Helper.calculatePagination = function (data) {
    let totalPage = data.total / data.limit
    let page = data.page || ((data.offset + data.limit) - data.limit) + 1
    let pagination = {
        limit: data.limit,
        page: parseInt(page),
        total: data.total,
        totalPage: totalPage > parseInt(totalPage) ? parseInt(totalPage) + 1 : parseInt(totalPage),
    }
    return pagination
}

Helper.base64toFile = function (dataurl, filename) {
    var arr = dataurl.split(","),
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: "image/jpeg" });
}

Helper.getFullImage = function (path) {
    return process.env.VUE_APP_BASE_URL_IMAGE + path + "?cache=none"
}

Helper.timeToMillisecond = function (t) {
    var h = Number(t.split(':')[0]) * 60 * 60
    var m = Number(t.split(':')[1]) * 60
    var s = Number(t.split(':')[2]);
    return (h + m + s) * 1000
}

Helper.formatDate = (data, type, delimiter) => {
    const date = new Date(typeof data !== "string" ? data * 1000 : data)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dateOfWeeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const dateOfWeek = ('00' + date.getDate()).slice(-2)
    const month = ('00' + (date.getMonth() + 1)).slice(-2)
    const year = date.getFullYear()

    const dan = Helper.timestampFormat(date, ':')
    const dateFormat = [dateOfWeeks[date.getDay()], (date.getDate() + Helper.dateSuffix(date))].join(' ')
    const monthFormat = months[date.getMonth()]
    const dateMonthYear = [dateFormat, monthFormat, year].join(' ')

    return (type === 'default' && [dateOfWeek, month, year].join(delimiter || '-')) || (type === 'fullDate' && [dateMonthYear, dan].join(', ')) || date.toLocaleString().replace(/[/]/g, delimiter || '-') || data
}

Helper.timestampFormat = (date, delimiter) => {
    let hours = date.getHours()
    const minutes = ('00' + date.getMinutes()).slice(-2)
    const seconds = ('00' + date.getSeconds()).slice(-2)
    const dan = hours >= 12 ? 'PM' : 'AM'
    hours = date.getHours() % 12 || 12
    hours = ('00' + hours).slice(-2)

    const timestamp = [hours, minutes, seconds].join(delimiter || ':')
    return [timestamp, dan].join(' ')
}

Helper.formatPhoneNumber = data => {
    let phoneNumber = data.replace('+855', '0')
    let phone = phoneNumber.split('') || data.split('')

    let countIndex = []
    let countIndex1 = []
    let countIndex2 = []
    let countIndex3 = []
    let countIndex4 = []

    phone.map((item, i) => {

        i <= 2 && countIndex1.push(item)
        i > 2 && i <= 5 && countIndex2.push(item)
        i > 5 && i <= 8 && countIndex3.push(item)
        i > 8 && countIndex4.push(item)

    })

    countIndex1.length > 0 && countIndex.push(countIndex1.toString().replace(/,/g, ''))
    countIndex2.length > 0 && countIndex.push(countIndex2.toString().replace(/,/g, ''))
    countIndex3.length > 0 && countIndex.push(countIndex3.toString().replace(/,/g, ''))
    countIndex4.length > 0 && countIndex.push(countIndex4.toString().replace(/,/g, ''))

    return countIndex.join(' ')
}

export default Helper