// Search filter + auto scroll ke hasil
const searchBox = document.getElementById('searchBox');
const cards = document.querySelectorAll('.card');
const ANIMATION_DURATION = 400; // Sesuai dengan transisi CSS (0.4s)

searchBox.addEventListener('keyup', (e) => {
  const query = searchBox.value.toLowerCase();
  let firstMatch = null;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    
    // Hapus kelas highlight dari semua kartu terlebih dahulu untuk memulai transisi
    card.classList.remove("highlight"); 

    if (text.includes(query)) {
      // 1. Tampilkan kartu
      card.style.display = "block";
      
      // 2. Tambahkan highlight setelah jeda singkat (untuk memicu transisi fade-in)
      setTimeout(() => {
        card.classList.add("highlight"); 
      }, 50); 
      
      if (!firstMatch) firstMatch = card;
      
    } else {
      // 1. Hapus highlight (kartu akan mulai memudar karena transisi)
      card.classList.remove("highlight"); 
      
      // 2. Sembunyikan kartu sepenuhnya setelah animasi fade-out selesai
      setTimeout(() => {
          card.style.display = "none";
      }, ANIMATION_DURATION); 
    }
  });

  // Enter -> scroll ke hasil pertama
  if (e.key === "Enter" && firstMatch) {
    firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});