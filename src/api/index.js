import request from '@/utils/axios'

export function login() {
    return request.get(`/login`,{
        params:{
            id:'111111'
        }
    })
}
export function register(params) {
    return request.post('/register',params)
}