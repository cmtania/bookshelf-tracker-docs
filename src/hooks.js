import { useEffect, useState } from 'react';

import { PRICES } from './config.js';

/** The visitor's region from their browser language, e.g. "en-US" -> "US", "fil" -> "PH". */
function visitorRegion() {
  for (const tag of navigator.languages?.length ? navigator.languages : [navigator.language]) {
    try {
      const region = new Intl.Locale(tag).maximize().region;
      if (region) return region;
    } catch {
      // Ignore malformed language tags.
    }
  }
  return null;
}

/**
 * Shelfie Pro prices for the visitor's App Store storefront, formatted for their locale:
 * { lifetime: "₱249", monthly: "₱59" }. A plan is missing when we don't have a confirmed
 * price for their region.
 */
export function useLocalPrices() {
  const [prices, setPrices] = useState({});
  useEffect(() => {
    const region = visitorRegion();
    const result = {};
    // Months of Monthly that add up to Lifetime, rounded up (₱249 / ₱59 = 4.2 -> 5).
    const lifetime = PRICES.lifetime[region];
    const monthly = PRICES.monthly[region];
    if (lifetime && monthly && lifetime.currency === monthly.currency && monthly.amount > 0) {
      result.paybackMonths = Math.ceil(lifetime.amount / monthly.amount);
    }
    for (const [plan, table] of Object.entries(PRICES)) {
      const entry = table[region];
      if (!entry) continue;
      result[plan] = new Intl.NumberFormat(navigator.language, {
        style: 'currency',
        currency: entry.currency,
        minimumFractionDigits: Number.isInteger(entry.amount) ? 0 : 2,
      }).format(entry.amount);
    }
    setPrices(result);
  }, []);
  return prices;
}

