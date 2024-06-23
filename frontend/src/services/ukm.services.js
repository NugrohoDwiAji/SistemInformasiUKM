import axios from "axios";
const host = import.meta.env.VITE_HOST;

export const getAllUkm = async (callback) => {
  try {
    await axios.get(`${host}/ukm`).then((res) => {
      callback(res.data.datas);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailUkmByid = async (data,callback) => {
  try {
    await axios.get(`${host}/ukm/${data}`).then((res) => {
      callback(res.data.datas[0])
    });
  } catch (error) {
    console.log(error)
  }
};

export const updateDetailUkm = async(data, id, callback)=>{
  try {
    await axios.put(`${host}/ukm/${id}`, data,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }).then((res)=>{
      callback(res.data.datas)
    });
  } catch (error) {
    console.log(error)
  }
}
