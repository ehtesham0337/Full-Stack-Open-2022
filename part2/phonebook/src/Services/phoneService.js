import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = nameObject => {
    const request =  axios.post(baseUrl, nameObject)
    return request.then(response => response.data)
}

const update = (id, nameObject) => {
    const request =  axios.put(`${baseUrl}/${id}`, nameObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request =  axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response)
}

const phoneService = {getAll, create, update, deletePerson}
export default phoneService