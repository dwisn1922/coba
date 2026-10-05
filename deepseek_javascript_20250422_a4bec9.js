// Jalankan kode ini di console browser saat berada di halaman https://onprover.orochi.network/

const referralCode = "KODE_REFERRAL_ANDA"; // Ganti dengan kode referral Anda oke
const jumlahAkun = 3; // Jumlah akun yang ingin dibuat

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);
    return `user_${randomString}@temp-mail.com`;
}

async function createAccount() {
    try {
        const email = generateRandomEmail();
        const password = "Password123!"; // Ganti dengan password yang kuat
        
        // Navigasi ke halaman register
        window.location.href = "https://onprover.orochi.network/register";
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Isi form
        document.querySelector('input[name="email"]').value = email;
        document.querySelector('input[name="password"]').value = password;
        document.querySelector('input[name="referral_code"]').value = referralCode;
        
        // Centang terms (jika ada)
        // document.querySelector('input[type="checkbox"]').click();
        
        // Submit form
        document.querySelector('button[type="submit"]').click();
        
        console.log(`Akun dengan email ${email} berhasil dibuat!`);
        return true;
    } catch (error) {
        console.error("Error:", error);
        return false;
    }
}

// Jalankan pembuatan akun
(async () => {
    for (let i = 0; i < jumlahAkun; i++) {
        await createAccount();
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
})();
