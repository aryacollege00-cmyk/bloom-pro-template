import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IndustrialCompanyWebsite } from "@/components/industrial/company-website";
import { InquiryDrawer } from "@/components/industrial/inquiry-drawer";
import { company, products, posts, reels } from "@/lib/demo-company";
import type { Product } from "@/lib/industrial-types";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: `${company.name} | Precision Industrial Components` },
    { name: "description", content: company.description },
    { property: "og:title", content: `${company.name} | Precision Industrial Components` },
    { property: "og:description", content: company.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
function Index() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return <><IndustrialCompanyWebsite company={company} products={products} posts={posts} reels={reels} onOpenInquiry={setSelectedProduct} /><InquiryDrawer key={selectedProduct?.id ?? 'closed'} product={selectedProduct} company={company} onClose={() => setSelectedProduct(null)} /></>;
}
