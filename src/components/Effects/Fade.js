import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

const duration = 400;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}
const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};
const FadeComponent = ({ children, id }) => {
    const [isShown, setIsShown] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() => {
        setIsShown(false);

        setTimeout(() => {
            setIsShown(true);
        }, 0);
    }, [id]);
    console.log("isShown", isShown)
    return (
        <CSSTransition nodeRef={nodeRef} in={isShown} classNames='my-node' duration={duration} timeout={300} unmountOnExit   >
            <div ref={nodeRef} className='my-node-enter-active' >
                {children}
            </div>
        </CSSTransition>
    );
};

export default FadeComponent;