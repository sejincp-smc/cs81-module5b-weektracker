// --- myWeek data ---

const myWeek = [
  { day: "Monday", activity: "Jogging", category: "physical", hoursSpent: 1, enjoyment: 7, timeOfDay: "morning" },
  { day: "Tuesday", activity: "Drawing", category: "creative", hoursSpent: 2, enjoyment: 9, timeOfDay: "afternoon" },
  { day: "Wednesday", activity: "Hiking", category: "physical", hoursSpent: 1, enjoyment: 8, timeOfDay: "morning" },
  { day: "Thursday", activity: "Gym", category: "physical", hoursSpent: 1, enjoyment: 3, timeOfDay: "morning" },
  { day: "Friday", activity: "Dinner with friends", category: "social", hoursSpent: 8, enjoyment: 8, timeOfDay: "evening" },
  { day: "Saturday", activity: "Yoga", category: "physical", hoursSpent: 2, enjoyment: 10, timeOfDay: "morning" },
  { day: "Sunday", activity: "Reading", category: "creative", hoursSpent: 2, enjoyment: 9, timeOfDay: "afternoon" }
];

// --- Make Predictions ---

// Which activity will have the highest enjoyment?: Yoga
// What category will dominate your week?: psysical
// What patterns might exist around time of day?: The activities with the enjoyment level of 8 and over are Drawing, Hiking, Dinner with friends, Yoga and Reading.

// --- Write Analysis Functions ---

// My morning routine
const morningActivity = myWeek.filter(entry => entry.timeOfDay === "morning");
console.log("Your morning activities are", morningActivity);

// Activity with High enjoyment over 8
const highEnjoyment = myWeek.filter(entry => entry.enjoyment >= 8);
console.log("Activities with High enjoyment: ", highEnjoyment);

// Highest enjoyment
const highestEnjoyment = myWeek.reduce((entry1, entry2) => {
  if (entry2.enjoyment > entry1.enjoyment) {
    return entry2;
  } else {
    return entry1;
  }
})
console.log("The most enjoyable activity is:", highestEnjoyment.activity);



// --- Create a Custom Higher-Order Function ---

function avgHoursCreative() {
  // filter the creative category
  const creativeOnly = myWeek.filter(entry => entry.category === "creative");
  // sum of hourSpent
  const totalHours = creativeOnly.reduce((sum, entry) => sum + entry.hoursSpent, 0)
  // average calculation
  let average;
  if (creativeOnly.length > 0) {
    average = totalHours / creativeOnly.length
  } else {
    average = 0;
  }

  console.log("My average hour for creative activity is: " + average)
}