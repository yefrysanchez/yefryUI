

export const fadeUp = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.8, ease: [0.76,0, 0.24, 1]}
    }
}


export const fadeRight = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.3, ease: [0.76,0, 0.24, 1]}
    }
}