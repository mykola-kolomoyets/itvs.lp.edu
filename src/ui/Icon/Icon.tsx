import { memo, forwardRef } from 'react';
import clsx from 'clsx';
import type { IconProps } from './types';
import s from './Icon.module.css';

const Icon = forwardRef<SVGSVGElement, IconProps>(({ id, size = 'md', className }, ref) => {
    return (
        <svg className={clsx(s.icon, s[size], className)} ref={ref}>
            <use href={`/images/sprite.svg#${id}`} />
        </svg>
    );
});

Icon.displayName = 'Icon';

export default memo(Icon);
