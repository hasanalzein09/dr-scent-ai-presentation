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

// ========================================
// LOADING SCREEN WITH AI BRAIN ANIMATION
// ========================================
class LoadingScreen {
    constructor() {
        this.messages = [
            "جاري تحليل احتياجاتك...",
            "تحضير الذكاء الاصطناعي...",
            "إعداد المساعد الذكي...",
            "تهيئة تجربة فريدة...",
            "تجهيز الحلول المخصصة...",
            "تحميل قاعدة المعرفة...",
            "إطلاق المستقبل..."
        ];
        this.currentMessage = 0;
        this.progress = 0;
        this.init();
    }

    init() {
        this.createLoadingHTML();
        this.startAnimation();
    }

    createLoadingHTML() {
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
                    <h3>مرحباً بك في مستقبل التجارة الإلكترونية</h3>
                    <div class="typing-text"></div>
                </div>
                <div class="loading-progress-container">
                    <div class="loading-progress">
                        <div class="progress-sparkle"></div>
                    </div>
                </div>
                <div class="progress-percentage">0%</div>
            </div>
            <div class="loading-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
            <div class="digital-rain">
                <div class="code-line">if (success) {</div>
                <div class="code-line">  grow_business();</div>
                <div class="code-line">  increase_sales();</div>
                <div class="code-line">}</div>
            </div>
        `;
        document.body.appendChild(loadingScreen);
        this.loadingElement = loadingScreen;
    }

    startAnimation() {
        this.typeMessages();
        this.updateProgress();
    }

    typeMessages() {
        const typingElement = document.querySelector('.typing-text');
        let charIndex = 0;
        const currentMessage = this.messages[this.currentMessage];

        const typing = setInterval(() => {
            typingElement.textContent = currentMessage.substring(0, charIndex);
            charIndex++;

            if (charIndex > currentMessage.length) {
                clearInterval(typing);
                setTimeout(() => {
                    this.currentMessage = (this.currentMessage + 1) % this.messages.length;
                    if (this.currentMessage !== 0) {
                        setTimeout(() => this.typeMessages(), 500);
                    }
                }, 1000);
            }
        }, 100);
    }

    updateProgress() {
        const progressBar = document.querySelector('.loading-progress');
        const progressText = document.querySelector('.progress-percentage');
        
        const updateInterval = setInterval(() => {
            this.progress += Math.random() * 15;
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(updateInterval);
                setTimeout(() => this.hide(), 1000);
            }
            
            progressBar.style.width = this.progress + '%';
            progressText.textContent = Math.round(this.progress) + '%';
        }, 200);
    }

    hide() {
        this.loadingElement.classList.add('hidden');
        setTimeout(() => {
            this.loadingElement.remove();
        }, 500);
    }
}

// ========================================
// SUCCESS STORIES COUNTER ANIMATION
// ========================================
class SuccessCounter {
    constructor() {
        this.counters = {
            clients: { target: 500, current: 0, element: null },
            sales: { target: 2000000, current: 0, element: null },
            growth: { target: 300, current: 0, element: null },
            satisfaction: { target: 98, current: 0, element: null }
        };
        this.init();
    }

    init() {
        this.createCountersHTML();
        this.setupIntersectionObserver();
    }

    createCountersHTML() {
        const container = document.querySelector('.success-grid');
        container.innerHTML = `
            <div class="success-item" data-counter="clients">
                <div class="success-icon">👥</div>
                <span class="success-number">0</span>
                <div class="success-label">عميل راضٍ</div>
            </div>
            <div class="success-item" data-counter="sales">
                <div class="success-icon">💰</div>
                <span class="success-number">0</span>
                <div class="success-label">ريال مبيعات</div>
            </div>
            <div class="success-item" data-counter="growth">
                <div class="success-icon">📈</div>
                <span class="success-number">0</span>
                <div class="success-label">% نمو متوسط</div>
            </div>
            <div class="success-item" data-counter="satisfaction">
                <div class="success-icon">⭐</div>
                <span class="success-number">0</span>
                <div class="success-label">% رضا العملاء</div>
            </div>
        `;

        // ربط العناصر
        Object.keys(this.counters).forEach(key => {
            const element = document.querySelector(`[data-counter="${key}"] .success-number`);
            this.counters[key].element = element;
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.startCounting();
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.success-item').forEach(item => {
            observer.observe(item);
        });
    }

    startCounting() {
        Object.keys(this.counters).forEach(key => {
            this.animateCounter(key);
        });
    }

    animateCounter(counterKey) {
        const counter = this.counters[counterKey];
        const duration = 2000;
        const steps = 60;
        const increment = counter.target / steps;
        const stepDuration = duration / steps;

        const animate = () => {
            counter.current += increment;
            if (counter.current >= counter.target) {
                counter.current = counter.target;
            }

            this.updateDisplay(counterKey);

            if (counter.current < counter.target) {
                setTimeout(animate, stepDuration);
            }
        };

        animate();
    }

    updateDisplay(counterKey) {
        const counter = this.counters[counterKey];
        let displayValue = Math.round(counter.current);

        if (counterKey === 'sales') {
            displayValue = this.formatSalesNumber(displayValue);
        } else if (counterKey === 'clients') {
            displayValue = displayValue.toLocaleString('ar-SA');
        }

        counter.element.textContent = displayValue;
    }

    formatSalesNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K';
        }
        return num.toString();
    }
}

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================
class TestimonialsCarousel {
    constructor() {
        this.testimonials = [
            {
                name: "أحمد محمد",
                role: "مدير متجر الموضة",
                content: "زادت مبيعاتي 300% في أول شهر! المساعد الذكي يجيب على العملاء حتى في منتصف الليل.",
                rating: 5,
                avatar: "أ"
            },
            {
                name: "فاطمة السعد",
                role: "صاحبة متجر مجوهرات",
                content: "أصبح لدي وقت أكثر للتركيز على تطوير منتجاتي بدلاً من الرد على الاستفسارات المتكررة.",
                rating: 5,
                avatar: "ف"
            },
            {
                name: "خالد العتيبي",
                role: "مؤسس متجر إلكتروني",
                content: "الذكاء الاصطناعي فهم عملائي أكثر مني! التحويلات زادت بشكل مذهل.",
                rating: 5,
                avatar: "خ"
            },
            {
                name: "نورا القحطاني",
                role: "مديرة متجر تجميل",
                content: "العملاء يشعرون وكأنهم يتحدثون مع خبير تجميل حقيقي. النتائج رائعة!",
                rating: 5,
                avatar: "ن"
            }
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.createCarouselHTML();
        this.startAutoPlay();
    }

    createCarouselHTML() {
        const container = document.querySelector('.testimonials-carousel');
        
        // إنشاء البطاقات
        this.testimonials.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;
            card.innerHTML = `
                <div class="testimonial-content">
                    <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
                    <p>"${testimonial.content}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">${testimonial.avatar}</div>
                        <div class="author-info">
                            <h4>${testimonial.name}</h4>
                            <span>${testimonial.role}</span>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        // إنشاء المؤشرات
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        this.testimonials.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicators.appendChild(indicator);
        });
        
        container.parentElement.appendChild(indicators);
    }

    goToSlide(index) {
        // إخفاء البطاقة الحالية
        document.querySelectorAll('.testimonial-card').forEach(card => {
            card.classList.remove('active');
        });
        
        // إخفاء المؤشر الحالي
        document.querySelectorAll('.indicator').forEach(indicator => {
            indicator.classList.remove('active');
        });

        // إظهار البطاقة الجديدة
        document.querySelectorAll('.testimonial-card')[index].classList.add('active');
        document.querySelectorAll('.indicator')[index].classList.add('active');
        
        this.currentIndex = index;
    }

    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.goToSlide(nextIndex);
    }

    startAutoPlay() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
}

