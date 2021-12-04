import { Component, Key, ReactChild, ReactFragment, ReactPortal } from "react";
import styles from "./ShoppingCart.module.css";
// 引入一个图标库：npm install react-icons
import { FiShoppingCart } from "react-icons/fi";
import { appContext } from "../AppState";

interface ShopProps {}

interface ShopState {
  isOpen: boolean;
}
export default class ShoppingCart extends Component<ShopProps, ShopState> {
  constructor(props: ShopProps) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("e.target ", e.target); //事件发生的元素
    console.log("e.currentTarget ", e.currentTarget); //事件处理绑定の元素
    // 判断，只是点击的元素为span标签时会触发setState，点击svg图标时不会
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };

  static contextType = appContext;

  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <FiShoppingCart />
          <span>购物车 {this.context.shoppingCart.items.length} (件)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            {this.context.shoppingCart.items.map(
              (i: {
                id: Key | null | undefined;
                name:
                  | boolean
                  | ReactChild
                  | ReactFragment
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <li key={i.id}>{i.name}</li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}
