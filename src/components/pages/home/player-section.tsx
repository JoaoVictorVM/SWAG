"use client";
import { useState } from 'react';

export default function PlayerSection() {

    const videos = ['fXivMSJm_kA', '4WcD2ncHMVs', 'EGKfSUDAiFg'];
    
    const [videoAtual, setVideoAtual] = useState(0);

    const anteriorVideo = () => {
        if (videoAtual > 0) {
            setVideoAtual(videoAtual - 1);
        }
    };

    const proximoVideo = () => {
        if (videoAtual < videos.length - 1) {
            setVideoAtual(videoAtual + 1);
        }
    };

    return (
        <section className="h-screen flex items-center justify-center gap-5">

            <button 
                onClick={anteriorVideo}
                disabled={videoAtual === 0}
                className="bg-zinc-900 p-5 text-white hover:bg-white/30 transition disabled:opacity-30 cursor-pointer">
                    ❮
            </button>

            <div className="relative w-full max-w-6xl aspect-video overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${videos[videoAtual]}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <button
                onClick={proximoVideo}
                disabled={videoAtual === videos.length - 1}
                className="bg-zinc-900 p-5 text-white hover:bg-white/30 transition disabled:opacity-30 cursor-pointer">
                ❯
            </button>
        </section>
    )
}
