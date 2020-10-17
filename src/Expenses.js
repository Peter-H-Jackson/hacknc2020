class Expenses {
    var name, dateSpent, type, amount;

    constructor(name, dateSpent, type, amount) {
        this.name = name;
        this.dateSpent = dateSpent;
        this.type = type;
        this.amount = amount;
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.dateSpent;
    }

    getType() {
        return this.type;
    }

    getAmount() {
        return this.amount;
    }

    printResult() {

    }
}