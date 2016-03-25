import { Numeric } from "../types/Numeric";
/**
 * Return the maximum value in the array of numbers using natural order.
 */
export declare function max(array: number[]): number;
/**
 * Return the maximum value in the array of strings using natural order.
 */
export declare function max(array: string[]): string;
/**
 * Return the maximum value in the array of numbers using natural order.
 */
export declare function max<T extends Numeric>(array: T[]): T;
/**
 * Return the maximum value in the array using natural order and a projection function to map values to numbers.
 */
export declare function max<T>(array: T[], accessor: (datum: T, index: number) => number): number;
/**
 * Return the maximum value in the array using natural order and a projection function to map values to strings.
 */
export declare function max<T>(array: T[], accessor: (datum: T, index: number) => string): string;
/**
 * Return the maximum value in the array using natural order and a projection function to map values to easily-sorted values.
 */
export declare function max<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number) => U): U;
