import React, { useState } from 'react';

import { log } from '../../log';

const HistoryItem = ({ count }) => {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected((prevSelected) => !prevSelected);
  };

  return (
    <li onClick={clickHandler} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
};

const CounterHistory = ({ history }) => {
  log('<CounterHistory /> rendered', 2);

  // key가 변경되면 해당 컴포넌트를 리셋(언마운팅)시키고 다시 렌더링(마운팅)함.
  // 📌index는 위치가 동적으로 변함에 따라 인덱스값이 달라질 수 있다.
  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
};
export default CounterHistory;
