import { Download } from "lucide-react";

export function StickyDownload() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 glass border-t border-white/30">
      <a
        href="#download"
        className="flex items-center justify-center gap-2 w-full bg-gradient-orange text-white py-3.5 rounded-xl font-semibold shadow-glow"
      >
        <Download className="h-5 w-5" /> Download on Play Store
      </a>
    </div>
  );
}
