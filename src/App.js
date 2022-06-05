import { useState } from "react";

import Card from "./components/Card";
import Sidebar from "./components/Sidebar";

function App() {
  const initData = [
    {
      id: 1,
      name: "크로커스",
      content: "나는 크로커스가 조오아 그게 짱이니까",
      image: "https://seonhwadawn.github.io/GRJ_seonhwa/crocus.jpg",
    },
    {
      id: 2,
      name: "은방울꽃",
      content: "은방울꽃조아",
      image: "https://seonhwadawn.github.io/GRJ_seonhwa/bellflower.jpg",
    },
    {
      id: 3,
      name: "살구",
      content: "살구 맛있겠다",
      image: "https://seonhwadawn.github.io/GRJ_seonhwa/apricot.jpg",
    },
    {
      id: 4,
      name: "튤립",
      content: "튤립은 참 예쁘다",
      image: "https://seonhwadawn.github.io/GRJ_seonhwa/tulip1.jpg",
    },
  ];

  const [data, setData] = useState(initData);

  let handleAddList = (item) => {
    // deepcopy후 새로운 데이탸 쇽 집어넣기
    setData([...data, item]);
  };

  return (
    <>
      <header>
        <span>Garden of Dawn</span>
      </header>
      <main>
        <Sidebar handleAddList={handleAddList} data={data} />
        {/* 최대한 간소화 */}
        <section className="flex__contianer">
          <Card data={data} />
        </section>
      </main>
    </>
  );
}

export default App;
