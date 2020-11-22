import React from "react";
import { Layout } from "antd";
import "./App.css";
import CardSaya from './components/CardSaya';
import Select from './elements/Select';
import Button from './elements/buttonlink';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header className="navbar">
        <p>Kelompok 8</p>
        <div>
          <Button>Abbiyu</Button>
          <Button>Afishal</Button>
        </div>
      </Header>
      <Content className="content" style={{ textAlign: "center" }}>
        <CardSaya bgcolor="#dedede">
          <form action="">
            <Select>
              <option value="">Kelas</option>
              <option value="1">Praktikum RSBK</option>
              <option value="2">Praktikum Multimedia</option>
            </Select>
          </form>
        </CardSaya>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
 </Footer>
    </Layout >
  );
}

export default App;
