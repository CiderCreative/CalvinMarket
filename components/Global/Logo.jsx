import wayfinder from "../../public/wayfinder.svg";
import AdvancedImage from "../AdvancedImage";

const Logo = () => {
  return (
    <div className="flex flex-col items-center pb-10 pt-5">
      <AdvancedImage
        src={wayfinder}
        className="aspect-square w-8"
        alt="Calvin University Wayfinder Logo"
      />
      <h2 className="mt-2 text-xl font-medium">Calvin Market</h2>
    </div>
  );
};

export default Logo;
