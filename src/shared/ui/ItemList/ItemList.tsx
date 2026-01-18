import type { ReactNode } from 'react';

interface ItemListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

function ItemList<T>({
    items,
    renderItem,
}: ItemListProps<T>) {

    return (
        <div data-component="item-list">
            <div>
                {items.map((item, index) => (
                    <div key={`item-${index}`} data-component="item-wrapper">
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemList;