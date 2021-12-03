import { Component } from "react";
import styles from "./ShoppingCart.module.css";

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
  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          购物车 2 (件)
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    );
  }
}
