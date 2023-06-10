import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { Root as PopoverRoot, Trigger as PopoverTrigger } from '@radix-ui/react-popover';
import Typography from '@/ui/Typography';
import TextLink from '@/ui/TextLink';
import Button from '@/ui/Button';
import type { PopoverContentProps } from './types';
import PopoverContent from './PopoverContent';

const meta = {
    title: 'ui/PopoverContent',
    component: PopoverContent,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return <div className="flex items-start justify-center">{Story()}</div>;
        },
    ],
    parameters: {
        docs: {
            page() {
                return (
                    <>
                        <Title />
                        <Typography>
                            More info about Popover component{' '}
                            <TextLink
                                href="https://www.radix-ui.com/docs/primitives/components/popover"
                                target="_blank"
                                className="inline"
                            >
                                here
                            </TextLink>
                            .
                        </Typography>
                        <Subtitle />
                        <Description />
                        <Primary />
                        <ArgsTable story={PRIMARY_STORY} />
                        <Stories />
                    </>
                );
            },
        },
    },
} satisfies Meta<typeof PopoverContent>;

export default meta;

type Story = StoryObj<typeof meta>;

Button.displayName = 'Button';

const ExamplePopover = (args: PopoverContentProps) => {
    const [opened, setOpened] = useState<boolean>(false);
    const [isOpenInner, setIsOpenInner] = useState<boolean>(false);

    const openChangeHandler = (value: boolean) => {
        setOpened(value);

        if (!value) {
            setIsOpenInner(value);
        }

        action('onOpenChange');
    };

    const innerPopoverOpenChangeHandler = (value: boolean) => {
        setIsOpenInner(value);
        action('onClickBtnBack');
    };

    return (
        <PopoverRoot open={opened} onOpenChange={openChangeHandler}>
            <PopoverTrigger asChild>
                <Button>Delegate</Button>
            </PopoverTrigger>
            <PopoverContent
                {...args}
                title={!isOpenInner ? 'Delegate Question' : 'Invite New User'}
                hasBtnBack={isOpenInner}
                onClickBtnBack={() => {
                    innerPopoverOpenChangeHandler(!isOpenInner);
                }}
            >
                <div
                    className="pb-6 px-6"
                    style={{
                        overflow: 'auto',
                        maxHeight: 'var(--content-max-height)',
                    }}
                >
                    {!isOpenInner ? (
                        <>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Button
                                className="mt-4"
                                onClick={() => {
                                    innerPopoverOpenChangeHandler(!isOpenInner);
                                }}
                            >
                                Invite
                            </Button>
                        </>
                    ) : (
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    )}
                </div>
            </PopoverContent>
        </PopoverRoot>
    );
};

export const Base: Story = {
    args: {
        title: 'Popover',
        children: (
            <div
                className="pb-6 px-6"
                style={{
                    overflow: 'auto',
                    maxHeight: 'var(--content-max-height)',
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </div>
        ),
    } as PopoverContentProps,
    render(args) {
        return (
            <PopoverRoot>
                <PopoverTrigger asChild>
                    <Button>Open popover</Button>
                </PopoverTrigger>
                <PopoverContent {...args} />
            </PopoverRoot>
        );
    },
};

export const Example: Story = {
    args: {} as PopoverContentProps,
    render(args) {
        return <ExamplePopover {...args} />;
    },
};
