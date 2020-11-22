import React from "react";
import { Row, Col, Layout } from "antd";
import "./App.css";
import CardSaya from './components/CardSaya';
import Button from './elements/buttonlink';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header className="navbar">
        <Row>
          <Col span={8}>Kelompok 8</Col>
          <Col span={8} offset={8} style={{ textAlign: "right" }}><Button><a style={{ color: "white" }}>Abbiyu</a></Button>
            <Button><a style={{ color: "white" }}>Afishal</a></Button></Col>
        </Row>
      </Header>
      <Content className="content" style={{ textAlign: "center" }}>
        <CardSaya bgcolor="#dedede">
        </CardSaya>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2018 Created by Kelompok 8
 </Footer>
    </Layout >
  );
}

export default App;
