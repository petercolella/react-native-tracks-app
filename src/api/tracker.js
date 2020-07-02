import axios from 'axios';

export default axios.create({
  baseURL: 'https://rn-track-server.herokuapp.com'
});
