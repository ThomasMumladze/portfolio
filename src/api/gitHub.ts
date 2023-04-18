import axios from "axios";

export const getGitHubUser = axios.create({
    baseURL: 'https://api.github.com/users'
})