import icon_24hrs from "../assets/icon/icon_24hrs.png";
import icon_complete from "../assets/icon/icon_complete.png";
import icon_price from "../assets/icon/icon_price.png";
import icon_professional from "../assets/icon/icon_professional.png";

export default function WhyUs() {
  return (
    <>
      <div>
        <img src={icon_complete} alt="" />
        <h4>Mobil Lengkap</h4>
        <p>
          Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat
        </p>
      </div>
      <div>
        <img src={icon_price} alt="" />
        <h4>Harga Murah</h4>
        <p>
          Harga Murah dan Bersaing, bisa bandingkan harga kami dengan rental
          mobil lain
        </p>
      </div>
      <div>
        <img src={icon_24hrs} alt="" />
        <h4>Layanan 24 Jam</h4>
        <p>
          Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia
          di akhir minggu
        </p>
      </div>
      <div>
        <img src={icon_professional} alt="" />
        <h4>Mobil Lengkap</h4>
        <p>
          Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
          waktu
        </p>
      </div>
    </>
  );
}
