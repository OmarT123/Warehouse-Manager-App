import { Text } from "@radix-ui/themes";
import Product from "./ProductType";
import ProductCard from "../components/ProductCard";

const PRODUCTS_API = "https://6776992512a55a9a7d0c4868.mockapi.io/products";

/**
 * Products Page
 * Fetches the products from the API and displays them in a grid format.
 * The grid changes size depending on the screen size (either 1, 2, or 3 columns).
 * Each ProductCard selects a random image to display as placeholder (since the API does not provide images).
 */

const ProductsPage = async () => {
  const res = await fetch(PRODUCTS_API);
  const products: Product[] = await res.json();

  return (
    <div className="flex justify-center flex-col text-center h-screen overflow-hidden">
      <Text as="div" size="6" weight="bold" className="mt-6">
        All Products
      </Text>

      <div className="flex-grow p-6 pt-2 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-scroll">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
