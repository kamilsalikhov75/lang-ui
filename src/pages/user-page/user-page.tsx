import { Navigate, useParams } from "react-router-dom";
import { Progress } from "../../components/progress/progress";
import { UserHeader } from "../../components/user-header/user-header";
import { UserSettings } from "../../components/user-settings/user-settings";
import "./user-page.css";
import { useStateSelector } from "../../store/hooks";

function UserPage() {
  const { tab } = useParams();
  const status = useStateSelector((state) => state.user.status);
  const isAuth = useStateSelector((state) => state.user.isAuth);

  if (status === "loading") {
    return <h1>loading</h1>;
  }

  if (!isAuth) {
    return <Navigate to="/index.html" />;
  }

  return (
    <div className="container">
      <UserHeader currentTab={tab} />
      {/* {tab === "progress" ? <Progress /> : null} */}
      {tab === "settings" ? <UserSettings /> : null}
    </div>
  );
}

export { UserPage };
