// ================================
// Dr. Scent AI - Professional JavaScript
// Presentation Website for HMZ Technology
// ================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeNavigation();
    initializeScrollAnimations();
    initializeFormHandling();
    initializeCounterAnimations();
    initializeLoadingScreen();
    initializeScrollToTop();
    initializeSmoothScrolling();
    initializeParallaxEffects();
});

/* ========================================
   MY ENHANCED INTERACTIVE FEATURES
   ======================================== */

// Advanced AI Loading Screen with Progress
class EnhancedLoadingScreen {
    constructor() {
        this.progress = 0;
        this.messages = [
            "يتم تحضير الذكاء الاصطناعي...",
            "تهيئة الشبكة العصبية...",
            "تحميل خوارزميات التعلم الآلي...",
            "ربط قاعدة البيانات الذكية...",
            "تفعيل المساعد الافتراضي...",
            "اكتمل التحضير! مرحباً بك 🚀"
        ];
        this.currentMessage = 0;
        this.init();
    }

    init() {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="loading-container">
                <div class="ai-brain">
                    <div class="neural-network">
                        <div class="neuron"></div>
                        <div class="neuron"></div>
                        <div class="neuron"></div>
                        <div class="neuron"></div>
                        <div class="neuron"></div>
                    </div>
                </div>
                <div class="typing-animation">
                    <h3>🤖 DrScent AI Assistant</h3>
                    <div class="typing-text">${this.messages[0]}</div>
                    <div class="loading-progress-container">
                        <div class="loading-progress">
                            <div class="progress-sparkle"></div>
                        </div>
                    </div>
                    <div class="progress-percentage">0%</div>
                </div>
            </div>
            <div class="loading-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <div class="digital-rain">
                <div class="code-line">if (ai.ready) { launch(); }</div>
                <div class="code-line">neural.network.activate();</div>
                <div class="code-line">ml.algorithm.optimize();</div>
                <div class="code-line">bot.intelligence++;</div>
            </div>
        `;
        
        document.body.prepend(loadingScreen);
        this.startLoading();
    }

    startLoading() {
        const progressBar = document.querySelector('.loading-progress');
        const percentage = document.querySelector('.progress-percentage');
        const typingText = document.querySelector('.typing-text');
        
        const interval = setInterval(() => {
            this.progress += Math.random() * 15 + 5;
            
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                setTimeout(() => this.completeLoading(), 1000);
            }
            
            progressBar.style.width = this.progress + '%';
            percentage.textContent = Math.floor(this.progress) + '%';
            
            // Change message based on progress
            const messageIndex = Math.floor((this.progress / 100) * this.messages.length);
            if (messageIndex !== this.currentMessage && messageIndex < this.messages.length) {
                this.currentMessage = messageIndex;
                typingText.textContent = this.messages[messageIndex];
            }
        }, 300);
    }

    completeLoading() {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transform = 'scale(1.1)';
        setTimeout(() => {
            loadingScreen.remove();
            this.initMainFeatures();
        }, 800);
    }

    initMainFeatures() {
        new CursorFollower();
        new MusicController();
        new ThemeManager();
        new InteractiveStats();
        new ChatDemo();
        new TestimonialsCarousel();
        new ConfettiSystem();
    }
}

// Advanced Cursor Follower with Magnetic Effect
class CursorFollower {
    constructor() {
        this.follower = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.followerX = 0;
        this.followerY = 0;
        this.init();
    }

    init() {
        this.follower = document.createElement('div');
        this.follower.className = 'cursor-follower';
        document.body.appendChild(this.follower);

        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        this.animate();
        this.addMagneticEffects();
    }

    animate() {
        this.followerX += (this.mouseX - this.followerX) * 0.1;
        this.followerY += (this.mouseY - this.followerY) * 0.1;
        
        this.follower.style.left = this.followerX - 10 + 'px';
        this.follower.style.top = this.followerY - 10 + 'px';
        
        requestAnimationFrame(() => this.animate());
    }

    addMagneticEffects() {
        const magneticElements = document.querySelectorAll('.btn, .feature-card, .benefit-card');
        
        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.follower.style.transform = 'scale(2)';
                this.follower.style.background = 'radial-gradient(circle, rgba(255, 107, 107, 0.8) 0%, transparent 70%)';
            });
            
            element.addEventListener('mouseleave', () => {
                this.follower.style.transform = 'scale(1)';
                this.follower.style.background = 'radial-gradient(circle, rgba(102, 126, 234, 0.8) 0%, transparent 70%)';
            });
        });
    }
}

// Enhanced Music Controller with Visualizer
class MusicController {
    constructor() {
        this.isPlaying = false;
        this.audioContext = null;
        this.analyser = null;
        this.init();
    }

    init() {
        const musicControl = document.createElement('div');
        musicControl.className = 'music-control';
        musicControl.innerHTML = `
            <div class="music-button" id="musicToggle">
                <i class="fas fa-music"></i>
            </div>
            <div class="music-visualizer">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        `;
        
        document.body.appendChild(musicControl);
        
        document.getElementById('musicToggle').addEventListener('click', () => {
            this.toggle();
        });
    }

    toggle() {
        const button = document.getElementById('musicToggle');
        const bars = document.querySelectorAll('.music-visualizer .bar');
        
        if (!this.isPlaying) {
            button.innerHTML = '<i class="fas fa-pause"></i>';
            bars.forEach(bar => {
                bar.style.animationPlayState = 'running';
                bar.style.animationDelay = Math.random() * 0.5 + 's';
            });
            this.isPlaying = true;
            this.showNotification('🎵 تم تشغيل الموسيقى الخلفية');
        } else {
            button.innerHTML = '<i class="fas fa-music"></i>';
            bars.forEach(bar => {
                bar.style.animationPlayState = 'paused';
            });
            this.isPlaying = false;
            this.showNotification('⏸️ تم إيقاف الموسيقى');
        }
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Smart Theme Manager
class ThemeManager {
    constructor() {
        this.isDark = false;
        this.init();
    }

    init() {
        const themeControl = document.createElement('div');
        themeControl.className = 'theme-switcher';
        themeControl.innerHTML = `
            <div class="theme-button" id="themeToggle">
                <i class="fas fa-moon"></i>
            </div>
        `;
        
        document.body.appendChild(themeControl);
        
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggle();
        });

        // Auto detect user's preferred theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.toggle();
        }
    }

    toggle() {
        const button = document.getElementById('themeToggle');
        
        if (!this.isDark) {
            document.body.classList.add('dark-theme');
            button.innerHTML = '<i class="fas fa-sun"></i>';
            this.isDark = true;
            this.showThemeNotification('🌙 تم تفعيل الوضع الليلي');
        } else {
            document.body.classList.remove('dark-theme');
            button.innerHTML = '<i class="fas fa-moon"></i>';
            this.isDark = false;
            this.showThemeNotification('☀️ تم تفعيل الوضع النهاري');
        }
    }

    showThemeNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(78, 205, 196, 0.9);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            z-index: 10000;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(-100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Interactive Statistics Dashboard
class InteractiveStats {
    constructor() {
        this.stats = [
            { icon: '🚀', number: 50000, label: 'مستخدم نشط يومياً', percentage: 85 },
            { icon: '💬', number: 2500000, label: 'رسالة معالجة', percentage: 92 },
            { icon: '🎯', number: 98, label: '% دقة في الاستجابة', percentage: 98 },
            { icon: '⚡', number: 0.3, label: 'ثانية متوسط الاستجابة', percentage: 95 }
        ];
        this.init();
    }

    init() {
        // Find or create stats section
        let statsSection = document.querySelector('.interactive-stats');
        if (!statsSection) {
            statsSection = document.createElement('section');
            statsSection.className = 'interactive-stats';
            statsSection.innerHTML = `
                <div class="container">
                    <h2 class="section-title">📊 إحصائيات مذهلة في الوقت الفعلي</h2>
                    <div class="stats-dashboard" id="statsDashboard"></div>
                </div>
            `;
            
            // Insert after features section
            const featuresSection = document.querySelector('.features');
            if (featuresSection) {
                featuresSection.after(statsSection);
            } else {
                document.querySelector('main').appendChild(statsSection);
            }
        }

        this.createStatCards();
        this.observeStats();
    }

    createStatCards() {
        const dashboard = document.getElementById('statsDashboard');
        
        this.stats.forEach((stat, index) => {
            const card = document.createElement('div');
            card.className = 'stat-card';
            card.innerHTML = `
                <div class="stat-icon">${stat.icon}</div>
                <span class="stat-number" data-target="${stat.number}">0</span>
                <div class="stat-label">${stat.label}</div>
                <div class="stat-graph">
                    <div class="graph-bar" data-percentage="${stat.percentage}"></div>
                </div>
            `;
            
            dashboard.appendChild(card);
        });
    }

    observeStats() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStats();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.querySelector('.stats-dashboard'));
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const graphBars = document.querySelectorAll('.graph-bar');

        statNumbers.forEach((number, index) => {
            const target = parseInt(number.dataset.target);
            const increment = target / 100;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
            }, 50);
        });

        graphBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.dataset.percentage + '%';
            }, index * 200);
        });
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
}

// Enhanced Chat Demo with AI Responses
class ChatDemo {
    constructor() {
        this.currentDemo = 0;
        this.demos = [
            {
                title: "استشارة طبية سريعة",
                messages: [
                    { type: 'user', text: 'عندي صداع مستمر منذ يومين، إيش ممكن يكون السبب؟', time: '14:30' },
                    { type: 'bot', text: 'أفهم قلقك بخصوص الصداع. هناك عدة أسباب محتملة مثل:\n• التوتر والإرهاق\n• قلة النوم\n• الجفاف\n• مشاكل في النظر\n\nأنصحك بشرب الماء والراحة، وإذا استمر راجع طبيب', time: '14:31' }
                ]
            },
            {
                title: "تذكير بالأدوية",
                messages: [
                    { type: 'bot', text: '⏰ تذكير: حان وقت تناول دواء الضغط (أملوديبين 5mg)', time: '08:00' },
                    { type: 'user', text: 'شكراً، تم تناول الدواء ✅', time: '08:05' },
                    { type: 'bot', text: 'ممتاز! تم تسجيل تناول الدواء. موعد الجرعة التالية غداً 8:00 صباحاً', time: '08:05' }
                ]
            },
            {
                title: "تشخيص الأعراض",
                messages: [
                    { type: 'user', text: 'أحس بألم في المعدة بعد الأكل', time: '13:15' },
                    { type: 'bot', text: 'سأساعدك في تحليل الأعراض:\n• متى يحدث الألم؟ (مباشرة/بعد ساعة/بعد ساعات)\n• نوع الألم؟ (حارق/طاعن/مغص)\n• هل يختفي مع الأدوية؟', time: '13:16' },
                    { type: 'user', text: 'ألم حارق بعد الأكل مباشرة ويخف مع الحليب', time: '13:17' },
                    { type: 'bot', text: 'الأعراض تشير لاحتمالية حموضة المعدة. أنصح بـ:\n✅ تجنب الطعام الحار والحمضي\n✅ تناول وجبات صغيرة\n✅ عدم النوم بعد الأكل مباشرة\n⚠️ راجع طبيب إذا استمر الألم', time: '13:18' }
                ]
            }
        ];
        this.init();
    }

    init() {
        // Find or create demo section
        let demoSection = document.querySelector('.demo-section');
        if (!demoSection) {
            demoSection = document.createElement('section');
            demoSection.className = 'demo-section';
            demoSection.innerHTML = `
                <div class="container">
                    <h2 class="section-title">📱 شاهد DrScent في العمل</h2>
                    <div class="demo-container">
                        <div class="phone-mockup">
                            <div class="phone-screen">
                                <div class="whatsapp-chat">
                                    <div class="chat-header">
                                        <div class="avatar">🤖</div>
                                        <div class="contact-info">
                                            <div class="name">DrScent AI</div>
                                            <div class="status">متصل الآن • مساعد طبي ذكي</div>
                                        </div>
                                    </div>
                                    <div class="chat-messages" id="chatMessages"></div>
                                    <div class="chat-input">
                                        <input type="text" placeholder="اكتب رسالتك هنا..." disabled>
                                        <button class="send-btn"><i class="fas fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="demo-features">
                            <h3>✨ ميزات التفاعل المباشر</h3>
                            <div class="feature-buttons" id="demoButtons"></div>
                        </div>
                    </div>
                </div>
                <div class="hologram-effect">
                    <div class="hologram-ring"></div>
                    <div class="hologram-ring"></div>
                    <div class="hologram-ring"></div>
                </div>
            `;
            
            // Insert after stats section
            const statsSection = document.querySelector('.interactive-stats');
            if (statsSection) {
                statsSection.after(demoSection);
            } else {
                document.querySelector('main').appendChild(demoSection);
            }
        }

        this.createDemoButtons();
        this.startDemo();
    }

    createDemoButtons() {
        const buttonsContainer = document.getElementById('demoButtons');
        
        this.demos.forEach((demo, index) => {
            const button = document.createElement('button');
            button.className = 'demo-btn';
            button.textContent = demo.title;
            button.addEventListener('click', () => this.switchDemo(index));
            buttonsContainer.appendChild(button);
        });
    }

    switchDemo(index) {
        this.currentDemo = index;
        this.clearChat();
        this.playDemo();
    }

    startDemo() {
        this.playDemo();
        
        // Auto-cycle through demos
        setInterval(() => {
            this.currentDemo = (this.currentDemo + 1) % this.demos.length;
            this.clearChat();
            setTimeout(() => this.playDemo(), 1000);
        }, 15000);
    }

    clearChat() {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
    }

    playDemo() {
        const demo = this.demos[this.currentDemo];
        const chatMessages = document.getElementById('chatMessages');
        
        demo.messages.forEach((message, index) => {
            setTimeout(() => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${message.type}`;
                messageDiv.innerHTML = `
                    <div class="message-content">
                        ${message.text.replace(/\n/g, '<br>')}
                        <div class="message-time">${message.time}</div>
                    </div>
                `;
                
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, index * 2000);
        });
    }
}

