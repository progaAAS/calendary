import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3009/',
    headers: {
        ContentType: 'application/json',
    }
});

export const usersAPI = {
    getUsers() {
        return instance.get(`contacts`);
    },
    insertUser(body){
        return instance.post(`contacts?`, body);
    },
    changeUser(body){
        return instance.put(`contacts?` + `/${body.id}`, body)
    }
}


export const authAPI = {

    login(login, password) {
        return instance.get(`users?login=${login}&password=${password}`);
    },
}