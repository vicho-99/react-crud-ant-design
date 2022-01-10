import {Table , Button , Space , Tooltip , Popconfirm , message } from 'antd';
import { Context } from './Context';
import { DeleteOutlined , EditOutlined}   from '@ant-design/icons'
import {Tag} from 'antd';

const TableList = () =>   {

    const  { user , setUser , showModal , selectModal , setSelectedItem } =  Context();

    const deleteUser = (x) =>  {
        setUser(user.filter(e => e.key !== x)) 
        message.success("user successfully removed");
    };

    const openModalSelected = (n,v) => {
        showModal();
        setSelectedItem(v);
        selectModal(n);
    }

    const option = (v) => {
        return (
            <Space>

                <Popconfirm title="Are you sure to delete this user?" onConfirm={()=> deleteUser(v)}>
                   <Button type="link" danger  shape="circle" icon={<DeleteOutlined />} /> 
                </Popconfirm>
               
               <Tooltip title="Edit"> <Button onClick={() => openModalSelected(2,v)} type="link"  shape="circle" icon={<EditOutlined />} /> </Tooltip> 

            </Space>
        )
    };

    const columns = [
        { title : 'Name', dataIndex: 'name', },
        { title : 'Email', dataIndex : 'email' },
        { title : 'Phone', dataIndex : 'countryNumber' ,  render : (v,vs) => <span>+ {v + ' ' + vs.phone}</span> },
        { title : 'Country', dataIndex : 'country' },
        { title : 'Date', dataIndex : 'date' },
        { title : 'Status', dataIndex : 'status' ,  render: v => v ? <Tag color='success'>active </Tag> : <Tag color='error' > disabled </Tag>  },
        { title : 'Options' , dataIndex : 'key' , render : v =>   option(v)  }
    ];

    return  <Table columns={columns}  scroll={{x:'100%'}} dataSource={user} size='small'/>

}

export default TableList;
