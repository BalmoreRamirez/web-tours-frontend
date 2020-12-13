export default function ({ $axios, store }) {
    $axios.interceptors.request.use((config) => {
    //   config.baseURL = process.env.baseUrl;
      if (store.state.auth) {
        config.headers.common['Authorization'] = `Bearer ${store.state.auth}`
      }
      return config;
    });
  }
  