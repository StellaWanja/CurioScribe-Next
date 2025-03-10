import { WEB_TITLE } from "@/constants";
import Settings from "./Settings";
import AuthenticatedLayout from "@/components/ui/AuthenticatedLayout";

export async function generateMetadata() {
  return {
    title: `Settings | ${WEB_TITLE}`,
  };
}

export default function DashboardPage() {
  return (
    <AuthenticatedLayout>
      <Settings />
    </AuthenticatedLayout>
  );
}
