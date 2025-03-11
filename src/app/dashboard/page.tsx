import AuthenticatedLayout from "@/components/ui/AuthenticatedLayout";
import Dashboard from "./Dashboard";
import { WEB_TITLE } from "@/constants";

export async function generateMetadata() {
  return {
    title: `Dashboard | ${WEB_TITLE}`,
  };
}

// split for both sidebar and dashboard
export default function DashboardPage() {
  return (
    <AuthenticatedLayout>
      <Dashboard />
    </AuthenticatedLayout>
  );
}
