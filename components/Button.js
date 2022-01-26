const Button = props => {
    return (
        <a className="z-10 mx-auto" href={props.link} rel="noopener" target={props.external ? '_blank': ''}>
            <button className="p-2 pb-1 px-4 text-2xl font-normal text-black transtoblack everett-light z-10 hover:text-white border-black border-1 w-fit mx-auto mt-4 rounded-md">
            {props.text}
            </button>
        </a>
    )
}

export default Button;