class FilterArray {
    constructor(array, tag) {
        this.array = array;
        this.tag = tag;
    }
    filter = () => {
        return this.array.filter(obj => obj.tags.find(el => el === this.tag));
    }
}

export const filterArray = (array, tag) => {
    const Filtered = new FilterArray(array, tag);
    return Filtered.filter();
}