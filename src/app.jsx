// Reactのインポート処理（JSXのみを使用する場合にはimportは必須ではない）
import React, { useEffect, useState } from "react";
// コンポーネントの読み込み
import { ColorfulMessage } from "./components/ColorfulMessage";

// 関数を使ってコンポーネントを準備
const App = () => {
  // 再レンダリングが起きる条件（stateの変更時、propsの中身が変わった時）

  // 配列の分割代入で取り出し
  // stateとして使う変数名, stateを更新していく関数名を定義, 初期値の設定
  const [num, setNum] = useState(0);
  // 顔文字の表示非表示を管理
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  // クリック時のイベントを準備
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(faceShowFlag);
  };

  // 下記のように記述するとエラーになる（stateが変更と再レンダリングが無限に行われる）
  // if(num % 3 === 0){
  //   setFaceShowFlag(true);
  // } else{
  //   setFaceShowFlag(false);
  // }

  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);
  // ↑空の配列の場合、一度しか処理させない場合に有効
  // ↑変数を指定した場合、その変数の変化に応じて発火する

  // JSX記法では一つのタグで括ってreturnする必要がある（エラーの要因）
  return (
    // エラー回避のためにタグを用意する場合は`React.Fragment`で括るか`<>`で括ると良い
    <>
      {/*{{}} => １つ目の{}はJSを記述するという宣言 2つ目の{}はJSのオブジェクトを表す  */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* インポートしたコンポーネントを読み込み */}
      {/* プロップスとして渡す */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です！！！</ColorfulMessage>
      {/* クリック時のイベントを設定 {}の中に発火させたい関数を記載する */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>^_^</p>}
    </>
  );
};
// 他のファイルでも参照することを宣言する
export default App;
