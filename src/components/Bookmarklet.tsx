import { PostHog, usePostHog } from "posthog-js/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useUserId } from "../hooks/use-user-id";

const BOOKMARKLET = `
window.newmode = { ...(window.newmode || {}), studio: <config> }
const script = document.createElement("script");
script.type = "module";
script.src = "https://cdn.newmode.ai/studio.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);
`;

export function Bookmarklet() {
  const userId = useUserId("nm-uid");
  const bookmarklet = makeBookmarklet(
    userId
      ? BOOKMARKLET.replace(
          "<config>",
          `{ playground: true, userId: "${userId}" }`
        )
      : BOOKMARKLET.replace("<config>", "{ playground: true }")
  );

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

function makeBookmarklet(code: string) {
  const func = `(function(){${encodeURIComponent(code)}})();`;
  return `javascript:${func}`;
}
