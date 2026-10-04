import { useState, useEffect, useCallback } from 'react';
import {
  isEarlyOfferActive,
  hasEarlyOfferEnded,
  getRegistrationPrice,
  getRegistrationPricingInfo,
  OFFER_CONFIG
} from '../data/registration';

/**
 * Custom React hook for centralized TechX'26 registration pricing.
 * Subscribes to a 1-second interval to automatically transition pricing
 * after 8 October 2026 23:59:59 IST without requiring a page reload.
 */
export function useRegistrationPricing() {
  const [currentMs, setCurrentMs] = useState(() => Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMs(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isOfferActive = isEarlyOfferActive(currentMs);
  const hasEnded = hasEarlyOfferEnded(currentMs);

  const getPrice = useCallback((option) => {
    return getRegistrationPrice(option, currentMs);
  }, [currentMs]);

  const getPassInfo = useCallback((option) => {
    return getRegistrationPricingInfo(option, currentMs);
  }, [currentMs]);

  return {
    now: currentMs,
    isOfferActive,
    hasEnded,
    isUpcoming: false,
    offerConfig: OFFER_CONFIG,
    getPrice,
    getPassInfo
  };
}

export default useRegistrationPricing;
