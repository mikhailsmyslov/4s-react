import _ from 'lodash';

export default (active, total, length) => {
    if (total <= length * 2) {
        return _.range(1, length + 1);
    }

    const start = Math.max(1, (active - length));
    const end = Math.min(total, (active + length));

    const endOffset = start === 1
        ? Math.abs(active - length)
        : 0;
    const startOffset = end === total
        ? total - (active + length)
        : 0;

    return _.range(start + startOffset, end + endOffset + 1);
}