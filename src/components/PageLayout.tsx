import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <SiteHeader />
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
      {children}
    </main>
    <SiteFooter />
  </div>
);

export default PageLayout;
