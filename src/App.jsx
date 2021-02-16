/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
// default export を使用せずに、関数前にexportをつけ他場合、以下のように分割代入にてimportできる。
// この場合、importされる変数名は任意に指定できないため、ミスタイプを防げる
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // useStateにて状態を保存できる。 分割代入にて割り当て
  // [変数, 変数を変化させる関数] = useState(デフォルト値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const bodyStyle = {
    textAlign: "center",
    fontFamily: "arial black"
  };
  const buttonStyle = {
    minWidth: "64",
    lineHeight: "32px",
    borderRadius: 4,
    border: "none",
    padding: "0px 24px",
    color: "white",
    background: "#eb6100",
    cursor: "pointer",
    margin: "6px 24px",
    textAlign: "center",
    fontWeight: "bold"
  };

  // useEffectウィ使用することで、再レンダリング時に以下を無視させられる.
  // useEffect(() => {}, [ここ]);
  // アロー関数の第二引数に監視したい対象を入れることで、その値が変化した時のみ内部が実行される
  // ||, && を使用することで、if(faceShowFlag === false){setFaceShowFlag(true);}
  // みたいなものを簡潔にかける
  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslintは、useEffect()ないで使用される全ての変数を第二引数に与えることを推奨しているため、
    // ここだと、faceShowFlagが入っていないとエラーが出る。
    //　それを以下のコメントアウトぶんでエラーを消すことができる。
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <div style={bodyStyle}>
      {/* styleをダイレクトに与えることもできるstyle={{}} */}
      <h1 style={{ color: "black" }}>REACT構文学習</h1>
      {/* コンポーネントはこのようにタグにして使用する。任意の引数を使用したり、
      タグで囲った中身を引数とすることもできる。 */}
      <ColorfulMessage color="#95E1D3">お元気ですか?</ColorfulMessage>
      <ColorfulMessage color="#FF75A0">元気です</ColorfulMessage>
      <button style={buttonStyle} onClick={onClickCountUp}>
        CLICK !!
      </button>
      <br />
      <button style={buttonStyle} onClick={onClickSwitchShowFlag}>
        On / Off
      </button>
      <p>{num}</p>
      {/* アンパサンドを使用して、trueの時右を返す形で表示 */}
      {faceShowFlag && <p>( ・∇・)</p>}
    </div>
  );
};

export default App;
