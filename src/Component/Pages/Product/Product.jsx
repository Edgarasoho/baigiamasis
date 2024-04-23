import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.scss";
function BasicExample() {
  return (
    <div className="cards-box">
      <Card className="cards" style={{ width: "18rem", height: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Card className="cards" style={{ width: "18rem", height: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Card className="cards" style={{ width: "18rem", height: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Card className="cards" style={{ width: "18rem", height: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage:
            "url(https://scontent.fkun1-1.fna.fbcdn.net/v/t39.30808-1/302436165_550087213583801_242669800242458316_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t_2njnaFiNwAb7eQ6sv&_nc_ht=scontent.fkun1-1.fna&oh=00_AfC8yHR0VNv8k61pFxSMzInc5r-fTlL3nKGbyKTFxn1n5g&oe=662DDB54)",
        }}
      >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage:
            "url(https://5.imimg.com/data5/SELLER/Default/2023/5/305459383/QX/WH/QH/3512032/whatsapp-image-2022-07-26-at-1-23-01-pm-1--500x500.jpeg)",
        }}
      >
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>MIX Plastikas</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
