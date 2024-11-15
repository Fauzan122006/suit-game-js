Swal.fire({
  title: 'Pilih: batu, gunting, atau kertas?',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off',
  },
  showCancelButton: false,
  confirmButtonText: 'Lanjut',
  showLoaderOnConfirm: true,
  allowOutsideClick: () => !Swal.isLoading(),
}).then((result) => {
  if (result.isConfirmed) {
    var playerChoice = result.value.toLowerCase(); // Mengambil pilihan pemain

    // Menampilkan pilihan komputer
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = 'batu';
    } else if (computerChoice < 0.67) {
      computerChoice = 'gunting';
    } else {
      computerChoice = 'kertas';
    }

    // Menentukan hasil
    var title = '';
    var message = '';
    var icon = '';

    if (playerChoice === computerChoice) {
      title = 'SERI!'
      message = `kamu memilih ${playerChoice} dan komputer memilih ${computerChoice} <br> Waduh, seri nih! Ayo coba lagi.`
      icon = 'info'
    } else if (
      (playerChoice === 'batu' && computerChoice === 'gunting') ||
      (playerChoice === 'gunting' && computerChoice === 'kertas') ||
      (playerChoice === 'kertas' && computerChoice === 'batu')
    ) {
      title = 'Kamu Menang!'
      message = `kamu memilih ${playerChoice} dan komputer memilih ${computerChoice} <br> yey, selamat kamu menang dan dapat makan gratis dari pak prabowo🗿`
      icon = 'success'
    } else if (
        (playerChoice === 'batu' && computerChoice === 'kertas') ||
        (playerChoice === 'gunting' && computerChoice === 'batu') ||
        (playerChoice === 'kertas' && computerChoice === 'gunting')
    ) {
      title = 'Kamu Kalah!';
      message = `kamu memilih ${playerChoice} dan komputer memilih ${computerChoice} <br> Coba lagi ya!`
      icon = 'error'
    } else {
        title = 'alamak'
        message = `Lu masukin ${playerChoice} apaan tuh? gaada di list kocak!`
        icon = "error"
    }

    // Menampilkan hasil
    Swal.fire({
      title: title,
      html: message,
      icon: icon,
    });
  }
});
