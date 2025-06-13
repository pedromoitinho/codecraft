export const sendAnalyticsEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window !== 'undefined') {
    const gtag = (window as any).gtag as ((...args: any[]) => void) | undefined;

    if (typeof gtag === 'function') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
      });
    }
  }
};
