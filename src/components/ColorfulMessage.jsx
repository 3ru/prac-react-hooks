import React from "react";

// default export ではなく、以下の形
export const ColorfulMessage = (props) => {
  // 引数を分割代入で受け取る。
  // "children" はタグで囲った中身を取れる。
  const { color, children } = props;
  // styleも変数にまとめ流ことができる。
  // color: color　のように、変数と同じ名前の場合省略できる
  // キャメルケース
  const contentStyle = {
    color,
    fontSize: "20px"
  };

  // コンポーネントのreturn
  return <p style={contentStyle}>{children}</p>;
};
