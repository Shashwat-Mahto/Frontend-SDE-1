/*
 * Q9. Build a leaderboard
 * Level: SDE-1 | Topics: reduce + sort + map
 *
 * const matches = [
 *   { player: "Rahul", score: 50 },
 *   { player: "Priya", score: 80 },
 *   { player: "Rahul", score: 30 },
 *   { player: "Amit",  score: 90 },
 *   { player: "Priya", score: 20 },
 *   { player: "Amit",  score: 10 },
 * ];
 *
 * Expected output:
 * [
 *   { player: "Amit",  totalScore: 100, rank: 1 },
 *   { player: "Priya", totalScore: 100, rank: 2 },
 *   { player: "Rahul", totalScore: 80,  rank: 3 },
 * ]
 *
 * For tied scores, use alphabetical player order as the tie-breaker.
 */
