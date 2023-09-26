export const styles = {
    container: {
        margin: '30px auto',
        maxWidth: '600px',
        textAlign: 'center',
        lineHeight: "1.5",
        fontFamily: "Noto Sans JP",
        padding: "0 4%",
    },
    h1: {
        fontSize: '2.5rem',
    },
    imageArea: {
        marginTop: "20px",
        textAlign: "center",
    },
    img: {
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "50%",
        textAlign: "center",
        '@media (max-width: 600px)': {
            width: '150px',
            height: '150px',
        },
    },
    p: {
        fontSize: '1.5rem',
        textAlign: 'center',
    },
    li: {
        listStyleType: 'none',
        margin: '10px 0',
    },
    a: {
        color: '#136b9e',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};