// demo-data.ts
export type MasonryItem = {
  id: string;
  width: number;
  height: number;
  aspectRatio: number;
  color: string;
};

const colors = [
  "#3b82f6", // blue-500
  "#16a34a", // green-600
  "#f59e42", // orange-400
  "#e11d48", // rose-600
  "#a21caf", // purple-700
];

export function generateDemoData(count: number): MasonryItem[] {
  return Array.from({ length: count }).map((_, i) => {
    const width = 160;
    const heights = [140, 180, 210, 260, 300, 340];
    const height = heights[Math.floor(Math.random() * heights.length)];
    return {
      id: String(i + 1),
      width,
      height,
      aspectRatio: width / height,
      color: colors[i % colors.length],
    };
  });
}

export const demoData: MasonryItem[] = generateDemoData(30);
