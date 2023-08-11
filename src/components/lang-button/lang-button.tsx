import { useAppDispatch } from "../../store/hooks";
import { Lang, langActions } from "../../store/slices/lang";
import "./lang-button.css";

interface ILangButton {
  lang: Lang;
  text: string;
  isActive: boolean;
}

function LangButton({ lang, text, isActive }: ILangButton) {
    const dispatch = useAppDispatch();

  function onClick() {
    dispatch(langActions.setNativeLang({lang}))
  }
  return (
    <button
      className={`langButton ${isActive && "langButton--active"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export { LangButton };
