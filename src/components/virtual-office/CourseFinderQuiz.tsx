"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  interestOptions,
  codingComfortOptions,
  courseFinderProfiles,
  type InterestTag,
  type CodingComfort,
} from "@/lib/data/course-finder";
import { getCourseBySlug } from "@/lib/data/courses";
import { cn } from "@/lib/utils";
import CounselorGuide from "@/components/virtual-office/CounselorGuide";
import WhatsAppQuickLink from "@/components/layout/WhatsAppQuickLink";

type Step = "interests" | "coding" | "results";

interface Recommendation {
  slug: string;
  score: number;
  reasons: string[];
}

function computeRecommendations(
  selectedInterests: InterestTag[],
  comfort: CodingComfort
): Recommendation[] {
  const results: Recommendation[] = courseFinderProfiles.map((profile) => {
    let score = 0;
    const reasons: string[] = [];

    const matchedTags = profile.tags.filter((t) => selectedInterests.includes(t));
    score += matchedTags.length * 2;
    if (matchedTags.length > 0) {
      const labels = matchedTags
        .map((t) => interestOptions.find((o) => o.id === t)?.label.toLowerCase())
        .filter(Boolean);
      reasons.push(`Matches your interest in ${labels.join(" and ")}.`);
    }

    if (comfort === "avoid") {
      if (profile.codingLevel === "none" || profile.codingLevel === "light") {
        score += 2;
        if (profile.whyLowCoding) reasons.push(profile.whyLowCoding);
      } else if (profile.codingLevel === "heavy") {
        score -= 3;
      } else {
        score -= 1;
      }
    } else if (comfort === "love") {
      if (profile.codingLevel === "heavy") {
        score += 2;
      } else if (profile.codingLevel === "light" || profile.codingLevel === "none") {
        score -= 1;
      }
    }

    reasons.push(profile.whyGood);

    return { slug: profile.slug, score, reasons };
  });

  return results.sort((a, b) => b.score - a.score).slice(0, 3);
}

export default function CourseFinderQuiz() {
  const [step, setStep] = useState<Step>("interests");
  const [selectedInterests, setSelectedInterests] = useState<InterestTag[]>([]);
  const [comfort, setComfort] = useState<CodingComfort | null>(null);

  const recommendations = useMemo(() => {
    if (!comfort) return [];
    return computeRecommendations(selectedInterests, comfort);
  }, [selectedInterests, comfort]);

  function toggleInterest(id: InterestTag) {
    setSelectedInterests((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : prev.length < 3
          ? [...prev, id]
          : prev
    );
  }

  function reset() {
    setStep("interests");
    setSelectedInterests([]);
    setComfort(null);
  }

  return (
    <div className="rounded-3xl border border-border-soft bg-white p-6 shadow-xl sm:p-10">
      {step === "interests" ? (
        <div>
          <CounselorGuide message="Hi, I'm Norah — your virtual counselor! Let's find your perfect course. First, tell me what you're interested in." />
          <p className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <Sparkles className="h-4 w-4" /> Step 1 of 2
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-navy-900">
            What are you interested in?
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Pick up to 3 — for example, &ldquo;I don&apos;t like coding but I&apos;m interested
            in analytics and AI.&rdquo;
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {interestOptions.map((option) => {
              const active = selectedInterests.includes(option.id);
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => toggleInterest(option.id)}
                  className={cn(
                    "rounded-xl border p-4 text-left transition-colors",
                    active
                      ? "border-amber-500 bg-amber-100"
                      : "border-border-soft bg-white hover:border-navy-300"
                  )}
                >
                  <p className="font-heading text-sm font-bold text-navy-900">{option.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{option.helper}</p>
                </button>
              );
            })}
          </div>
          <Button
            size="lg"
            disabled={selectedInterests.length === 0}
            onClick={() => setStep("coding")}
            className="mt-8 w-full bg-navy-900 hover:bg-navy-800 sm:w-auto"
          >
            Continue <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      ) : null}

      {step === "coding" ? (
        <div>
          <CounselorGuide message="Good picks! One more question so I can narrow this down properly — how do you feel about coding?" />
          <p className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <Sparkles className="h-4 w-4" /> Step 2 of 2
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-navy-900">
            How do you feel about coding?
          </h2>
          <div className="mt-6 grid gap-3">
            {codingComfortOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setComfort(option.id);
                  setStep("results");
                }}
                className="rounded-xl border border-border-soft bg-white p-4 text-left font-medium text-navy-900 transition-colors hover:border-amber-400 hover:bg-amber-50"
              >
                {option.label}
              </button>
            ))}
          </div>
          <Button variant="ghost" onClick={() => setStep("interests")} className="mt-6">
            Back
          </Button>
        </div>
      ) : null}

      {step === "results" ? (
        <div>
          <CounselorGuide message="Here's what I'd recommend based on your answers. Want to talk it through with a real counselor and grab a free demo class? I can connect you on WhatsApp right now." />
          <p className="flex items-center gap-2 text-sm font-semibold text-amber-600">
            <Sparkles className="h-4 w-4" /> Your Matches
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold text-navy-900">
            Here&apos;s what fits you best
          </h2>
          <div className="mt-6 space-y-4">
            {recommendations.map((rec, i) => {
              const course = getCourseBySlug(rec.slug);
              if (!course) return null;
              return (
                <div
                  key={rec.slug}
                  className="rounded-2xl border border-border-soft bg-navy-50 p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="border-none bg-amber-500 text-navy-950">
                      #{i + 1} Match
                    </Badge>
                    <h3 className="font-heading text-lg font-bold text-navy-900">
                      {course.shortName}
                    </h3>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-navy-800">
                    {rec.reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="sm" className="mt-4 bg-navy-900 hover:bg-navy-800">
                    <Link href={`/courses/${course.slug}`}>
                      View Course <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="mt-8 rounded-2xl bg-navy-900 p-5 text-white sm:p-6">
            <h3 className="font-heading text-lg font-bold">
              Ready for the next step?
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Talk to a real counselor for free — and ask about booking a free demo class before
              you enroll.
            </p>
            <WhatsAppQuickLink
              message={`Hi Future Optima! I just used the Virtual Office course finder and got matched with: ${recommendations
                .map((rec) => getCourseBySlug(rec.slug)?.shortName)
                .filter(Boolean)
                .join(", ")}. I'd like free counselling and to book a free demo class.`}
              className="mt-4 gap-2 px-6 py-3 text-sm font-semibold"
              iconClassName="h-4 w-4"
              label="Get Free Counselling on WhatsApp"
            />
          </div>
          <Button variant="outline" onClick={reset} className="mt-6">
            <RotateCcw className="mr-1 h-4 w-4" /> Start Over
          </Button>
        </div>
      ) : null}
    </div>
  );
}
