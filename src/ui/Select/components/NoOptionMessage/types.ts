import type { GroupBase, NoticeProps } from 'react-select';
import type { SelectOptionType } from '@/types';

export type NoOptionMessageProps = NoticeProps<SelectOptionType, false, GroupBase<SelectOptionType>> & {
    description?: string;
};
