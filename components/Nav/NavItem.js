const NavItem = props => {
    return (
        <div className={`flex h-fit nav-width md:w-fit text-2xl my-auto md:mx-4 ${props.className}`}>
            <h2 className="text-center mx-auto"><a href={'#' + props.name} className="text-center">{props.name}</a></h2>
        </div>
    )
}

export default NavItem;