export const sendAnalyticsEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window !== 'undefined') {
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;

    if (typeof gtag === 'function') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
      });
    }
  }
};

export const sendGoogleAdsConversion = (): void => {
  if (typeof window !== 'undefined') {
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;

    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: 'AW-17180147170/lF_cCNzawtkaEOL7kIBA',
      });
    }
  }
};
