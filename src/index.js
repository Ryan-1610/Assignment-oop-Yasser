const { app, BrowserWindow } = require('electron');
const fs = require('fs')
const path = require('path');

if (require('electron-squirrel-startup')) {
	// eslint-disable-line global-require
	app.quit();
  }

  const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
	  width: 800,
	  height: 600,
	  webPreferences: {
		nodeIntegration: true,
		contextIsolation: false,
	  }
   
	});

	mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
