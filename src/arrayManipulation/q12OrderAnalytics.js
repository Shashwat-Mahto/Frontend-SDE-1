/*
 * Q12. Order analytics module
 * Level: SDE-1 | Topics: reduce + filter + map
 *
 * Problem statement:
 * You are building an order analytics module for an e-commerce application.
 *
 * const orders = [
 *   { id: 1, customer: "Aman",  amount: 2500, status: "delivered", items: 3 },
 *   { id: 2, customer: "Riya",  amount: 1200, status: "cancelled", items: 2 },
 *   { id: 3, customer: "Karan", amount: 4500, status: "delivered", items: 5 },
 *   { id: 4, customer: "Neha",  amount: 3000, status: "pending",   items: 4 },
 *   { id: 5, customer: "Rahul", amount: 1800, status: "delivered", items: 2 },
 *   { id: 6, customer: "Priya", amount: 5000, status: "cancelled", items: 6 },
 *   { id: 7, customer: "Arjun", amount: 2200, status: "delivered", items: 3 }
 * ];
 *
 * Requirements:
 * Implement analyzeOrders(orders) to return:
 *   1. Total number of orders.
 *   2. Count of delivered, cancelled and pending orders.
 *   3. Total revenue from delivered orders only.
 *   4. Average order value of delivered orders.
 *   5. Find the highest-value delivered order.
 *   6. Return customer details for delivered orders with amount greater than ₹2,000,
 *      using filter() + map().
 *
 * The mapped objects should contain only:
 *   { id, customer, amount }
 *
 * Expected output:
 * {
 *   totalOrders: 7,
 *   statusSummary: {
 *     delivered: 4,
 *     cancelled: 2,
 *     pending: 1
 *   },
 *   totalRevenue: 11000,
 *   averageOrderValue: 2750,
 *   highestValueOrder: {
 *     id: 3,
 *     customer: "Karan",
 *     amount: 4500,
 *     status: "delivered",
 *     items: 5
 *   },
 *   highValueDeliveredOrders: [
 *     { id: 1, customer: "Aman",  amount: 2500 },
 *     { id: 3, customer: "Karan", amount: 4500 },
 *     { id: 7, customer: "Arjun", amount: 2200 }
 *   ]
 * }
 */


const orders = [
  { id: 1, customer: "Aman", amount: 2500, status: "delivered", items: 3 },
  { id: 2, customer: "Riya", amount: 1200, status: "cancelled", items: 2 },
  { id: 3, customer: "Karan", amount: 4500, status: "delivered", items: 5 },
  { id: 4, customer: "Neha", amount: 3000, status: "pending", items: 4 },
  { id: 5, customer: "Rahul", amount: 1800, status: "delivered", items: 2 },
  { id: 6, customer: "Priya", amount: 5000, status: "cancelled", items: 6 },
  { id: 7, customer: "Arjun", amount: 2200, status: "delivered", items: 3 }
];

function analyzeOrders(orders){

    const result = orders?.reduce((acc , order)=>{
        const status = order?.status;
        acc.totalOrders+=1;
        acc.statusSummary[status]+=1;

        if(status==="delivered") acc.totalRevenue+=order?.amount;

        if(order.status === "delivered" && (!acc.highestOrderValue || order.amount > acc.highestOrderValue.amount)){
            acc.highestOrderValue = order;
        }
        return acc;

    } , {
        totalOrders:0,
        statusSummary:{
            delivered:0,
            cancelled:0,
            pending:0,
        },
        totalRevenue:0,
        highestOrderValue:null
    })

    const hihighValueDeliveredOrders = orders?.filter((order) =>( order.status === "delivered" && order.amount>2000))
    ?.sort((a , b) => b.amount - a.amount)?.map((order) => ({id:order.id , customer:order.customer ,amount:order.amount }))

    const totalDeliveredOrders = orders?.filter((order) => order.status === "delivered")?.length;
    const averageOrderValue = totalDeliveredOrders?  orders?.filter((order) => order.status === "delivered")?.reduce((acc , order)=>{
        return acc+=order.amount;
    } , 0)/totalDeliveredOrders : 0;
    return {
        ...result, 
        hihighValueDeliveredOrders,
        averageOrderValue
    };
}

const result = analyzeOrders(orders);
console.log("q12" , result);


