import { Navigate, useParams } from "react-router-dom";
import { DOC_MAP } from "../docs/docs";
import DocsLayout from "../components/DocsLayout";
import DocsContent from "../components/DocsContent";
import PageMeta from "../components/PageMeta";

export default function DocsPage() {
  const { slug } = useParams();
  const doc = DOC_MAP[slug];
  if (!doc) return <Navigate to="/docs/introduction" replace />;

  return (
    <>
      <PageMeta title={`${doc.title} — JishAtlas Docs`} description={doc.description} />
      <DocsLayout>
        <DocsContent doc={doc} />
      </DocsLayout>
    </>
  );
}
