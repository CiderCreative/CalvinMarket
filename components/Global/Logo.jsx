import wayfinder from "../../public/wayfinder.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-center pb-10 pt-5">
      <Image
        src={wayfinder}
        className="aspect-square w-8"
        alt="Calvin University Wayfinder Logo"
      />
      <h2 className="mt-2 text-xl font-medium">Calvin Market</h2>
    </div>
  );
};

export default Logo;
