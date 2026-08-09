import PanelShell from "@/app/_components/PanelShell";
import HomePanel from "@/app/_components/panels/HomePanel";
import AboutPanel from "@/app/_components/panels/AboutPanel";
import SkillsPanel from "@/app/_components/panels/SkillsPanel";
import WorkPanel from "@/app/_components/panels/WorkPanel";
import ContactPanel from "@/app/_components/panels/ContactPanel";

/**
 * The panels are rendered here on the server and handed to the client shell as
 * nodes, so all five are present in the initial HTML.
 */
export default function Home() {
  return (
    <PanelShell
      panels={[
        { key: "home", label: "Home", node: <HomePanel /> },
        { key: "about", label: "About", node: <AboutPanel /> },
        { key: "skills", label: "Skills", node: <SkillsPanel /> },
        { key: "work", label: "Work", node: <WorkPanel /> },
        { key: "contact", label: "Contact", node: <ContactPanel /> },
      ]}
    />
  );
}
