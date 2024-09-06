import * as React from 'react';
import { Flex, Button, Menu } from '@aws-amplify/ui-react';
import { useMediaQuery } from 'react-responsive';
import { NavLink, NavLinkMenu } from './UtilComponents';
import PropTypes from 'prop-types';

const linkStyle = {
    textDecoration: 'none',
};

export default function Header({ signOut }) {
    const isLarge = useMediaQuery({ query: '(min-width: 992px)' });
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpenChange = (open) => {
        setIsOpen(open);
        // Do something else
    };

    const closeMenu = React.useCallback(() => setIsOpen(false), []);

    return (
        <Flex
            as="header"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem"
            width="100%"
        >
            {isLarge ? (
                <Flex as="nav" gap="1rem">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/features">Features</NavLink>
                    <NavLink to="/forum">Forum</NavLink>
                    <NavLink to="/docs">Docs</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </Flex>
            ) : (
                <Flex>
                    <Menu
                        isOpen={isOpen}
                        onOpenChange={handleOpenChange}
                        width="3rem"
                        maxWidth="4rem"
                    >
                        <NavLinkMenu to="/" closeMenu={closeMenu}>
                            Home
                        </NavLinkMenu>
                        <NavLinkMenu to="/features" closeMenu={closeMenu}>
                            Features
                        </NavLinkMenu>
                        <NavLinkMenu to="/forum" closeMenu={closeMenu}>
                            Forum
                        </NavLinkMenu>
                        <NavLinkMenu to="/docs" closeMenu={closeMenu}>
                            Docs
                        </NavLinkMenu>
                        <NavLinkMenu to="/careers" closeMenu={closeMenu}>
                            Careers
                        </NavLinkMenu>
                        <NavLinkMenu to="/blog" closeMenu={closeMenu}>
                            Blog
                        </NavLinkMenu>
                    </Menu>
                </Flex>
            )}

            <Button onClick={signOut} variation="link" style={linkStyle}>
                Logout
            </Button>
        </Flex>
    );
}

Header.propTypes = {
    signOut: PropTypes.func.isRequired,
};
