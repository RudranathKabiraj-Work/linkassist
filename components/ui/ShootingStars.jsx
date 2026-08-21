"use client";
import React, { useEffect, useState, useId, useRef } from "react";

const getRandomStartPoint = () => {
    if (typeof window === "undefined") return { x: 0, y: 0, angle: 45 };
    const side = Math.floor(Math.random() * 4);
    const w = window.innerWidth || 1200;
    const h = window.innerHeight || 800;
    const offset = Math.random() * w;
    switch (side) {
        case 0: return { x: offset, y: 0, angle: 45 };
        case 1: return { x: w, y: offset, angle: 135 };
        case 2: return { x: offset, y: h, angle: 225 };
        case 3: return { x: 0, y: offset, angle: 315 };
        default: return { x: 0, y: 0, angle: 45 };
    }
};

export function ShootingStars({
    minSpeed = 10,
    maxSpeed = 30,
    minDelay = 1200,
    maxDelay = 4200,
    starColor = "#FFFFFF",
    trailColor = "#FFFFFF",
    starWidth = 10,
    starHeight = 1,
    className = "",
}) {
    const [star, setStar] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const rawId = useId();
    const gradientId = `ss-gradient-${rawId.replace(/:/g, "")}`;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(container);
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let timeoutId;
        const createStar = () => {
            const { x, y, angle } = getRandomStartPoint();
            setStar({
                id: Date.now(),
                x, y, angle,
                scale: 1,
                speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                distance: 0,
            });
            const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
            timeoutId = setTimeout(createStar, randomDelay);
        };
        createStar();
        return () => clearTimeout(timeoutId);
    }, [minSpeed, maxSpeed, minDelay, maxDelay, isVisible]);

    useEffect(() => {
        if (!star || !isVisible) return;
        const frame = requestAnimationFrame(() => {
            setStar((prev) => {
                if (!prev) return null;
                const newX = prev.x + prev.speed * Math.cos((prev.angle * Math.PI) / 180);
                const newY = prev.y + prev.speed * Math.sin((prev.angle * Math.PI) / 180);
                const newDistance = prev.distance + prev.speed;
                const newScale = 1 + newDistance / 100;
                const w = typeof window !== "undefined" ? window.innerWidth : 1200;
                const h = typeof window !== "undefined" ? window.innerHeight : 800;
                if (newX < -20 || newX > w + 20 || newY < -20 || newY > h + 20) {
                    return null;
                }
                return { ...prev, x: newX, y: newY, distance: newDistance, scale: newScale };
            });
        });
        return () => cancelAnimationFrame(frame);
    }, [star, isVisible]);

    return (
        <svg ref={containerRef} className={`w-full h-full absolute inset-0 pointer-events-none ${className}`}>
            {star && (
                <rect
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    width={starWidth * star.scale}
                    height={starHeight}
                    fill={`url(#${gradientId})`}
                    transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
                />
            )}
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
                    <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
                </linearGradient>
            </defs>
        </svg>
    );
}