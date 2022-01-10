import React from 'react';
import { Modal as ModalComponent} from 'antd';
import { Context } from './Context';
import FormRegister from './FormRegister';
import FormModifity from './FormModifty'

const Modal = () => {

  const hidden = {hidden:true};

  const  {isModalVisible , closeModal , selectedModal } =  Context();

  const components = {
    1: FormRegister ,
    2: FormModifity ,
  };
  
  const titles = {
    1 : 'REGISTER USER' ,
    2 : 'MODIFTY USER'
  };

  const Component = components[selectedModal];
  const Title = titles[selectedModal];

  return (

    selectedModal !== 0 ? (

      <ModalComponent title={Title} visible={isModalVisible}  okButtonProps={hidden} cancelButtonProps={hidden}  onCancel={closeModal}>
        <Component/>
      </ModalComponent>

    ) : null
    
  )
}

export default Modal;