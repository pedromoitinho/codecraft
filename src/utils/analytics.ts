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

export const gtagReportConversion = (url?: string): boolean => {
  if (typeof window !== 'undefined') {
    const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;

    const callback = (): void => {
      if (typeof url !== 'undefined') {
        window.location.href = url;
      }
    };

    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: 'AW-17180147170/0s81CLyAuNoaEOL7kIBA',
        value: 1.0,
        currency: 'BRL',
        event_callback: callback,
      });
      return false;
    }
  }

  return false;
};
