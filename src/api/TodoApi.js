import Api from './Api'


const getAll = () => {
    return Api.get('/department')
}

// const getByID = (id) => {
//     return Api.get(`${url}/${id}`)
// }

// const create = (body) => {
//     return Api.post(url, body)
// }

// const updateByID = (id, body) => {
//     return Api.put(`${url}/${id}`, body)
// }

const deleteByID = (id) => {
    return Api.delete(`/department/${id}`)
}

// export
const todoApi = { getAll, deleteByID }
export default todoApi
