const navBarStyles = {
    expandedOptionsButton: {
        marginY: 2,
        color: 'white',
        display: 'block',
        textTransform: 'none' 
    },
    expandedOptionsContainer: {
        flex: 2,
        display: {
            xs: 'none',
            md: 'flex'
        },
        justifyContent: 'space-evenly',
        maxWidth: '1000px'
    },
    menuIcon: {
        display: {
            sm: 'flex',
            md: 'none'
        }, 
        justifyContent: 'flex-end'
    }
};

export default navBarStyles;