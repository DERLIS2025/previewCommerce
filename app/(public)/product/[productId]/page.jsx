import { productDummyData } from "@/assets/assets";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";

const ProductPage = ({ params }) => {
  const product = productDummyData.find((item) => item.id === params.productId);

  if (!product) {
    return (
      <div className="py-20 text-center text-slate-500">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <>
      <ProductDetails product={product} />
      <RelatedProducts product={product} />
    </>
  );
};

export default ProductPage;
