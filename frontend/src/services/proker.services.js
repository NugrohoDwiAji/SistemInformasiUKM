import axios from "axios";
const host = import.meta.env.VITE_HOST;

export const getProker = async (params, callback) => {
  try {
    await axios.get(`${host}/proker/${params}`).then((res) => {
      callback(res.data.datas);
    });
  } catch (error) {
    console.log(error)
  }
};

export const getProkerById = async (id_proker,nama, callback) => {
  try {
    await axios.get(`${host}/proker/${id_proker}/${nama}`).then((res) => {
      callback(res.data.datas[0]);
    });
  } catch (error) {
    console.log(error)
  }
};

export const updateProker = async(id_proker, nama, data, callback)=>{
  try {
    await axios.put(`${host}/proker/${id_proker}/${nama}`, data).then((res)=>{
      callback(res.data.message)
    })
  } catch (error) {
    console.log(error)
  }
}

export const createProker = async (data, params, callback) => {
  try {
    await axios.post(`${host}/proker/${params}`, data).then((res) => {
      callback(res.data.datas);
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProker = async(id_proker, nama, callback) => {
  try {
    await axios.delete(`${host}/proker/${id_proker}/${nama}`).then((res)=>{
      callback(res.message)
    })
  } catch (error) {
    console.log(error);
  }
};
