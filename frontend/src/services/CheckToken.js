import { useState, useContext } from "react";
import axios from "axios";
import IdContext from "../Context/IdContext";

function CheckToken() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setId } = useContext(IdContext);

  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/api/checktoken`, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data.message === "OK") {
        setIsLoggedIn(true);
        setId(res.data.id);
      } else {
        setIsLoggedIn(false);
        setTimeout(() => {
          window.location.href = "/sign-in";
        }, 3800);
      }
    });

  return isLoggedIn;
}

export default CheckToken;