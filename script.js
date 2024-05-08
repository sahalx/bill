let items = [];

document.getElementById('billingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const itemName = document.getElementById('itemName').value;
  const quantity = parseInt(document.getElementById('quantity').value);
  const price = parseFloat(document.getElementById('price').value);

  const total = quantity * price;
  
  const newItem = {
    itemName,
    quantity,
    price,
    total
  };

  items.push(newItem);

  displayBill();
});

function displayBill() {
  const billPreview = document.getElementById('billPreview');
  billPreview.innerHTML = '';

  let billHTML = '<h2>Bill Preview</h2>';
  billHTML += '<table>';
  billHTML += '<tr><th>Item Name</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';

  let totalAmount = 0;

  items.forEach(item => {
    billHTML += `<tr><td>${item.itemName}</td><td>${item.quantity}</td><td>$${item.price.toFixed(2)}</td><td>$${item.total.toFixed(2)}</td></tr>`;
    totalAmount += item.total;
  });

  billHTML += '</table>';
  billHTML += `<h3>Total Amount: $${totalAmount.toFixed(2)}</h3>`;

  billPreview.innerHTML = billHTML;
}