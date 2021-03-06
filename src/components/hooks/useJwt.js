import axios from "axios";
import { useEffect, useState } from "react";

const useJwt = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.email;
      //console.log(user.email);
      if (email) {
        const { data } = await axios.post("https://mcare-inventory.herokuapp.com/login", {
          email,
        });
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useJwt;