// ========================================
// INTERACTIVE DEMO
// ========================================
class InteractiveDemo {
    constructor() {
        this.demoMessages = {
            product: [
                { type: 'user', content: 'أريد معلومات عن منتجاتكم', time: '14:30' },
                { type: 'bot', content: 'أهلاً وسهلاً! يسعدني مساعدتك. ما نوع المنتج الذي تبحث عنه؟', time: '14:30' }
            ],
            price: [
                { type: 'user', content: 'كم سعر هذا المنتج؟', time: '14:32' },
                { type: 'bot', content: 'السعر 299 ريال مع خصم 20% لفترة محدودة! يصبح 239 ريال فقط', time: '14:32' }
            ],
            shipping: [
                { type: 'user', content: 'متى يوصل الطلب؟', time: '14:34' },
                { type: 'bot', content: 'التوصيل خلال 24-48 ساعة في الرياض و3-5 أيام للمناطق الأخرى 🚚', time: '14:34' }
            ],
            support: [
                { type: 'user', content: 'أحتاج مساعدة فنية', time: '14:36' },
                { type: 'bot', content: 'بالطبع! سأوصلك بفريق الدعم الفني خلال دقيقتين. أو يمكنني مساعدتك الآن؟', time: '14:36' }
            ]
        };
        this.init();
    }

