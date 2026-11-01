import { Metadata } from "next";
import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import { sanityFetch } from "@/lib/sanity.client";
import PageHeading from "../components/shared/PageHeading";
import AutomationClient from "./AutomationClient";

export const metadata: Metadata = {
  title: "Automation | Arnau Amargant",
  metadataBase: new URL("https://arnau.dev/automation"),
  description:
    "Explore popular workflow automations, CRM integrations, and AI agent templates designed to save you time and money.",
  openGraph: {
    title: "Automation | Arnau Amargant",
    url: "https://arnau.dev/automation",
    description:
      "Explore popular workflow automations, CRM integrations, and AI agent templates designed to save you time and money.",
    images:
      "https://res.cloudinary.com/arnau/image/upload/v1692635746/arnau/og.png",
  },
};

export default async function Automation() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  // Fallback email in case database query returns empty
  const email = profile && profile.length > 0 ? profile[0].email : "hello@arnau.dev";

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Workflow Automation"
        description="Connect your software stack, optimize operations, and leverage AI integrations. Stop wasting hours on manual chores and focus on what scales your business."
      />
      <AutomationClient email={email} />
    </main>
  );
}
