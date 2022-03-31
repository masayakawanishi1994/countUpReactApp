import React from "react";

// コンポーネントを確立できる（exportは複数できない）
export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
// 他のファイルでも参照することを宣言する
export default ColorfulMessage;
