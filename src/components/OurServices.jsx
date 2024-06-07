import img_service from "../assets/img/img_service.png";
import list from "../assets/img/list.png";
import styles from "../components/styles/OurServices.module.css";

const dataService = [
  {
    image: list,
    description: "Sewa Mobil Dengan Supir di Bali 12 Jam",
  },
  {
    image: list,
    description: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  },
  {
    image: list,
    description: "Sewa Mobil Jangka Panjang Bulanan",
  },
  {
    image: list,
    description: "Gratis Antar - Jemput Mobil di Bandara",
  },
  {
    image: list,
    description: "Layanan Airport Transfer / Drop In Out",
  },
];

export default function OurServices() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={img_service} alt="service image" />
        </div>
        <div className={styles.services}>
          <h2>Best Car Rental for any kind of trip in (lokasimu)</h2>
          <p>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>

          <div>
            {dataService.map((item, index) => (
              <div className={styles.list} key={index}>
                <img
                  className={styles.check}
                  src={item.image}
                  alt={`gambar ke ${index}`}
                />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
