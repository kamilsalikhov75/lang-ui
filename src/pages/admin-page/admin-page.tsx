import { Navigate, useParams } from "react-router-dom";
import { useStateSelector } from "../../store/hooks";
import "./admin-page.css";
import { AdminHeader } from "../../components/admin-header/admin-header";
import { AdminWords } from "../../components/admin-words/admin-words";
import { AdminAddWord } from "../../components/admin-add-word/admin-add-word";

function AdminPage() {
  const role = useStateSelector((state) => state.user.data.role);
  const wordStatus = useStateSelector((state) => state.word.status);
  const userStatus = useStateSelector((state) => state.user.status);
  const { tab } = useParams();

  if (wordStatus === "loading" || userStatus === "loading") {
    return <h1>loading</h1>;
  }

  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <AdminHeader currentTab={tab} />
      {tab === "words" ? <AdminWords /> : null}
      {tab === "add-word" ? <AdminAddWord /> : null}
    </div>
  );
}

export { AdminPage };
