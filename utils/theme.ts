import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

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
    ".swiper": {
      width: "50%",
      height: "100%",
      margin: "0 !important",
    },
    ".swiper-slide": {
      textAlign: "center",
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "uppercase",
      fontFamily: "Nunito Sans, sans-serif",
    },
    ".swiper-slide img": {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
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
};

const Button = defineStyleConfig({
  baseStyle: {
    textTransform: "uppercase",
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

export const theme = extendTheme({
  colors,
  styles,
  textStyles,
  components: { Button, Input },
});
