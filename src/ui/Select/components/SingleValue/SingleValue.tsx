import { memo } from 'react';
import { components } from 'react-select';
import clsx from 'clsx';
import type { SingleValueProps } from './types';
import Typography from '@/ui/Typography';
import s from './SingleValue.module.css';

const SingleValue: React.FC<SingleValueProps> = (props) => {
    return (
        <components.SingleValue {...props} className={clsx(props.className, s.wrap)}>
            <Typography variant="body-m-400">{props.data.label}</Typography>
        </components.SingleValue>
    );
};

export default memo(SingleValue);
