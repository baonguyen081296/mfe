import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
export default function MarketingApp() {
  const elementRef = useRef(null);

  useEffect(() => {
    mount(elementRef.current);
  }, []);

  return <div ref={elementRef} />;
}
