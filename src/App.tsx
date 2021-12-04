import React, { useEffect, useState } from "react";
// import { isPropertySignature } from "typescript";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
// import robots from "./mockdata/robots.json";
import Robot from "./components/RobotsOdd";
import RobotEven from "./components/RobotsEven";
import ShoppingCart from "./components/ShoppingCart";

interface Props {
  username: string;
}
// interface State {
//   robotGallery: any[];
//   count: number;
// }
const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  // 从后端接受的数据
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  // 捕获的错误信息
  const [error, setError] = useState<string>();
  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);
  useEffect(() => {
    const fetchData = async () => {
      // 加载状态设置为true
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // .then(response => response.json())
        // .then(data => setRobotGallery(data))
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e: any) {
        setError(e.message);
      }
      // 加载状态设置为false
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
      </div>
      <h2>{props.username}</h2>
      {/* <Child username={props.username}/> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {(!error || error !== "") && <div>网站出错：{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r: any, index: number) => {
            return index % 2 === 0 ? (
              <Robot id={r.id} email={r.email} name={r.name} key={r.id} />
            ) : (
              <RobotEven id={r.id} email={r.email} name={r.name} key={r.id} />
            );
          })}
        </div>
      ) : (
        <h2>loading 加载中</h2>
      )}
    </div>
  );
};
// 类式组件
// class App extends React.Component<Props, State> {
//   constructor(props: Props | Readonly<Props>) {
//     super(props);
//     this.state = {
//       robotGallery: [],
//       count: 0,
//     };
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => this.setState({ robotGallery: data }));
//   }
//   render(): React.ReactNode {
//     return (
//       <div className={styles.app}>
//         <div className={styles.appHeader}>
//           <img src={logo} className={styles.appLogo} alt="logo" />
//           <h1>罗伯特机器人炫酷吊炸天online购物平台的名字要长</h1>
//         </div>
//         <button
//           onClick={() => {
//             // setState异步更新，同步执行
//             this.setState(
//               (preState, preProps) => {
//                 return { count: preState.count + 1 };
//               },
//               () => {
//                 console.log("count ", this.state.count);
//               }
//             );
//             this.setState(
//               (preState, preProps) => {
//                 return { count: preState.count + 1 };
//               },
//               () => {
//                 console.log("count ", this.state.count);
//               }
//             );
//           }}
//         >
//           Click
//         </button>
//         <span>count: {this.state.count}</span>
//         <ShoppingCart />
//         <div className={styles.robotList}>
//           {this.state.robotGallery.map((r) => {
//             return <Robot id={r.id} email={r.email} name={r.name} key={r.id} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

export default App;
