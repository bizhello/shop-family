import $api from '../http'

export default class UserService {
    static async getUsers() {
        return $api.get('/users')
    }

    static async getUserById(userId) {
        return $api.get(`/users/${userId}`)
    }

    static async deleteUserById(userId) {
        return $api.delete(`/users/${userId}`)
    }

}