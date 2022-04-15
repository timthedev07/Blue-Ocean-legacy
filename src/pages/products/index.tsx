import { NextPage } from "next";
import { useRouter } from "next/router";
import { Product } from "../../components/Product";
import { productsData } from "../../products";
import { getSingleTranslation } from "../../utils/getTranslation";

const Products: NextPage = () => {
  const { locale } = useRouter();

  return (
    <div className="p-5">
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
      {/* <Product
        infoPageUrl="/contact"
        name="Mainframe computer is the most interesting thing i kind of don't like ding that ajlkfj"
        photoUrl="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/other/ul/g/24/01/2401254d-b7b8-4cd0-81cb10f77aaf3378.component.simple-narrative-xl.ts=1601128449153.jpg/content/adobe-cms/es/es/topics/mainframe/jcr:content/root/table_of_contents/body/simple_narrative_537852850/image"
        price={30}
      /> */}
    </div>
  );
};

export default Products;
