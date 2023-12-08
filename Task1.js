import inquirer from 'inquirer';
async function buyGroceries() {
    const { choice } = await inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: 'What do you want to buy?',
        choices: ['Fruits', 'Vegetables', 'Groceries'],
    });
    let item;
    let price;
    switch (choice) {
        case 'Fruits':
            item = 'Apples';
            price = 2.5;
            break;
        case 'Vegetables':
            item = 'Spinach';
            price = 1.8;
            break;
        case 'Groceries':
            item = 'Bread';
            price = 3;
            break;
        default:
            item = 'Unknown Item';
            price = 0;
    }
    console.log(`You chose ${choice}.`);
    console.log(`Selected item: ${item}, Price: $${price}`);
    console.log(`Total bill: $${price}`);
    await applyDiscount(price);
    checkoutProcess();
}
async function applyDiscount(totalBill) {
    const { applyDiscount } = await inquirer.prompt({
        type: 'confirm',
        name: 'applyDiscount',
        message: 'Do you want to apply a discount?',
        default: false,
    });
    if (applyDiscount) {
        const discountedBill = totalBill > 10 ? totalBill - 2 : totalBill;
        console.log(`Total bill after discount: $${discountedBill}`);
    }
    else {
        console.log('No discount applied.');
    }
}
async function checkoutProcess() {
    const paymentOptions = ['Cash', 'Credit Card', 'Debit Card', 'Mobile Wallet'];
    console.log('Checkout Process:');
    const { payment } = await inquirer.prompt({
        type: 'list',
        name: 'payment',
        message: 'Select payment method:',
        choices: paymentOptions,
    });
    console.log(`Chosen payment method: ${payment}`);
    console.log('Thank you for shopping with us!');
}
console.log('--- Welcome to the Supermarket! ---');
buyGroceries();
