import "./App.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { http } from "./utils/api";
export const AuthContext = createContext();
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userData , setUserData] = useState({});
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(localStorage.getItem("isLoggedIn") === "true") {
      setToken(token)
      setIsLoggedIn(true)
      http.defaults.headers.common['Authorization'] = "Bearer " + token;
      http
      .get("/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [])

  useEffect(() => {
    if(token) {
      http.defaults.headers.common['Authorization'] = "Bearer " + token;
    } else {
      delete http.defaults.headers.common['Authorization']
    }
  }, [token])

  const contextValue = {
    isLoggedIn: isLoggedIn,
    token: token,
    setIsLoggedIn: setIsLoggedIn,
    setToken: setToken,
    userData,
    setUserData,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;