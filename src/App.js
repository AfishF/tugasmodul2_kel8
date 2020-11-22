import React from "react";
import { Layout } from "antd";
import "./App.css";
import CardSaya from './components/CardSaya';
import Select from './elements/Select';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header className="navbar">Kelompok 8</Header>
      <Content className="content" style={{ textAlign: "center" }}>
        <CardSaya bgcolor="#dedede">
        <form action="">
                <Select>
                    <option value="">Kelas</option>
                    <option value="1">RSBK</option>
                    <option value="2">Multimedia</option>
                </Select>
        </form>
        </CardSaya>        
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
 </Footer>
    </Layout>
  );
}

export default App;
