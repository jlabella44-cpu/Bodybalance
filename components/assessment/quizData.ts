export interface Question {
  id: number;
  text: string;
  options: { label: string; value: number; tags: string[] }[];
}

export interface ResultProfile {
  heading: string;
  summary: string;
  services: string[];
  cta: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "How would you describe your energy levels most days?",
    options: [
      { label: "Great — I feel energized", value: 0, tags: [] },
      { label: "Moderate — I get tired in the afternoon", value: 1, tags: ["fatigue"] },
      { label: "Low — I'm tired most of the day", value: 2, tags: ["fatigue"] },
      { label: "Very low — I'm exhausted even after sleeping", value: 3, tags: ["fatigue", "sleep"] },
    ],
  },
  {
    id: 2,
    text: "How is your sleep quality?",
    options: [
      { label: "I sleep well and wake refreshed", value: 0, tags: [] },
      { label: "I fall asleep fine but wake up tired", value: 1, tags: ["sleep"] },
      { label: "I have trouble falling or staying asleep", value: 2, tags: ["sleep"] },
      { label: "My sleep is consistently poor", value: 3, tags: ["sleep"] },
    ],
  },
  {
    id: 3,
    text: "How often do you experience mood changes, irritability, or anxiety?",
    options: [
      { label: "Rarely — my mood is generally stable", value: 0, tags: [] },
      { label: "Occasionally", value: 1, tags: ["mood"] },
      { label: "Frequently", value: 2, tags: ["mood"] },
      { label: "Almost daily — it's affecting my relationships", value: 3, tags: ["mood"] },
    ],
  },
  {
    id: 4,
    text: "Has your libido or interest in sex changed noticeably?",
    options: [
      { label: "No change — I feel normal", value: 0, tags: [] },
      { label: "Slightly lower than before", value: 1, tags: ["libido"] },
      { label: "Significantly reduced", value: 2, tags: ["libido"] },
      { label: "Very low or absent", value: 3, tags: ["libido", "sexual-health"] },
    ],
  },
  {
    id: 5,
    text: "How is your ability to concentrate and think clearly?",
    options: [
      { label: "Sharp — no issues", value: 0, tags: [] },
      { label: "Occasionally foggy", value: 1, tags: ["cognition"] },
      { label: "Frequent brain fog", value: 2, tags: ["cognition"] },
      { label: "Significantly impaired", value: 3, tags: ["cognition"] },
    ],
  },
  {
    id: 6,
    text: "Have you noticed weight gain that's difficult to manage?",
    options: [
      { label: "No — my weight is stable", value: 0, tags: [] },
      { label: "Slight gain but manageable", value: 1, tags: ["weight"] },
      { label: "Noticeable gain despite diet and exercise", value: 2, tags: ["weight"] },
      { label: "Significant unexplained weight gain", value: 3, tags: ["weight", "weight-management"] },
    ],
  },
  {
    id: 7,
    text: "Do you experience hot flashes, night sweats, or temperature sensitivity?",
    options: [
      { label: "No", value: 0, tags: [] },
      { label: "Occasionally", value: 1, tags: ["hormones"] },
      { label: "Frequently", value: 2, tags: ["hormones", "bhrt"] },
      { label: "Daily — it disrupts my life", value: 3, tags: ["hormones", "bhrt"] },
    ],
  },
  {
    id: 8,
    text: "How would you describe your motivation and drive?",
    options: [
      { label: "High — I feel motivated most days", value: 0, tags: [] },
      { label: "Moderate — I get things done but lack enthusiasm", value: 1, tags: ["mood"] },
      { label: "Low — I struggle to stay motivated", value: 2, tags: ["mood", "fatigue"] },
      { label: "Very low — I feel flat or disengaged", value: 3, tags: ["mood", "fatigue"] },
    ],
  },
  {
    id: 9,
    text: "Have you had your hormone levels tested in the last year?",
    options: [
      { label: "Yes — and everything was normal", value: 0, tags: [] },
      { label: "Yes — and there were concerns", value: 1, tags: ["labs"] },
      { label: "No — I haven't been tested", value: 2, tags: ["labs"] },
      { label: "I don't know what that involves", value: 2, tags: ["labs"] },
    ],
  },
  {
    id: 10,
    text: "How long have you been experiencing these symptoms?",
    options: [
      { label: "Less than 3 months", value: 1, tags: [] },
      { label: "3–12 months", value: 2, tags: [] },
      { label: "1–3 years", value: 3, tags: [] },
      { label: "More than 3 years", value: 3, tags: [] },
    ],
  },
  {
    id: 11,
    text: "What is your biological sex?",
    options: [
      { label: "Female", value: 0, tags: ["female"] },
      { label: "Male", value: 0, tags: ["male"] },
      { label: "Prefer not to say", value: 0, tags: [] },
    ],
  },
  {
    id: 12,
    text: "What matters most to you right now?",
    options: [
      { label: "More energy and mental clarity", value: 0, tags: ["fatigue", "cognition"] },
      { label: "Better sleep and mood", value: 0, tags: ["sleep", "mood"] },
      { label: "Losing weight and improving body composition", value: 0, tags: ["weight-management"] },
      { label: "Restoring sex drive and intimacy", value: 0, tags: ["libido", "sexual-health"] },
    ],
  },
];

export function scoreQuiz(answers: Record<number, number>): ResultProfile {
  const total = Object.values(answers).reduce((s, v) => s + v, 0);
  const max = questions.reduce((s, q) => s + Math.max(...q.options.map((o) => o.value)), 0);
  const pct = (total / max) * 100;

  if (pct < 20) {
    return {
      heading: "Your Hormones Appear Balanced",
      summary:
        "Your symptom score is low, which is great news. That said, hormone levels shift over time — especially around perimenopause, menopause, or andropause. A baseline lab panel can give you a data-backed snapshot of where you stand.",
      services: ["Lab Testing & Analysis"],
      cta: "Get a Baseline Hormone Panel",
    };
  }

  if (pct < 45) {
    return {
      heading: "Mild Hormonal Imbalance Detected",
      summary:
        "Your symptoms suggest your hormones may be starting to shift. You're likely in a transitional phase — and catching this early makes treatment much more effective. A comprehensive lab panel will reveal exactly what's going on.",
      services: ["Lab Testing & Analysis", "BHRT (Bioidentical Hormone Therapy)"],
      cta: "Book a Free Consultation",
    };
  }

  if (pct < 70) {
    return {
      heading: "Moderate Hormonal Imbalance",
      summary:
        "Your symptoms are consistent with a meaningful hormonal imbalance. Fatigue, mood changes, sleep disruption, and other signs point to hormone levels that likely need attention. A personalized BHRT protocol could make a significant difference.",
      services: ["BHRT (Bioidentical Hormone Therapy)", "Lab Testing & Analysis"],
      cta: "Start with a Free Consultation",
    };
  }

  return {
    heading: "Significant Hormonal Imbalance",
    summary:
      "Your symptom profile indicates a significant hormonal imbalance that's affecting your daily quality of life. The good news: this is highly treatable. Our team can identify the root cause and build a protocol to get you feeling like yourself again.",
    services: [
      "BHRT (Bioidentical Hormone Therapy)",
      "Lab Testing & Analysis",
      "Medical Weight Management (if applicable)",
    ],
    cta: "Book Your Free Consultation Today",
  };
}
