import React from "react";
import { Layout } from "antd";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header className="navbar">Kelompok 8</Header>
      <Content className="content" style={{ padding: "20px 50px" }}>
        <div className="site-layout-content"></div>

      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
 </Footer>
    </Layout>
  );
}

export default App;
