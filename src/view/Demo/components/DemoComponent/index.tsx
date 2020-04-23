// import { SFC } from "react";
import React, { SFC, useState, useEffect, useRef } from "react";
import { ComponentProps } from "./index.interface";
import styles from "./index.module.less";
const DemoComponent: SFC<ComponentProps> = ({
  handleClick = () => {},
  countDown = 0,
}) => {
  const [count, setCount] = useState(0);

  let timer: any = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      let newCount = count - 1;
      setCount(newCount);
      if (count <= 0) {
        clearInterval(timer.current);
      }
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  });

  useEffect(() => {
    setCount(countDown);
  }, [countDown]);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timer.current);
    }
  });

  return (
    <div className={styles.container}>
      <span onClick={handleClick}>{count}</span>
    </div>
  );
};

export default DemoComponent;
