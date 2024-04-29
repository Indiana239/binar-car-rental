import img_service from "../assets/img/img_service.png";
import list from "../assets/img/list.png";

export default function OurServices() {
  return (
    <>
      <div>
        <img src={img_service} alt="service image" />
      </div>
      <div>
        <ul>
          <li>
            <img src={list} alt="" />
            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
          </li>
          <li>
            <img src={list} alt="" />
            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
          </li>
          <li>
            <img src={list} alt="" />
            <p>Sewa Mobil Jangka Panjang Bulanan</p>
          </li>
          <li>
            <img src={list} alt="" />
            <p>Gratis Antar-Jemput Mobil di Bandara</p>
          </li>
          <li>
            <img src={list} alt="" />
            <p>Layanan Airport Transfer / Drop In Out</p>
          </li>
        </ul>
      </div>
    </>
  );
}
