import axios from "axios";
import ILogin from "interface/ILogin";

const loginAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/login" })


export async function login({senha, email}:ILogin) {
  const credenciais = {
    senha:senha,
    email:email
  }
  try {
    const response = await loginAPI.post('',credenciais);
    if(response.status === 200){
      sessionStorage.setItem('token',await response.data.token)
      return response.data.nome;
    }else{
      alert(response.data.message)
    }
  }
  catch (err) {
    console.log(err)
  }
}