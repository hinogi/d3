/**
 * Administrivia: anything with a valueOf(): number method is comparable, so we allow it in numeric operations
 */
export interface Numeric {
    valueOf(): number;
}