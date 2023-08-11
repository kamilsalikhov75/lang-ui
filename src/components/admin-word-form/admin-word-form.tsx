import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addWordThunk, updateWordThunk } from "../../store/slices/word";

export interface IAdminWord {
  ru: {
    word: string;
    transcription: string;
    description: string;
  };
  en: {
    word: string;
    transcription: string;
    description: string;
  };
}

interface IAdminWordFormProps {
  value?: IAdminWord;
  isEdit?: boolean;
  id?: string;
}

const initialValue = {
  ru: {
    transcription: "",
    description: "",
    word: "",
  },
  en: {
    transcription: "",
    description: "",
    word: "",
  },
};

export function AdminWordForm({
  value = initialValue,
  isEdit = false,
  id = "",
}: IAdminWordFormProps) {
  const [values, setValues] = useState(value);
  const dispath = useAppDispatch();

  return (
    <form className="admin-add-word-form">
      <div className="admin-add-word-form-block">
        <h3 className="admin-add-word-subtitle">Русский</h3>
        <div>
          <input
            required
            type="text"
            className="input"
            placeholder="Слово"
            value={values.ru.word}
            onChange={(e) =>
              setValues({
                ...values,
                ru: { ...values.ru, word: e.target.value },
              })
            }
          />
          <input
            required
            type="text"
            className="input"
            placeholder="Транскрипция"
            value={values.ru.transcription}
            onChange={(e) =>
              setValues({
                ...values,
                ru: { ...values.ru, transcription: e.target.value },
              })
            }
          />
          <input
            required
            type="text"
            className="input"
            placeholder="Толкование"
            value={values.ru.description}
            onChange={(e) =>
              setValues({
                ...values,
                ru: { ...values.ru, description: e.target.value },
              })
            }
          />
        </div>
      </div>
      <div className="admin-add-word-form-block">
        <h3 className="admin-add-word-subtitle">Английский</h3>
        <div>
          <input
            required
            type="text"
            className="input"
            placeholder="Слово"
            value={values.en.word}
            onChange={(e) =>
              setValues({
                ...values,
                en: { ...values.en, word: e.target.value },
              })
            }
          />
          <input
            required
            type="text"
            className="input"
            placeholder="Транскрипция"
            value={values.en.transcription}
            onChange={(e) =>
              setValues({
                ...values,
                en: { ...values.en, transcription: e.target.value },
              })
            }
          />
          <input
            required
            type="text"
            className="input"
            placeholder="Толкование"
            value={values.en.description}
            onChange={(e) =>
              setValues({
                ...values,
                en: { ...values.en, description: e.target.value },
              })
            }
          />
        </div>
      </div>
      <button
        className="button"
        onClick={(e) => {
          e.preventDefault();
          isEdit
            ? dispath(updateWordThunk({ id, data: values }))
            : dispath(addWordThunk(values));
        }}
        type="submit"
      >
        {isEdit ? "Обновить" : "Добавить"}
      </button>
    </form>
  );
}
