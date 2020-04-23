import React, { SFC } from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { ComponentProps } from "./index.interface";
import styles from "./index.module.less";

const DemoCommonComponent: SFC<ComponentProps & RouteComponentProps> = ({
  handleClick = () => {},
  history,
}) => {
  const handleGo = () => {
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <span onClick={handleClick}>增加</span>
      <span onClick={handleGo}>跳转</span>
    </div>
  );
};

export default withRouter(DemoCommonComponent);
