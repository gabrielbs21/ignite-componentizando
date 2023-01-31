// import { SideBar } from './components/SideBar';

import "./styles/global.scss";

import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar";
import "./styles/content.scss";
import "./styles/sidebar.scss";

export function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <Content />
    </div>
  );
}
