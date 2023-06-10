import type { GroupBase, SingleValueProps as ReactSingleValueProps } from 'react-select';
import type { SelectOptionType } from '@/types';

export type SingleValueProps = ReactSingleValueProps<SelectOptionType, false, GroupBase<SelectOptionType>>;
