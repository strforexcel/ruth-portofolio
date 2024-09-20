import React from "react";
import "./App.css";
import PortfolioPage from "./component/PortofolioPage";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import WorksPage from "./component/WorksPage";

const { Header, Content } = Layout;

function App() {
  const items = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Featured Works",
      key: "/works",
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="App">
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={({ key }) => {
              navigate(key);
            }}
            selectedKeys={[location.pathname]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
        </Content>
      </Layout>
      {/* <PortfolioPage /> */}
    </div>
  );
}

export default App;
