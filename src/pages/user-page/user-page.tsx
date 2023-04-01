import { useParams } from 'react-router-dom';
import { Progress } from '../../components/progress/progress';
import { UserHeader } from '../../components/user-header/user-header';
import { UserSettings } from '../../components/user-settings/user-settings';
import './user-page.css';

function UserPage() {
  const { tab } = useParams();
  return (
    <div className="container">
      <UserHeader currentTab={tab} />
      {tab === 'progress' ? <Progress /> : null}
      {tab === 'settings' ? <UserSettings /> : null}
    </div>
  );
}

export { UserPage };
