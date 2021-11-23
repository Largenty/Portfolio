
const Side = (props: any) => {
    const { text, classSide} = props;
    
    return(
    <p className={`${classSide}`}>{text}</p>
    )};

export default Side;
