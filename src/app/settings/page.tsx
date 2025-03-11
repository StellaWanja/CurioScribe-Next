import { WEB_TITLE } from "@/constants";
import Settings from "./Settings";
import AuthenticatedLayout from "@/components/ui/AuthenticatedLayout";

export async function generateMetadata() {
  return {
    title: `Settings | ${WEB_TITLE}`,
  };
}

// split for both sidebar and setiings
export default function SettingsPage() {
  return (
    <AuthenticatedLayout>
      <Settings />
    </AuthenticatedLayout>
  );
}
