// 使用高阶组件或自定义hooks，
// 将RobotsEven.tsx,RobotsEven.tsx相同的业务逻辑抽离出来复用
import React, { useContext } from "react";
import { appContext, appSetStateContext } from "../AppState";
import { RobotProps } from "./RobotsOdd";
//高阶组件，接收的参数为一个组件，返回值也是一个组件，类组件或者函数组件--RobotsOdd.tsx
export const withAddToCart = (
  ChildComponent: React.ComponentType<RobotProps>
) => {
  // return class extends React.Component {}
  return function WithAdd(props: any) {
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext);
    const addToCart = (id: any, name: any) => {
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
    return <ChildComponent {...props} addToCart={addToCart} value={value} />;
  };
};
//自定义hooks--RobotsEven.tsx
export const useAddToCart = () => {
  const setState = useContext(appSetStateContext);
  const addToCart = (id: any, name: any) => {
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
  return addToCart;
};
