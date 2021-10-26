import mylogo from "./images/mylogo.jpg";
import "./logo_sec.css";
function Logo(params) {
  return (
    <div className="logo_div">
      <div className="info">
        <ul>
          <li>
            Email:<a href="akshaymsutar8860@gmail.com">Click</a>
          </li>
          <li>
            Github:<a href="https://github.com/akshaysutar8860">Click</a>
          </li>
          <li>
            {" "}
            Linkdin:
            <a href="https://www.linkedin.com/in/akshay-sutar-392199210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLlL20hnTQoumb49Mlt9xqQ%3D%3D">
              Click
            </a>
          </li>
          <li>Contact:+919588623393</li>
          <li>
            Kaggle:<a href="https://www.kaggle.com/akshaysutar">Click</a>
          </li>
        </ul>
      </div>
      <img src={mylogo} className="logo" alt="no_image" />
    </div>
  );
}
export default Logo;
