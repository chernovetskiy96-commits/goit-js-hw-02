function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let sumPrcie = quantity * pricePerDroid;
    if (sumPrcie > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}