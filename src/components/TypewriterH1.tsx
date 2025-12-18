import { RootState } from "../store/Store";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../styles/typewriter.css'
interface TypewriterH1Props {
    words?: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pause?: number;
    className?: string;
}

const TypewriterH1: React.FC<TypewriterH1Props> = ({
    words = ["Frontend Developer", "UI/UX Designer", "React Creator"],
    typingSpeed = 150,
    deletingSpeed = 75,
    pause = 1000,
    className = "",
}) => {
    const [text, setText] = useState<string>("");
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const ready = useSelector((state: RootState) => state.ready.ready);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const currentWord = words[wordIndex];

        if (!isDeleting && text.length < currentWord.length) {
            timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
        } else if (!isDeleting && text.length === currentWord.length) {
            timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && text.length > 0) {
            timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
        } else if (isDeleting && text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

    return (
        <>
            {ready ? (
                <h1>
                    {text}
                    <span className="cursor" />
                </h1>
            ) : (
                <h1>Frontend Developer</h1>
            )}
        </>
    );
};

export default TypewriterH1;
