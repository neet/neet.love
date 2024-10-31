import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex min-h-full w-full items-center justify-center">
        <Profile />
      </div>
    </div>
  );
}
