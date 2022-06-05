import "../index.css";
// key값을 좀 더 유니크한 무언가로 할당할 방법은 없을까?
function Card({ data }) {
  return (
    <>
      {data.map((plant) => (
        <div className="card" key={plant.id}>
          <img src={plant.image} alt={plant.name} />
          <span>{plant.content}</span>
        </div>
      ))}
    </>
  );
}

export default Card;
