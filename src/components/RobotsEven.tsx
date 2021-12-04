import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext } from "../AppState";
import { useAddToCart } from "./AddToCart";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const RobotEven: React.FC<RobotProps> = (props) => {
  const { id, name, email } = props;
  const value = useContext(appContext);
  // 自定义hooks
  const addToCart = useAddToCart();
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
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
export default RobotEven;