    init() {
        this.setupDemoButtons();
        this.createInitialMessages();
    }

    setupDemoButtons() {
        document.querySelectorAll('.demo-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const scenario = e.target.dataset.scenario;
                this.playScenario(scenario);
            });
        });
    }

    createInitialMessages() {
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.innerHTML = `
            <div class="message bot">
                <div class="message-content">
                    مرحباً! أنا مساعدك الذكي 🤖<br>
                    كيف يمكنني مساعدتك اليوم؟
                </div>
                <div class="message-time">14:28</div>
            </div>
        `;
    }

    playScenario(scenario) {
        const messages = this.demoMessages[scenario];
        const chatMessages = document.querySelector('.chat-messages');
        
        // مسح الرسائل السابقة
        setTimeout(() => {
            chatMessages.innerHTML = '';
            this.createInitialMessages();
            
            // إضافة الرسائل الجديدة تدريجياً
            messages.forEach((message, index) => {
                setTimeout(() => {
                    this.addMessage(message);
                }, (index + 1) * 1500);
            });
        }, 500);
    }

    addMessage(message) {
        const chatMessages = document.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.type}`;
        messageDiv.innerHTML = `
            <div class="message-content">${message.content}</div>
            <div class="message-time">${message.time}</div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// ========================================
// INTERACTIVE STATS DASHBOARD
// ========================================
class StatsDashboard {
    constructor() {
        this.stats = {
            responses: { target: 50000, current: 0, suffix: '', label: 'استفسار تم الرد عليه' },
            speed: { target: 3, current: 0, suffix: 'ث', label: 'متوسط وقت الاستجابة' },
            satisfaction: { target: 97, current: 0, suffix: '%', label: 'معدل رضا العملاء' },
            conversion: { target: 45, current: 0, suffix: '%', label: 'تحسن معدل التحويل' }
        };
        this.init();
    }

    init() {
        this.createStatsHTML();
        this.setupIntersectionObserver();
    }

