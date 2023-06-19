import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import cuid from 'cuid';

const WompiButton = ({ }) => {

    const { totalPrice } = useSelector(state => state.cartSliceReducer);
    const reference = cuid();
    const apiKey = process.env.REACT_APP_API_WOMPI;
    const redirectUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const container = document.querySelector("#wompi");
        const script = document.createElement("script");
        script.setAttribute("src", 'https://checkout.wompi.co/widget.js');
        script.setAttribute("type", 'text/javascript');
        script.setAttribute("data-render", 'button');
        script.setAttribute("data-public-key", apiKey);
        script.setAttribute("data-currency", 'COP');
        script.setAttribute("data-amount-in-cents", totalPrice * 100);
        script.setAttribute("data-reference", reference);
        script.setAttribute("data-redirect-url", redirectUrl);
        container.appendChild(script);
        return () => {
            container.removeChild(script);
        };
    }, [])
    return (
        <div id="wompi">
        </div>

    )
};

export default WompiButton;