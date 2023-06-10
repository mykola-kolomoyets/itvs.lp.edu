import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuRadioGroup } from '@radix-ui/react-dropdown-menu';
import Typography from '@/ui/Typography';
import TextLink from '@/ui/TextLink';
import Button from '@/ui/Button';
import Icon from '@/ui/Icon';
import { DropdownContentProps } from './types';
import { DropdownContent, DropdownMenuItem, DropdownMenuRadioItem } from './Dropdown';

const meta = {
    title: 'ui/Dropdown',
    component: DropdownContent,
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
                            More info about Dropdown component{' '}
                            <TextLink
                                href="https://www.radix-ui.com/docs/primitives/components/dropdown-menu"
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
} satisfies Meta<typeof DropdownContent>;

export default meta;

type Story = StoryObj<typeof meta>;

const ExampleDropdownMenu = (args: DropdownContentProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="secondary"
                    iconChild={<Icon id="icon-three-dots_20" />}
                    className="data-[state=open]:!bg-solid-blue-600 data-[state=open]:!text-grey-0 data-[state=open]:before:!border-transparent"
                />
            </DropdownMenuTrigger>
            <DropdownContent {...args} />
        </DropdownMenu>
    );
};

const dropdownMenuSelectData = [
    {
        value: '1',
        label: 'All',
    },
    {
        value: '2',
        label: 'Open',
    },
    {
        value: '3',
        label: 'Completed',
    },
];

const ExampleDropdownMenuAsSelect = (args: DropdownContentProps) => {
    const [itemValue, setItemValue] = useState(dropdownMenuSelectData[0].value);
    const currentText = dropdownMenuSelectData.find((item) => {
        return item.value === itemValue;
    });

    const onValueChange = (newValue: string) => {
        setItemValue(newValue);
        action('onValueChange')(newValue);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost-secondary"
                    icon="icon-folder_20"
                    iconSide="left"
                    className="bg-grey-1000 bg-opacity-5"
                >
                    Group by: {currentText?.label ?? '-'}
                </Button>
            </DropdownMenuTrigger>
            <DropdownContent {...args}>
                <DropdownMenuRadioGroup value={itemValue} onValueChange={onValueChange}>
                    {args.children}
                </DropdownMenuRadioGroup>
            </DropdownContent>
        </DropdownMenu>
    );
};

export const Base: Story = {
    args: {
        align: 'end',
        children: (
            <>
                <DropdownMenuItem
                    text="Submit Survey"
                    icon="icon-check-circle_20"
                    tooltipText="Submit Survey is cool"
                    disabled
                />
                <DropdownMenuItem text="Download Survey CSV" icon="icon-download_20" />
                <DropdownMenuItem text="Upload Survey CSV" icon="icon-upload_20" />
                <DropdownMenuItem text="Edit Assessment" icon="icon-pen_20" />
                <DropdownMenuItem text="Unlaunch Assessment" icon="icon-stop-circle_20" />
                <DropdownMenuItem text="Delete Assessment" icon="icon-trash_20" />
            </>
        ),
    } as DropdownContentProps,
    render(args) {
        return <ExampleDropdownMenu {...args} />;
    },
};

export const DropdownMenuAsSelect: Story = {
    args: {
        align: 'center',
        children: (
            <>
                <DropdownMenuRadioItem
                    value={dropdownMenuSelectData[0].value}
                    text={dropdownMenuSelectData[0].label}
                    icon="icon-circle-dot_20"
                    tooltipText="Some tooltip's text"
                    disabled
                />
                <DropdownMenuRadioItem
                    value={dropdownMenuSelectData[1].value}
                    text={dropdownMenuSelectData[1].label}
                    icon="icon-timelapse_20"
                />
                <DropdownMenuRadioItem
                    value={dropdownMenuSelectData[2].value}
                    text={dropdownMenuSelectData[2].label}
                    icon="icon-check-circle_20"
                />
            </>
        ),
    } as DropdownContentProps,
    render(args) {
        return <ExampleDropdownMenuAsSelect {...args} />;
    },
};
