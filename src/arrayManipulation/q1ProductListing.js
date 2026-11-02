/*
 * Q1. E-commerce product listing transformation
 * Level: SDE-1 | Topics: map + filter + sort
 *
 * Given an API response:
 *
 * const products = [
 *   { id: 1, name: "iPhone",  price: 80000,  category: "mobile", rating: 4.5, inStock: true },
 *   { id: 2, name: "Samsung", price: 60000,  category: "mobile", rating: 4.2, inStock: false },
 *   { id: 3, name: "MacBook", price: 120000, category: "laptop", rating: 4.8, inStock: true },
 *   { id: 4, name: "OnePlus", price: 40000,  category: "mobile", rating: 4.7, inStock: true },
 *   { id: 5, name: "Dell",    price: 70000,  category: "laptop", rating: 4.1, inStock: true },
 * ];
 *
 * Requirements:
 *   - Only include products that are in stock.
 *   - Only include products with a rating above 4.3.
 *   - Sort products by rating in descending order.
 *   - Apply a 10% discount.
 *   - Return only id, name, finalPrice, and rating.
 *
 * Expected output:
 * [
 *   { id: 3, name: "MacBook", finalPrice: 108000, rating: 4.8 },
 *   { id: 4, name: "OnePlus", finalPrice: 36000,  rating: 4.7 },
 *   { id: 1, name: "iPhone",  finalPrice: 72000,  rating: 4.5 },
 * ]
 */
