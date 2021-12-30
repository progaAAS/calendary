import { Layout, Menu, Row } from "antd";
import React, { FC } from "react"
import { useHistory } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypedSelector";
import { RouterNames } from "../router/router";


const NavBar: FC = () => {
    const router = useHistory();
    const {isAuth} = useTypeSelector(state => state.auth)
  return (
    <Layout.Header>
        <Row justify="end">
          {isAuth 
            ?   
              <> 
                <div style={{color: "white"}}>Артем</div>        
                <Menu theme="dark" mode="horizontal" selectable={false}>                
                  <Menu.Item onClick={()=>console.log("Выйти")} key={1}>Выйти</Menu.Item>
                </Menu>
              </>
            :
              <Menu theme="dark" mode="horizontal">
                <Menu.Item onClick={()=>router.push(RouterNames.LOGIN)} key={1}>Login</Menu.Item>
              </Menu>
            }
        </Row>
    </Layout.Header>
  );
}

export default NavBar;
