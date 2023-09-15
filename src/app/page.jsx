import RightBar from "@/components/RightBar";
import MainFlow from "@/components/Main";

export default function Home() {
  return (
    <div className="flex flex-1 gap-8 ">
      <MainFlow />
      <RightBar />
    </div>
  );
}
