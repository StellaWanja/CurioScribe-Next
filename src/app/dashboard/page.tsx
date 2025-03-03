import Dashboard from "@/components/Dashboard/Dashboard";
import { WEB_TITLE } from "@/constants";

export async function generateMetadata() {
  return {
    title: `Dashboard | ${WEB_TITLE}`,
  };
}

export default function DashboardPage() {
  return <Dashboard />;
}
