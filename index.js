
    function updateTime() {
      let currentTime = new Date()
      let currentTimeMillis = currentTime.getTime()
      let currentUTCTime = currentTime.toUTCString()

      document.querySelector('#currentUTCTime').textContent = currentUTCTime
    }
    setInterval(updateTime, 1000) // Run updateTime() every second
  