import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type WithLoadingProps = {
    loadingText?: string;
    isLoading?: boolean;
};

function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
    return function ComponentWithLoading(props: T & WithLoadingProps) {

        if (props.isLoading) {
            return <div>{props.loadingText || 'Загрузка...'}</div>
        };

        const { loadingText, ...restProps } = props;

        return <WrappedComponent {...restProps as T} />;
    };
};

export default withLoading;