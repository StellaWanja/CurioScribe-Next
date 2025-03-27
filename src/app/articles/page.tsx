import AuthenticatedLayout from "@/components/ui/AuthenticatedLayout";
import AllArticles from "./AllArticles";
import { WEB_TITLE } from "@/constants";

export async function generateMetadata() {
  return {
    title: `Articles | ${WEB_TITLE}`,
  };
}

// split for both sidebar and New Article
export default async function AllArticlesPage() {
  return (
    <AuthenticatedLayout>
      <AllArticles />
    </AuthenticatedLayout>
  );
}