// Enhanced Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.currentIndex = 0;
        this.testimonials = [
            {
                name: "د. أحمد محمد",
                role: "طبيب عام",
                avatar: "أ",
                text: "DrScent غيّر طريقة تفاعلي مع المرضى. الاستجابات دقيقة والتشخيص الأولي ممتاز!",
                stars: 5
            },
            {
                name: "فاطمة علي",
                role: "مريضة سكري",
                avatar: "ف",
                text: "التذكير بالأدوية ومتابعة السكر يومياً ساعدني كثيراً في السيطرة على حالتي.",
                stars: 5
            },
            {
                name: "محمد الحسن",
                role: "صيدلاني",
                avatar: "م",
                text: "المعلومات الدوائية والتفاعلات دقيقة جداً. أعتمد عليه في استشاراتي اليومية.",
                stars: 5
            }
        ];
        this.init();
    }

    init() {
        // Find or create testimonials section
        let testimonialsSection = document.querySelector('.testimonials-section');
        if (!testimonialsSection) {
            testimonialsSection = document.createElement('section');
            testimonialsSection.className = 'testimonials-section';
            testimonialsSection.innerHTML = `
                <div class="container">
                    <h2 class="section-title">💬 ماذا يقول عملاؤنا</h2>
                    <div class="testimonials-carousel" id="testimonialsCarousel"></div>
                    <div class="carousel-indicators" id="carouselIndicators"></div>
                </div>
            `;
            
            // Insert after demo section
            const demoSection = document.querySelector('.demo-section');
            if (demoSection) {
                demoSection.after(testimonialsSection);
            } else {
                document.querySelector('main').appendChild(testimonialsSection);
            }
        }

        this.createTestimonials();
        this.createIndicators();
        this.startCarousel();
    }

    createTestimonials() {
        const carousel = document.getElementById('testimonialsCarousel');
        
        this.testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
            card.innerHTML = `
                <div class="testimonial-content">
                    <div class="stars">${'⭐'.repeat(testimonial.stars)}</div>
                    <p>"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">${testimonial.avatar}</div>
                        <div class="author-info">
                            <h4>${testimonial.name}</h4>
                            <span>${testimonial.role}</span>
                        </div>
                    </div>
                </div>
            `;
            
            carousel.appendChild(card);
        });
    }

    createIndicators() {
        const indicators = document.getElementById('carouselIndicators');
        
        this.testimonials.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(indicator);
        });
    }

    goToSlide(index) {
        // Remove active from current
        document.querySelector('.testimonial-card.active').classList.remove('active');
        document.querySelector('.indicator.active').classList.remove('active');
        
        // Add active to new
        document.querySelectorAll('.testimonial-card')[index].classList.add('active');
        document.querySelectorAll('.indicator')[index].classList.add('active');
        
        this.currentIndex = index;
    }

    startCarousel() {
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
            this.goToSlide(this.currentIndex);
        }, 5000);
    }
}

