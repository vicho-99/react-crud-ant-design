import { Form, Input, message,  InputNumber  ,  Select , DatePicker ,Button, Space , Switch  } from 'antd';
import Validate from './Validate';
import { useState } from 'react';
import { Context } from './Context';
const { Item } = Form;
const { Option } = Select;


const FormRegister = () => {

    const { country , setUser  , user , countryNumber , initialValues } =  Context();
    const [data , setData ] = useState(initialValues);

    const onChangeInput = (e) => setData({...data, [e.target.name] : e.target.value});
    const onChange = (name , e) => setData({...data, [name] : e });

    const reset = () => setData(initialValues);

    const saveUser = () => {
    
        try {

            if(Validate(data)){

                const newData = [...user];
                
                newData.push({
                    key: user.length + 1 ,
                    name : data.name ,
                    email : data.email ,
                    phone : data.phone ,
                    countryNumber : data.countryNumber ,
                    country : data.country ,
                    date: data.date._d.toLocaleDateString('es-CL') ,
                    status: data.status
                });

                setUser(newData);
                reset();
                message.success('successfully registered user');
               
            } 

        } catch (err) { 

            message.error('Error: ' + err.toString());
        }
    }

    const phoneNumber = (
        <Select defaultValue="56" onChange={(e) => onChange('countryNumber',e)} name="countryNumber" value={data.countryNumber} style={{ width: 75 }}>
            {countryNumber.map(e => <Option key={e.value} value={e.value}>{e.name}</Option> )}
        </Select>
    );

    return (

        <Form layout="horizontal" labelAlign="left" onFinish={saveUser} labelCol={{ flex: '85px' }}   >

            <Item label="Name"> <Input name="name" value={data.name}  onChange={onChangeInput} required/> </Item>

            <Item label="Email"> <Input name="email" value={data.email} type="email" onChange={onChangeInput} required/> </Item>

            <Item label="Country">
                <Select name="country" value={data.country} onChange={(e) => onChange('country',e)} placeholder="Select a country" required>
                    {country.map(e =>  <Option key={e.value} value={e.value}>{e.name}</Option> )}
                </Select>
            </Item>

            <Item label="Phone"> 
                <InputNumber addonBefore={phoneNumber} style={{width:'100%'}} name="phone" type="number" value={data.phone} onChange={(e) => onChange('phone',e)} required/> 
            </Item>

            <Item label="Date"> <DatePicker value={data.date !== '' ? data.date : ''} onChange={(e) => onChange('date', e ? e : '' )} required/> </Item>

            <Item label="Status"> <Switch onChange={(e) => onChange('status',e)} checked={data.status} required/> </Item>
            
            <Space>
                <Button htmlType='submit' type='primary' >REGISTER</Button>
                <Button onClick={reset}> RESET </Button>
            </Space>
 
        </Form>
    )
}

export default FormRegister;