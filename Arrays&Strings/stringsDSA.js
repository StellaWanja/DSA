/** COMMON DATA STRUCTURES FOR LOOKING UP STRINGS
    1. Trie/ prefix tree
    2. Suffix tree
*/

/** COMMON STRING ALGORITHMS
    1. Rabin Karp -> efficient searching of substring using a rolling hash
    2. KMP -> efficient searching of substring
 */

/** TIME COMPLEXITY -> same as array */

/** THINGS TO LOOK OUT FOR DURING INTERVIEWS
    1. input character set 
    2. case sensitivity
 */

/** EDGE CASES
    1. Empty string
    2. String with 1 or 2 characters
    3. String with repeated characters
    4. Strings with only distinct characters
 */

/** TECHNIQUES
    1. Counting characters
        -> count the frequency of characters in a string
        -> most common solution -> using a hash table/map
    2. String of unique characters
        -> use a 26-bit bitmask to indicate which lower case latin characters are inside the string.
        -> To determine if two strings have common characters, perform & on the two bitmasks. 
        If the result is non-zero, ie. mask_a & mask_b > 0, then the two strings have common characters
    3. Anagram
        -> result of rearranging the letters of a word or phrase to produce a new word or phrase
        -> approaches to det if two strings are anagrams
            a) Sorting both strings should produce the same resulting string 
                -> O(n log n) time, O(log n) space
            b) map each character to a prime number and multiply each mapped number together. Should have the same multiple (prime factor decomposition)
                -> O(n) time, O(1) space
            c) Frequency counting of characters will help to determine if two strings are anagrams
                -> O(n) time, O(1) space
    4. Palindrome
        -> word, phrase, number, or other sequence of characters which reads the same backward as forward eg racecar
        -> ways to determine if a string is a palindrome
            a) Reverse the string and it should be equal to itself
            b) Have two pointers at the start and end of the string. Move the pointers inward till they meet. At every point in time, the characters at both pointers should match
 */





