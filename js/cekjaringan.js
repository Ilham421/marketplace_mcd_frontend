window.addEventListener('load', () => {
    const statusJaringan = document.getElementById('statusjaringan')
    statusJaringan.innerHTML = ''

    const statusOnlineOffline = () => {
        statusJaringan.classList.remove('offline')
        statusJaringan.classList.remove('online')

        const kondisi = navigator.onLine
        if (!kondisi) {
            statusJaringan.innerHTML = 'Kamu sedang offline, cek internet koneksi kamu ya'
            statusJaringan.classList.add('offline')
            statusJaringan.style.display = 'block'
            document.querySelector('.topnav').style.visibility = 'hidden'
            return
        }
        statusJaringan.innerHTML = 'Kamu sudah online'
        statusJaringan.classList.add('online')
        document.querySelector('.topnav').style.visibility = 'visible'

        setTimeout(() => {
            statusJaringan.style.display = 'none'
            console.log('setTimeout')
        }, 2500)
    }

    window.addEventListener('online', statusOnlineOffline)
    window.addEventListener('offline', statusOnlineOffline)
})