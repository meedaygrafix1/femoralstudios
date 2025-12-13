import React, { useState, useEffect } from 'react';
import { Play, Pause, ArrowRight, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, ExternalLink, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Custom Cursor Logic
    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateCursor);
        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // Dark Mode Class Toggle
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Scroll to section
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    // Mock Projects Data
    const projects = [
        {
            id: 1,
            title: "Neon City Rhythms",
            category: "Motion Graphics",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            desc: "3D Animation / Compositing"
        },
        {
            id: 2,
            title: "Afrobeat Summer",
            category: "Video Editing",
            image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&q=80&w=800",
            desc: "Music Video Edit / Color Grade"
        },
        {
            id: 3,
            title: "Tech Summit 2024",
            category: "Motion Graphics",
            image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=800",
            desc: "Event Opener / Typography"
        },
        {
            id: 4,
            title: "Urban Fashion Week",
            category: "Color Grading",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
            desc: "Commercial Spot"
        },
        {
            id: 5,
            title: "Bio-Organic Interface",
            category: "Motion Graphics",
            image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
            desc: "Abstract Loop (Personal)"
        },
        {
            id: 6,
            title: "Lagos Lifestyle",
            category: "Video Editing",
            image: "https://images.unsplash.com/photo-1542998966-231a4eb08643?auto=format&fit=crop&q=80&w=800",
            desc: "Documentary Short"
        }
    ];

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    const categories = ['all', 'Motion Graphics', 'Video Editing', 'Color Grading'];

    return (
        <div>
            <div className="bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white min-h-screen font-sans selection:bg-lime-400 selection:text-black overflow-x-hidden cursor-none transition-colors duration-300">

                {/* Custom Cursor Element */}
                <div className="fixed w-8 h-8 border-2 border-lime-600 dark:border-lime-400 rounded-full pointer-events-none z-50 transition-transform duration-75 mix-blend-difference hidden md:block"
                    style={{
                        left: cursorPosition.x, top: cursorPosition.y, transform: `translate(-50%, -50%) scale(${isHovering ?
                            2.5 : 1})`, backgroundColor: isHovering ? 'rgba(163, 230, 53, 0.2)' : 'transparent'
                    }} />

                {/* Small dot in center of cursor */}
                <div className="fixed w-2 h-2 bg-lime-600 dark:bg-lime-400 rounded-full pointer-events-none z-50 hidden md:block" style={{
                    left:
                        cursorPosition.x, top: cursorPosition.y, transform: `translate(-50%, -50%)`
                }} />

                {/* Navigation */}
                <nav className="fixed w-full z-[60] top-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-[70]">
                        <div className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white relative" onMouseEnter={() =>
                            setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            FEMORAL<span className="text-lime-600 dark:text-lime-400">STUDIOS</span>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-neutral-400">
                            {['Work', 'Services', 'About', 'Contact'].map((item) => (
                                <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                                    className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-300"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    {item}
                                </button>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-900 dark:text-white"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex items-center gap-4 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-gray-900 dark:text-white"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button className="text-gray-900 dark:text-white" onClick={toggleMenu}>
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav Overlay */}
                    {isMenuOpen && (
                        <div
                            className="fixed inset-0 h-screen w-screen bg-white dark:bg-neutral-950 flex flex-col items-center justify-center space-y-8 z-[50] md:hidden text-gray-900 dark:text-white transition-colors duration-300">
                            {['Work', 'Services', 'About', 'Contact'].map((item) => (
                                <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                                    className="text-3xl font-bold uppercase tracking-tighter hover:text-lime-600 dark:hover:text-lime-400"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </nav>

                {/* Hero Section */}
                <header className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
                    {/* Background Grid Animation */}
                    <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
                        <div
                            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                        </div>
                        <div
                            className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-lime-400 opacity-20 blur-[100px]">
                        </div>
                    </div>

                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        <h2 className="text-lime-600 dark:text-lime-400 font-mono mb-4 animate-pulse">MOTION DESIGNER & VIDEO EDITOR</h2>
                        <h1
                            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8 mix-blend-difference dark:mix-blend-normal text-gray-900 dark:text-white">
                            VISUALS THAT<br />
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 dark:from-neutral-500 dark:via-white dark:to-neutral-500 bg-300% animate-gradient">MOVE
                                YOU</span>
                        </h1>
                        <p className="text-gray-600 dark:text-neutral-400 max-w-xl mx-auto mb-12 text-lg">
                            From Ibadan to the World. Crafting high-impact motion graphics and cinematic edits with scientific
                            precision.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <button onClick={() => scrollTo('work')}
                                className="px-8 py-4 bg-lime-400 text-black font-bold uppercase tracking-widest hover:bg-lime-500 dark:hover:bg-white
                    transition-colors duration-300 flex items-center justify-center gap-2"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                View Showreel
                                <Play size={18} fill="black" />
                            </button>
                            <button onClick={() => scrollTo('contact')}
                                className="px-8 py-4 border border-gray-300 dark:border-white/20 hover:border-lime-600 dark:hover:border-lime-400 hover:text-lime-600 dark:hover:text-lime-400
                    transition-colors duration-300 font-bold uppercase tracking-widest text-gray-900 dark:text-white"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-neutral-500">
                        <ChevronDown />
                    </div>
                </header>

                {/* Infinite Text Ticker */}
                <div
                    className="bg-lime-400 py-3 overflow-hidden whitespace-nowrap -rotate-1 transform origin-center border-y-4 border-black">
                    <div className="inline-block animate-marquee">
                        <span className="text-black font-black text-2xl mx-4 uppercase">Motion Graphics • Video Editing • Color
                            Grading • Art Direction • Visual Effects • 3D Animation •</span>
                        <span className="text-black font-black text-2xl mx-4 uppercase">Motion Graphics • Video Editing • Color
                            Grading • Art Direction • Visual Effects • 3D Animation •</span>
                        <span className="text-black font-black text-2xl mx-4 uppercase">Motion Graphics • Video Editing • Color
                            Grading • Art Direction • Visual Effects • 3D Animation •</span>
                    </div>
                </div>

                {/* About Section */}
                <section id="about" className="py-24 px-6 bg-gray-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-lime-400 rounded-lg blur-xl opacity-20"></div>
                            <div
                                className="relative aspect-square rounded-lg overflow-hidden bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 group shadow-xl dark:shadow-none">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                                    alt="Femoral Studios Profile"
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                    <span className="text-lime-400 font-mono text-xs">OLUWAFEMI OGUNMEFUN</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-mono text-lime-600 dark:text-lime-400 mb-2">ABOUT THE CREATOR</h2>
                            <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">From Petri Dishes to Pixels</h3>
                            <p className="text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed">
                                I graduated from Olusegun Agagu University of Science and Technology as a <span
                                    className="text-gray-900 dark:text-white font-semibold">Microbiologist</span>. While studying the microscopic world, I discovered
                                a passion for the macroscopic impact of visual storytelling.
                            </p>
                            <p className="text-gray-600 dark:text-neutral-400 mb-8 leading-relaxed">
                                I pivoted from the lab to the timeline, developing myself with intensive courses on Art, Motion
                                Graphics, Color Grading, and Video Editing. This scientific background gives me a unique approach to
                                design: analytical, precise, yet creatively unbounded. I don't just edit videos; I compose visual
                                systems.
                            </p>
                            <div className="flex gap-4">
                                <a href="#"
                                    className="flex items-center gap-2 text-gray-900 dark:text-white border-b border-lime-600 dark:border-lime-400 pb-1 hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    Download Resume
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work/Portfolio Section */}
                <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <div>
                            <h2 className="text-sm font-mono text-lime-600 dark:text-lime-400 mb-2">SELECTED WORKS</h2>
                            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">Recent Projects</h3>
                        </div>

                        {/* Filter Tabs */}
                        <div className="flex gap-4 mt-6 md:mt-0 overflow-x-auto pb-2 w-full md:w-auto">
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setActiveTab(cat)}
                                    className={`px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all ${activeTab === cat
                                        ? 'bg-lime-400 border-lime-400 text-black'
                                        : 'border-gray-200 dark:border-white/20 text-gray-500 dark:text-neutral-400 hover:border-gray-400 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group relative cursor-pointer" onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                            >
                                <div className="relative aspect-video bg-gray-200 dark:bg-neutral-800 rounded-lg overflow-hidden border border-gray-200 dark:border-white/5 shadow-md dark:shadow-none">
                                    <img src={project.image} alt={project.title}
                                        className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                                    <div
                                        className="absolute inset-0 bg-black/40 dark:bg-black/60 group-hover:bg-transparent transition-colors duration-300">
                                    </div>

                                    {/* Play Button Overlay */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 rounded-full bg-lime-400 flex items-center justify-center shadow-lg">
                                            <Play fill="black" className="ml-1" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-between items-start">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">{project.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-neutral-500 text-sm">{project.desc}</p>
                                    </div>
                                    <span
                                        className="text-xs font-mono border border-gray-200 dark:border-white/10 px-2 py-1 rounded text-gray-500 dark:text-neutral-400">{project.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-24 bg-gray-100 dark:bg-neutral-900 border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-mono text-lime-600 dark:text-lime-400 mb-2">MY EXPERTISE</h2>
                            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">Services Offered</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Motion Graphics", desc: "Logo animations, explainers, and kinetic typography that capture attention.", icon:
                                        <Play />
                                },
                                {
                                    title: "Video Editing", desc: "Seamless cuts, narrative pacing, and sound design for compelling storytelling.", icon:
                                        <Pause />
                                },
                                {
                                    title: "Color Grading", desc: "Enhancing mood and atmosphere to give your footage a cinematic look.",
                                    icon:
                                        <ArrowRight />
                                },
                                {
                                    title: "Social Content", desc: "Optimized short-form content for Instagram Reels, TikTok, and Shorts.", icon:
                                        <Instagram />
                                }
                            ].map((service, index) => (
                                <div key={index}
                                    className="p-8 bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl hover:border-lime-400/50 hover:-translate-y-2 transition-all duration-300 group shadow-lg dark:shadow-none"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    <div
                                        className="w-12 h-12 bg-gray-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-lime-600 dark:text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-colors">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h4>
                                    <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 px-6 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute right-0 bottom-0 w-1/3 h-full bg-lime-400/5 blur-[120px] pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-lime-600 dark:text-lime-400 font-mono mb-6">READY TO COLLABORATE?</h2>
                        <h3
                            className="text-5xl md:text-7xl font-black mb-12 tracking-tighter text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors cursor-default">
                            LET'S MAKE IT MOVE
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-transparent">
                                <Mail className="w-8 h-8 text-lime-600 dark:text-lime-400 mx-auto mb-4" />
                                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-1">Email Me</p>
                                <a href="mailto:oluwafemiogunmefun193@gmail.com"
                                    className="text-gray-900 dark:text-white font-bold hover:text-lime-600 dark:hover:text-lime-400 break-words">oluwafemiogunmefun193@gmail.com</a>
                            </div>

                            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-transparent">
                                <Phone className="w-8 h-8 text-lime-600 dark:text-lime-400 mx-auto mb-4" />
                                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-1">Call / WhatsApp</p>
                                <p className="text-gray-900 dark:text-white font-bold">0701 714 3429</p>
                                <p className="text-gray-900 dark:text-white font-bold">0916 145 9856</p>
                            </div>

                            <div className="p-6 border border-gray-200 dark:border-white/10 rounded-lg backdrop-blur-sm bg-white/50 dark:bg-transparent">
                                <MapPin className="w-8 h-8 text-lime-600 dark:text-lime-400 mx-auto mb-4" />
                                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-1">Location</p>
                                <p className="text-gray-900 dark:text-white font-bold">Ibadan, Nigeria</p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6">
                            <a href="https://x.com/0xfemoralnelson" target="_blank" rel="noopener noreferrer"
                                className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-full hover:bg-lime-400 hover:text-black transition-all transform hover:scale-110 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
                                <Twitter />
                            </a>
                            <a href="#"
                                className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-full hover:bg-lime-400 hover:text-black transition-all transform hover:scale-110 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
                                <Instagram />
                            </a>
                            <a href="#"
                                className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-full hover:bg-lime-400 hover:text-black transition-all transform hover:scale-110 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 text-center text-gray-500 dark:text-neutral-600 text-sm border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
                    <p>© {new Date().getFullYear()} FEMORALSTUDIOS. All Rights Reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Portfolio;
