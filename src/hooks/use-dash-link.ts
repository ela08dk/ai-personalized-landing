import { useUserId } from "./use-user-id";

export function useDashLink() {
  const userId = useUserId();
  return `https://dash.newmode.ai/sign-up${
    userId ? `?playground_user=${userId}` : ""
  }`;
}
