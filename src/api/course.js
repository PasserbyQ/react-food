import request from '@/utils/request'

export function reqSearchCourse(data) {
    return request({
        url: '/course/search',
        method: 'post',
        data
    })
}

export function reqCourseAdd(data) {
    return request({
        url: '/course/add',
        method: 'post',
        data
    })
}

export function uploadImage(data) {
    return request({
        headers: { 'Content-Type': 'multipart/form-data' },
        url: '/uploads',
        method: 'post',
        data
    })
}