// Confetti Celebration System
class ConfettiSystem {
    constructor() {
        this.colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
    }

    celebrate(event = 'general') {
        const count = event === 'major' ? 150 : 50;
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => this.createConfetti(), i * 10);
        }
    }

    createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}vw;
            width: 10px;
            height: 10px;
            background: ${this.colors[Math.floor(Math.random() * this.colors.length)]};
            transform: rotate(${Math.random() * 360}deg);
            z-index: 10000;
            pointer-events: none;
            animation: confetti-fall 3s ease-out forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Enhanced Success Stories Counter
class SuccessStoriesCounter {
    constructor() {
        this.init();
    }

    init() {
        // Find or create success stories section
        let successSection = document.querySelector('.success-stories');
        if (!successSection) {
            successSection = document.createElement('section');
            successSection.className = 'success-stories';
            successSection.innerHTML = `
                <div class="container">
                    <h2 class="section-title">🏆 قصص نجاح ملهمة</h2>
                    <div class="success-grid">
                        <div class="success-item">
                            <div class="success-icon">👥</div>
                            <span class="success-number" data-target="250000">0</span>
                            <div class="success-label">مستخدم سعيد</div>
                        </div>
                        <div class="success-item">
                            <div class="success-icon">🏥</div>
                            <span class="success-number" data-target="1500">0</span>
                            <div class="success-label">مستشفى ومركز طبي</div>
                        </div>
                        <div class="success-item">
                            <div class="success-icon">💊</div>
                            <span class="success-number" data-target="50000">0</span>
                            <div class="success-label">استشارة دوائية يومياً</div>
                        </div>
                        <div class="success-item">
                            <div class="success-icon">🌍</div>
                            <span class="success-number" data-target="25">0</span>
                            <div class="success-label">دولة عربية</div>
                        </div>
                    </div>
                </div>
            `;
            
            // Insert before footer or at end of main
            const footer = document.querySelector('footer');
            if (footer) {
                footer.before(successSection);
            } else {
                document.querySelector('main').appendChild(successSection);
            }
        }

        this.observeSection();
    }

