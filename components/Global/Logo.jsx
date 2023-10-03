import wayfinder from "@/public/wayfinder.svg"
import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex flex-col items-center pt-5 pb-10">
      <Image src={wayfinder} className="aspect-square w-8" alt="Calvin University Wayfinder Logo" />
      <h2 className="text-2xl font-semibold">Calvin Market</h2>
    </div>
  )
}

export default Logo