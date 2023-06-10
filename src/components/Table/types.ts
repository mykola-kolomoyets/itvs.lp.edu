import type { HeaderGroup } from '@tanstack/react-table';
import type { FCProps } from '@/types';

export type TableProps = FCProps<{
    /**
        The header groups of the table header.
    */
    headerGroups: HeaderGroup<unknown>[];
    /**
        The list of custom render th.
    */
    customRenderIds?: string[];
}>;