    observeSection() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(document.querySelector('.success-stories'));
    }

    animateCounters() {
        const counters = document.querySelectorAll('.success-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const increment = target / 100;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                counter.textContent = this.formatNumber(Math.floor(current));
            }, 30);
        });
    }

    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }
}

// My Advanced Personal Touch Features - Professional Enhancements

// Enhanced Loading Screen with Progress Tracking
function initializeAdvancedLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.querySelector('.loading-progress');
    const progressPercentage = document.querySelector('.progress-percentage');
    
    if (!loadingScreen) return;
    
    let progress = 0;
    const steps = [
        { text: 'تحميل الواجهة...', target: 20 },
        { text: 'تهيئة الذكاء الاصطناعي...', target: 45 },
        { text: 'تحضير العرض التوضيحي...', target: 70 },
        { text: 'تحسين الأداء...', target: 90 },
        { text: 'مرحباً بك في Dr. Scent AI!', target: 100 }
    ];
    
    let currentStep = 0;
    const typingElement = document.querySelector('.typing-text');
    
    const updateProgress = () => {
        if (currentStep >= steps.length) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    if (loadingScreen.parentNode) {
                        loadingScreen.parentNode.removeChild(loadingScreen);
                    }
                }, 500);
            }, 1000);
            return;
        }
        
        const step = steps[currentStep];
        typingElement.textContent = step.text;
        
        const interval = setInterval(() => {
            progress += Math.random() * 3 + 1;
            if (progress >= step.target) {
                progress = step.target;
                clearInterval(interval);
                currentStep++;
                setTimeout(updateProgress, 800);
            }
            
            progressBar.style.width = progress + '%';
            progressPercentage.textContent = Math.floor(progress) + '%';
        }, 100);
    };
    
    updateProgress();
}

