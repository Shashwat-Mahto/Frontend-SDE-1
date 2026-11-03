/*
 * Q5. Find the top 3 performing employees
 * Level: SDE-1 | Topics: filter + map + sort
 *
 * const employees = [
 *   { id: 1, name: "A", performance: 85, department: "Engineering" },
 *   { id: 2, name: "B", performance: 95, department: "HR" },
 *   { id: 3, name: "C", performance: 90, department: "Engineering" },
 *   { id: 4, name: "D", performance: 75, department: "Sales" },
 *   { id: 5, name: "E", performance: 98, department: "Engineering" },
 *   { id: 6, name: "F", performance: 88, department: "Sales" },
 * ];
 *
 * Requirements:
 *   - Only Engineering employees.
 *   - Performance must be at least 85.
 *   - Sort by performance descending.
 *   - Return the top 3.
 *   - Return only id, name, and performance.
 *
 * Expected output:
 * [
 *   { id: 5, name: "E", performance: 98 },
 *   { id: 3, name: "C", performance: 90 },
 *   { id: 1, name: "A", performance: 85 }
 * ]
 */

const employees = [
  { id: 1, name: "A", performance: 85, department: "Engineering" },
  { id: 2, name: "B", performance: 95, department: "HR" },
  { id: 3, name: "C", performance: 90, department: "Engineering" },
  { id: 4, name: "D", performance: 75, department: "Sales" },
  { id: 5, name: "E", performance: 98, department: "Engineering" },
  { id: 6, name: "F", performance: 88, department: "Sales" },
];

function transform(arr = []) {
  const result = arr.filter(
    (emp) => emp?.department === "Engineering" && emp?.performance >= 85,
  ).sort((a , b) => b.performance - a.performance).map((emp) => ({id:emp.id , name:emp.name , performance:emp.performance})).slice(0,3);

  return result;
}

const result = transform(employees);
console.log("q5" , result);

