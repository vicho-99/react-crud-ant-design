import 'antd/dist/antd.min.css';
import { MyContext  } from './components/Context'
import UserIndex from './components/UserIndex';
import { Layout } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;
const { Footer , Content } = Layout;

function App() {

  return (

    <Layout style={{height:'100vh'}} >

      <Content style={{padding:15}} >   

        <MyContext>

          <UserIndex/> 

        </MyContext>

      </Content>

      <Footer>
        <Text code>CRUD REACT - CONTEXT - HOOKS - ANT DESIGN</Text>
      </Footer>

    </Layout>

  );
}

export default App;
