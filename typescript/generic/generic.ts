function printValue<T>(value: T) {
    console.log(value);
}
printValue<string>("Hello");
printValue<number>(10);
printValue<boolean>(true);