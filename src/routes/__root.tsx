import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { StickyDownload } from "../components/StickyDownload";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-navy">Page not found</h2>
        <p className="mt-2 text-sm text-navy/60">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-xl bg-gradient-orange px-5 py-2.5 text-sm font-semibold text-white shadow-glow">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sonia Buddy — Smart Travel Companion for West Bengal" },
      { name: "description", content: "Track local buses live, get smart geofence alerts and discover verified tours across all 23 districts of West Bengal." },
      { property: "og:title", content: "Sonia Buddy — Smart Travel Companion for West Bengal" },
      { property: "og:description", content: "Track local buses live, get smart geofence alerts and discover verified tours across all 23 districts of West Bengal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sonia Buddy — Smart Travel Companion for West Bengal" },
      { name: "twitter:description", content: "Track local buses live, get smart geofence alerts and discover verified tours across all 23 districts of West Bengal." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/962d4ae4-ea81-46fa-ace3-651ca71d56b1/id-preview-fddcf6bd--5b65337b-f7e7-42b8-933b-aa3a121afee9.lovable.app-1776613835180.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/962d4ae4-ea81-46fa-ace3-651ca71d56b1/id-preview-fddcf6bd--5b65337b-f7e7-42b8-933b-aa3a121afee9.lovable.app-1776613835180.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyDownload />
    </div>
  );
}
