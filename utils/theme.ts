import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#f15e2c",
  secondary: "#666666",
  text: {
    gray: "#555555",
    lightGray: "#cccccc",
    white: "#ffffff",
  },
};

const styles = {
  global: {
    body: {
      bg: "white",
      color: "black",
      fontFamily: "Ubuntu, sans-serif",
    },
  },
};

const textStyles = {
  h1: {
    fontSize: ["30px"],
    fontWeight: "bold",
    lineHeight: "110%",
    textTransform: "uppercase",
  },
  h2: {
    fontSize: ["23px"],
    fontWeight: "bold",
    lineHeight: "110%",
    textTransform: "uppercase",
  },
  p: {
    fontSize: ["16px"],
    lineHeight: "1.5",
    fontFamily: "Nunito Sans, sans-serif",
  },
};

const Button = defineStyleConfig({
  baseStyle: {
    textTransform: "uppercase",
    borderRadius: "0",
  },
  variants: {
    solid: {
      color: "white",
      backgroundColor: "black",
      "&:hover": {
        backgroundColor: "blackAlpha.800",
      },
    },
  },
  sizes: { lg: { fontSize: "23px", height: "73px" } },
  defaultProps: {
    size: "lg",
  },
});

const Input = defineStyleConfig({
  variants: {
    outline: {
      field: {
        borderRadius: 0,
        borderColor: "#cccccc",
        _focus: {
          boxShadow:
            "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)",
        },
      },
    },
  },
});

const Container = defineStyleConfig({
  sizes: {
    custom: defineStyle({
      maxW: "1200px",
      px: { base: "4", lg: "0" },
    }),
  },
  defaultProps: {
    size: "custom",
  },
});

export const theme = extendTheme({
  colors,
  styles,
  textStyles,
  components: { Button, Input, Container },
});
