import Rectangle from "../assets/img/Rectangle.png";
import { Button } from "@mui/base";
import styles from "../components/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Rectangle} alt="logo" />
        </div>
        <div className={styles.nav}>
          <p>Our Services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
          <Button>Register</Button>
        </div>
      </div>
    </>
  );
}
