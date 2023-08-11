import { useStateSelector } from "../../store/hooks";
import { AdminWord } from "./admin-word";

function AdminWords() {
  const { data, status } = useStateSelector((state) => state.word);
  if (status === "loading") {
    return <h1>loading</h1>;
  }

  return (
    <div className="admin-words">
      {data.map((item) => (
        <AdminWord key={item._id} id={item._id} text={item.ru.word} />
      ))}
    </div>
  );
}

export { AdminWords };
