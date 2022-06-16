import axios from "axios";

const fetchUsers = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.data) {
        }
  
        return response.data;
      });
  };

  
  export default {
    fetchUsers
  };