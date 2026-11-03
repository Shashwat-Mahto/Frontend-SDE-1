/*
 * Q7. Build a notification grouping system
 * Level: SDE-1 | Topics: filter + reduce
 *
 * const notifications = [
 *   { id: 1, type: "message", read: false, timestamp: 100 },
 *   { id: 2, type: "like",    read: true,  timestamp: 200 },
 *   { id: 3, type: "message", read: false, timestamp: 300 },
 *   { id: 4, type: "follow",  read: false, timestamp: 400 },
 *   { id: 5, type: "like",    read: false, timestamp: 500 },
 * ];
 *
 * Requirements:
 *   - Ignore read notifications.
 *   - Group unread notifications by type.
 *   - Return the count and latest timestamp for each type.
 *
 * Expected output:
 * {
 *   message: { count: 2, latestTimestamp: 300 },
 *   follow:  { count: 1, latestTimestamp: 400 },
 *   like:    { count: 1, latestTimestamp: 500 }
 * }
 */


const notifications = [
  { id: 1, type: "message", read: false, timestamp: 100 },
  { id: 2, type: "like", read: true, timestamp: 200 },
  { id: 3, type: "message", read: false, timestamp: 300 },
  { id: 4, type: "follow", read: false, timestamp: 400 },
  { id: 5, type: "like", read: false, timestamp: 500 },
];

function transform(arr = []){
 
    const result = arr.filter((item) => !item.read)
    .reduce((acc , item) => {
        const key = item.type;

        if(!acc[key]){
            acc[key] = {count : 0 , totalTimestamp:0};
        }

        acc[key] = {count: acc[key].count+1 , totalTimestamp:item.timestamp}

        return acc;

    } , {})

   return result;
    
}

const result = transform(notifications)
console.log("q7" , result);