// Interactive Cursor Follower
function initializeCursorFollower() {
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    follower.id = 'cursorFollower';
    document.body.appendChild(follower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animateFollower = () => {
        const speed = 0.1;
        followerX += (mouseX - followerX) * speed;
        followerY += (mouseY - followerY) * speed;
        
        follower.style.transform = `translate(${followerX - 10}px, ${followerY - 10}px)`;
        requestAnimationFrame(animateFollower);
    };
    
    animateFollower();
    
    // Enhanced cursor effects on hover
    const interactiveElements = document.querySelectorAll('a, button, .card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform += ' scale(2)';
            follower.style.background = 'radial-gradient(circle, rgba(255, 107, 107, 0.8) 0%, rgba(78, 205, 196, 0.5) 100%)';
        });
        
        el.addEventListener('mouseleave', () => {
            follower.style.transform = follower.style.transform.replace(' scale(2)', '');
            follower.style.background = 'radial-gradient(circle, rgba(102, 126, 234, 0.6) 0%, rgba(118, 75, 162, 0.3) 100%)';
        });
    });
}

// Advanced Music Control with Background Sounds
function initializeMusicControl() {
    const musicControl = document.getElementById('musicControl');
    const musicButton = document.querySelector('.music-button');
    
    if (window.innerWidth > 768) {
        musicControl.style.display = 'block';
    }
    
    let isPlaying = false;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    musicButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseAmbientSound();
            musicButton.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            playAmbientSound();
            musicButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });
    
    function playAmbientSound() {
        // Create subtle ambient background tones
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        
        oscillator.start();
        
        // Animate visualizer bars
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.animationPlayState = 'running';
        });
    }
    
    function pauseAmbientSound() {
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.animationPlayState = 'paused';
        });
    }
}

