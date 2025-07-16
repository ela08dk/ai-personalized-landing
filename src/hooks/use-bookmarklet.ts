import { useMemo } from "react";
import { useUserId } from "./use-user-id";

const BOOKMARKLET = `
window.newmode = { ...(window.newmode || {}), studio: <config> }
const script = document.createElement("script");
script.type = "module";
script.src = "https://cdn.newmode.ai/studio.js";
script.crossOrigin = "anonymous";
document.head.appendChild(script);
`;

function makeBookmarklet(code: string) {
  const func = `(function(){${encodeURIComponent(code)}})();`;
  return `javascript:${func}`;
}

export function useStudioBookmarklet() {
  const userId = useUserId();

  return useMemo(() => {
    return makeBookmarklet(
      userId
        ? BOOKMARKLET.replace(
            "<config>",
            `{ playground: true, userId: "${userId}" }`
          )
        : BOOKMARKLET.replace("<config>", "{ playground: true }")
    );
  }, [userId]);
}
