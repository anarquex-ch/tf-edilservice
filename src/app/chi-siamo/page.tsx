import { Metadata } from "next";
import ChiSiamoContent from "@/components/ChiSiamoContent";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Chi Siamo | TF Edilservice Sagl",
  description:
    "Scopri la storia di TF Edilservice Sagl, l'azienda leader nel settore impiantistico elettrico ed edilizio in Ticino.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        iconName="Users"
        title="Chi Siamo"
        subtitle="Un'azienda ticinese con una storia di successo nel settore dell'impiantistica elettrica ed edilizia."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Chi Siamo" }
        ]}
        imageUrl="/images/chi-siamo.jpg"
      />
      <ChiSiamoContent />
    </>
  );
}