// Advanced Theme Switcher
function initializeThemeSwitcher() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const themeButton = document.querySelector('.theme-button');
    
    if (window.innerWidth > 768) {
        themeSwitcher.style.display = 'block';
    }
    
    let isDark = false;
    
    themeButton.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('dark-theme', isDark);
        
        themeButton.innerHTML = isDark ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
        
        // Smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
        
        // Save preference
        localStorage.setItem('darkTheme', isDark);
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    if (savedTheme) {
        themeButton.click();
    }
}

// Enhanced Demo Chat with AI Responses
function initializeAdvancedDemo() {
    const demoInput = document.getElementById('demoInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
    const demoButtons = document.querySelectorAll('.demo-btn');
    
    const aiResponses = {
        'أسعار': 'لدينا عطور متنوعة تبدأ من 50$ وحتى 500$ 💰\nما هو النوع المفضل لك؟',
        'العطور المتوفرة': 'لدينا مجموعة رائعة:\n🌹 عطور رومانسية\n🌿 عطور طبيعية\n✨ عطور فاخرة\n🎭 عطور كلاسيكية',
        'طلب': 'رائع! سأساعدك في الطلب 🛒\nيرجى تحديد:\n1️⃣ نوع العطر\n2️⃣ الكمية المطلوبة\n3️⃣ عنوان التوصيل',
        'التواصل': 'يمكنك التواصل معنا عبر:\n📞 +96170106083\n📧 hasanalzein2024@gmail.com\n💬 WhatsApp متاح 24/7'
    };
    
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.innerHTML = text.replace(/\n/g, '<br>');
        
        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = new Date().toLocaleTimeString('ar-SA', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(timeDiv);
        chatMessages.appendChild(messageDiv);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Typing animation for bot messages
        if (!isUser) {
            contentDiv.style.opacity = '0';
            contentDiv.style.transform = 'translateY(10px)';
            setTimeout(() => {
                contentDiv.style.transition = 'all 0.3s ease';
                contentDiv.style.opacity = '1';
                contentDiv.style.transform = 'translateY(0)';
            }, 500);
        }
    }
    
    function getAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const [key, response] of Object.entries(aiResponses)) {
            if (lowerMessage.includes(key.toLowerCase())) {
                return response;
            }
        }
        
        // Default intelligent response
        return `شكراً لك على رسالتك "${message}" 🌺\nسأقوم بتحليل طلبك وسأعود إليك بأفضل التوصيات المناسبة لتفضيلاتك!\n\nهل تريد معرفة المزيد عن خدماتنا؟`;
    }
    
    function sendMessage() {
        const message = demoInput.value.trim();
        if (!message) return;
        
        addMessage(message, true);
        demoInput.value = '';
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        setTimeout(() => {
            chatMessages.removeChild(typingDiv);
            addMessage(getAIResponse(message));
        }, 1500);
    }
    
    sendBtn.addEventListener('click', sendMessage);
    demoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
    
    demoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            demoInput.value = btn.dataset.message;
            sendMessage();
        });
    });
}

// Live Analytics Dashboard
function initializeLiveAnalytics() {
    const analyticsBtn = document.createElement('button');
    analyticsBtn.innerHTML = '📊';
    analyticsBtn.style.cssText = `
        position: fixed;
        top: 240px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--success-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
        transition: var(--transition);
    `;
    
    if (window.innerWidth > 768) {
        document.body.appendChild(analyticsBtn);
    }
    
    const dashboard = document.getElementById('analyticsDashboard');
    let isVisible = false;
    let sessionStartTime = Date.now();
    let sectionsVisited = new Set();
    
    analyticsBtn.addEventListener('click', () => {
        isVisible = !isVisible;
        dashboard.style.display = isVisible ? 'block' : 'none';
        analyticsBtn.style.transform = isVisible ? 'scale(1.1)' : 'scale(1)';
    });
    
    // Update analytics in real-time
    setInterval(() => {
        document.getElementById('currentVisitors').textContent = Math.floor(Math.random() * 5) + 1;
        
        const sessionTime = Math.floor((Date.now() - sessionStartTime) / 1000);
        const minutes = Math.floor(sessionTime / 60);
        const seconds = sessionTime % 60;
        document.getElementById('sessionTime').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        document.getElementById('sectionsVisited').textContent = sectionsVisited.size;
    }, 1000);
    
    // Track section visits
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sectionsVisited.add(entry.target.id);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Easter Egg Activation
function initializeEasterEgg() {
    let konami = [];
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', (e) => {
        konami.push(e.code);
        if (konami.length > konamiCode.length) {
            konami.shift();
        }
        
        if (konami.length === konamiCode.length && 
            konami.every((key, index) => key === konamiCode[index])) {
            document.getElementById('easterEgg').style.display = 'flex';
            konami = [];
            
            // Confetti effect
            createConfetti();
        }
    });
    
    // Secret click combination
    let clickCount = 0;
    document.querySelector('.logo').addEventListener('click', () => {
        clickCount++;
        if (clickCount === 7) {
            document.getElementById('easterEgg').style.display = 'flex';
            clickCount = 0;
            createConfetti();
        }
        setTimeout(() => { clickCount = 0; }, 3000);
    });
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d', '#6c5ce7'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            z-index: 10001;
            pointer-events: none;
            animation: confettiFall 3s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 3000);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// AI Chat Widget Enhancement
