function GreetButton({text, bgcolor, onClick}) {
    const style = {backgroundColor: bgcolor};
    return (
        <button style={style} onClick={onClick}>{text}</button>
    );
}

export default GreetButton  