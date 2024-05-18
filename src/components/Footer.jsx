import Rectangle from "../assets/img/Rectangle.png";
import listItem from "../assets/icon/listItem.png";
import styles from "../components/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.address}>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div>
        <p>Our Services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div>
        <p>connect With Us</p>
        <img src={listItem} alt="" />
      </div>
      <div>
        <p>Copyright Binar 2022</p>
        <img src={Rectangle} alt="" />
      </div>
    </>
  );
}
