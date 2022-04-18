import React from "react";
import axios from "axios";

const { useState } = React;
//  展示数据
const Card = (props) => {
  // console.log(props)
  const getGit = () => {
    // 获取对呀github账号的仓库
    axios.get(props.html_url).then((res)=>{
        console.log("成功"+res)
    }).catch((err) => { console.log("失败"+err)})
    console.log(props);
  };
  return (
    <div style={{ margin: "1em" }}>
      <img
        onClick={getGit}
        alt="avatar"
        style={{ width: "70px" }}
        src={props.avatar_url}
      />
      <div>
        <div style={{ fontWeight: "bold" }}>{props.login}</div>
        <div>{props.organizations_url}</div>
      </div>
    </div>
  );
};
//  为组件传参
const CardList = (props) => (
  <div>
    {props.cards.map((card) => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

const Form = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
      props.onSubmit(resp.data);
      setUsername("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  );
};

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
