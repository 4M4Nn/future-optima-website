import type { JobOpening } from "@/types";

export const jobOpenings: JobOpening[] = [];

export function getJobBySlug(slug: string) {
  return jobOpenings.find((j) => j.slug === slug);
}
