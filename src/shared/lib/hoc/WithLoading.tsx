import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type WithLoadingProps = {
    loadingText?: string;
};

function withLoading<T extends object>(WrappedComponent: ComponentType<T>) {
    return function ComponentWithLoading(props: T & WithLoadingProps) {
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 1000)

            return () => clearTimeout(timer)
        }, []);

        if (isLoading) {
            return <div>{props.loadingText || 'Загрузка...'}</div>
        };

        const { loadingText, ...restProps } = props;

        return <WrappedComponent {...restProps as T} />;
    };
};

export default withLoading;