import type {ProgramVariant} from "@/components/program-card";

export type DemoGoal = "strength" | "fitness" | "movement";
export type DemoLevel = "beginner" | "intermediate" | "all";

export type DemoProgram = {
  id: ProgramVariant;
  number: string;
  posterLines: readonly [string, string];
  goal: DemoGoal;
  level: DemoLevel;
  days: 3 | 4 | 5;
  weeks: number;
};

// Portfolio-only mock catalog. None of these entries represents a purchasable plan.
export const demoPrograms: ReadonlyArray<DemoProgram> = [
  {id: "strength", number: "01", posterLines: ["STRENGTH", "FOUNDATIONS"], goal: "strength", level: "beginner", days: 3, weeks: 8},
  {id: "upper", number: "02", posterLines: ["UPPER", "LOWER"], goal: "strength", level: "intermediate", days: 4, weeks: 8},
  {id: "home", number: "03", posterLines: ["HOME", "TRAINING"], goal: "fitness", level: "beginner", days: 3, weeks: 6},
  {id: "ppl", number: "04", posterLines: ["PUSH PULL", "LEGS"], goal: "strength", level: "intermediate", days: 5, weeks: 10},
  {id: "conditioning", number: "05", posterLines: ["FULL BODY", "CONDITIONING"], goal: "fitness", level: "beginner", days: 3, weeks: 6},
  {id: "mobility", number: "06", posterLines: ["MOVE", "BETTER"], goal: "movement", level: "all", days: 4, weeks: 4}
];
