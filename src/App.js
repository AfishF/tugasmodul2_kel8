import React from "react";
import { Layout } from "antd";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>Kelompok 8</Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
 </Footer>
    </Layout>
  );
}

export default App;
