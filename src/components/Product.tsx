import Link from "next/link";
import { FC } from "react";
import { chopWordForUI } from "../utils/chopTextForUI";
import { cloudinaryInstance } from "../cloudinary";
import { LazyCldImage } from "./LazyCldImage";

interface ProductProps {
  name: string;
  price: number;
  id: string;
}

export const Product: FC<ProductProps> = ({ name, price, id }) => {
  const cldImage = cloudinaryInstance.image(`/products/${id}/thumbnail`);
  const thumbnailURL = cldImage.toURL();

  return (
    <Link href={`/products/${id}`} passHref>
      <div className="w-60 border border-neutral-300 border-opacity-10 rounded-md bg-slate-900/30 cursor-pointer transition-all duration-150 hover:bg-slate-800/40 hover:shadow-2xl transform hover:-translate-y-[1.5px]">
        <LazyCldImage
          src={thumbnailURL}
          whileLoading={{
            containerStyles: "rounded-t-md",
            placeholderStyles: "rounded-t-md",
          }}
          alt={name}
        />
        <div className="px-4 py-2 pt-3">
          <span className="text-xl">{chopWordForUI(name, 6)}</span>
          <div className="flex justify-start gap-5 mt-3">
            <span className="text-green-400 text-base">€{price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
