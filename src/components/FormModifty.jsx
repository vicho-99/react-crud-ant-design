import { useEffect } from 'react';
import { Form, Input, message , InputNumber , Select , DatePicker ,Button, Switch } from 'antd';
import Validate from './Validate';
import { useState } from 'react';
import moment from 'moment'
import { Context } from './Context';
const { Item } = Form;
const { Option } = Select;

const FormModifity = () => {

    const {user , initialValues , country , countryNumber , selectedItem ,  setUser } =  Context();
    const [data , setData ] = useState(initialValues);

    const onChangeInput = (e) => setData({...data,[e.target.name] : e.target.value});
    const onChange = (n , e) => setData({...data, [n] : e });
 
    useEffect(() =>  setData(user.find(e => e.key === selectedItem)) , [selectedItem , user]); 
    
    const phoneNumber = (
        <Select defaultValue="56" onChange={(e) => onChange('countryNumber',e)} name="countryNumber" value={data.countryNumber} style={{ width: 75 }}>
            {countryNumber.map(e => <Option key={e.value} value={e.value}>{e.name}</Option> )}
        </Select>
    ); 
 
    const modifyUser = () => {
    
        try {

            if(Validate(data)){

                const userData = [...user];
                const index = userData.findIndex(e => e.key === selectedItem);
                
                userData[index] = {
                    key: data.key ,
                    name : data.name ,
                    email : data.email ,
                    phone : data.phone ,
                    countryNumber : data.countryNumber ,
                    country : data.country ,
                    date: data.date._d ? data.date._d.toLocaleDateString('es-CL') : data.date ,
                    status: data.status
                };

                setUser(userData);
                message.success('successfully modify user');
               
            } 

        } catch (err) { 

            message.error('Error: ' + err.toString());
        }
    }

    return (

        <Form layout="horizontal" labelAlign="left" labelCol={{flex:'85px'}}  onFinish={modifyUser} >

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

            <Item label="Date"> <DatePicker format={"DD-MM-YYYY"} value={ data.date !== '' ? moment(data.date,"DD-MM-YYYY") : null} onChange={(e) => onChange('date', e ? e : '' )} required/> </Item> 

            <Item label="Status"> <Switch onChange={(e) => onChange('status',e)} checked={data.status} required/> </Item>

            <Button htmlType='submit' type='primary' >MODIFY</Button>
            
        </Form>
    )
}

export default FormModifity;