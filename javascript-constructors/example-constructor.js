function ExampleConstructor() {

}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

var anExampleConstructor = new ExampleConstructor();
console.log('value of anExampleConstructor:', anExampleConstructor);

var instanceCheck = anExampleConstructor instanceof ExampleConstructor;
console.log('result of instanceCheck:', instanceCheck);
