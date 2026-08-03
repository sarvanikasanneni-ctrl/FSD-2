function displayLength<T extends { length: number }>(item: T): void {
    console.log("Length: " + item.length);
}

displayLength("Hello");
displayLength([1, 2, 3, 4]);

// displayLength(100); // Error: number has no 'length' property