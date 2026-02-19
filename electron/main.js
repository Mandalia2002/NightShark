const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
  return;
}

let win;

function createWindow() {
  if (win) return;

  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadURL('http://localhost:3000')  
  win.loadFile(
    path.join(__dirname, '../apps/frontend/dist/nightly/browser/index.html')
  );

  win.on('closed',()=>{
    win =null
  })
}

app.on('ready',createWindow)

app.whenReady().then(() => {
  backend();
});

app.on('window-all-closed', () => {
  app.quit();
});