    createStatsHTML() {
        const container = document.querySelector('.stats-dashboard');
        container.innerHTML = Object.keys(this.stats).map(key => {
            const stat = this.stats[key];
            const icon = this.getStatIcon(key);
            return `
                <div class="stat-card" data-stat="${key}">
                    <div class="stat-icon">${icon}</div>
                    <span class="stat-number">0${stat.suffix}</span>
                    <div class="stat-label">${stat.label}</div>
                    <div class="stat-graph">
                        <div class="graph-bar" data-percentage="${this.getPercentage(key)}"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getStatIcon(key) {
        const icons = {
            responses: '💬',
            speed: '⚡',
            satisfaction: '😊',
            conversion: '📊'
        };
        return icons[key];
    }

    getPercentage(key) {
        const stat = this.stats[key];
        if (key === 'responses') return Math.min((stat.target / 100000) * 100, 100);
        if (key === 'speed') return 100 - ((stat.target / 10) * 100);
        return stat.target;
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.animateStats();
                    observer.unobserve(entry.target);
                }
            });
        });

        document.querySelectorAll('.stat-card').forEach(card => {
            observer.observe(card);
        });
    }

    animateStats() {
        Object.keys(this.stats).forEach(key => {
            this.animateStat(key);
        });
    }

    animateStat(statKey) {
        const stat = this.stats[statKey];
        const element = document.querySelector(`[data-stat="${statKey}"] .stat-number`);
        const graphBar = document.querySelector(`[data-stat="${statKey}"] .graph-bar`);
        
        const duration = 2000;
        const steps = 60;
        const increment = stat.target / steps;
        const stepDuration = duration / steps;

        const animate = () => {
            stat.current += increment;
            if (stat.current >= stat.target) {
                stat.current = stat.target;
            }

            let displayValue = Math.round(stat.current);
            if (statKey === 'responses') {
                displayValue = displayValue.toLocaleString('ar-SA');
            }
            
            element.textContent = displayValue + stat.suffix;

            if (stat.current < stat.target) {
                setTimeout(animate, stepDuration);
            } else {
                // تحريك شريط التقدم
                setTimeout(() => {
                    graphBar.style.width = graphBar.dataset.percentage + '%';
                }, 500);
            }
        };

        animate();
    }
}

// ========================================
// AI CHAT WIDGET
// ========================================
class AIChatWidget {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.responses = [
            "مرحباً! كيف يمكنني مساعدتك اليوم؟",
            "هذا سؤال رائع! دعني أساعدك في ذلك.",
            "بالتأكيد يمكنني مساعدتك. هل تريد معرفة المزيد عن خدماتنا؟",
            "أفهم احتياجك. سأوصلك بفريق المبيعات للحصول على عرض مخصص.",
            "شكراً لك على اهتمامك! هل تريد جدولة مكالمة مجانية؟"
        ];
        this.init();
    }

    init() {
        this.createChatHTML();
        this.setupEventListeners();
        this.showWelcomeMessage();
    }

    createChatHTML() {
        const chatLauncher = document.createElement('button');
        chatLauncher.className = 'chat-launcher';
        chatLauncher.innerHTML = `
            💬
            <span class="chat-badge">جديد</span>
        `;
        document.body.appendChild(chatLauncher);

        const chatWidget = document.createElement('div');
        chatWidget.className = 'ai-chat-widget';
        chatWidget.innerHTML = `
            <div class="chat-header">
                <div>
                    <i class="fas fa-robot"></i>
                    المساعد الذكي
                </div>
                <button class="chat-toggle">✕</button>
            </div>
            <div class="chat-messages" id="chat-messages"></div>
            <div class="chat-input-area">
                <input type="text" placeholder="اكتب رسالتك هنا..." id="chat-input">
                <button id="send-btn">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        document.body.appendChild(chatWidget);

        this.chatWidget = chatWidget;
        this.chatLauncher = chatLauncher;
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
    }

    setupEventListeners() {
        this.chatLauncher.addEventListener('click', () => this.toggleChat());
        document.querySelector('.chat-toggle').addEventListener('click', () => this.toggleChat());
        
        document.getElementById('send-btn').addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.chatWidget.classList.toggle('active', this.isOpen);
        this.chatLauncher.style.display = this.isOpen ? 'none' : 'flex';
        
        if (this.isOpen) {
            this.chatInput.focus();
            document.querySelector('.chat-badge').style.display = 'none';
        }
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.addMessage('مرحباً! أنا هنا لمساعدتك. اضغط للمحادثة 👋', 'bot');
        }, 3000);
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.chatInput.value = '';

        // رد تلقائي من البوت
        setTimeout(() => {
            const response = this.getRandomResponse();
            this.addMessage(response, 'bot');
        }, 1000);
    }

    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${type}`;
        messageDiv.innerHTML = `
            <div class="message-avatar">${type === 'bot' ? '🤖' : '👤'}</div>
            <div class="message-content">${content}</div>
        `;
        
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        
        this.messages.push({ content, type, timestamp: new Date() });
    }

    getRandomResponse() {
        return this.responses[Math.floor(Math.random() * this.responses.length)];
    }
}

// ========================================
// ADVANCED UI EFFECTS
// ========================================
class AdvancedUIEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createCursorFollower();
        this.createMusicControl();
        this.createThemeSwitcher();
        this.setupParallaxEffects();
        this.createFloatingElements();
    }

    createCursorFollower() {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-follower';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    createMusicControl() {
        const musicControl = document.createElement('div');
        musicControl.className = 'music-control';
        musicControl.innerHTML = `
            <button class="music-button">
                🎵
            </button>
            <div class="music-visualizer">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        `;
        document.body.appendChild(musicControl);

        let isPlaying = false;
        musicControl.querySelector('.music-button').addEventListener('click', () => {
            isPlaying = !isPlaying;
            const bars = musicControl.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.animationPlayState = isPlaying ? 'running' : 'paused';
            });
            musicControl.querySelector('.music-button').textContent = isPlaying ? '🔇' : '🎵';
        });
    }

    createThemeSwitcher() {
        const themeSwitcher = document.createElement('div');
        themeSwitcher.className = 'theme-switcher';
        themeSwitcher.innerHTML = `
            <button class="theme-button">🌙</button>
        `;
        document.body.appendChild(themeSwitcher);

        let isDark = false;
        themeSwitcher.querySelector('.theme-button').addEventListener('click', () => {
            isDark = !isDark;
            document.body.classList.toggle('dark-theme', isDark);
            themeSwitcher.querySelector('.theme-button').textContent = isDark ? '☀️' : '🌙';
        });
    }

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    createFloatingElements() {
        const hero = document.querySelector('.hero');
        for (let i = 0; i < 5; i++) {
            const float = document.createElement('div');
            float.className = 'floating-element';
            float.style.cssText = `
                position: absolute;
                width: ${Math.random() * 20 + 10}px;
                height: ${Math.random() * 20 + 10}px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            hero.appendChild(float);
        }
    }
}

