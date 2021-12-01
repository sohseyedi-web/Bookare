import React from 'react'
import Wrapper from './../../../HOC/Wrapper';
import BackDrop from './../BackDrop/BackDrop';
import Support from './../../Layout/Support';
const Modal = (props) => {
    return (
        <Wrapper>
            <BackDrop onClose={props.close} onShow={props.show} />
            {
                props.show ? <Support/> : null
            }
        </Wrapper>
    )
}

export default Modal
