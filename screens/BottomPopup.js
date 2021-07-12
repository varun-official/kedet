import React from 'react' 
import { useState } from 'react'
import {
    Modal,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    View,
    Text
} from  'react-native'

const BottomPopup = () =>{
    const [show,setShow] = useState(false)

     const open = () => {
       setShow(true);
     };

    const close = () =>{
        setShow(false)
    }
    return(
        <Modal
        animationType={'fade'}
        transparent={true}
        visible={true}
        onRequestClose={close}
        >
        
        
        </Modal>
    )
}