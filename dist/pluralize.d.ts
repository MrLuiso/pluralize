/**
 * Pluralize or singularize a word based on the passed in count.
 *
 * @param  {string}  word      The word to pluralize
 * @param  {number}  count     How many of the word exist
 * @param  {boolean} inclusive Whether to prefix with the number (e.g. 3 ducks)
 * @return {string}
 */
export declare function pluralize(word: any, count: any, inclusive: any): string;
export declare namespace pluralize {
    var plural: (word: any) => any;
    var isPlural: (word: any) => boolean;
    var singular: (word: any) => any;
    var isSingular: (word: any) => boolean;
    var addPluralRule: (rule: any, replacement: any) => void;
    var addSingularRule: (rule: any, replacement: any) => void;
    var addUncountableRule: (word: any) => void;
    var addIrregularRule: (single: any, plural: any) => void;
}
