import { Text, Container, Root, ContainerRef } from "@react-three/uikit";
import { Card, colors } from "@react-three/uikit-default";
import { Billboard } from "./billboard";
import { useColorStore } from "../store/store";
import { useSpringValue } from "@react-spring/three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const pickableColors = [
  "#FFFFFF",
  "#4ECDC4",
  "#1A535C",
  "#FFB400",
  "#FFE66D",
  "#3D3A4B",
  "#E63946",
  "#A8DADC",
  "#457B9D",
  "#2A9D8F",
  "#F4A261",
  "#264653",
];

export function ColorPicker() {
  const ref = useRef<ContainerRef>(null);
  const borderColor = useSpringValue("#ffffff");
  const selectedColor = useColorStore((state) => state.selected);
  const setSelected = useColorStore((state) => state.setSelected);

  useFrame(() => {
    if (ref.current && borderColor.get() !== selectedColor) {
      ref.current.setStyle({
        borderColor: borderColor.get(),
      });
    }
  });

  return (
    <Billboard>
      <Root
        pixelSize={0.007}
        anchorY="bottom"
        flexDirection="column"
        alignItems="center"
      >
        <Card
          padding={16}
          display="flex"
          flexDirection="column"
          gap={16}
          ref={ref}
          borderWidth={4}
        >
          <Text>Color Picker</Text>
          <Container
            display="flex"
            flexDirection="row"
            gap={12}
            flexWrap="wrap"
            maxWidth={200}
            justifyContent="space-between"
          >
            {pickableColors.map((color) => (
              <Container
                hover={{
                  borderColor:
                    color === selectedColor ? undefined : "rgb(255,255,255)",
                }}
                key={color}
                cursor="pointer"
                borderColor={
                  color === selectedColor ? color : colors.background
                }
                onClick={() => {
                  setSelected(color);
                  borderColor.start(color);
                }}
                borderWidth={2}
                width={20}
                height={20}
                borderRadius={9999}
                backgroundColor={color}
                flexDirection="column"
              ></Container>
            ))}
          </Container>
        </Card>
        <Container height={0.5 / 0.007} width={4} backgroundColor="white" />
      </Root>
    </Billboard>
  );
}
