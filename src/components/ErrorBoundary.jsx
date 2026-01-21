import React from 'react';
import { Button } from "@/components/ui/button";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex h-screen w-full flex-col items-center justify-center space-y-4 p-8 text-center bg-background text-foreground">
          <div className="p-4 bg-destructive/10 rounded-full">
            <h2 className="text-3xl">⚠️</h2>
          </div>
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="text-muted-foreground max-w-md">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          <div className="p-4 bg-muted/50 rounded text-left text-xs font-mono overflow-auto max-w-lg w-full max-h-48 border">
            {this.state.error && this.state.error.toString()}
          </div>
          <Button onClick={() => window.location.reload()} variant="default">
            Reload Application
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
