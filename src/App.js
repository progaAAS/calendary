
import { Layout } from 'antd';
import './App.css';
import AppRouter from './Component/AppRouter';
import NavBar from './Component/NavBar';

function App() {
  return (
    <Layout>
      <NavBar/>
      <Layout.Content>
        <AppRouter/>
      </Layout.Content>
    </Layout>
  );
}

export default App;
