export const courseFlatOffer = {
  label: "Flat ₹5,000 Off",
  detail: "Enrol this month — flat ₹5,000 off on courses below ₹75,000",
  badgeText: "₹5,000 Off",
};

export const diplomaOffer = {
  label: "₹10,000 Off",
  detail: "Enrol this month — ₹10,000 off on the Advanced Diploma",
  badgeText: "₹10,000 Off",
};

export function getCourseOffer(slug: string) {
  if (slug === "advanced-diploma-ai-systems-engineering") return diplomaOffer;
  return courseFlatOffer;
}
