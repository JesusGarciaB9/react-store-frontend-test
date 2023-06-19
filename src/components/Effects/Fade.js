import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { animated, useSpring } from '@react-spring/web'


const FadeComponent = ({ children, id }) => {
    const [isShown, setIsShown] = useState(false);
    console.log("isS ", isShown)


    useEffect(() => {
        setIsShown(false);
    }, [id])

    useEffect(() => {
        if (!isShown) {
            setTimeout(() => { setIsShown(true); }, 200)
        }
    }, [isShown])

    const fade = useSpring({
        opacity: isShown ? 1 : 0,
        config: { duration: 200 },
    })
    return (
        isShown && (
            <animated.div style={fade}>
                {children}
            </animated.div>
        )
    )


};

export default FadeComponent;