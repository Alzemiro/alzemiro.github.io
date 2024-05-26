import { Link } from "react-router-dom";
import { Button } from '@radix-ui/themes';

function ButtonPortifolio(props) {
    const {className, to, text} = props
    

    return (<Link to={to} className={`${className} rounded-sm text-center hover:bg-[var(--dracula-fg)] bg-[var(--dracula-subtle)]`} ><div className="py-2 px-4 uppercase text-gray-50 hover:text-black">{text}</div></Link>)
}

export default ButtonPortifolio