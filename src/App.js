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
  const phoneNumber = "6281908946873"; // use country code, no +
  const email = "ruthgabriela.work@gmail.com";

  const whatsappMessage = encodeURIComponent(
    "Hi Ruth, I'm interested in working together."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const emailUrl = `mailto:${email}?subject=Project%20Inquiry`;
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
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-text">
              <h3>Get in Touch</h3>
              <p>
                Interested in working together or have something in mind?
                <br />
                Feel free to reach out anytime.
              </p>
            </div>

            <div className="footer-actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-button"
              >
                WhatsApp
              </a>

              <a href={emailUrl} className="footer-button">
                Email
              </a>
            </div>

            <small className="footer-note">
              Let’s build something meaningful.
            </small>
          </div>
        </footer>
      </Layout>
    </div>
  );
}

export default App;
