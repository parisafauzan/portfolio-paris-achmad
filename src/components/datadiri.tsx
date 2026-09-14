import AIAgentsCard from "../components/bento";
import ProfileDropdown from "../components/kokonutui/profile-dropdown";
// import Toolsloop from "../components/Logo"; // Import Toolsloop component
import SocialButton from "./kokonutui/social-button";
import AppleActivityCard from "./kokonutui/apple-activity-card";
import LoopKemampuan from "./loopkemampuan";
import dynamic from "next/dynamic";
const Toolsloop = dynamic(() => import("./Logo"), { ssr: false });
export default function Datadiri() {
  return (
    <div>
      {/* PROFILE SECTION */}
      <section
        id="profile"
        className="relative w-full pt-20 flex items-center justify-center px-6 pb-20"
      >
        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Kiri (card + dropdown) */}
          <div className="flex flex-col items-center gap-4">
            {/* Card */}
            <div className="bg-neutral-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center w-full">
              <img
                src="/Foto.png"
                alt="Paris Achmad Fauzan"
                className="w-40 h-40 rounded-xl object-cover mb-4"
              />
              <span className="text-sm text-green-400 mb-2">
                ● available for work
              </span>
              <h3 className="text-2xl font-bold">Paris Achmad Fauzan</h3>
              <p className="text-neutral-400 text-sm mb-6">
                Full-Stack & AI Developer
              </p>

              {/* Contact Button */}
              <SocialButton />

              
            </div>

            {/* Dropdown di luar card →*/}
            <ProfileDropdown />
            <div className="w-full ">

            <AppleActivityCard />
            </div>
          </div>

          {/* Kanan */}
          <div className="col-span-2 flex flex-col gap-6">
            <AIAgentsCard />

            {/* Tools */}
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "Python",
                "TypeScript",
                // "Next.js",
                "React",
                "TailwindCSS",
                "Postgres",
                "MySQL",
                "Docker",
                "AWS",
                "Dart",
                "C#",
                "Flutter",
                "Git",
                "Figma",
                "Postman",
                "PHP",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-neutral-800 rounded-lg text-sm font-medium hover:bg-neutral-700 transition"
                >
                  {tool}
                </span>
              ))}
              {/* <Toolsloop /> */}
              <LoopKemampuan />
            </div>

            {/* Pengalaman */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="bg-neutral-900 p-4 rounded-lg flex justify-between items-center">
                <span className="font-medium">Web Developer</span>
                <span className="text-sm text-neutral-400">
                  PT Graha Sarana Duta — Oct 2025 – Feb 2026
                </span>
              </div>
              <div className="bg-neutral-900 p-4 rounded-lg flex justify-between items-center">
                <span className="font-medium">Videografer & Fotografer</span>
                <span className="text-sm text-neutral-400">
                  Fine.Potret — Aug 2022 – Present
                </span>
              </div>
              {/* <div className="bg-neutral-900 p-4 rounded-lg flex justify-between items-center">
                <span className="font-medium">Asisten Laboratorium</span>
                <span className="text-sm text-neutral-400">
                  Lab Pengolahan Citra Digital — Mar–Jun 2025
                </span>
              </div> */}
              <div className="bg-neutral-900 p-4 rounded-lg flex justify-between items-center">
                <span className="font-medium">Asisten Laboratorium</span>
                <span className="text-sm text-neutral-400">
                  Lab Pemrograman Dasar — Sep–Des 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
