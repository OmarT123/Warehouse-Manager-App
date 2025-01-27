"use client";

import { useState } from "react";
import Product from "../products/ProductType";
import { Card, TextField, Button, Box, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import VariantSelect from "./VariantSelect";

interface ProductUpdateFormProps {
  initialProduct: Product;
}

const ProductUpdateForm = ({ initialProduct }: ProductUpdateFormProps) => {
  const [product, setProduct] = useState<Product>(initialProduct);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setProduct((prev) => ({
      ...prev,
      productVariant: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams({
      id: product.id,
      productName: product.productName,
      productPrice: product.productPrice,
      productVariant: product.productVariant,
    });
  };

  const updateSearchParams = (newParams: Product) => {
    const currentUrl = new URL(window.location.href);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        currentUrl.searchParams.set(key, value);
      } else {
        currentUrl.searchParams.delete(key);
      }
    });

    router.push(currentUrl.toString());
  };

  return (
    <Box width="100%" maxWidth="600px">
      <Card
        className="shadow-lg p-6 rounded-2xl border border-gray-200 bg-white dark:bg-dark-secondary dark:border-gray-900"
        style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
      >
        <Text as="div" size="5" weight="bold" className="mb-4">
          Update Product
        </Text>
        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextField.Root
              placeholder="Update Product Name..."
              onChange={handleInputChange}
              name="productName"
            />
            <TextField.Root
              placeholder="Update Product Price..."
              onChange={handleInputChange}
              name="productPrice"
              type="number"
            />
            <VariantSelect
              defaultValue={initialProduct.productVariant}
              handleChange={handleSelectChange}
            />
            <br />
            <Button
              type="submit"
              className="bg-gradient-to-r from-violet-600 to-indigo-600"
            >
              Update Product
            </Button>
          </form>
        </Card>
      </Card>
    </Box>
  );
};

export default ProductUpdateForm;
