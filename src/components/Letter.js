function Letter(props) {
    let { letter, color, className, id } = props;

    return (
        <span style={{ color: color }} className={className} id={id}>
            {letter}
        </span>
    );
}

export default Letter;
