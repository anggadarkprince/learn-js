const Car = (function () {
    let instance;

    function CarInstance(brand, engine) {
        this.brand = brand;
        this.engine = engine;
        this.setBrand = function (brand) {
            this.brand = brand;
        }
        this.getBrand = function () {
            return this.brand;
        }
        this.setEngine = function (engine) {
            this.engine = engine;
        }
        this.getEngine = function () {
            return this.engine;
        }
    }

    function getInstance() {
        if (!instance) {
            instance = new CarInstance();
        }
        return instance;
    }

    return {
        getInstance
    }
})();

const instanceA = Car.getInstance();
instanceA.setBrand('Toyota');
instanceA.setEngine(2000);

const instanceB = Car.getInstance();
console.log(instanceB.getBrand());
console.log(instanceB.getEngine());

console.log(instanceA === instanceB);

instanceB.setBrand('Honda');
console.log(instanceA.getBrand());