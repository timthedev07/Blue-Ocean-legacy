import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Product } from "../../components/Product";
import { productsData } from "../../products";
import {
  enProducts,
  esProducts,
  zhProducts,
} from "../../translations/products";
import { getHeadForPage } from "../../utils/getHead";
import {
  getSingleTranslation,
  getTranslation,
} from "../../utils/getTranslation";

const Products: NextPage = () => {
  const { locale } = useRouter();
  const t = getTranslation(locale, enProducts, esProducts, zhProducts);

  return (
    <>
      {getHeadForPage({
        description: "See our products on this page!",
        path: `/products`,
        title: "Products",
      })}
      <header className="relative flex justify-center items-center">
        <Image
          src="/images/k.jpeg"
          alt=""
          width={"100vw"}
          height={"256px"}
          className="w-full object-cover brightness-[0.3]"
        />
        <h2 className="absolute font-sans font-semibold uppercase">
          {t.header}
        </h2>
      </header>
      <div className="p-14">
        {productsData.map((each) => (
          <Product
            key={each.id}
            id={each.id}
            name={getSingleTranslation(
              locale,
              each.name.en,
              each.name.es,
              each.name.zh
            )}
            price={each.price}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
