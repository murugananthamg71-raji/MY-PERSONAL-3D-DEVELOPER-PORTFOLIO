import ResumeView from "./resume-view";
import { config } from "@/data/config";

export const metadata = {
  title: `Résumé | ${config.author}`,
  description: `Résumé of ${config.author} — Full Stack Developer & AI Enthusiast. View online or download.`,
};

export default function ResumePage() {
  return <ResumeView />;
}
