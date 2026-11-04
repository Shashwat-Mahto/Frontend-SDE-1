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

const students = [
  { id: 1, name: "Rahul", marks: 85, status: "active" },
  { id: 2, name: "Priya", marks: 92, status: "active" },
  { id: 3, name: "Amit", marks: 65, status: "inactive" },
  { id: 4, name: "Neha", marks: 78, status: "active" },
  { id: 5, name: "Karan", marks: 95, status: "active" },
];

function transform(students) {
  const data = students
    ?.filter((student) => student.status === "active")
    ?.sort((a, b) => b.marks - a.marks)
    .slice(0, 3)
    ?.map(({status , ...rest}) => ({
      ...rest,
      grade: rest.marks >= 90 ? "A" : rest.marks >= 80 ? "B" : "C",
    }));

    const averageMarks =  data?.length ? Number((data?.reduce((acc , curr) => acc+=curr.marks , 0)/data.length ).toFixed(2)): 0;
  
    return {
        students: data,
        averageMarks,
    }
}

const result = transform(students);
console.log("q10" , result);

