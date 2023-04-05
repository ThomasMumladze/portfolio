import axios from "axios";

export const getGitHubUser = axios.create({
    method: 'GET',
    baseURL: 'https://api.github.com/users/ThomasMumladze'
})