import React from 'react';

export default function StyledBackground() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950 via-purple-900 to-indigo-950 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>

                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 3}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-cyan-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                        Beautiful Background
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4">
                        This enhanced background features animated gradients, floating particles,
                        glowing orbs, and subtle patterns for a modern, dynamic feel.
                    </p>
                </div>
            </div>
        </div>
    );
}