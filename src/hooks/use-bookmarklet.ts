import { useMemo } from "react";
import { useUserId } from "./use-user-id";

const BOOKMARKLET = `
const STUDIO_URL = "https://cdn.newmode.ai/studio.js"; 

window.newmode = { ...(window.newmode || {}), studio: <config> };
const script = document.createElement("script");
script.type = "module";
script.src = STUDIO_URL;
script.crossOrigin = "anonymous";

const ERROR_MESSAGE = "Sorry, we couldn't launch Studio.\\n\\nThis website has security policy that is preventing the editor from launching.\\n\\nIf you are the owner of this website, please contact us at hello@newmode.ai."

function handleCSPViolation(error) {
  if (error.blockedURI === STUDIO_URL) {
    alert(ERROR_MESSAGE);
    document.removeEventListener("securitypolicyviolation", handleCSPViolation);
  }
}

document.addEventListener("securitypolicyviolation", handleCSPViolation);

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
