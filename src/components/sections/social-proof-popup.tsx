"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

const FIRST_NAMES = [
  "Sarah G.", "Mike T.", "Jessica R.", "David L.", "Emma W.",
  "Chris B.", "Ashley M.", "James K.", "Maria S.", "Ryan P.",
  "Amanda H.", "Josh D.", "Katie N.", "Brandon F.", "Nicole C.",
  "Daniel Jake L.", "John Paul M.", "Mark Anthony R.", "Ryan James T.",
  "Maria Angelica V.", "Jessica Mae T.", "Ashley Nicole M.", "Angela Rose B."
];

const REWARD_AMOUNTS = [50, 100, 150, 250, 300, 500];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDeals(): number {
  return Math.floor(Math.random() * 8) + 1;
}

function generateMessage(): string {
  const name = randomFrom(FIRST_NAMES);
  const amount = randomFrom(REWARD_AMOUNTS);
  const deals = randomDeals();

  const templates = [
    () => `${name} claimed $${amount}`,
    () => `${name} completed ${deals} deal${deals > 1 ? "s" : ""}`,
  ];

  return randomFrom(templates)();
}

export default function SocialProofPopup() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const lastMessageRef = useRef("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const showPopup = useCallback(() => {
    let newMessage = generateMessage();

    while (newMessage === lastMessageRef.current) {
      newMessage = generateMessage();
    }

    lastMessageRef.current = newMessage;
    setMessage(newMessage);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Prevent double timers in Next.js Strict Mode
    if ((window as any).__SOCIAL_PROOF_STARTED__) return;
    (window as any).__SOCIAL_PROOF_STARTED__ = true;

    const initialTimer = setTimeout(showPopup, 5000);
    const interval = setInterval(showPopup, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [mounted, showPopup]);

  if (!mounted) return null;

  return createPortal(
    <div
      style={{
        bottom: "90px",
        color: "#1f2937",
      }}
      className={`fixed z-[9999] transition-all duration-300 ease-out
        left-3 inline-flex items-center
        max-w-[85vw] p-3
        md:left-6 md:max-w-[320px] md:p-4
        rounded-[15px] border border-gray-200 shadow-md bg-white
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
    >
      <div className="inline-flex items-center gap-2.5">
        {/* yellow pulse dot */}
        <span className="relative flex-shrink-0 w-2.5 h-2.5">
          <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75" />
          <span className="relative block w-2.5 h-2.5 rounded-full bg-yellow-400" />
        </span>

        <p
          style={{ color: "#1f2937" }}
          className="text-[13px] md:text-[14px] font-medium leading-snug whitespace-nowrap m-0"
        >
          {message}
        </p>
      </div>
    </div>,
    document.body
  );
}
