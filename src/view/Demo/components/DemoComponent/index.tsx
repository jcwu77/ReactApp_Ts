// import { SFC } from "react";
import React, { SFC, useState, useEffect } from "react";
import { ComponentProps } from "./index.interface";
import styles from "./index.module.less";
let timer: any = null;
const DemoComponent: SFC<ComponentProps> = ({ handleClick }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    timer = setInterval(() => {
      let newCount = count - 1;
      setCount(newCount);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timer);
    }
  });
  return (
    <div className={styles.container}>
      <span onClick={handleClick}>{count}</span>
    </div>
  );
};

export default DemoComponent;
