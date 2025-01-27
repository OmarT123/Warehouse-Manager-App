import { Box, Card, Text, Flex, Separator } from "@radix-ui/themes";
import ProductUpdateForm from "@/app/components/ProductUpdateForm";
import Product from "../ProductType";

interface ProductPreviewProps {
  searchParams: Product;
}

/**
 * ProductPreview Page
 * This component displays detailed information about a product and includes a form for updating the product details.
 * It fetches the product data from the `searchParams` passed as props.
 *
 * @param {Product} searchParams - An object containing product details (id, name, price, variant).
 */

const ProductPreview = async ({ searchParams }: ProductPreviewProps) => {
  const { id, productName, productPrice, productVariant } = await searchParams;

  if (!searchParams) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Text as="div" size="6" weight="bold" color="red">
          Product not found
        </Text>
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      align="center"
      gap="6"
      className="p-6"
      suppressHydrationWarning
    >
      {/* Product Details */}
      <Box width="100%" maxWidth="600px">
        <Card
          className="shadow-lg p-6 rounded-2xl border border-gray-200 bg-white dark:bg-dark-secondary dark:border-gray-900"
          style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
        >
          <Text as="div" size="5" weight="bold" className="mb-4">
            Product Details
          </Text>

          <Separator size="4" />

          <Text as="div" size="3" weight="medium" className="mb-2 mt-2">
            <strong>ID:</strong> {id}
          </Text>
          <Text as="div" size="4" weight="bold" className="mb-2">
            <strong>Name:</strong> {productName}
          </Text>
          <Text as="div" size="3" weight="medium" className="mb-2">
            <strong>Price:</strong> ${productPrice}
          </Text>
          <Text as="div" size="3" weight="medium">
            <strong>Variant:</strong> {productVariant}
          </Text>
        </Card>
      </Box>

      {/* Product Update Form */}
      <ProductUpdateForm
        initialProduct={{
          id,
          productName,
          productPrice,
          productVariant,
        }}
      />
    </Flex>
  );
};

export default ProductPreview;
