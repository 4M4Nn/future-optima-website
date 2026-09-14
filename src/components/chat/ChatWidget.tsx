"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data/site";
import { findBestAnswer, suggestedQuestions } from "@/lib/data/chatbot-kb";

interface ChatMessage {
  id: number;
  from: "bot" | "user";
  text: string;
}

const GREETING =
  "Hi, I'm Jeena Madhavan, Center Head at Future Optima IT Solutions! Ask me about our courses, fees, placements, admissions or our new Dubai IT Infrastructure program — happy to help.";

const FALLBACK =
  "That's a great question — let me connect you directly with our admissions team so you get an accurate answer. You can WhatsApp us or fill out the Contact form and a counselor will get back to you shortly.";

let messageId = 1;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, from: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function toggleOpen() {
    setOpen((o) => !o);
    setHasOpenedOnce(true);
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    messageId += 1;
    const userMsg: ChatMessage = { id: messageId, from: "user", text: trimmed };

    messageId += 1;
    const answer = findBestAnswer(trimmed);
    const botMsg: ChatMessage = {
      id: messageId,
      from: "bot",
      text: answer ?? FALLBACK,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={open ? "Close chat with Jeena" : "Chat with Jeena, Future Optima Center Head"}
        className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-amber-400 bg-white shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-6 w-6 text-navy-900" />
        ) : (
          <>
            <Image
              src="/images/team/jeena-madhavan.jpeg"
              alt="Chat with Jeena Madhavan"
              fill
              className="object-cover"
              style={{ objectPosition: "center 22%" }}
            />
            <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
          </>
        )}
      </button>

      {!open && !hasOpenedOnce ? (
        <div className="fixed bottom-[5.75rem] right-[4.75rem] z-40 hidden max-w-[10rem] rounded-xl rounded-br-none bg-white px-3 py-2 text-xs font-medium text-navy-900 shadow-lg sm:block">
          👋 Ask me anything about Future Optima!
        </div>
      ) : null}

      {open ? (
        <div
          role="dialog"
          aria-label="Chat with Jeena Madhavan"
          className="fixed bottom-40 right-5 z-50 flex h-[28rem] w-[calc(100%-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-2xl sm:bottom-[6.5rem]"
        >
          <div className="flex items-center gap-3 bg-navy-900 px-4 py-3 text-white">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-amber-400">
              <Image
                src="/images/team/jeena-madhavan.jpeg"
                alt="Jeena Madhavan"
                fill
                className="object-cover"
                style={{ objectPosition: "center 22%" }}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-sm font-bold">Jeena Madhavan</p>
              <p className="truncate text-xs text-white/60">Center Head · Future Optima IT Solutions</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="shrink-0 rounded-full p-1 text-white/70 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-navy-50 px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={
                  m.from === "bot"
                    ? "max-w-[85%] rounded-2xl rounded-tl-none bg-white px-3 py-2 text-sm text-navy-800 shadow-sm"
                    : "ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-amber-500 px-3 py-2 text-sm text-navy-950 shadow-sm"
                }
              >
                {m.text}
              </div>
            ))}

            {messages.length <= 1 ? (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 hover:bg-amber-100"
                  >
                    {q}
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="border-t border-border-soft p-2">
            <p className="px-1 pb-1.5 text-[11px] text-muted-foreground">
              Need a human? WhatsApp us at{" "}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-600 hover:underline"
              >
                +91 {siteConfig.primaryPhone}
              </a>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold text-amber-600 hover:underline">
                visit Contact
              </Link>
              .
            </p>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                aria-label="Type your question"
                className="h-9 flex-1 rounded-full border border-border-soft bg-white px-3.5 text-sm outline-none focus:border-amber-400"
              />
              <Button
                type="submit"
                size="icon"
                className="h-9 w-9 shrink-0 rounded-full bg-amber-500 text-navy-950 hover:bg-amber-400"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
