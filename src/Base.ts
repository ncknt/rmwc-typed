import * as React from 'react'

export declare namespace RMWC {
    export interface RMWCTagProps {
        tag?: string | React.ComponentType<any>;
        className?: string;
        wrap?: boolean;
        elementRef?: React.Ref<any>;
        theme?: string | string[];
    }

    export interface SimpleBaseProps<T> extends RMWCTagProps, React.HTMLAttributes<T> {
    }

    export interface RippleTagProps {
        ripple?: boolean;
    }

    export interface UseProps<T> extends React.HTMLAttributes<T> {
        use?: string
    }
}