import './progress.css';

function Progress() {
  return (
    <div className="progress">
      <div className="progress__block progress__block--large"></div>
      <div className="progress__right">
        <div className="progress__block progress__block--small"></div>
        <div className="progress__block progress__block--small"></div>
        <div className="progress__block progress__block--small"></div>
      </div>
    </div>
  );
}

export { Progress };
