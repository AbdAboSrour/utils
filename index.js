/**
 * Compares two objects and returns an object containing only the keys that have been updated or added.
 * 
 * @param {Object} originalObject - The base object to compare against
 * @param {Object} newObject - The updated object to extract changes from
 * @returns {Object} An object containing only the modified or newly added keys and their new values
 * 
 * @example
 * const original = { name: 'John', age: 30, city: 'New York' };
 * const updated = { name: 'John', age: 35, country: 'USA' };
 * const changes = getUpdatedKeys(original, updated);
 * // Returns: { age: 35, country: 'USA' }
 * 
 * @throws {TypeError} Throws an error if either input is not an object
 */
function getUpdatedKeys(originalObject, newObject) {
    // Validate input types
    if (typeof originalObject !== 'object' || originalObject === null) {
        throw new TypeError('Original object must be a non-null object');
    }
    if (typeof newObject !== 'object' || newObject === null) {
        throw new TypeError('New object must be a non-null object');
    }

    // Create a copy of newObject to avoid mutating the original
    const updatedObject = { ...newObject };

    // Iterate through keys of the new object
    Object.keys(updatedObject).forEach((key) => {
        // Check if the key exists in the original object and the values are the same
        if (originalObject.hasOwnProperty(key)) {
            if (originalObject[key] === updatedObject[key]) {
                // Remove unchanged keys
                delete updatedObject[key];
            }
        }
    });

    return updatedObject;
}

module.export = convertToTest;