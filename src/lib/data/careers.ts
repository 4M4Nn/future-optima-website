import type { JobOpening } from "@/types";

export const jobOpenings: JobOpening[] = [
  {
    slug: "cloud-computing-devops-tutor",
    title: "Cloud Computing & DevOps Tutor",
    type: "Faculty",
    experience: "1–2 years",
    location: "Chembumukku, Kochi, Kerala (On-Campus)",
    postedAt: "2026-08-20",
    skills: [
      "AWS, Azure or GCP — core services: compute, storage, networking, IAM",
      "Docker and container fundamentals",
      "Kubernetes basics — deployments, services, scaling",
      "CI/CD pipelines — Jenkins, GitHub Actions or GitLab CI",
      "Infrastructure as Code — Terraform or equivalent",
      "Linux administration and shell scripting",
      "Git and version control workflows",
      "Monitoring and logging tools — Prometheus/Grafana, CloudWatch or similar",
      "Basic Python or Bash scripting for automation",
    ],
    responsibilities: [
      "Deliver structured, hands-on Cloud Computing & DevOps training to student batches",
      "Design lab exercises and real-world project briefs around cloud deployment and CI/CD pipelines",
      "Mentor students through certification-aligned learning paths (AWS/Azure fundamentals)",
      "Support the placement cell with mock interviews and technical assessments for DevOps-track students",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return jobOpenings.find((j) => j.slug === slug);
}
