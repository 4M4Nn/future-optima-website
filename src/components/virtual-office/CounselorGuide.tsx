import RoamingRobot from "@/components/motion/RoamingRobot";

export default function CounselorGuide({ message }: { message: string }) {
  return (
    <div className="mb-6 flex items-start gap-3 rounded-2xl bg-navy-50 p-4">
      <div className="shrink-0">
        <RoamingRobot className="h-14 w-14" />
      </div>
      <div className="relative rounded-xl rounded-tl-none bg-white px-4 py-3 shadow-sm">
        <p className="text-sm font-medium text-navy-800">{message}</p>
      </div>
    </div>
  );
}
