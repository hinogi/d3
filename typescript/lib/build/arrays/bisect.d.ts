declare let bisectLeft: (a: number[], x: number, lo?: number, hi?: number) => number;
declare let bisectRight: (a: number[], x: number, lo?: number, hi?: number) => number;
declare let bisect: (a: number[], x: number, lo?: number, hi?: number) => number;
declare function bisector<T, U>(accessor: (x: T) => U): {
    left: (array: T[], x: U, lo?: number, hi?: number) => number;
    right: (array: T[], x: U, lo?: number, hi?: number) => number;
};
declare function bisector<T, U>(comparator: (a: T, b: U) => number): {
    left: (array: T[], x: U, lo?: number, hi?: number) => number;
    right: (array: T[], x: U, lo?: number, hi?: number) => number;
};
export { bisectLeft as bisectLeft, bisectRight as bisectRight, bisect as bisect, bisector as bisector };