function initializeAIChatWidget() {
    const chatLauncher = document.getElementById('chat-launcher');
    const chatWidget = document.getElementById('ai-chat-widget');
    const chatToggle = document.querySelector('.chat-toggle');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    
    let isWidgetOpen = false;
    
    chatLauncher.addEventListener('click', () => {
        isWidgetOpen = !isWidgetOpen;
        chatWidget.classList.toggle('active', isWidgetOpen);
        chatLauncher.style.display = isWidgetOpen ? 'none' : 'flex';
    });
    
    chatToggle.addEventListener('click', () => {
        isWidgetOpen = false;
        chatWidget.classList.remove('active');
        chatLauncher.style.display = 'flex';
    });
    
    // Enhanced chat functionality
    const responses = [
        'مرحباً! كيف يمكنني مساعدتك اليوم؟ 🌺',
        'أستطيع مساعدتك في اختيار العطر المثالي! ✨',
        'لدينا عروض خاصة اليوم! هل تريد معرفة المزيد؟ 💎',
        'أي نوع من العطور تفضل؟ رومانسي، كلاسيكي، أم عصري؟ 🎭'
    ];
    
    function addChatMessage(message, isUser = false) {
        const messagesContainer = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${isUser ? 'user' : 'bot'}`;
        
        messageDiv.innerHTML = `
            <div class="message-avatar">${isUser ? '👤' : '🤖'}</div>
            <div class="message-content">${message}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    sendMessage.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            addChatMessage(message, true);
            chatInput.value = '';
            
            setTimeout(() => {
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addChatMessage(randomResponse);
            }, 1000);
        }
    });
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage.click();
        }
    });
}

// Initialize all advanced features
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced initialization
    initializeAdvancedLoading();
    initializeCursorFollower();
    initializeMusicControl();
    initializeThemeSwitcher();
    initializeAdvancedDemo();
    initializeLiveAnalytics();
    initializeEasterEgg();
    initializeAIChatWidget();
    
    // Performance monitoring
    console.log('🚀 Dr. Scent AI - Advanced Features Loaded!');
    console.log('💡 Try the Konami Code for a surprise!');
    console.log('🎨 Professional touches by HMZ Technology');
    
    // Track page performance
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`⚡ Page fully loaded in ${loadTime.toFixed(2)}ms`);
        
        if (loadTime < 3000) {
            console.log('🎯 Excellent performance!');
        }
    });
});

// Navigation functionality
function initializeNavigation() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (hamburger.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        });
    });

    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animations for stats
                if (entry.target.classList.contains('stat') || 
                    entry.target.classList.contains('ai-stat') || 
                    entry.target.classList.contains('roi-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all elements that should animate
    const animatedElements = document.querySelectorAll(`
        .feature-card,
        .service-card,
        .benefit-card,
        .tech-card,
        .stat,
        .ai-stat,
        .roi-card,
        .timeline-item,
        .pricing-card,
        .reason-item,
        .contact-method
    `);

    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Counter animations for statistics
function initializeCounterAnimations() {
    // This will be triggered by the intersection observer
}

function animateCounter(element) {
    const numberElement = element.querySelector('.stat-number, .roi-percentage');
    if (!numberElement || numberElement.dataset.animated) return;

    const target = parseInt(numberElement.textContent.replace(/[^\d]/g, ''));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(counter);
        }
        
        // Format the number based on original content
        const originalText = numberElement.textContent;
        if (originalText.includes('%')) {
            numberElement.textContent = Math.floor(current) + '%';
        } else if (originalText.includes('+')) {
            numberElement.textContent = Math.floor(current) + '+';
        } else if (originalText.includes('/')) {
            numberElement.textContent = originalText.replace(/\d+/, Math.floor(current));
        } else {
            numberElement.textContent = Math.floor(current);
        }
    }, 16);

    numberElement.dataset.animated = 'true';
}

