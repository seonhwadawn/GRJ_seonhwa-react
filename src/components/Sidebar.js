import "../index.css";
import MyModal from "./Modal";
import { useState } from "react";

function Sidebar({ handleAddList, data }) {
  // 기본상태는false로
  const [isModalOpen, setIsModalOpen] = useState(false);
  // onClick으로 불러와서 true로 변경
  let handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  return (
    <div className="flex__sidebar">
      <button
        type="button"
        className="button__add"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        추가
      </button>
      <ul>
        {/* 일단 식물이니까 plant로 이름 지었는데 이래도 되나? */}
        {data.map((plant) => (
          <li key={plant.name}>{plant.name}</li>
        ))}
      </ul>

      <MyModal
        isModalOpen={isModalOpen}
        handleAddList={handleAddList}
        handleModalOpen={handleModalOpen}
      />
    </div>
  );
}

export default Sidebar;
