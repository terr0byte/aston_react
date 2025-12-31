import { useState, memo } from 'react';
import { filterByLength } from '../lib/filterByLength';
import type { Post } from '../../../entities/post/ui/PostCard';
import Button from '../../../shared/ui/Button/Button';

interface Props<T> {
    items: T[];
    onFilter: (filteredItems: T[]) => void;
    minPlaceholder?: string;
    maxPlaceholder?: string;
}

const PostLengthFilter = memo(<T extends Post>({
    items,
    onFilter,
    minPlaceholder = 'Минимальная длина',
    maxPlaceholder = 'Максимальная длина'
}: Props<T>) => {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);

    const handleFilter = () => {
        const filtered = filterByLength(items, {
            min: min > 0 ? min : undefined,
            max: max > 0 ? max : undefined
        });
        onFilter(filtered);
    };

    return (
        <div>
            <input
                type="number"
                min="0"
                value={min}
                onChange={(e) => setMin(Math.max(0, +e.target.value))}
                placeholder={minPlaceholder}
            />
            <input
                type="number"
                min="0"
                value={max}
                onChange={(e) => setMax(Math.max(0, +e.target.value))}
                placeholder={maxPlaceholder}
            />
            <Button onClick={handleFilter}>
                Применить фильтр
            </Button>
        </div>
    );
});

export default PostLengthFilter;