class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount > 0) {
                    this.balance += amount;
                    resolve (`Deposit Success!\nSaldo yang didepositkan: Rp ${amount}. \nSaldo Anda saat ini sebesar Rp ${this.balance}`)
                } else {
                    reject ('Saldo tidak diketahui');
            }
            }, 5000);
        });   
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.balance < amount) {
                    reject ('Saldo tidak mencukupi');
                }
                this.balance -= amount;
                resolve (`Withdrawal Success! \nSaldo ditarik sebesar Rp ${amount}. \nSaldo Anda saat ini sebesar Rp${this.balance}`);
            }, 5000);
        });
    }
}


let user = new BankAccount(5000);
user.withdraw(15000)
    .then((data) => {
        console.log(`Status: ${data}`);
    })
    .catch((data) => {
        console.log(`Status: ${data}`);
    });