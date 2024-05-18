import img_car from "../assets/img/img_car.png";
import { Button } from "@mui/base";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <h3>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </h3>
      </div>
      <div>
        <img src={img_car} alt="car image" />
      </div>
      <div>
        <Button>Mulai Sewa Mobil</Button>
      </div>
    </>
  );
}
