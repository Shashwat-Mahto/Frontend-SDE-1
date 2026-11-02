/*
 * Q10. Build a dynamic table data processor
 * Level: SDE-1 | Topics: filter + sort + map + reduce
 *
 * const students = [
 *   { id: 1, name: "Rahul", marks: 85, status: "active" },
 *   { id: 2, name: "Priya", marks: 92, status: "active" },
 *   { id: 3, name: "Amit",  marks: 65, status: "inactive" },
 *   { id: 4, name: "Neha",  marks: 78, status: "active" },
 *   { id: 5, name: "Karan", marks: 95, status: "active" },
 * ];
 *
 * Requirements:
 *   - Filter only active students.
 *   - Sort by marks descending.
 *   - Add a grade field: A for 90+, B for 80+, C otherwise.
 *   - Return only the top 3.
 *   - Calculate the average marks of those top 3 students.
 *
 * Expected output:
 * {
 *   students: [
 *     { id: 5, name: "Karan", marks: 95, grade: "A" },
 *     { id: 2, name: "Priya", marks: 92, grade: "A" },
 *     { id: 1, name: "Rahul", marks: 85, grade: "B" },
 *   ],
 *   averageMarks: 90.67   // (95 + 92 + 85) / 3
 * }
 */
