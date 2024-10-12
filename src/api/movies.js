import axios from "axios";

axios.interceptors.response.use(function (response){
    return response;
}, function (error){
    return Promise.reject(error.response.data.msg || '時間をおいてお試しください');
});

const ENDPOINT_URL = "/api/movies";

const moviesApi = {
    async getAll() {
        const result = await axios.get(ENDPOINT_URL);
        return result.data;
    },
    async getOne(id){
        const result = await axios.get(`${ENDPOINT_URL}/${id}`);
        return result.data;
    },
    async patch(movie){
        const result = await axios.patch(`${ENDPOINT_URL}/${movie._id}`, movie);
        return result.data;
    }
};

export default moviesApi;