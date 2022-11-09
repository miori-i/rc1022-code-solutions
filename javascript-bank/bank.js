/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance < 0 || balance === 0 || !Number.isInteger(balance) || typeof balance !== 'number') {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    // console.log('this.accounts.number:', this.accounts[1].number);
    // console.log('number:', number);
    // console.log('this.accounts.length:', this.accounts.length);
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var depositTotal = 0;
  var withdrawalTotal = 0;
  var total = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else {

    for (var i = 0; i < this.accounts.length; i++) {
      for (var n = 0; n < this.accounts[i].transactions.length; n++) {
        if (this.accounts[i].transactions[n].type === 'deposit') {
          depositTotal += this.accounts[i].transactions[n].amount;
        } else if (this.accounts[i].transactions[n].type === 'withdrawal') {
          withdrawalTotal += this.accounts[i].transactions[n].amount;
        }
        total = depositTotal - withdrawalTotal;
      }
    }
    return total;
  }
};
