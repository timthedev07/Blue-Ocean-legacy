import { NextPage } from "next";
import { useRouter } from "next/router";
import { Product } from "../../components/Product";
import { productsData } from "../../products";
import { getSingleTranslation } from "../../utils/getTranslation";

const Products: NextPage = () => {
  const { locale } = useRouter();

  return (
    <>
      <header className="relative flex justify-center items-center">
        <img
          src="/images/k.jpeg"
          alt=""
          className="w-full object-cover h-64 brightness-[0.3]"
        />
        <h2 className="absolute font-sans font-semibold">PRODUCTS</h2>
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