// ========================================
// CONTACT FORM ENHANCEMENT
// ========================================
class ContactFormHandler {
    constructor() {
        this.init();
    }

    init() {
        this.setupWhatsAppButtons();
        this.createUrgencyTimer();
        this.setupFormValidation();
    }

    setupWhatsAppButtons() {
        document.querySelectorAll('.whatsapp-btn, .contact-btn.primary, .final-cta-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openWhatsApp();
            });
        });
    }

    openWhatsApp() {
        const phoneNumber = '966123456789'; // رقم الواتس آب
        const message = encodeURIComponent(`
مرحباً! أريد معرفة المزيد عن خدمات الذكاء الاصطناعي للتجارة الإلكترونية.

أريد:
✅ استشارة مجانية
✅ عرض سعر مخصص
✅ تجربة مجانية لمدة 7 أيام

اسمي: [اكتب اسمك هنا]
نوع المتجر: [اكتب نوع متجرك]
        `);
        
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
        
        // تتبع النقرة
        this.trackConversion('whatsapp_click');
    }

    createUrgencyTimer() {
        const urgencyElement = document.querySelector('.urgency-message');
        if (!urgencyElement) return;

        let timeLeft = 24 * 60 * 60; // 24 ساعة بالثواني
        
        const updateTimer = () => {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            
            urgencyElement.innerHTML = `
                ⏰ العرض المحدود ينتهي خلال: 
                ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}
            `;
            
            timeLeft--;
            if (timeLeft < 0) timeLeft = 24 * 60 * 60; // إعادة تعيين المؤقت
        };
        
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(form);
            });
        });
    }

    handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // محاكاة إرسال النموذج
        this.showLoadingState(form);
        
        setTimeout(() => {
            this.showSuccessMessage(form);
            this.trackConversion('form_submit');
        }, 2000);
    }

    showLoadingState(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'جاري الإرسال...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    }

    showSuccessMessage(form) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="background: #4CAF50; color: white; padding: 1rem; border-radius: 10px; margin: 1rem 0;">
                ✅ تم إرسال رسالتك بنجاح! سنتواصل معك خلال 30 دقيقة.
            </div>
        `;
        
        form.parentElement.insertBefore(successDiv, form.nextSibling);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    trackConversion(action) {
        // تتبع التحويلات (يمكن دمجه مع Google Analytics أو Facebook Pixel)
        console.log(`Conversion tracked: ${action} at ${new Date().toISOString()}`);
        
        // إرسال البيانات إلى نظام التحليلات
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'engagement',
                event_label: 'ai_assistant_landing',
                value: 1
            });
        }
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollProgress();
        this.setupSmoothScrolling();
    }

    setupIntersectionObserver() {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // مراقبة العناصر للرسوم المتحركة
        document.querySelectorAll('.feature-card, .service-card, .benefit-card, .step-card').forEach(el => {
            animationObserver.observe(el);
        });
    }

    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 10000;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========================================
// APP INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // تهيئة التطبيق
    const loadingScreen = new LoadingScreen();
    
    // انتظار انتهاء التحميل قبل تهيئة باقي المكونات
    setTimeout(() => {
        // تهيئة جميع المكونات
        const successCounter = new SuccessCounter();
        const testimonialsCarousel = new TestimonialsCarousel();
        const interactiveDemo = new InteractiveDemo();
        const statsDashboard = new StatsDashboard();
        const aiChatWidget = new AIChatWidget();
        const advancedUIEffects = new AdvancedUIEffects();
        const contactFormHandler = new ContactFormHandler();
        const scrollAnimations = new ScrollAnimations();
        
        // إضافة الرسوم المتحركة للعناصر
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                animation: slideInUp 0.8s ease forwards;
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
        
        console.log('🚀 تم تحميل جميع المكونات بنجاح!');
    }, 3000);
});

// ========================================
// SERVICE WORKER FOR PWA
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}