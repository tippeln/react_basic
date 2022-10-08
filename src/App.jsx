export const App = () => {
  //return null;
  //ボタンを押したときに実行する関数を定義
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      ｛console.log("test")｝
      <h1 style={{ color: red }}> こんにちは</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
