import { getOverrideProps } from '../utils';
import { Flex, Text, Image, useTheme } from '@aws-amplify/ui-react';
import MyIcon from '../MyIcon';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export default function SocialPost(props) {
    const { overrides, ...rest } = props;
    const { tokens } = useTheme();

    return (
        <Flex
            gap="16px"
            direction="column"
            width="100%"
            maxWidth={{ base: '100%', large: 'auto' }}
            justifyContent="flex-start"
            alignItems="flex-start"
            position="relative"
            padding={tokens.space.medium}
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, 'SocialPost')}
            {...rest}
        >
            <Flex
                gap="40px"
                direction={{ base: 'column-reverse', large: 'row' }}
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                {...getOverrideProps(overrides, 'Body')}
            >
                <Flex
                    gap="16px"
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    grow="1"
                    shrink="1"
                    basis="0"
                    position="relative"
                    {...getOverrideProps(overrides, 'Text')}
                >
                    <Flex
                        gap="16px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        {...getOverrideProps(overrides, 'Headline')}
                    >
                        <Text
                            fontFamily="Inter"
                            fontSize={{
                                base: tokens.fontSizes.large,
                                medium: tokens.fontSizes.xl,
                            }}
                            fontWeight={tokens.fontWeights.bold}
                            color="rgba(13,26,38,1)"
                            lineHeight="25px"
                            textAlign="left"
                            display="block"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                            {...getOverrideProps(
                                overrides,
                                'New Amplify Studio gives designers the ability to export UI to React code'
                            )}
                        >
                            New Amplify Studio gives designers the ability to
                            export UI to React code
                        </Text>
                        <Flex
                            gap="16px"
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            {...getOverrideProps(overrides, 'Frame')}
                        >
                            <Text
                                fontFamily="Inter"
                                fontSize="16px"
                                fontWeight="400"
                                color="rgba(92,102,112,1)"
                                lineHeight="24px"
                                textAlign="left"
                                display="block"
                                letterSpacing="0.01px"
                                shrink="0"
                                position="relative"
                                whiteSpace="pre-wrap"
                                {...getOverrideProps(overrides, 'Nikhil S')}
                            >
                                Nikhil S
                            </Text>
                            <Text
                                fontFamily="Inter"
                                fontSize="16px"
                                fontWeight="400"
                                color="rgba(92,102,112,1)"
                                lineHeight="24px"
                                textAlign="left"
                                display="block"
                                letterSpacing="0.01px"
                                shrink="0"
                                position="relative"
                                whiteSpace="pre-wrap"
                                {...getOverrideProps(
                                    overrides,
                                    '2nd December 2021'
                                )}
                            >
                                2nd December 2021
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        gap="16px"
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                        {...getOverrideProps(overrides, 'Article')}
                    >
                        <MyIcon
                            type="arrow-right"
                            {...getOverrideProps(overrides, 'MyIcon29766860')}
                        />
                        <Text
                            fontFamily="Inter"
                            fontSize={tokens.fontSizes.medium}
                            fontWeight="400"
                            color="rgba(13,26,38,1)"
                            lineHeight="24px"
                            textAlign="left"
                            display="block"
                            grow="1"
                            shrink="1"
                            basis="0"
                            position="relative"
                            whiteSpace="pre-wrap"
                            {...getOverrideProps(
                                overrides,
                                'AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps that grows with your business. Studio builds on existing backend building capabilities in AWS Amplify, allowing you to build your UI faster with a set of ready-to-use UI components that are editable in Figma. With Studio, you can quickly build an entire web app, front-to-back, with minimal coding, while still maintaining full control over your app design and behavior through code. Ship faster, scale effortlessly, and delight every user.'
                            )}
                        >
                            AWS Amplify Studio is a visual development
                            environment for building full-stack web and mobile
                            apps that grows with your business. Studio builds on
                            existing backend building capabilities in AWS
                            Amplify, allowing you to build your UI faster with a
                            set of ready-to-use UI components that are editable
                            in Figma. With Studio, you can quickly build an
                            entire web app, front-to-back, with minimal coding,
                            while still maintaining full control over your app
                            design and behavior through code. Ship faster, scale
                            effortlessly, and delight every user.
                        </Text>
                    </Flex>
                    <Flex
                        gap={tokens.space.small}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        shrink="0"
                        position="relative"
                        {...getOverrideProps(overrides, 'Share29766862')}
                    >
                        <Text
                            fontFamily="Inter"
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(92,102,112,1)"
                            lineHeight="24px"
                            textAlign="left"
                            display="block"
                            letterSpacing="0.01px"
                            shrink="0"
                            position="relative"
                            whiteSpace="pre-wrap"
                            {...getOverrideProps(overrides, 'Share29766863')}
                        >
                            Share
                        </Text>
                        <MyIcon
                            type="bookmark_border"
                            {...getOverrideProps(overrides, 'MyIcon29766864')}
                        />
                        <MyIcon
                            type="share"
                            {...getOverrideProps(overrides, 'MyIcon29766865')}
                        />
                        <MyIcon
                            type="more_vert"
                            {...getOverrideProps(overrides, 'MyIcon29766866')}
                        />
                    </Flex>
                </Flex>
                <Image
                    width={{ base: '100%', large: '160px' }}
                    height={{ base: 'auto', large: '200px' }}
                    maxWidth="160px"
                    objectFit="cover"
                    display="block"
                    shrink="0"
                    position="relative"
                    borderRadius="16px"
                    alt="photo"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    {...getOverrideProps(overrides, 'image')}
                />
            </Flex>
            <Flex
                gap="16px"
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                {...getOverrideProps(overrides, 'Read more29766868')}
            >
                <MyIcon
                    type="arrow-right"
                    {...getOverrideProps(overrides, 'MyIcon29766869')}
                />
                <RouterLink to="/">
                    <Text
                        fontFamily="Inter"
                        fontSize="16px"
                        fontWeight="400"
                        color="rgba(13,26,38,1)"
                        lineHeight="24px"
                        textAlign="left"
                        display="block"
                        textDecoration="underline"
                        letterSpacing="0.01px"
                        grow="1"
                        shrink="1"
                        basis="0"
                        position="relative"
                        whiteSpace="pre-wrap"
                        {...getOverrideProps(overrides, 'Read more29766870')}
                    >
                        Read more
                    </Text>
                </RouterLink>
            </Flex>
        </Flex>
    );
}

SocialPost.propTypes = {
    overrides: PropTypes.object,
};
