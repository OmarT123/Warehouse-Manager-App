import { Box, Card, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import Product from "../products/ProductType";
import Image from "next/image";
import Item1 from "@/public/item1.png";
import Item2 from "@/public/item2.png";
import Item3 from "@/public/item3.png";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const items = [Item1, Item2, Item3];

  const randomItem = items[Math.floor(Math.random() * items.length)];

  return (
    <Link
      href={{
        pathname: `/products/${product.id}`,
        query: {
          id: product.id,
          productName: product.productName,
          productVariant: product.productVariant,
          productPrice: product.productPrice,
        },
      }}
    >
      <Box maxWidth="240px">
        <Card
          size="2"
          className="shadow-md hover:shadow-lg hover:scale-105 transition-transform"
        >
          <Inset clip="padding-box" side="top" pb="current">
            <Image
              src={randomItem.src}
              alt="Bold typography"
              width={100}
              height={200}
              className="block object-cover w-full h-[200px] bg-gray-500"
            />
          </Inset>
          <Box className="p-4">
            <Text as="div" size="2" weight="bold">
              {product.productName}{" "}
            </Text>
            <Text as="div" color="gray" size="2">
              Price: ${product.productPrice}
            </Text>
            <Text as="div" color="gray" size="2">
              Variant: {product.productVariant}
            </Text>
          </Box>
        </Card>
      </Box>
    </Link>
  );
};

export default ProductCard;
