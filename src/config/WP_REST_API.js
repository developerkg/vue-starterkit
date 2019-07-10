export default {
  baseURL: process.env.VUE_APP_WP_REST_API,
  responseType: 'json',
  responseEncoding: 'utf8',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
};
