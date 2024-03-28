
class InsufficientBalanceError extends Error {
    constructor(message) {
      super(message); 
      this.name = "InsufficientBalanceError"; 
    }
}

class InvalidAmountError extends Error {
    constructor(message) {
      super(message); 
      this.name = "InvalidAmountError"; 
    }
}

class InputError {}


class Account {
    #name;
    #accountNumber;
    #balance;

    constructor(name, accountNumber, balance = 0) {
        this.#name = name;
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount == 77) {
            throw new Error("Test");
        }
        console.log(`Amount deposited ${amount}.`);
        return new Account(this.#name, this.#accountNumber, this.#balance + amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw InvalidAmountError("Amount must be greater than zero.")
        }
        if (this.#balance - amount >= 0) {
            console.log(`Amount withdrawn ${amount}.`);
            return new Account(this.#name, this.#accountNumber, this.#balance - amount)
        } 
        throw InsufficientBalanceError(`Account balance is lower than ${amount}`);
    }

    get statement() {
        console.log(`Statement retrieved.`);
        return this.#balance;
    }

    toString() {
        return "{Account name: " + this.#name + ", Account number: " + this.#accountNumber + "}";
    }
}


function transfer(source, destination, amount) {
    let progress, 
        sourceAfterWithdrawal, 
        sourceRestored, 
        sourceFinal,
        destinationAfterDeposit, 
        destinationFinal;

    if (typeof amount !== "number") throw new InputError();

    if (amount <= 0) throw new InvalidAmountError();

    if (source.statement < amount) throw new InsufficientBalanceError()

    progress = 0
    try {
        sourceAfterWithdrawal = source.withdraw(amount);
        progress = 1;
        destinationAfterDeposit = destination.deposit(amount);
        progress = 2;
    } catch (error) {
        console.log("Something went wrong: " + error);
    } finally {
        if (progress == 1) {
            sourceRestored = sourceAfterWithdrawal.deposit(amount);
        }

        sourceFinal = sourceRestored || sourceAfterWithdrawal || source;
        destinationFinal = destinationAfterDeposit || destination;

        return sourceFinal, destinationFinal;
    }
}

let tunde = new Account("Tunde Palmnut", "3102342421"), levo = new Account("Levi Strat", "4334242345");

const accounts = {
    tunde: tunde,
    levo: levo
};

console.log("check object", accounts.tunde.toString());

console.log("tunde before deposit", accounts.tunde.statement);
accounts.tunde = accounts.tunde.deposit(1000);
console.log("tunde after deposit", accounts.tunde.statement);

console.log("tunde before transfer", accounts.tunde.statement);
console.log("levo before transfer", accounts.levo.statement);

try {
    accounts.tunde, accounts.levo = transfer(accounts.tunde, accounts.levo, '45');
    console.log("tunde after transfer", accounts.tunde.statement);
    console.log("levo after transfer", accounts.levo.statement);
} catch (error) {
    if (error instanceof InputError) {
        console.log("--- ERROR --- : Amount must be a number.");
    } else if (error instanceof InsufficientBalanceError) {
        console.log("--- ERROR --- : Sender account has insufficient balance.");
    } else if (error instanceof InvalidAmountError) {
        console.log("--- ERROR --- : Amount must be a number greater than 0.");
    }
}


