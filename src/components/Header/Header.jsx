import './Header.css';

function Header(props) {
    return (
        <li>
            {props.text}
        </li>
    );
}

export default Header;
