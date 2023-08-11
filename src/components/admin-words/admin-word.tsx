import { useState } from "react";
import { useAppDispatch, useStateSelector } from "../../store/hooks";
import { deleteWordThunk } from "../../store/slices/word";
import { DeleteIcon } from "../icons/delete-icon";
import { EditIcon } from "../icons/edit-icon";
import "./admin-words.css";
import { AdminWordForm } from "../admin-word-form/admin-word-form";

export interface IAdminWordProps {
  id: string;
  text: string;
}

function AdminWord({ id, text }: IAdminWordProps) {
  const dispatch = useAppDispatch();
  const [isPopupActive, setIsPopupActive] = useState(false);
  const data = useStateSelector((state) =>
    state.word.data.find((item) => item._id === id)
  );
  return (
    <>
      <div className="admin-word">
        <h1 className="admin-word-title">{text}</h1>
        <div className="admin-word-buttons">
          <button
            className="admin-word-button"
            onClick={() => setIsPopupActive(true)}
          >
            <EditIcon />
          </button>
          <button
            className="admin-word-button"
            onClick={() => dispatch(deleteWordThunk(id))}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      {isPopupActive ? (
        <div className="admin-word-popup">
          <div className="admin-word-popup-inner">
            <AdminWordForm
              value={
                data && {
                  ru: {
                    word: data.ru.word,
                    transcription: data.ru.transcription,
                    description: data.ru.description,
                  },
                  en: {
                    word: data.en.word,
                    transcription: data.en.transcription,
                    description: data.en.description,
                  },
                }
              }
              isEdit={true}
              id={id}
            />
            <button
              className="button button--blue admin-popup-button"
              onClick={() => setIsPopupActive(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
export { AdminWord };
