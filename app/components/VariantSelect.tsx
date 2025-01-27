import { Select } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const sizes = ["Small", "Medium", "Large", "Extra Large"];

interface VariantSelectProps {
  defaultValue: string;
  handleChange: (value: string) => void;
}

const VariantSelect = ({ defaultValue, handleChange }: VariantSelectProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Select.Root defaultValue={defaultValue} onValueChange={handleChange}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          {sizes.map((size) => (
            <Select.Item key={size} value={size}>
              {size}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default VariantSelect;
