import axios from "axios";
import { useState } from "react";
import { axiosInstance } from "../utils/Database";


function useDatabase(url = "") {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setIsPending(true);
    try {
      const req = await axiosInstance.post(url, payload);
      setData((prev) =>
        Array.isArray(prev) ? [...prev, req.data] : [req.data]
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  const deletePost = async (endpoint) => {
    try {
      setIsPending(true);
      setError(null);
      const res = await axiosInstance.delete(endpoint);
      setData(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }
  };

  const getPost = async (id = "") => {
    try {
      setIsPending(true);
      setError(null);
      const endpoint = id ? `${url}/${id}` : url;
      const req = await axiosInstance.get(endpoint);
      setData(req.data);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching data:", error);
    } finally {
      setIsPending(false);
    }
  };

  return { postData, deletePost, getPost, data, isPending, error };
}

export default useDatabase;
