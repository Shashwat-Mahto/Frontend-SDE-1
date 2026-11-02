/*
 * Q4. Transform nested API data
 * Level: SDE-1 | Topics: map + reduce
 *
 * const users = [
 *   {
 *     id: 1,
 *     name: "Rahul",
 *     posts: [
 *       { id: 101, likes: 20, comments: 5 },
 *       { id: 102, likes: 30, comments: 10 },
 *     ],
 *   },
 *   {
 *     id: 2,
 *     name: "Priya",
 *     posts: [
 *       { id: 103, likes: 50, comments: 15 },
 *     ],
 *   },
 * ];
 *
 * Return:
 * [
 *   { id: 1, name: "Rahul", totalLikes: 50, totalComments: 15, postCount: 2 },
 *   { id: 2, name: "Priya", totalLikes: 50, totalComments: 15, postCount: 1 }
 * ]
 */
