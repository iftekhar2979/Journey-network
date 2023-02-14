import axios from 'axios';
import { useEffect } from 'react';
const useSingleFetch = (url, id) => {
  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });
};

export default useSingleFetch;
