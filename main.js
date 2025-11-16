const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true // 安全最佳實踐
    }
  })

  win.loadFile('index.html')

  // 開發時開啟 DevTools（可選）
  // win.webContents.openDevTools()
}

// 應用準備好時創建視窗
app.whenReady().then(createWindow)

// macOS：點擊 Dock 圖示時，若無視窗則重新創建
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 所有視窗關閉時退出（Windows & Linux）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})