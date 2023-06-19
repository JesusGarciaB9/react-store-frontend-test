import React from 'react';
import { convertStringToNumberFormat } from '../../../utils/functions'
import FadeComponent from '../../Effects/Fade';
const DetailCard = ({ selectedProduct, deleteToCart, addToCart }) => {
    return (
        <FadeComponent id={selectedProduct.id}>
            <div className='detail-container__detail-card' >
                <div className='quantity-container'>{selectedProduct.quantity}</div>
                <div className='detail-container__detail-card__image-container'>
                    <img className='detail-container__detail-card__image-container__image' src={selectedProduct.imagesUrl ? selectedProduct?.imagesUrl[1] : ''} alt="" />
                </div>
                <div className='detail-container__detail-card__detail-title'>
                    <div className='detail-container__detail-card__detail-title__name-and-price'>
                        <div  >
                            <h2>{selectedProduct.name}</h2>
                        </div>
                        <div className=''>
                            <h3> {convertStringToNumberFormat(selectedProduct.price)}</h3>
                        </div>
                    </div>
                    <div className='detail-container__detail-card__detail-title__buttons'>
                        <div className='detail-container__detail-card__detail-title__buttons__button  '>
                            <button className='detail-container__detail-card__detail-title__buttons__button__secondary ' onClick={() => deleteToCart()}>-</button>
                        </div>
                        <div className='detail-container__detail-card__detail-title__buttons__button '>
                            <button className='detail-container__detail-card__detail-title__buttons__button__primary' onClick={() => addToCart()}>+</button>
                        </div>
                    </div>
                </div>
                <div className='detail-container__detail-card__description'>
                    {selectedProduct.description}
                </div>
            </div>
        </FadeComponent>

    )
};

export default DetailCard;