import type { StylesConfig, GroupBase } from 'react-select';
import type { SelectOptionType } from '@/types';

const SELECT_HEIGHT = '36px';

export const CUSTOM_SELECT_STYLES: StylesConfig<SelectOptionType, boolean, GroupBase<SelectOptionType>> = {
    control(provided) {
        return {
            ...provided,
            minHeight: SELECT_HEIGHT,
            height: SELECT_HEIGHT,
        };
    },
    valueContainer(provided) {
        return {
            ...provided,
            height: SELECT_HEIGHT,
        };
    },
    input(provided) {
        return {
            ...provided,
            margin: '0px',
        };
    },
    indicatorSeparator() {
        return {
            display: 'none',
        };
    },
    indicatorsContainer(provided) {
        return {
            ...provided,
            height: SELECT_HEIGHT,
        };
    },
};
