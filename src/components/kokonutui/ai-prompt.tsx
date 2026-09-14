"use client";

import { ArrowRight, Check, ChevronDown, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "motion/react";

const INSTAGRAM_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const WHATSAPP_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export default function ContactMe() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [sendSuccess, setSendSuccess] = useState(false);
    
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 72,
        maxHeight: 300,
    });
    
    const [selectedPlatform, setSelectedPlatform] = useState("Email");

    const CONTACT_PLATFORMS = [
        { name: "Email", value: "parisafauzan@gmail.com", icon: <Mail className="w-4 h-4" /> },
        { name: "Instagram", value: "@parisafauzan", icon: INSTAGRAM_ICON },
        { name: "WhatsApp", value: "+62 822-9584-9260", icon: WHATSAPP_ICON },
    ];

    const PLATFORM_ICONS: Record<string, React.ReactNode> = {
        "Email": <Mail className="w-4 h-4" />,
        "Instagram": INSTAGRAM_ICON,
        "WhatsApp": WHATSAPP_ICON,
    };

    const handleSend = async () => {
        if (!name.trim() || !message.trim()) return;

        setIsSending(true);

        try {
            const platform = CONTACT_PLATFORMS.find(p => p.name === selectedPlatform);
            
            if (selectedPlatform === "Email") {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        subject: subject || "New Contact from Portfolio",
                        message: message,
                    }),
                });

                const data = await response.json();

                if (response.ok && data.success) {
                    setSendSuccess(true);
                    setTimeout(() => {
                        setName("");
                        setSubject("");
                        setMessage("");
                        setSendSuccess(false);
                        adjustHeight(true);
                    }, 2000);
                } else {
                    console.error("Failed to send:", data.error);
                    alert("Failed to send message. Please try again or use another platform.");
                }
            } else if (selectedPlatform === "Instagram") {
                // Open Instagram DM
                window.open("https://instagram.com/parisafauzan", "_blank");
            } else if (selectedPlatform === "WhatsApp") {
                // Open WhatsApp with pre-filled message
                const whatsappMessage = encodeURIComponent(
                    `Hi! I'm ${name}.\n${subject ? `Subject: ${subject}\n` : ""}\n${message}`
                );
                window.open(`https://wa.me/6282295849260?text=${whatsappMessage}`, "_blank");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please check your connection and try again.");
        } finally {
            setIsSending(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <section className="relative flex items-center justify-center py-10 overflow-hidden">
            {/* Background Spotlight */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[700px] h-[450px] rounded-full bg-gradient-to-tr from-purple-700/40 via-blue-600/30 to-transparent blur-3xl animate-pulse" />
            </div> */}

            <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-bold lg:text-4xl text-white mb-4"
                    >
                        Contact{' '}
                        <span className=" text-white bg-clip-text ">
                            Me
                        </span>
                    </motion.h2>
                    {/* <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-neutral-400 text-lg"
                    >
                        Let's start a conversation. Choose your preferred platform and send me a message.
                    </motion.p> */}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-neutral-900/50 backdrop-blur-lg rounded-3xl border border-neutral-800 p-1.5 pt-4 shadow-2xl"
                >
                    {/* Top Info Bar */}
                    <div className="flex items-center gap-2 mb-2.5 mx-2">
                        <div className="flex-1 flex items-center gap-2">
                            <MessageCircle className="h-3.5 w-3.5 text-purple-400" />
                            <h3 className="text-white/90 text-xs tracking-tighter">
                                Available for projects & collaborations
                            </h3>
                        </div>
                        <p className="text-white/90 text-xs tracking-tighter">
                            Quick Response
                        </p>
                    </div>

                    <div className="relative">
                        <div className="relative flex flex-col gap-3">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={cn(
                                    "w-full rounded-xl px-4 py-3 bg-neutral-800/50 border border-neutral-700/30",
                                    "text-white placeholder:text-neutral-500",
                                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-0",
                                    "transition-all duration-200"
                                )}
                            />

                            {/* Subject Input */}
                            <input
                                type="text"
                                placeholder="Subject (optional)"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className={cn(
                                    "w-full rounded-xl px-4 py-3 bg-neutral-800/50 border border-neutral-700/30",
                                    "text-white placeholder:text-neutral-500",
                                    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-0",
                                    "transition-all duration-200"
                                )}
                            />

                            {/* Message Textarea */}
                            <div
                                className="overflow-y-auto rounded-xl"
                                style={{ maxHeight: "400px" }}
                            >
                                <Textarea
                                    value={message}
                                    placeholder="Your message..."
                                    className={cn(
                                        "w-full rounded-xl rounded-b-none px-4 py-3 bg-neutral-800/50 border border-neutral-700/30",
                                        "text-white placeholder:text-neutral-500 resize-none",
                                        "focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-0",
                                        "min-h-[72px]"
                                    )}
                                    ref={textareaRef}
                                    onKeyDown={handleKeyDown}
                                    onChange={(e) => {
                                        setMessage(e.target.value);
                                        adjustHeight();
                                    }}
                                />
                            </div>

                            {/* Bottom Bar with Platform Selector and Send Button */}
                            <div className="h-14  rounded-b-xl flex items-center">
                                <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between w-[calc(100%-24px)]">
                                    <div className="flex items-center gap-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="flex items-center gap-2 h-8 px-3 text-xs rounded-md text-white hover:bg-white/10 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-purple-500"
                                                >
                                                    <AnimatePresence mode="wait">
                                                        <motion.div
                                                            key={selectedPlatform}
                                                            initial={{ opacity: 0, y: -5 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 5 }}
                                                            transition={{ duration: 0.15 }}
                                                            className="flex items-center gap-2"
                                                        >
                                                            {PLATFORM_ICONS[selectedPlatform]}
                                                            <span>{selectedPlatform}</span>
                                                            <ChevronDown className="w-3 h-3 opacity-50" />
                                                        </motion.div>
                                                    </AnimatePresence>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent
                                                className={cn(
                                                    "min-w-[12rem]",
                                                    "border-neutral-700",
                                                    "bg-neutral-900"
                                                )}
                                            >
                                                {CONTACT_PLATFORMS.map((platform) => (
                                                    <DropdownMenuItem
                                                        key={platform.name}
                                                        onSelect={() => setSelectedPlatform(platform.name)}
                                                        className="flex items-center justify-between gap-2 text-white hover:bg-white/10"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            {platform.icon}
                                                            <div className="flex flex-col">
                                                                <span className="font-medium">{platform.name}</span>
                                                                <span className="text-xs text-neutral-400">
                                                                    {platform.value}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {selectedPlatform === platform.name && (
                                                            <Check className="w-4 h-4 text-purple-400" />
                                                        )}
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                    
                                    <button
                                        type="button"
                                        onClick={handleSend}
                                        className={cn(
                                            "rounded-lg p-2 transition-all",
                                            sendSuccess
                                                ? "bg-green-500/20"
                                                : "bg-purple-500/20 hover:bg-purple-500/30",
                                            "focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-purple-500"
                                        )}
                                        aria-label="Send message"
                                        disabled={!name.trim() || !message.trim() || isSending}
                                    >
                                        {sendSuccess ? (
                                            <Check className="w-4 h-4 text-green-400" />
                                        ) : isSending ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            >
                                                <Send className="w-4 h-4 text-purple-400" />
                                            </motion.div>
                                        ) : (
                                            <ArrowRight
                                                className={cn(
                                                    "w-4 h-4 text-purple-400 transition-opacity duration-200",
                                                    name.trim() && message.trim()
                                                        ? "opacity-100"
                                                        : "opacity-30"
                                                )}
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-6"
                >
                    <p className="text-neutral-500 text-sm">
                        I typically respond within 24 hours
                    </p>
                </motion.div>
            </div>
        </section>
    );
}