import React, { ChangeEvent } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { testApi } from "../../api/demo";
import { State } from "./index.interface";
import ChildThree from "./ChildThree";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

import styles from "./index.module.less";

// const CounterContext = createContext({
//   counter: 0,
// });

class Demo extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props);
    this.state = {
      name: "1",
      age: 12,
      value: "",
      userInfo: {
        address: "",
        gender: "",
        nickName: "",
      },
    };
  }

  componentDidMount() {
    this.handleLogin();
  }

  handleClick = (): void => {
    this.setState({
      name: "换名字了",
    });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      value: e.target.value,
    });
  };

  handleLogin = async () => {
    const res = await testApi(); // 用 yield 代替 await
    this.setState({
      userInfo: res.data,
    });
  };

  render() {
    const { name, value, userInfo } = this.state;
    return (
      // !pending && (
      <>
        <div className={styles.nameButton}>点我登录</div>
        {userInfo.nickName}
        <ul>
          <div className={styles.title}>子路由测试</div>
          <Link to="/demo/child_one">跳转子路由1</Link>
          <Link to="/demo/child_two">跳转子路由2</Link>
          <Link to="/demo/child_three">跳转子路由3</Link>
        </ul>
        <Switch>
          <Route path="/demo/child_one" component={ChildOne} />
          <Route path="/demo/child_two" component={ChildTwo} />
          <Route path="/demo/child_three" component={ChildThree} />
        </Switch>

        <span>我的名字是：{name}</span>
        <div className={styles.nameButton} onClick={this.handleClick}>
          点我换名字
        </div>
        <input value={value} onChange={this.handleChange} />
      </>
    );
    // );
  }
}

export default Demo;
