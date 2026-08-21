"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

export function StarsBackground({
    starDensity = 0.00015,
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minTwinkleSpeed = 0.5,
    maxTwinkleSpeed = 1,
    className = "",
}) {
    const [stars, setStars] = useState([]);
    const canvasRef = useRef(null);

    const generateStars = useCallback((width, height) => {
        if (!width || !height) return [];
        const area = width * height;
        const numStars = Math.floor(area * starDensity);
        return Array.from({ length: numStars }, () => {
            const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 0.9 + 0.5,
                opacity: Math.random() * 0.5 + 0.5,
                twinkleSpeed: shouldTwinkle
                    ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                    : null,
            };
        });
    }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]);

    useEffect(() => {
        const updateStars = () => {
            if (!canvasRef.current) return;
            const canvas = canvasRef.current;
            const { width, height } = canvas.getBoundingClientRect();
            if (!width || !height) return;
            canvas.width = width;
            canvas.height = height;
            setStars(generateStars(width, height));
        };
        updateStars();

        if (typeof ResizeObserver !== "undefined" && canvasRef.current) {
            const resizeObserver = new ResizeObserver(updateStars);
            resizeObserver.observe(canvasRef.current);
            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [generateStars]);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(canvas);
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!canvasRef.current || stars.length === 0 || !isVisible) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let animationFrameId;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
                if (star.twinkleSpeed !== null) {
                    star.opacity = 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
                }
            });
            animationFrameId = requestAnimationFrame(render);
        };
        render();
        return () => cancelAnimationFrame(animationFrameId);
    }, [stars, isVisible]);

    return (
        <canvas ref={canvasRef} className={`h-full w-full absolute inset-0 pointer-events-none ${className}`} />
    );
}