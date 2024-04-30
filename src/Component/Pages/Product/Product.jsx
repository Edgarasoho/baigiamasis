import Card from "react-bootstrap/Card";
import "./Cards.scss";
import Mix from "./ProductImg/Mix Plastikas.JPG";
function BasicExample() {
  return (
    <div className="cards-box">
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage: `url(https://www.ward.com/wp-content/uploads/2016/12/Shredded-Steel-350x350.jpg)`,
        }}
      >
        <Card.Body>
          <Card.Title>Maltas Juodas Metalas</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage: `url(https://www.rkginternational.com/images/products/non_ferrous/brass_shredded.jpg)`,
        }}
      >
        <Card.Body>
          <Card.Title>Maltas Žalvaris</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage: `url(https://5.imimg.com/data5/JJ/OQ/GS/SELLER-19867849/abs-pc-grinding-500x500.jpg)`,
        }}
      >
        <Card.Body>
          <Card.Title>PC, ABS, Plastikas</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage: `url(https://www.ward.com/wp-content/uploads/2016/09/Armatures-2.jpg)`,
        }}
      >
        <Card.Body>
          <Card.Title>Malti El. Varykliai</Card.Title>
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
        <Card.Body>
          <Card.Title>Elektronikos plokščių laužas</Card.Title>
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
        <Card.Body>
          <Card.Title>Plastikų MIX</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage:
            "url(https://www.recyclingtoday.com/remote/aHR0cHM6Ly9naWVjZG4uYmxvYi5jb3JlLndpbmRvd3MubmV0L2ZpbGV1cGxvYWRzL3B1YmxpY2F0aW9ucy8xNy9pc3N1ZXMvMTAzOTMxL2FydGljbGVzL2ltYWdlcy9sZXZpdGF0ZWQtdHdpdGNoLS0td2lkZS12aWV3LTEtd2ViLmpwZw.Ts5JAZrGeUw.jpg?w=948&h=533&format=webp&mode=pad&anchor=middlecenter&scale=both&bgcolor=F0F1F2)",
        }}
      >
        <Card.Body>
          <Card.Title>Maltas Aliuminis</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage:
            "url(https://www.euwid-recycling.com/fileadmin/data/euwid_recycling_und_entsorgung/news/images/Kabelschrott-aus-Kupfer_27-09-2021.jpeg)",
        }}
      >
        <Card.Body>
          <Card.Title>Maltas Varis</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="cards"
        style={{
          width: "18rem",
          height: "18rem",
          backgroundImage:
            "url(https://www.shredwell-recycling.com/wp-content/uploads/2018/07/cooper-wire-scrap-cable-shredding-recycling-plant-460x295.jpg)",
        }}
      >
        <Card.Body>
          <Card.Title>Laidu, Kabelių Laužas</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;
