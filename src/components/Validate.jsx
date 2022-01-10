import { message } from 'antd';

const Validate = (data) => {
        
    let rs = true;

    if(!data.name.length){
        message.warning('Name is required');
        return false;
    };

    if(!data.email.length){
        message.warning('email is required');
        return false;
    };

    if(!data.country){
        message.warning('country is required');
        return false;
    };

    if(!data.phone){
        message.warning('phone is required');
        return false;
    };

    if(!data.date){
        message.warning('Date is required');
        return false;
    };

    return rs;
}

export default Validate;