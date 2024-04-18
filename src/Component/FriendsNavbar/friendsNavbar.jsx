import elektronikos from "../FrindsImages/elektronikos taskas.jpg";
import "./FriendsNavbar.scss";
import reshop from "../FrindsImages/reshop.jpg";
import rematrade from "../FrindsImages/rematrade.jpg";
import suportive from "../FrindsImages/supportive_electronic_service_logo.jpg";
function FriendsNavbar() {
  return (
    <nav className="friends-navbar">
      <f1>Draugai</f1>

      <img className="friends" src={elektronikos} alt="" />
      <img className="friends" src={rematrade} alt="" />
      <img className="friends" src={reshop} alt="" />
      <img className="friends" src={suportive} alt="" />
    </nav>
  );
}
export default FriendsNavbar;
