import AuthenticatedLayout from "@/components/ui/AuthenticatedLayout";
import Article from "./Article";
import { WEB_TITLE } from "@/constants";

type tParams = Promise<{ articleId: string }>;

export async function generateMetadata(props: { params: tParams }) {
  return {
    title: `Article #${(await props.params).articleId} | ${WEB_TITLE}`,
  };
}

// split for both sidebar and Article
export default function ArticlePage() {
  return (
    <AuthenticatedLayout>
      <Article />
    </AuthenticatedLayout>
  );
}
