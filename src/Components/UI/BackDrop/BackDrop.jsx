import React from 'react'
import './BackDrop.scss';

const BackDrop = ({onClose , onShow}) => {
    return onShow ? <div className="back" onClick={onClose}></div> : null
}

export default BackDrop
