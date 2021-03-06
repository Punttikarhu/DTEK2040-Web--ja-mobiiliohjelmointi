import axios from 'axios'
const baseUrl = 'http://localhost:3001/reminders'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

const deleteEntry = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, create, deleteEntry}