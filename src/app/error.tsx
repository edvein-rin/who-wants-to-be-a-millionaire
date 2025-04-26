"use client";

import { useCallback, useEffect } from "react";

import { Button } from "@/modules/shared";

import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleTryAgainButtonClick = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <div className={styles.root}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <Button onClick={handleTryAgainButtonClick}>Try again</Button>
    </div>
  );
}
