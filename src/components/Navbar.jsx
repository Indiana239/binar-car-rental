import Rectangle from "../assets/img/Rectangle.png";
import { Button } from "@mui/base";

export default function Navbar() {
  return (
    <>
      <div className="logo">
        <img src={Rectangle} alt="Logo" />
      </div>
      <div className="nav">
        <p>Our Services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
        <Button>Register</Button>
      </div>
    </>
  );
}
