/*
 * Q11. Product inventory analytics
 * Level: SDE-1 | Topics: reduce + filter + map
 *
 * const products = [
 *   { id: 1, name: "iPhone",       price: 80000,  stock: 5,  category: "electronics", rating: 4.8 },
 *   { id: 2, name: "Samsung TV",   price: 50000,  stock: 0,  category: "electronics", rating: 4.5 },
 *   { id: 3, name: "Nike Shoes",   price: 8000,   stock: 10, category: "fashion",     rating: 4.2 },
 *   { id: 4, name: "Adidas Shoes", price: 6000,   stock: 3,  category: "fashion",     rating: 4.7 },
 *   { id: 5, name: "MacBook",      price: 120000, stock: 2,  category: "electronics", rating: 4.9 },
 *   { id: 6, name: "Watch",        price: 15000,  stock: 0,  category: "accessories", rating: 4.1 },
 *   { id: 7, name: "Backpack",     price: 3000,   stock: 8,  category: "accessories", rating: 4.4 }
 * ];
 *
 * Requirements:
 *   1. Calculate the total number of products.
 *   2. Calculate the total inventory value (price × stock).
 *   3. Count how many products are in stock and out of stock.
 *   4. Calculate inventory value grouped by category.
 *   5. Find the most expensive product based on price.
 *   6. Return an array containing only products with stock greater than zero and
 *      rating above 4.5. Use map() to transform these into { id, name, rating } objects.
 *
 * Expected output:
 * {
 *   totalProducts: 7,
 *   totalInventoryValue: 762000,
 *   inStockCount: 5,
 *   outOfStockCount: 2,
 *   categoryValue: {
 *     electronics: 640000,
 *     fashion: 98000,
 *     accessories: 24000
 *   },
 *   mostExpensiveProduct: { id: 5, name: "MacBook", price: 120000, stock: 2, category: "electronics", rating: 4.9 },
 *   topRatedInStock: [
 *     { id: 1, name: "iPhone",       rating: 4.8 },
 *     { id: 4, name: "Adidas Shoes", rating: 4.7 },
 *     { id: 5, name: "MacBook",      rating: 4.9 }
 *   ]
 * }
 */


const products = [
  { id: 1, name: "iPhone", price: 80000, stock: 5, category: "electronics", rating: 4.8 },
  { id: 2, name: "Samsung TV", price: 50000, stock: 0, category: "electronics", rating: 4.5 },
  { id: 3, name: "Nike Shoes", price: 8000, stock: 10, category: "fashion", rating: 4.2 },
  { id: 4, name: "Adidas Shoes", price: 6000, stock: 3, category: "fashion", rating: 4.7 },
  { id: 5, name: "MacBook", price: 120000, stock: 2, category: "electronics", rating: 4.9 },
  { id: 6, name: "Watch", price: 15000, stock: 0, category: "accessories", rating: 4.1 },
  { id: 7, name: "Backpack", price: 3000, stock: 8, category: "accessories", rating: 4.4 }
];

function transform(arr = []){

    const result = arr?.reduce((acc , item) => {

        const category = item?.category
        const amount = item?.stock * item?.price
        acc.totalProducts+=1;
        acc.totalInventoryValue+=amount;
        acc.inStockCount += item?.stock > 0  ? 1 : 0;
        acc.outOfStockCount += item?.stock === 0  ? 1 : 0 ;
       
        // if(item.stock > 0 && item?.rating > 4.5) acc.topRatedInStock.push(item);

        acc.categoryValue[category] = acc.categoryValue[category] ? acc.categoryValue[category] + amount : amount

        if(!acc.mostExpensiveProduct || item?.price > acc.mostExpensiveProduct?.price){
            acc.mostExpensiveProduct = item;
        }

        return acc;
    }, {
        totalProducts:0,
        totalInventoryValue:0,
        inStockCount:0,
        outOfStockCount:0,
        categoryValue:{},
        mostExpensiveProduct:null,

    })



    const topRatedInStock = arr?.filter((item) => item.stock>0 && item.rating > 4.5)
    .map((item) => ({id:item.id , name:item.name , rating:item.rating}))
    return {
        ...result,
        topRatedInStock
    }
}

const result = transform(products);
console.log("q11" , result);
