import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50">
      <Card className="w-full max-w-md mx-4 shadow-lg rounded-lg overflow-hidden">
        <CardContent className="pt-8 pb-6">
          <div className="flex flex-col items-center mb-6">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-xl font-semibold text-gray-700">Page Not Found</h2>
          </div>

          <p className="text-center text-sm text-gray-600 mb-6">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex justify-center">
            <a
              href="/"
              className="inline-flex items-center px-4 py-2 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff00a1]"
              style={{ backgroundColor: "#ff00a1" }}
            >
              Go Back Home
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}