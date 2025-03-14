import AuthenticatedLayout from "@/components/ui/AuthenticatedLayout";
import NewArticle from "./NewArticle";
import { WEB_TITLE } from "@/constants";

export async function generateMetadata() {
  return {
    title: `Create Article | ${WEB_TITLE}`,
  };
}

// split for both sidebar and dashboard
export default function DashboardPage() {
  return (
    <AuthenticatedLayout>
      <NewArticle />
    </AuthenticatedLayout>
  );
}
