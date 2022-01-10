import { Row, Col , Card , Button } from 'antd';
import { UserAddOutlined} from '@ant-design/icons';
import TableList from './TableList';
import Modal from './Modal'
import { Context } from './Context';

const UserIndex = () => {

    const  { showModal , selectModal } =  Context();

    const openModalSelected = (n) => {
        showModal();
        selectModal(n);
    };

    return (

        <Card title="USER CRUD" >

            <Row gutter={[0,24]}  >

                <Col lg={24} xs={24} >
                
                    <Modal/>
                    
                    <Button icon={<UserAddOutlined />} onClick={() => openModalSelected(1)} type="primary" >ADD</Button>
                
                </Col>
                
                <Col lg={24} xs={24} >
                
                    <TableList/>
                
                </Col>

            </Row>

        </Card>
    )
}

export default UserIndex;