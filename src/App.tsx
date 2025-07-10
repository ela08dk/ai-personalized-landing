import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import { PostHogProvider } from "posthog-js/react";
import { LOCAL_STORAGE_EVENT } from "./hooks/use-user-id";

const queryClient = new QueryClient();

const App = () => (
  <PostHogProvider
    apiKey="phc_D4szRxFrLiq98dFgWlvCsZhRBNXOQ9iujTNRMLCRg7G"
    options={{
      person_profiles: "always",
      session_recording: { maskAllInputs: false },
      api_host: "https://eu.i.posthog.com",
      loaded: (posthog) => {
        const userId = posthog.get_distinct_id();
        if (userId) {
          localStorage.setItem("nm-uid", userId);
          window.dispatchEvent(
            new CustomEvent(LOCAL_STORAGE_EVENT, {
              detail: { key: "nm-uid", value: userId },
            })
          );
        }
      },
    }}
  >
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </PostHogProvider>
);

export default App;
