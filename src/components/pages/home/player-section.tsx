"use client";
import { useState } from 'react';

export default function PlayerSection() {
    const videos = ['fXivMSJm_kA', '4WcD2ncHMVs', 'EGKfSUDAiFg'];
    const [videoAtual, setVideoAtual] = useState(0);

    const anteriorVideo = () => {
        if (videoAtual > 0) setVideoAtual(videoAtual - 1);
    };

    const proximoVideo = () => {
        if (videoAtual < videos.length - 1) setVideoAtual(videoAtual + 1);
    };

    return (
        <section className="playerSection w-full h-auto lg:h-screen py-12 flex items-center justify-center">
            
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
                
                <button onClick={anteriorVideo} disabled={videoAtual === 0} className="bg-zinc-900 p-4 text-white hover:bg-white/30 transition disabled:opacity-30 cursor-pointer w-16 h-16 flex items-center justify-center text-3xl">❮</button>

                <div className="relative w-full max-w-4xl lg:max-w-5xl aspect-video shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${videos[videoAtual]}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                <button onClick={proximoVideo} disabled={videoAtual === videos.length - 1} className="bg-zinc-900 p-4 text-white hover:bg-white/30 transition disabled:opacity-30 cursor-pointer w-16 h-16 flex items-center justify-center text-3xl">❯</button>

            </div>
        </section>
    )
}
