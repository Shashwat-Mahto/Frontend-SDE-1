/*
 * Q2. Group transactions by user
 * Level: SDE-1 | Topics: reduce
 *
 * const transactions = [
 *   { id: 1, userId: 101, amount: 500,  type: "credit" },
 *   { id: 2, userId: 102, amount: 300,  type: "debit" },
 *   { id: 3, userId: 101, amount: 1000, type: "debit" },
 *   { id: 4, userId: 103, amount: 700,  type: "credit" },
 *   { id: 5, userId: 102, amount: 200,  type: "credit" },
 *   { id: 6, userId: 101, amount: 400,  type: "credit" },
 * ];
 *
 * Produce:
 * {
 *   101: { totalCredit: 900, totalDebit: 1000, balance: -100 },
 *   102: { totalCredit: 200, totalDebit: 300,  balance: -100 },
 *   103: { totalCredit: 700, totalDebit: 0,    balance: 700 }
 * }
 */
