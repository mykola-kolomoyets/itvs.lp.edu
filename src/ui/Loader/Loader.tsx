import { memo } from 'react';
import clsx from 'clsx';
import type { LoaderProps } from './types';
import s from './Loader.module.css';

const Loader: React.FC<LoaderProps> = ({ size = 20, className }) => {
    return (
        <span className={clsx(s.loader, className)} style={{ '--size': `${size}px` } as React.CSSProperties}>
            <span />
        </span>
    );
};

export default memo(Loader);
