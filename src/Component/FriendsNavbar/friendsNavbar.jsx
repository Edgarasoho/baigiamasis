import elektronikos from "../FrindsImages/elektronikos taskas.jpg";
import "./FriendsNavbar.scss";
import reshop from "../FrindsImages/reshop.jpg";
import meteko from "../FrindsImages/meteko.jpg";
import suportive from "../FrindsImages/supportive_electronic_service_logo.jpg";
function FriendsNavbar() {
  return (
    <nav className="friends-navbar">
      <f1>Draugai</f1>
      <a href="https://elektronikostaskas.lt/">
        <img className="friends" src={elektronikos} alt="" />
      </a>
      <a href="https://www.meteko.lt/">
        <img className="friends" src={meteko} alt="" />
      </a>
      <a href="https://reshop.lt/">
        <img className="friends" src={reshop} alt="" />
      </a>
      <a href="	http://supportive.lt">
        <img className="friends" src={suportive} alt="" />
      </a>
    </nav>
  );
}
export default FriendsNavbar;
