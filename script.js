// Menangani tombol "Beli Sekarang"
const handlePurchaseButtons = () => {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produk telah ditambahkan ke keranjang Anda!');
        });
    });
};

// Menangani perubahan tema
const setupThemeToggle = () => {
    const header = document.querySelector('header');
    header.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        console.log(isDarkMode ? 'Dark mode aktif' : 'Light mode aktif');
    });
};

// Inisialisasi aplikasi
const initApp = () => {
    console.log('Aplikasi dimulai');
    handlePurchaseButtons();
    setupThemeToggle();

    // Pendaftaran Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker berhasil didaftarkan:', reg))
            .catch(err => console.error('Pendaftaran Service Worker gagal:', err));
    }
};

// Jalankan aplikasi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', initApp);
