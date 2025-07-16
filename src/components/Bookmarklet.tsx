import { useStudioBookmarklet } from "@/hooks/use-bookmarklet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Bookmarklet() {
  const bookmarklet = useStudioBookmarklet();

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <a
            href={bookmarklet}
            draggable
            className="flex h-10 items-center select-none rounded-lg bg-gradient-to-br from-indigo-500/75 to-purple-400/80 px-4 py-2 font-medium text-white transition-transform text-sm whitespace-nowrap"
          >
            <span className="hidden md:inline">Studio </span>🚀
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <div className="max-w-[280px] space-y-2 px-2 py-3">
            <div className="flex items-start gap-2">
              <p className="text-sm">
                Click me to start Studio on this website
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="flex items-start gap-2">
              <p className="text-sm">
                Drag me into your browser's bookmark bar and click the bookmark
                on any other website to test Studio there!
              </p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
