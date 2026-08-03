function display<T>(value: T): void {
    console.log("Value: " + value);
}

let num: number = 100;
let name: string = "Adithi";

display<number>(num);
display<string>(name);