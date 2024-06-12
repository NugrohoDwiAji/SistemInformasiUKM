import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = async (data, callback) => {
  try {
    await axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        callback(true, res.data.datas);
      });
  } catch (error) {
    callback(false, error);
  }
};

export const UploudSpreadSheet = async (data, callback) => {
  try {
    await axios
      .post("https://script.google.com/macros/s/AKfycbzvIi7KonwgdqMJF2tVl5qm9_d4Ti5ms-9U-w2UQT9d9sukt-rNcW9ow1m6Wadj235xDQ/exec", data)
      .then((res) => {
        callback(true, res.data.datas);
      });
  } catch (error) {
    callback(false, error);
  }
};

export const getDataUser = async (data, callback)=>{
  try {
    await axios.get(`http://localhost:3000/profil/${data}`).then((res)=> callback(res.data.datas[0]))
  } catch (error) {
    console.log(error)
  }
}

export const updateProfil = async (data, callback) => {
  try {
    await axios.put("http://localhost:3000/profil", data,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }).then((res)=>{
      callback(res.data.datas)
    });
  } catch (error) {
    console.log(error)
  }
};

export const getRole = (token) => {
  if (!token || typeof token !== "string") {
    console.warn("Invalid or missing token");
    return null; // Mengembalikan null jika token tidak ada, bukan string, atau tidak valid
  }

  try {
    const decoded = jwtDecode(token);
    return decoded.role; // Asumsikan 'userName' adalah bagian dari payload JWT
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Mengembalikan null jika terjadi kesalahan saat mendekode token
  }
};

export const getEmail = (token) => {
  if (!token || typeof token !== "string") {
    console.warn("Invalid or missing token");
    return null; // Mengembalikan null jika token tidak ada, bukan string, atau tidak valid
  }

  try {
    const decoded = jwtDecode(token);
    return decoded.email; // Asumsikan 'userName' adalah bagian dari payload JWT
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Mengembalikan null jika terjadi kesalahan saat mendekode token
  }
};

export const getUserName = (token) => {
  if (!token || typeof token !== "string") {
    console.warn("Invalid or missing token");
    return null; // Mengembalikan null jika token tidak ada, bukan string, atau tidak valid
  }

  try {
    const decoded = jwtDecode(token);
    return decoded.nama; // Asumsikan 'userName' adalah bagian dari payload JWT
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Mengembalikan null jika terjadi kesalahan saat mendekode token
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return token && typeof token === "string";
};
