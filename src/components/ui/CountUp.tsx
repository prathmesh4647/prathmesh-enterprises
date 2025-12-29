'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export const CountUp = ({ to, duration = 2, className = '' }: { to: number; duration?: number; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref} className={className}>{displayValue}+</span>;
};
