let lastId = 0;

export default function(prefix='uid') {
    lastId++;
    return `${prefix}${lastId}`;
}