// Form handling
function initializeFormHandling() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('.btn');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.textContent = 'جاري الإرسال...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Simulate form submission (replace with actual form submission logic)
            setTimeout(() => {
                // Show success message
                showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
            }, 2000);
        });

        // Add form validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearValidation);
        });
    }
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove existing validation
    clearValidation(e);
    
    let isValid = true;
    let message = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'هذا الحقل مطلوب';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'يرجى إدخال بريد إلكتروني صحيح';
        }
    } else if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            message = 'يرجى إدخال رقم هاتف صحيح';
        }
    }
    
    if (!isValid) {
        showFieldError(field, message);
    }
    
    return isValid;
}

function clearValidation(e) {
    const field = e.target;
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.style.borderColor = '';
}

function showFieldError(field, message) {
    field.style.borderColor = 'var(--danger-color)';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: var(--danger-color);
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: block;
    `;
    
    field.parentNode.appendChild(errorElement);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success-color)' : type === 'error' ? 'var(--danger-color)' : 'var(--primary-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(400px);
        transition: var(--transition);
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Enhanced Loading screen with progress
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (!loadingScreen) return;
    
    // Simulate loading progress
    const progressBar = loadingScreen.querySelector('.loading-progress');
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Hide loading screen after completion
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    if (loadingScreen.parentNode) {
                        loadingScreen.parentNode.removeChild(loadingScreen);
                    }
                }, 500);
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 100);
}

// Initialize enhanced loading screen
document.addEventListener('DOMContentLoaded', function() {
    initializeLoadingScreen();
    // ...existing code...
});

// Scroll to top functionality
function initializeScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effects
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero, .final-result');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// WhatsApp integration
function initializeWhatsAppIntegration() {
    // Add WhatsApp floating button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/96170106083?text=مرحباً، أريد معرفة المزيد عن خدمات Dr. Scent AI';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: var(--whatsapp-green);
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
        text-decoration: none;
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        transition: var(--transition);
        animation: pulse-whatsapp 2s infinite;
    `;
    
    document.body.appendChild(whatsappBtn);
    
    // Add pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse-whatsapp {
            0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
        }
        
        .whatsapp-float:hover {
            transform: scale(1.1);
            background: #128c7e;
        }
    `;
    document.head.appendChild(style);
}

// Initialize WhatsApp integration
initializeWhatsAppIntegration();

// Analytics and tracking (placeholder)
function initializeAnalytics() {
    // Track page views
    console.log('Page viewed: Dr. Scent AI Presentation');
    
    // Track button clicks
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
        });
    });
    
    // Track section views
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Section viewed: ${entry.target.id}`);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Initialize analytics
initializeAnalytics();

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
optimizePerformance();

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.message, 'at', e.filename, ':', e.lineno);
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Export functions for external use
window.DrScentAI = {
    showNotification,
    animateCounter,
    validateField
};

// Print functionality
function setupPrintStyles() {
    const printBtn = document.createElement('button');
    printBtn.className = 'print-btn';
    printBtn.innerHTML = '<i class="fas fa-print"></i> طباعة العرض';
    printBtn.style.cssText = `
        position: fixed;
        top: 100px;
        left: 20px;
        background: var(--gradient-secondary);
        color: white;
        border: none;
        padding: 0.8rem 1.2rem;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: 0.9rem;
        z-index: 1000;
        box-shadow: var(--shadow-md);
        transition: var(--transition);
        display: none;
    `;
    
    document.body.appendChild(printBtn);
    
    // Show print button on larger screens
    if (window.innerWidth > 768) {
        printBtn.style.display = 'block';
    }
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
}

setupPrintStyles();

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'P' to print
    if (e.key === 'p' || e.key === 'P') {
        if (e.ctrlKey || e.metaKey) {
            // Let default print work
            return;
        }
        e.preventDefault();
        window.print();
    }
    
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Dynamic copyright year
function updateCopyrightYear() {
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    copyrightElements.forEach(element => {
        if (element.textContent.includes('2025')) {
            const currentYear = new Date().getFullYear();
            element.textContent = element.textContent.replace('2025', currentYear);
        }
    });
}

updateCopyrightYear();

console.log('🚀 Dr. Scent AI Presentation Website Loaded Successfully!');
console.log('💼 Powered by HMZ Technology');
console.log('📱 Contact: +96170106083');
console.log('📧 Email: hasanalzein2024@gmail.com');