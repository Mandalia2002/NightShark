const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

let backendProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile(
    path.join(__dirname, '../apps/frontend/dist/nightly/browser/index.html'),{
      hash:true
    }
  );
}

app.whenReady().then(() => {
  backendProcess = spawn('node', [
    path.join(__dirname, '../apps/backend/dist/main.js')
  ]);

  // espera backend
  setTimeout(createWindow, 15000);
});

app.on('window-all-closed', () => {
  backendProcess?.kill();
  app.quit();
});
