import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const artifacts = {
    version: 1,
    schemas: [
      {
        type: "Organization",
        url: "/",
        source: "/src/app/layout.tsx"
      },
      {
        type: "FinancialService",
        url: "/",
        source: "/src/app/layout.tsx"
      },
      {
        type: "FAQPage",
        url: "/",
        source: "/src/app/layout.tsx"
      }
    ],
    llmArtifacts: [
      {
        type: "checklist",
        path: "/ai/seo-checklist.json"
      },
      {
        type: "faqs",
        path: "/ai/faqs.json"
      }
    ]
  };
  return NextResponse.json(artifacts);
}


