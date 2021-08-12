import React from "react";
import "./Layout.css"
import {Link} from "react-router-dom"
import {Route,Switch} from "react-router-dom"
import Global from "../pages/Globalstat"
import Tabledisplay from "../pages/TableStat"
import Visualization from "../pages/Visualization"
import mask from "../Images/m.PNG"
import mm from "../Images/mm.PNG"
import graph from "../Images/graph.PNG"
import table from "../Images/table.PNG"
import card from "../Images/card.PNG"





import AreaChartOutlined from "@ant-design/icons"

import 'antd/dist/antd.css';
import { Layout, Menu,  } from 'antd';
import cov from "../Images/covv.jpg"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function Layout11() {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
     <h3 className="top-heading">Covid-19 Status <img style={{width:'70px'}}src={cov}/></h3>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1"  title="Covid19 Status">
              <Menu.Item key="1"><Link to="/global"><p style={{fontWeight:'bold'}}>Global Statistics<img style={{marginLeft:'10px',width:'30px'}} src={card}/></p></Link></Menu.Item>
              <Menu.Item key="2"><Link to="/tablestat"><p style={{fontWeight:'bold'}}>Table Statistics <img style={{marginLeft:'2px',width:'30px'}} src={table}/></p></Link></Menu.Item>
              <Menu.Item key="3"><Link to="/Visualization"><p style={{fontWeight:'bold'}}>Visualization<img style={{marginLeft:'18px',width:'30px'}} src={graph}/></p></Link></Menu.Item>
              <Menu.Item style={{height:'270px'}}><img  style={{height:'270px',marginLeft:'-8px'}}src={mask}/></Menu.Item>
              <Menu.Item style={{height:'270px'}}><img  style={{height:'270px',marginLeft:'-8px'}}src={mm}/></Menu.Item>

             
            </SubMenu>
           
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 480 }}>
        <Switch>
        <Route path="/tablestat" component={Tabledisplay}/>
        <Route path="/Visualization" component={Visualization}/>

      <Route path="/" excat component={Global}/>

    </Switch>



        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
	<p >
  Copyright&copy; {new Date().getFullYear()} All right reserved

  </p>
	</Footer>
  </Layout>
  );
}

export default Layout11;
