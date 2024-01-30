import { Image } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <Image
          className="logo-class"
          src="https://img.freepik.com/free-vector/education-pen-concept_98292-5144.jpg?w=1480&t=st=1704774064~exp=1704774664~hmac=7e2a59f40e49bc687930287c3e4bea98cd700ee6f1ff3de19020cb2b8b4983f2"
          alt="Description of the image"
          style={{ width: "100%" }}
          preview={false}
          onClick={() => history("/")}
        />
      </div>
      <div className="header-text">
        <h1>School Management</h1>
      </div>
    </header>
  );
};

export default Header;
