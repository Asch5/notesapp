import { Flex, Button } from '@aws-amplify/ui-react';
import { Link as ReactRouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const linkStyle = {
    marginRight: '1rem',
    textDecoration: 'none',
};

export default function Header({ signOut }) {
    return (
        <Flex
            as="header"
            justifyContent="space-between"
            alignItems="center"
            padding="1rem"
        >
            <Flex as="nav">
                <ReactRouterLink
                    to="/"
                    className="amplify-link"
                    style={linkStyle}
                >
                    Home
                </ReactRouterLink>
                <ReactRouterLink
                    to="/features"
                    className="amplify-link"
                    style={linkStyle}
                >
                    Features
                </ReactRouterLink>
                <ReactRouterLink
                    to="/forum"
                    className="amplify-link"
                    style={linkStyle}
                >
                    Forum
                </ReactRouterLink>
                <ReactRouterLink
                    to="/docs"
                    className="amplify-link"
                    style={linkStyle}
                >
                    Docs
                </ReactRouterLink>
                <ReactRouterLink
                    to="/careers"
                    className="amplify-link"
                    style={linkStyle}
                >
                    Careers
                </ReactRouterLink>
                <ReactRouterLink
                    to="/blog"
                    className="amplify-link"
                    style={linkStyle}
                >
                    Blog
                </ReactRouterLink>
            </Flex>
            <Flex>
                <Button
                    onClick={signOut}
                    variation="link"
                    className="amplify-link"
                >
                    Logout
                </Button>
            </Flex>
        </Flex>
    );
}

Header.propTypes = {
    signOut: PropTypes.func.isRequired,
};
