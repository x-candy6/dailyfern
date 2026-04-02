'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/** Initializes AOS scroll animations on mount. */
export default function AOSProvider() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 80 });
  }, []);
  return null;
}
