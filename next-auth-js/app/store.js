import { create } from "zustand";
import axios from "axios";

const host = "http://localhost:5858";

export const useStore = create((set) => ({
  user: null,
  fetchLogin: async (params) => {
    try {
      const { data, status } = await axios.post(`${host}/users/login`, params);
      if (status !== 200) {
        throw new Error("Network response was not ok");
      }
      console.log("response", data);
      set({ user: data.result });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default useStore;
