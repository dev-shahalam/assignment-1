

class bankAccount {
    ownerName = "Md Shah Alam";
    accountNo = "37159912";
    balance = 0;

    diposite(amount) {
        this.balance += amount;
    }

    widthrow(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.getBalance();
        } else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        return (
            `Account Number : ${this.accountNo}
Owner Name : ${this.ownerName}
Balance : ${this.getBalance()}
`);
    }
}
const account = new bankAccount();
account.diposite(1000);
account.widthrow(300);
// console.log(account.getBalance());
console.log(account.displayAccountInfo());