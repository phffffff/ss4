import { useSpring, animated } from 'react-spring';

function SlideDown({ children }) {
    const { opacity, x } = useSpring({
        opacity: 1,
        x: 0,
        from: {
            opacity: 0,
            x: -100,
        },
        config: {
            duration: 300,
        }
    })

    return (
        <animated.div style={{
            transform: x.to(n => `translate(0px, ${n}px)`),
            opacity: opacity
        }}>
            {children}
        </animated.div>
    );
}

export default SlideDown;