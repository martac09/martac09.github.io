function Smartphone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Smartphone.prototype.printInfo = function() {
	console.log("Smartphone brand is " + this.brand + ", price is " + this.price + " and color is " + this.color + ".");
}
var SamsungS4 = new Smartphone("Samsung", "1000", "black");
var iPhoneS6 = new Smartphone("Apple", "2500", "white");
var HuaweiP9 = new Smartphone("Huawei", "1100", "black");