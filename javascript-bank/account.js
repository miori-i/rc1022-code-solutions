/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount < 0 || amount === 0 || !Number.isInteger(amount) || typeof amount !== 'number') {
    return false;
  } else {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount < 0 || amount === 0 || !Number.isInteger(amount) || typeof amount !== 'number') {
    return false;
  } else {
    var transaction = new Transaction('withdrawal', amount);
    this.transactions.push(transaction);
    return true;
  }
};

Account.prototype.getBalance = function () {
  var depositTotal = 0;
  var withdrawalTotal = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      depositTotal += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawalTotal += this.transactions[i].amount;
    }
  }
  var availableFunds = depositTotal - withdrawalTotal;
  return availableFunds;
};
