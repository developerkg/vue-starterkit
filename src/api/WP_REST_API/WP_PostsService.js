
import { _service } from './WP_Service';


export default {

  async posts() {
    return _service.get('posts');
  },

  async postsById(id) {
    return _service.get(`posts/${id}`);
  },
};
