import CarImage from "../assets/img/CarImage.png";
import { Button } from "@mui/base";

export default function Banner() {
  return (
    <>
      <div>
        <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui officiis
          repellendus ducimus ab cupiditate, minima repudiandae fugit autem
          delectus eos odit commodi aliquam similique possimus quae perspiciatis
          voluptatem alias sint.
        </p>
        <Button>Rent Now</Button>
      </div>
      <div>
        <img src={CarImage} alt="" />
      </div>
    </>
  );
}
