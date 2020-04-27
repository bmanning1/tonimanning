const minPrice = (prices) => prices.reduce((min, { value }) => parseFloat(value) < parseFloat(min) ? value : min, prices[0].value);

export default minPrice;