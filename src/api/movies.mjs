import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  // function (error) {
  //   return Promise.reject(
  //     error.response.data.msg || "時間をおいてお試しください"
  //   );
  // }
  function (error) {
    // サーバーからのエラーレスポンス全体を確認
    console.error("APIエラー詳細:", error.response);

    return Promise.reject(
      error.response?.data?.msg || "詳細なエラーメッセージが返されていません"
    );
  }
);

const ENDPOINT_URL = "/api/movies";

const moviesApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    return result.data;
  },
  async getMoviesByPage(page = 1, limit = 12) {
    const result = await axios.get(
      `${ENDPOINT_URL}/page?page=${page}&limit=${limit}`
    );
    return result.data;
  },
  async getOne(id) {
    const result = await axios.get(`${ENDPOINT_URL}/${id}`);
    return result.data;
  },
  async patch(id, formData) {
    const result = await axios.patch(`${ENDPOINT_URL}/${id}`, formData);
    return result.data;
  },
  async delete(id) {
    const result = await axios.delete(`${ENDPOINT_URL}/${id}`);
    return result.data;
  },
  async post(formData) {
    const result = await axios.post(ENDPOINT_URL, formData);
    return result.data;
  },
};

export default moviesApi;
