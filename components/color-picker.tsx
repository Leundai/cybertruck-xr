import { Text, Container, Root, ContainerRef } from "@react-three/uikit";
import { Card, colors } from "@react-three/uikit-default";
import { Billboard } from "./billboard";
import { useColorStore } from "../store/store";
import { useSpringValue } from "@react-spring/three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Draggable from "./draggable";

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

export default function ColorPicker() {
  const cardRef = useRef<ContainerRef>(null);
  const borderColor = useSpringValue("#ffffff");
  const selectedColor = useColorStore((state) => state.selected);
  const setSelected = useColorStore((state) => state.setSelected);
  useFrame(() => {
    if (cardRef.current && borderColor.get() !== selectedColor) {
      cardRef.current.setStyle({
        borderColor: borderColor.get(),
      });
    }
  });

  return (
    <group position={[0, 2, 0]}>
      <Draggable>
        <Billboard>
          <Root pixelSize={0.007} flexDirection="column" alignItems="center">
            <Card
              padding={16}
              display="flex"
              flexDirection="column"
              gap={16}
              ref={cardRef}
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
                        color === selectedColor ? undefined : "white",
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
                  />
                ))}
              </Container>
            </Card>
          </Root>
        </Billboard>
      </Draggable>
    </group>
  );
}
