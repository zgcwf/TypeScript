import React from "react";
import styles from "./Robot.module.css";
import { withAddToCart } from "./AddToCart";
//高阶组件的方法
export interface RobotProps {
  id: number;
  name: string;
  email: string;
  value: any;
  addToCart: (id: any, name: any) => void;
}
//这里props接收来自于App.tsx
const RobotOdd: React.FC<RobotProps> = (props) => {
  const { id, name, email, value, addToCart } = props;

  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button
        onClick={() => {
          addToCart(id, name);
        }}
      >
        加入购物车
      </button>
    </div>
  );
};
export default withAddToCart(RobotOdd);
