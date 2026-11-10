/*
 * Q15. E-commerce Cart & Discount Engine
 * Level: SDE-1 | Hard | 45 minutes
 *
 * Problem statement:
 * You are building the cart calculation engine for an e-commerce application.
 *
 * The cart contains products from different categories. Each product may have a
 * category-specific discount, and the customer may also have a coupon.
 *
 * Your task is to implement calculateCart() to generate a complete cart summary.
 *
 * Input data:
 *
 * const cart = [
 *   { id: 1, name: "iPhone",     category: "electronics", price: 80000, quantity: 1 },
 *   { id: 2, name: "Shoes",      category: "fashion",     price: 5000,  quantity: 2 },
 *   { id: 3, name: "T-shirt",    category: "fashion",     price: 1000,  quantity: 3 },
 *   { id: 4, name: "Headphones", category: "electronics", price: 3000,  quantity: 2 },
 *   { id: 5, name: "Watch",      category: "accessories", price: 4000,  quantity: 1 }
 * ];
 *
 * const categoryDiscounts = {
 *   electronics: 10,
 *   fashion: 20,
 *   accessories: 5
 * };
 *
 * const coupon = {
 *   code: "SAVE10",
 *   discountPercentage: 10,
 *   minimumOrderValue: 5000,
 *   maximumDiscount: 2000
 * };
 *
 * Requirements:
 *
 * 1. Calculate the original cart value
 *    For each product: price × quantity
 *
 * 2. Apply category discounts
 *    Apply the corresponding category discount to each product.
 *
 * 3. Generate product-level summary
 *    Return each product with:
 *    { id, name, originalPrice, discount, finalPrice }
 *    (originalPrice is price × quantity.)
 *
 * 4. Calculate category-wise summary
 *    Return the total original value and discounted value grouped by category.
 *
 * 5. Apply coupon
 *    - Apply coupon only if the cart's value after category discounts is at least ₹5,000.
 *    - Coupon discount is 10%.
 *    - Maximum coupon discount is ₹2,000.
 *    - Coupon discount is applied after category discounts.
 *
 * 6. Generate final cart summary
 *    Return:
 *    - Original cart value.
 *    - Total category discount.
 *    - Coupon discount.
 *    - Final payable amount.
 *    - Whether coupon was applied.
 *
 * Expected output:
 * {
 *   originalCartValue: 103000,
 *
 *   totalCategoryDiscount: 11400,
 *
 *   categorySummary: {
 *     electronics: {
 *       originalValue: 86000,
 *       discountedValue: 77400
 *     },
 *     fashion: {
 *       originalValue: 13000,
 *       discountedValue: 10400
 *     },
 *     accessories: {
 *       originalValue: 4000,
 *       discountedValue: 3800
 *     }
 *   },
 *
 *   couponDiscount: 2000,
 *   couponApplied: true,
 *   finalPayableAmount: 89600,
 *
 *   products: [
 *     { id: 1, name: "iPhone",     originalPrice: 80000, discount: 8000, finalPrice: 72000 },
 *     { id: 2, name: "Shoes",      originalPrice: 10000, discount: 2000, finalPrice: 8000 },
 *     { id: 3, name: "T-shirt",    originalPrice: 3000,  discount: 600,  finalPrice: 2400 },
 *     { id: 4, name: "Headphones", originalPrice: 6000,  discount: 600,  finalPrice: 5400 },
 *     { id: 5, name: "Watch",      originalPrice: 4000,  discount: 200,  finalPrice: 3800 }
 *   ]
 * }
 */

const cart = [
  { id: 1, name: "iPhone", category: "electronics", price: 80000, quantity: 1 },
  { id: 2, name: "Shoes", category: "fashion", price: 5000, quantity: 2 },
  { id: 3, name: "T-shirt", category: "fashion", price: 1000, quantity: 3 },
  { id: 4, name: "Headphones", category: "electronics", price: 3000, quantity: 2 },
  { id: 5, name: "Watch", category: "accessories", price: 4000, quantity: 1 }
];

const categoryDiscounts = {
  electronics: 10,
  fashion: 20,
  accessories: 5
};

const coupon = {
  code: "SAVE10",
  discountPercentage: 10,
  minimumOrderValue: 5000,
  maximumDiscount: 2000
};
function CartCalculate(cart , categoryDiscounts , coupon ){


    const data = cart?.reduce((acc , item) => {
        const amount = item.price * item.quantity;
        const category = item.category;
        // Multiply first, then divide: avoids float errors like 0.1 * 6000.
        const discountAmount = (amount * (categoryDiscounts[category] ?? 0)) / 100;
        const finalPrice = amount - discountAmount;

        acc.originalCartValue += amount;
        acc.totalCategoryDiscount += discountAmount;

        if (!acc.categorySummary[category]) {
            acc.categorySummary[category] = { originalValue: 0, discountedValue: 0 };
        }
        acc.categorySummary[category].originalValue += amount;
        acc.categorySummary[category].discountedValue += finalPrice;

        acc.products.push({
            id: item.id,
            name: item.name,
            originalPrice: amount,
            discount: discountAmount,
            finalPrice,
        });

       return acc;

    } ,{
        originalCartValue:0,
        totalCategoryDiscount:0,
        categorySummary:{},
        products:[],
    })

    // Coupon is applied on the value left after category discounts.
    const valueAfterCategoryDiscount = data.originalCartValue - data.totalCategoryDiscount;
    const couponApplied = Boolean(coupon) && valueAfterCategoryDiscount >= coupon.minimumOrderValue;
    const couponDiscount = couponApplied
        ? Math.min((valueAfterCategoryDiscount * coupon.discountPercentage) / 100, coupon.maximumDiscount)
        : 0;

    return {
        originalCartValue: data.originalCartValue,
        totalCategoryDiscount: data.totalCategoryDiscount,
        categorySummary: data.categorySummary,
        couponDiscount,
        couponApplied,
        finalPayableAmount: valueAfterCategoryDiscount - couponDiscount,
        products: data.products,
    };
}

const result = CartCalculate(cart , categoryDiscounts , coupon);
console.log("q13" , result);