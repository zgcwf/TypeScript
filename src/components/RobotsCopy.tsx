//原生，没有使用高阶组件与自定义hooks的代码，与其余两个对比,业务逻辑写在自身
import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState";
interface RobotProps {
  id: number;
  name: string;
  email: string;
}
const RobotCopy: React.FC<RobotProps> = (props) => {
  const { id, name, email } = props;
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext);
  const addToCart = () => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        };
      });
    }
  };
  return (
    <div className={styles.cardContainer}>
      <img alt="robot" src={`https://robohash.org/${id}`} />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  );
};
export default RobotCopy;
