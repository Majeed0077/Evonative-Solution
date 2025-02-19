import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import { Suspense, useState, useEffect } from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import LoadingScreen from "./components/ui/loading";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Careers from "./pages/careers";
import Contact from "./pages/contact";

function Router() {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show loading on route changes
    const handleRouteChange = () => {
      if (location !== window.location.pathname) {
        setIsLoading(true);
        setLocation(window.location.pathname);
        setTimeout(() => setIsLoading(false), 800);
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {isLoading && <LoadingScreen />}
      <Navbar />
      <main className="flex-grow pt-16">
        <Suspense fallback={<LoadingScreen />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/careers" component={Careers} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
