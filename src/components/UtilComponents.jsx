import { useNavigate } from 'react-router-dom';
import { Link, MenuItem } from '@aws-amplify/ui-react';
import PropTypes from 'prop-types';

const NavLink = ({ to, children, ...props }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    };

    return (
        <Link href={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
};

const NavLinkMenu = ({ to, children, closeMenu, ...props }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
        closeMenu();
    };

    return (
        <MenuItem onClick={handleClick} {...props}>
            {children}
        </MenuItem>
    );
};

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

NavLinkMenu.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    closeMenu: PropTypes.func.isRequired,
};

export { NavLink, NavLinkMenu };
