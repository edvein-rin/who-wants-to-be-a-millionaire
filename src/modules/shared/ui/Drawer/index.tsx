"use client";

import classNames from "classnames";
import { ReactNode, useCallback, useState } from "react";

import styles from "./styles.module.css";

export type DrawerProps = {
  children?: (utils: {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
  }) => ReactNode;
  content?: (utils: { close: () => void }) => ReactNode;
  className?: string;
};

export const Drawer = ({ children, content, className }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggle = useCallback(() => {
    setIsOpen((wasOpen) => !wasOpen);
  }, []);

  return (
    <>
      {isOpen && (
        <div className={classNames(styles.root, className)}>
          {content && content({ close })}
        </div>
      )}
      {children && children({ isOpen, open, close, toggle })}
    </>
  );
};
