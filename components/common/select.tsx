import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  onChange: (selected: string) => void;
  label: string;
}

export function Select(props: SelectProps) {
  const { label, value, options, onChange } = props;

  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box>
      <Text textStyle={"h2"} mb={{ base: "5px", md: "10px" }}>
        {label}
      </Text>
      <Popover placement="bottom-start" isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <Button
            bg="transparent"
            rightIcon={<ChevronDownIcon color={"black"} fontSize="23px" />}
            sx={{
              borderRadius: "0px",
              border: "#a5a5a5 1px solid",
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: "bold",
              fontSize: "17px",
              lineHeight: "9",
              height: "9",
              width: "100%",
              minW: "100px",
              position: "relative",
              color: "black",
              justifyContent: "start",
              span: {
                position: "absolute",
                right: "2",
              },
            }}
            _hover={{ bg: "transparent", cursor: "pointer" }}
            onClick={onToggle}
          >
            {value}
          </Button>
        </PopoverTrigger>
        <PopoverContent borderRadius={"0px"} width="unset">
          <Grid
            templateColumns={"repeat(4, 1fr)"}
            sx={{
              border: "#a5a5a5 1px solid",
              p: "1",
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "16px",
            }}
          >
            {options.map((option) => (
              <GridItem
                key={option.value}
                sx={{
                  border: "#808080 1px solid",
                  marginLeft: "-1px",
                  marginBottom: "-1px",
                  width: "50px",
                  height: "50px",
                  cursor: "pointer",
                }}
                _hover={{ bg: "#f5f5f5" }}
                onClick={() => {
                  onChange(option.value);
                  onClose();
                }}
              >
                <Center
                  height="100%"
                  fontWeight={value === option.label ? "bold" : "normal"}
                >
                  {option.label}
                </Center>
              </GridItem>
            ))}
          </Grid>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
