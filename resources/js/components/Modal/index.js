import React from 'react';
import './Modal.css';
import {Button, ButtonLink} from '../Buttons';

export const Modal = ({sentEmail,onClickButton}) => {

    const showMessageEmail = () => {
        if(sentEmail) {
            return(
                <p className='text-modal'>THANKS FOR SAYNG HELLO!</p>
            )
        } else {
            return (
                <>
                    <p className='text-modal' style={{marginBottom: 10 + 'px'}}>!OOPS</p>
                    <p className='text-modal' style={{marginBottom: 10 + 'px'}}>SOMETHING WENT WRONG</p>
                    <p className='text-modal'>CHECK DETAILS</p>
                </>
            )
        }
    }
    return(
        <div className="overlay">
        <div className="modal flex alignc justifyc">
            {
                showMessageEmail()
            }
            <br />
            {
                sentEmail ?  <ButtonLink text={'HOME'} type='button' clase='modal-button'/> :  <Button text={'RETRY'} type='button' clase='modal-button' onClick={onClickButton }/>
            }
            {/* <Button text={sentEmail ? 'HOME' : 'RETRY'} type='button' clase='modal-button' onClick={onClickButton }/> */}
        </div>
    </div>
    )
}
    
