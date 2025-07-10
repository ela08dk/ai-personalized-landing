import { useUserId } from "./use-user-id";

export function useDashLink() {
  const userId = useUserId("nm-uid");
  return `https://dash.newmode.ai${userId ? `?playground_user=${userId}` : ""}`;
}
