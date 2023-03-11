import {
  FormControl,
  FormLabel,
  InputGroup,
  Input as ChakraInput,
  FormHelperText,
  InputLeftElement,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import * as React from "react";

export interface InputProps
  extends Omit<ChakraInputProps, "onChange" | "onBlur" | "value"> {
  name: string;
  leftIcon?: React.ReactNode;
  label?: string;
}

export function Input(props: InputProps) {
  const { name, label, leftIcon, ...rest } = props;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {leftIcon && (
          <InputLeftElement pointerEvents="none">{leftIcon}</InputLeftElement>
        )}
        <ChakraInput name={name} {...rest} />
      </InputGroup>
      {/* <FormHelperText>Error</FormHelperText> */}
    </FormControl>
  );
}
