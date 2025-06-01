import { useContext } from "react";
import "./App.css";
import { LevelContext } from "./LevelContext";

function App() {
  return (
    <div className="App">
      <Section>
        <Heading>My Profile</Heading>
        <Post title="旅行者，你好！" body="来看看我的冒险。" />
        <AllPosts />
      </Section>
    </div>
  );
}

export default App;

function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <LevelContext value={level + 1}>{children}</LevelContext>
    </section>
  );
}

function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("未知的level：" + level);
  }
}

function AllPosts() {
  return (
    <Section>
      <Heading>贴子</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>最近的帖子</Heading>
      <Post title="里斯本的味道" body="...那些蛋挞！" />
      <Post title="探戈节奏中的布宜" body="我爱他！" />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}
