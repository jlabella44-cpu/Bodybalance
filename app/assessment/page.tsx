import type { Metadata } from "next";
import AssessmentQuiz from "@/components/assessment/AssessmentQuiz";

export const metadata: Metadata = {
  title: "Hormone Symptom Assessment | Body Balance Lawrence, KS",
  description:
    "Take our free 3-minute hormone symptom quiz to find out if BHRT, weight management, or other hormone therapy could help you. Get a personalized results report.",
};

export default function AssessmentPage() {
  return <AssessmentQuiz />;
}
