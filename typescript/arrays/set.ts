/**
 * Creates an initially-empty set.
 */
export function set(): Set<string>;

/**
 * Initializes a set from the given array of strings.
 */
export function set(array: string[]): Set<string>;

export default function set(array?: Array<string>): Set<string> {
    return new Set(array);
}
