import { useState } from "react";
import "../index.css";
function MyModal({ handleAddList, isModalOpen, handleModalOpen }) {
  // 이건 참고
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  // 여기서 submit하면 handleModalOpen을 false로 바꿈, 이걸 받아오는 sidebar에서 value어쩌구...
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddList({ name, image, content });
    handleModalOpen(false);

    // 입력값 초기화
    setName("");
    setImage("");
    setContent("");
  };

  return (
    <>
      {isModalOpen ? (
        <div className="modal__container">
          <div className="modal__overlay"></div>
          <div className="modal__form">
            <form className="modal" onSubmit={handleSubmit}>
              <button className="modal__close">X</button>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                value={name}
                id="name"
                placeholder="이름"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="image">이미지</label>
              <input
                type="text"
                value={image}
                id="image"
                placeholder="URL"
                required
                onChange={(e) => setImage(e.target.value)}
              />
              <label htmlFor="content">내용</label>
              <input
                type="text"
                id="content"
                value={content}
                placeholder="나는 꽃이 좋아"
                required
                onChange={(e) => setContent(e.target.value)}
              />
              <button type="submit" className="button__submit">
                저장
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MyModal;
