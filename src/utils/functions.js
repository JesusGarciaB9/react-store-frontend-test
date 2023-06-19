export function getTitle(path) {
    if (path === '/shop-cart') {
        return 'Shopping Cart';
    } else if (path.includes('product')) {
        return 'Product'
    } else {
        return ''
    }
}

export function convertStringToNumberFormat(numberToFormatt) {
    const formattedNumber = '$' + numberToFormatt?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedNumber;
}