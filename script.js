// Data materi pembelajaran
const materiData = {
    jujur: {
        title: "Kejujuran Rasulullah SAW",
        content: `
            <div class="materi-detail">
                <h3>Rasulullah SAW: Al-Amin (Yang Dapat Dipercaya)</h3>
                <p>Sejak kecil, Muhammad SAW sudah dikenal sebagai pribadi yang jujur dan dapat dipercaya. Beliau dijuluki <strong>Al-Amin</strong> oleh penduduk Mekkah.</p>
                
                <div class="contoh-akhlak">
                    <h4>Contoh Kejujuran Rasulullah:</h4>
                    <ul>
                        <li>🔹 Selalu mengatakan kebenaran meskipun pahit</li>
                        <li>🔹 Menepati janji kepada siapa pun</li>
                        <li>🔹 Mengembalikan barang titipan dengan sempurna</li>
                        <li>🔹 Tidak pernah berbohong bahkan dalam candaan</li>
                    </ul>
                </div>
                
                <div class="nilai-pelajaran">
                    <h4>Yang Bisa Kita Tiru:</h4>
                    <p>Kita harus selalu jujur dalam perkataan dan perbuatan, seperti Rasulullah SAW. Kejujuran akan membawa keberkahan dalam hidup.</p>
                </div>
            </div>
        `
    },
    sabar: {
        title: "Kesabaran Rasulullah SAW",
        content: `
            <div class="materi-detail">
                <h3>Kesabaran Luar Biasa Rasulullah</h3>
                <p>Rasulullah SAW menunjukkan kesabaran yang luar biasa dalam menghadapi berbagai cobaan dan ujian.</p>
                
                <div class="contoh-akhlak">
                    <h4>Contoh Kesabaran Rasulullah:</h4>
                    <ul>
                        <li>🔹 Sabar ketika dicaci maki oleh penduduk Thaif</li>
                        <li>🔹 Sabar ketika ditinggal wafat oleh orang-orang tercinta</li>
                        <li>🔹 Sabar ketika menghadapi kesulitan dalam berdakwah</li>
                        <li>🔹 Sabar ketika menghadapi musuh yang menyakitinya</li>
                    </ul>
                </div>
                
                <div class="nilai-pelajaran">
                    <h4>Yang Bisa Kita Tiru:</h4>
                    <p>Kita harus belajar sabar ketika menghadapi kesulitan, seperti menunggu giliran, menerima kekalahan, atau ketika sesuatu tidak sesuai keinginan.</p>
                </div>
            </div>
        `
    },
    sayang: {
        title: "Kasih Sayang Rasulullah SAW",
        content: `
            <div class="materi-detail">
                <h3>Rasulullah SAW Sangat Penyayang</h3>
                <p>Rasulullah SAW adalah pribadi yang penuh kasih sayang kepada semua makhluk, baik manusia, hewan, maupun tumbuhan.</p>
                
                <div class="contoh-akhlak">
                    <h4>Contoh Kasih Sayang Rasulullah:</h4>
                    <ul>
                        <li>🔹 Sangat menyayangi anak-anak dan bermain dengan mereka</li>
                        <li>🔹 Menyayangi orang tua dan menghormati mereka</li>
                        <li>🔹 Menyayangi hewan dan melarang menyiksanya</li>
                        <li>🔹 Menyayangi tetangga dan membantu mereka</li>
                    </ul>
                </div>
                
                <div class="nilai-pelajaran">
                    <h4>Yang Bisa Kita Tiru:</h4>
                    <p>Kita harus menyayangi semua orang di sekitar kita, membantu yang membutuhkan, dan tidak menyakiti makhluk lain.</p>
                </div>
            </div>
        `
    },
    adil: {
        title: "Keadilan Rasulullah SAW",
        content: `
            <div class="materi-detail">
                <h3>Keadilan Rasulullah kepada Semua</h3>
                <p>Rasulullah SAW selalu bersikap adil kepada semua orang tanpa memandang status, kekayaan, atau latar belakang.</p>
                
                <div class="contoh-akhlak">
                    <h4>Contoh Keadilan Rasulullah:</h4>
                    <ul>
                        <li>🔹 Berlaku adil kepada keluarga dan sahabat</li>
                        <li>🔹 Berlaku adil kepada orang kaya dan miskin</li>
                        <li>🔹 Berlaku adil dalam memutuskan perkara</li>
                        <li>🔹 Berlaku adil kepada muslim dan non-muslim</li>
                    </ul>
                </div>
                
                <div class="nilai-pelajaran">
                    <h4>Yang Bisa Kita Tiru:</h4>
                    <p>Kita harus bersikap adil kepada semua teman, tidak pilih-pilih dalam berteman, dan membagi sesuatu dengan rata.</p>
                </div>
            </div>
        `
    }
};

