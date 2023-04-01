import { useParams } from 'react-router-dom';
import { GamesHeader } from '../../components/games-header/games-header';
import { CardGame } from '../../components/games/card-game/card-game';
import { TranslateGame } from '../../components/games/translate-game/translate-game';
import './games-page.css';

function GamesPage() {
  const { tab } = useParams();
  return (
    <div className="container">
      <GamesHeader currentTab={tab} />
      {tab === 'translate' ? <TranslateGame /> : null}
      {tab === 'cards' ? <CardGame /> : null}
    </div>
  );
}

export { GamesPage };
