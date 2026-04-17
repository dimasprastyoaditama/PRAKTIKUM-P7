document.addEventListener('DOMContentLoaded', function() {
    
    const pesanForm = document.getElementById('pesanForm');

    if (pesanForm) {
        pesanForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            alert('Terima kasih! Pesan Anda telah berhasil dikirim ke Dimas.');
            
            this.reset();
        });
    }

});