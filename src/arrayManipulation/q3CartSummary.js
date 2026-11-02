/*
 * Q3. Build a shopping cart summary
 * Level: SDE-1 | Topics: reduce + map
 *
 * const cart = [
 *   { id: 1, name: "Shoes", price: 2000, quantity: 2, category: "fashion" },
 *   { id: 2, name: "Shirt", price: 1000, quantity: 3, category: "fashion" },
 *   { id: 3, name: "Watch", price: 5000, quantity: 1, category: "accessories" },
 *   { id: 4, name: "Bag",   price: 3000, quantity: 2, category: "accessories" },
 * ];
 *
 * Requirements:
 *   - Calculate total cart value.
 *   - Calculate total quantity of items.
 *   - Calculate subtotal grouped by category.
 *   - Return the most expensive item based on price * quantity.
 *
 * Expected output:
 * {
 *   totalAmount: 18000,   // source showed 19000, but 4000 + 3000 + 5000 + 6000 = 18000
 *   totalQuantity: 8,
 *   categorySummary: {
 *     fashion: 7000,
 *     accessories: 11000
 *   },
 *   mostExpensiveItem: { id: 4, name: "Bag", price: 3000, quantity: 2, category: "accessories" }  // Bag: 3000 * 2 = 6000
 * }
 */
