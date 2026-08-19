export interface PlacementPhoto {
  src: string;
  alt: string;
}

// Real placement announcement posters shared by Future Optima — each poster
// already carries the student's name, course and hiring company as part of
// the graphic itself, so no separate (and potentially mismatched) caption
// data is layered on top.
export const placementPhotos: PlacementPhoto[] = Array.from({ length: 20 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/placements/wall/placement-${n}.jpeg`,
    alt: "Future Optima IT Solutions student placement announcement — Kochi, Kerala",
  };
});
