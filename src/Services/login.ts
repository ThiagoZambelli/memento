import axios from "axios";
import ILogin from "interface/ILogin";

const logarAPI = axios.create({ baseURL: "https://lithlez-api.onrender.com/login" });



export async function login({ email, senha }: ILogin) {
  const usuarioLogin = {
    email: email,
    senha: senha
  }
  try {
    const response = await logarAPI.post('', usuarioLogin);
    if (response.status !== 200) {
      alert(response.data);
    } else {      
      sessionStorage.setItem('token', response.data.token);      
      alert("Logado");
      return "logar";
    }    
  }
  catch (err) {
    alert(err)
  }
}

