const transactionForm = document.getElementById('transactionForm');
const searchInput = document.getElementById('search');
const transactionsContainer = document.getElementById('transactions');

let transactions = [];

transactionForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const amount = document.getElementById('amount').value;

  const transaction = { email, password, phone, amount };
  transactions.push(transaction);

  displayTransactions(transactions);
  transactionForm.reset();
});

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTransactions = transactions.filter(transaction => {
    return transaction.email.toLowerCase().includes(searchTerm) ||
           transaction.phone.toLowerCase().includes(searchTerm) ||
           transaction.amount.includes(searchTerm);
  });

  displayTransactions(filteredTransactions);
});

function displayTransactions(transactions) {
  transactionsContainer.innerHTML = '';

  transactions.forEach(transaction => {
    const transactionElement = document.createElement('div');
    transactionElement.classList.add('transaction');
    transactionElement.innerHTML = `
      <p><strong>Email:</strong> ${transaction.email}</p>
      <p><strong>Phone:</strong> ${transaction.phone}</p>
      <p><strong>Amount:</strong> ${transaction.amount}</p>
    `;
    transactionsContainer.appendChild(transactionElement);
  });
}
