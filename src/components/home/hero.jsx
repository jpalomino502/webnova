import { complex, motion } from "framer-motion";
import { useEffect, useState } from "react";
import '../../index.css'

export default function Hero() {
    const words = ["CREATIVOS", "INNOVADORES", "DINÁMICOS", "ÚNICOS"];
    const [currentWord, setCurrentWord] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150);

    useEffect(() => {
        let timer = setTimeout(() => {
            const current = words[currentWord];
            
            if (isDeleting) {
                setText(current.substring(0, text.length - 1));
                setDelta(100);
            } else {
                setText(current.substring(0, text.length + 1));
                setDelta(150);
            }

            if (!isDeleting && text === current) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCurrentWord((prev) => (prev + 1) % words.length);
                setDelta(500);
            }
        }, delta);

        return () => clearTimeout(timer);
    }, [text, isDeleting, currentWord, delta, words]);

    return (
        <main className="relative h-screen overflow-hidden bg-black fuente_home">
            <img
                src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/images/docs-right.png"
                alt="Background texture"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 z-0 opacity-80"
            />
            <img
                src="https://nextui.org/gradients/looper-pattern.svg"
                alt="Wavy pattern"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="absolute inset-0 z-10 opacity-40 md:translate-x-1/4 lg:translate-x-1/3"
            />
            <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center flex flex-col justify-center h-full mt-20 sm:mt-32 md:mt-0">
                    <motion.h1
                        className="text-5xl sm:text-8xl lg:text-9xl font-bold text-white tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        SOMOS
                        <br />
                        <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text inline-block">
                            <span className="inline-block min-w-[1em] text-left">
                                {text}
                                <motion.span
                                    className="inline-block w-[2px] h-[1em] ml-1 bg-current align-middle"
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                />
                            </span>
                        </span>
                    </motion.h1>
                    <motion.h2
                        className="text-5xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        DIGITALES
                    </motion.h2>
                </div>
            </div>
        </main>
    )
}

