import React, { useState, useEffect, useMemo , useContext } from 'react'

const ContextG = React.createContext();

const initData = [
    {
        key: 1,
        name: 'Juan Soto' ,
        email: 'j.soto@gmail.com' ,
        phone: '971017171',
        countryNumber: '56' ,
        country: 'CHILE',
        date: '24-02-1996',
        status: true
    },
    {
        key: 2 ,
        name: 'Maria Lopez' ,
        email: 'm.lopez@gmail.com' ,
        phone: '853336534',
        countryNumber: '55' ,
        country: 'ARGENTINA',
        date: '22-05-1992',
        status: true
    },
];

const initialValues = {
    name : '' ,
    email : '' ,
    country : null ,
    phone : '' ,
    date : null ,
    status : true , 
    countryNumber : '56' ,
};

const countryNumber = [
    { value : '56' , name : '+56' } ,
    { value : '54' , name : '+54' } ,
    { value : '55' , name : '+55' } ,
];

const country = [
    { value : 'CHILE' ,      name : 'CHILE'} ,
    { value : 'ARGENTINA' ,  name : 'ARGENTINA' } ,
    { value : 'BRAZIL' ,     name : 'BRAZIL' } 
];

export function MyContext(props) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem ,setSelectedItem] = useState(0);
    const [user , setUser] = useState([]);
    const [selectedModal , setSelectedModal] = useState(0);

    const selectModal = (modal) => setSelectedModal(modal);
    const showModal = () =>  setIsModalVisible(true);
    const closeModal = () =>   setIsModalVisible(false);
    
    useEffect(() => {
        setUser(initData);
    },[])

    const value = useMemo(() => {

        return (
            {   
                showModal , 
                closeModal , 
                isModalVisible  ,
                user ,
                selectedModal ,
                selectModal , 
                country ,
                setUser , 
                countryNumber ,
                initialValues ,
                selectedItem ,
                setSelectedItem
            }
        );
    },[
        isModalVisible , 
        user , 
        selectedModal ,
        selectedItem  , 
        setSelectedItem
    ]);

  return <ContextG.Provider value={value} {...props} />

}

export function Context() {
    const context = useContext(ContextG);
    if (!context) 
        throw new Error('Debe estar dentro del context')
    return context;
};
