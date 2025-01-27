import { Box, Card, Flex, Text } from "@radix-ui/themes";
import React from "react";

interface InfoCardProps {
  info: {
    icon: React.ReactNode;
    title: string;
    value: string;
  };
}

const InfoCard = ({ info }: InfoCardProps) => {
  return (
    <Box>
      <Card className="h-36 p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform rounded-lg dark:bg-dark-secondary dark:text-dark-text text-light-text">
        <Flex align="center" gap="4" className="mb-2">
          <Box className="w-10 h-10 mr-2 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-lg">
            {info.icon}
          </Box>
          <Text className="text-lg font-bold">{info.title}</Text>
        </Flex>
        <Text className="text-gray-600 dark:text-dark-text-secondary text-sm leading-relaxed">
          {info.value}
        </Text>
      </Card>
    </Box>
  );
};

export default InfoCard;
