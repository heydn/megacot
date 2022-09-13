import { useContext } from "react";
import { UserContext } from "../context/UserProvider"

export const Login = () => {

  const {user, signIn, signOut} = useContext(UserContext);

  return (
    <div>
      <div>Login</div>
      <h2>{ user ? "Conectado" : "Desconectado"}</h2>
      {
        user ? (
          <button onClick={signOut}>
            Cerrar sesión
          </button>
        ) : (
          <button onClick={signIn}>
            Iniciar sesión
          </button>
        )
      }
    </div>
  )
}
