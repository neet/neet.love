import { Metadata } from "next";

import { Profile } from "@/components/Profile";

export const metadata: Metadata = {
  title: "About Me",
  description: "a little about me",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex min-h-full w-full items-center justify-center">
        <Profile />
      </div>
    </div>
  );
}
