declare let bisectLeft: (a: any, x: any, lo: any, hi: any) => any;
declare let bisectRight: (a: any, x: any, lo: any, hi: any) => any;
declare let bisect: (a: any, x: any, lo: any, hi: any) => any;
declare function bisector(f: any): {
    left: (a: any, x: any, lo: any, hi: any) => any;
    right: (a: any, x: any, lo: any, hi: any) => any;
};
export { bisectLeft as bisectLeft, bisectRight as bisectRight, bisect as bisect, bisector as bisector };
