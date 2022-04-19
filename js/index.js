// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  // console.log(price);
  // console.log(quantity);
  // console.log(price.innerHTML);
  // console.log(quantity.value);

  let subtotal = Number(price.innerHTML) * Number(quantity.value);
  console.log(subtotal);
  let subtotalHolder = product.querySelector('.subtotal span');
  subtotalHolder.innerHTML = subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let productElements = document.getElementsByClassName('product');

  for (i = 0; i < productElements.length; i++) {
    updateSubtotal(productElements[i]);
  }
  // ITERATION 3
  //... your code goes here
  let total = 0;
  for (i = 0; i < productElements.length; i++) {
    console.log(productElements[i]);
    let subtotal = productElements[i].querySelector('.subtotal span');
    subtotal = subtotal.textContent;
    total += Number(subtotal);
    console.log(total);
  }
  console.log(`outside total` + total);
  let totalHolder = document.querySelector('#total-value span');
  totalHolder.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // event.currentTarget.parentNode.removeChild(event.currentTarget);
  let x = target.parentNode.parentNode;
  console.log(x);
  x.parentNode.removeChild(x);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }
});
