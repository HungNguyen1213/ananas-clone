import React, { useState, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import { Input } from "@/components";

export function SearchControl() {
  const router = useRouter();

  const queryKey = router.query?.key
    ? typeof router.query.key === "object"
      ? ""
      : router.query.key
    : "";

  const [key, setKey] = useState<string>(queryKey);

  const handleSubmitKey = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      router.push(`/search-result?key=${key}`);
    }
  };

  useEffect(() => {
    setKey(queryKey);
  }, [queryKey]);

  return (
    <Input
      name="search"
      leftIcon={<SearchIcon boxSize={5} color="gray.500" />}
      placeholder="Tìm kiếm"
      value={key}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setKey(e.target.value)
      }
      onKeyDown={handleSubmitKey}
    />
  );
}
