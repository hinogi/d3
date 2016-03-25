import { Numeric } from "../types/Numeric";
/**
 * Return the minimum value in the array using natural order.
 */
export declare function min(array: number[]): number;
/**
 * Return the minimum value in the array using natural order.
 */
export declare function min(array: string[]): string;
/**
 * Return the minimum value in the array using natural order.
 */
export declare function min<T extends Numeric>(array: T[]): T;
/**
 * Return the minimum value in the array using natural order.
 */
export declare function min<T>(array: T[], accessor: (datum: T, index: number) => number): number;
/**
 * Return the minimum value in the array using natural order.
 */
export declare function min<T>(array: T[], accessor: (datum: T, index: number) => string): string;
/**
 * Return the minimum value in the array using natural order.
 */
export declare function min<T, U extends Numeric>(array: T[], accessor: (datum: T, index: number) => U): U;
