import type { GroupBase, DropdownIndicatorProps as SelectDropdownIndicatorProps } from 'react-select';
import type { SelectOptionType } from '@/types';

export type DropdownIndicatorProps = SelectDropdownIndicatorProps<SelectOptionType, false, GroupBase<SelectOptionType>>;
