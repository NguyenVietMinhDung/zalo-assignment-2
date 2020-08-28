// @flow
// Use stateful component to catch thrown errors
// This will break Presentational and Container pattern
import React, { Component } from 'react';
import type { Props, States } from './type';

class ErrorBoundary extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <h1 style={{ textAlign: 'center' }}>
          Opps! Something went wrong. Let&apos;s try again later.
        </h1>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
