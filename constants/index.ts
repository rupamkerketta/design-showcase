import { startOfWeek } from "date-fns";

export const PALETTE = {
  baseGray05: "#E5E2DC",
  baseGray80: "#30302E",
  background: "#F1EEE8",
};

export const BACKGROUND_COLOR = "#3e3649";
export const ACTIVE_COLOR = "#66e070";

// Calculate the data for the Monday three weeks ago
const mondayFromThreeWeeksAgo = startOfWeek(
  new Date().getTime() - 86_400_000 * 21,
  {
    weekStartsOn: 1, // 0 = Sunday, 1 = Monday
  }
);

// Generate data for a 7x7 grid (7 weeks, 7 days each)
export const data = new Array(7).fill(null).map((_, weekIndex) => {
  return new Array(7).fill(null).map((_, dayIndex) => {
    // Calculate the date for each day in the grid
    const day = new Date(
      mondayFromThreeWeeksAgo.getTime() +
        86_400_000 * (weekIndex * 7 + dayIndex)
    );

    // Generate a random value for each day
    const value = Math.random();

    return {
      day,
      value,
    };
  });
});