// Data kuis
const quizData = [
    {
        question: "Apa julukan Rasulullah SAW karena kejujurannya?",
        options: ["Al-Fattah", "Al-Amin", "Ar-Rahim", "Al-Mujib"],
        correct: 1
    },
    {
        question: "Bagaimana sikap Rasulullah ketika dicaci maki penduduk Thaif?",
        options: ["Membalas cacian", "Tetap sabar", "Langsung meninggalkan", "Meminta bantuan"],
        correct: 1
    },
    {
        question: "Kepada siapakah Rasulullah menunjukkan kasih sayang?",
        options: ["Hanya kepada muslim", "Hanya kepada keluarga", "Kepada semua makhluk", "Hanya kepada sahabat"],
        correct: 2
    },
    {
        question: "Bagaimana Rasulullah bersikap terhadap orang kaya dan miskin?",
        options: ["Pilih-pilih", "Sama rata", "Lebih suka orang kaya", "Menghindari orang miskin"],
        correct: 1
    },
    {
        question: "Apa yang diajarkan Rasulullah tentang berkata?",
        options: ["Boleh berbohong sedikit", "Selalu jujur", "Tidak perlu jujur", "Boleh berbohong untuk bercanda"],
        correct: 1
    }
];

// Inisialisasi
document.addEventListener('DOMContentLoaded', function() {
    // Navigasi smooth scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active nav
            document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Tombol mulai belajar
    document.getElementById('start-btn').addEventListener('click', function() {
        document.getElementById('materi').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Materi pembelajaran
    document.querySelectorAll('.materi-card .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.materi-card');
            const materiType = card.getAttribute('data-materi');
            showMateriDetail(materiType);
            
            // Scroll ke detail materi
            document.getElementById('detail-materi').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Permainan interaktif
    let gameScore = 0;
    const gameCards = document.querySelectorAll('.game-card');
    const gameMessage = document.getElementById('game-message');
    const resetGameBtn = document.getElementById('reset-game');
    
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            if (this.classList.contains('correct') || this.classList.contains('incorrect')) {
                return; // Sudah dipilih
            }
            
            const isCorrect = this.getAttribute('data-correct') === 'true';
            
            if (isCorrect) {
                this.classList.add('correct');
                gameScore++;
                gameMessage.textContent = "Yeay! Benar! Itu adalah akhlak terpuji Rasulullah 🎉";
                gameMessage.style.color = "#4CAF50";
            } else {
                this.classList.add('incorrect');
                gameMessage.textContent = "Ups! Itu bukan akhlak terpuji Rasulullah 😔";
                gameMessage.style.color = "#FF6B6B";
            }
            
            // Nonaktifkan semua kartu setelah memilih
            gameCards.forEach(c => {
                c.style.pointerEvents = 'none';
            });
            
            // Tampilkan skor
            setTimeout(() => {
                gameMessage.textContent = `Kamu mendapatkan ${gameScore} dari 2 poin! ${gameScore === 2 ? 'Luar biasa! 🏆' : 'Coba lagi!'}`;
            }, 1500);
        });
    });
    
    resetGameBtn.addEventListener('click', function() {
        gameCards.forEach(card => {
            card.classList.remove('correct', 'incorrect');
            card.style.pointerEvents = 'auto';
        });
        gameScore = 0;
        gameMessage.textContent = "Pilih gambar yang menunjukkan akhlak terpuji!";
        gameMessage.style.color = "#333";
    });
    
    // Kuis
    let currentQuestion = 0;
    let quizScore = 0;
    const startQuizBtn = document.getElementById('start-quiz');
    const nextQuestionBtn = document.getElementById('next-question');
    const restartQuizBtn = document.getElementById('restart-quiz');
    const quizIntro = document.getElementById('quiz-intro');
    const quizQuestions = document.getElementById('quiz-questions');
    const quizResults = document.getElementById('quiz-results');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.querySelector('.options');
    const scoreText = document.getElementById('score-text');
    
    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    restartQuizBtn.addEventListener('click', startQuiz);
    
    function startQuiz() {
        currentQuestion = 0;
        quizScore = 0;
        quizIntro.classList.add('hidden');
        quizQuestions.classList.remove('hidden');
        quizResults.classList.add('hidden');
        showQuestion();
    }
    
    function showQuestion() {
        const question = quizData[currentQuestion];
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        nextQuestionBtn.disabled = true;
    }
    
    function selectOption(selectedIndex) {
        const question = quizData[currentQuestion];
        const options = document.querySelectorAll('.option');
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
            option.style.pointerEvents = 'none';
        });
        
        if (selectedIndex === question.correct) {
            quizScore++;
        }
        
        nextQuestionBtn.disabled = false;
    }
    
    function showNextQuestion() {
        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }
    
    function showResults() {
        quizQuestions.classList.add('hidden');
        quizResults.classList.remove('hidden');
        scoreText.textContent = `Skor kamu: ${quizScore}/${quizData.length}`;
    }
});

// Fungsi untuk menampilkan detail materi
function showMateriDetail(materiType) {
    const materi = materiData[materiType];
    const contentDiv = document.getElementById('materi-content');
    
    contentDiv.innerHTML = `
        <h2>${materi.title}</h2>
        ${materi.content}
        <div style="text-align: center; margin-top: 2rem;">
            <button class="btn-primary" onclick="scrollToMateri()">Kembali ke Materi Lain</button>
        </div>
    `;
}

// Fungsi untuk scroll kembali ke materi
function scrollToMateri() {
    document.getElementById('materi').scrollIntoView({
        behavior: 'smooth'
    });
}

// Animasi tambahan untuk interaktivitas
document.querySelectorAll('.materi-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});