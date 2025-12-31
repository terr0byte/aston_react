export type LengthFilterOptions = {
    min?: number;
    max?: number;
};

export const filterByLength = <T extends { title: string }>(
    items: T[],
    options: LengthFilterOptions
): T[] => {
    const min = options.min ?? 0;
    const max = options.max ?? Infinity;

    return items.filter(item =>
        item.title.length >= min &&
        item.title.length <= max
    );
};