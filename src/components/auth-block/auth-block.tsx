import { useState } from "react";
import { IAuth } from "../../types";
import { Login } from "../login/login";
import { Register } from "../register/register";
import "./auth-block.css";
import { useStateSelector } from "../../store/hooks";

interface IAuthBlock {
  setIsPopupActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthBlock({ setIsPopupActive }: IAuthBlock) {
  const [currentPopup, setCurrentPopup] = useState<string>("register");
  const isAuth = useStateSelector((state) => state.user.isAuth);

  function closePopup(target: EventTarget) {
    if ((target as Element).className === "auth") {
      setIsPopupActive(false);
    }
  }

  if (isAuth) {
    return null;
  }

  return (
    <div onClick={(event) => closePopup(event.target)} className="auth">
      {currentPopup === "register" ? (
        <Register setCurrentPopup={setCurrentPopup} />
      ) : null}
      {currentPopup === "login" ? (
        <Login setCurrentPopup={setCurrentPopup} />
      ) : null}
    </div>
  );
}

export { AuthBlock };
