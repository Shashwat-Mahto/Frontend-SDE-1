/*
 * Q6. Flatten and aggregate order data
 * Level: SDE-1 | Topics: flatMap + reduce
 *
 * const orders = [
 *   {
 *     id: 1,
 *     items: [
 *       { productId: 101, name: "Phone", quantity: 2 },
 *       { productId: 102, name: "Charger", quantity: 3 },
 *     ],
 *   },
 *   {
 *     id: 2,
 *     items: [
 *       { productId: 101, name: "Phone", quantity: 1 },
 *       { productId: 103, name: "Laptop", quantity: 2 },
 *     ],
 *   },
 * ];
 *
 * Expected output:
 * [
 *   { productId: 101, name: "Phone", totalQuantity: 3 },
 *   { productId: 102, name: "Charger", totalQuantity: 3 },
 *   { productId: 103, name: "Laptop", totalQuantity: 2 }
 * ]
 */

const orders = [
  {
    id: 1,
    items: [
      { productId: 101, name: "Phone", quantity: 2 },
      { productId: 102, name: "Charger", quantity: 3 },
    ],
  },
  {
    id: 2,
    items: [
      { productId: 101, name: "Phone", quantity: 1 },
      { productId: 103, name: "Laptop", quantity: 2 },
    ],
  },
];

function transform(arr = []) {
  const result = arr.flatMap((user) => user?.items)
  .reduce((acc , item) => {
    const {productId , name , quantity} = item;

    if(!acc[productId]){
        acc[productId] = {
            productId,
            name,
            totalQuantity:0
        }
    }

    acc[productId].totalQuantity+=quantity;
    return acc;
  } , {})

  return Object.values(result);
  
}

const result = transform(orders);
console.log("q6" , result);

