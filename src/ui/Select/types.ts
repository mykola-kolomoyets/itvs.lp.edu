import SelectClass from 'react-select/dist/declarations/src/Select';
import type { RefAttributes } from 'react';
import type { ActionMeta, GroupBase, MultiValue, SingleValue } from 'react-select';
import type { SelectComponents } from 'react-select/dist/declarations/src/components';
import type { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import type { SelectOptionType, WithClassName } from '@/types';

export type SelectType = SelectClass<SelectOptionType, false, GroupBase<SelectOptionType>>;

export type SelectProps = WithClassName<{
    /**
        Selected values
     */
    value?: SingleValue<SelectOptionType>;
    /**
        Options list to select from
     */
    options: SelectOptionType[];
    /**
        Label of field
    */
    label?: string;
    /**
        Callback function for changing value of the select.
    */
    onChange: (
        value: SingleValue<SelectOptionType> | MultiValue<SelectOptionType>,
        action: ActionMeta<SelectOptionType>
    ) => void;
    /**
        Placeholder for the select.
    */
    placeholder?: string;
    /**
        If true, the select is disabled.
    */
    disabled?: boolean;
    /**
        An error message of the select.
    */
    errorMessage?: string;
    /**
        The tooltip text of the item.
    */
    tooltipText?: string;
    /**
        Custom components for select
    */
    components?: Partial<SelectComponents<SelectOptionType, false, GroupBase<SelectOptionType>>>;
}> &
    StateManagerProps<SelectOptionType, false, GroupBase<SelectOptionType>> &
    RefAttributes<SelectType>;
