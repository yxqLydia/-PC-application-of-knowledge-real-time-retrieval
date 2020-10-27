const electron = require('electron')
const {
  globalShortcut
} = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let width
let height
const Menu = electron.Menu
const ipcMain = electron.ipcMain
ipcMain.on('min', e => mainWindow.minimize());
ipcMain.on('restore', e => {
  if (mainWindow.isMinimized()) { 
    mainWindow.restore()
  }
});

ipcMain.on('max', e => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow.maximize()
  }
});
ipcMain.on('close', e => mainWindow.close());

ipcMain.on('getsize', e => {
  mainWindow.webContents.send('main-process-messages', {w:width,h:height});
});

function createWindow(w, h, x, y) {　 // 隐藏菜单栏
  Menu.setApplicationMenu(null)
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: w,
    height: h,
    x: x,
    y: y,
    // transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    resizable: false
  })
 mainWindow.show()
 mainWindow.setAlwaysOnTop(true)
  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../dist/index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  let size = electron.screen.getPrimaryDisplay().workAreaSize
  width = parseInt(size.width * 0.4)
  height = parseInt(size.height * 0.5)
  let xwidth = size.width - width
  let yheight = size.height - height
  if (mainWindow == null) {
    createWindow(width, height, xwidth, yheight)
  }
  // 调试快捷键 生产时请注释掉
  globalShortcut.register('Alt+c', () => {
    if (mainWindow != null) {
      mainWindow.webContents.openDevTools()
    }
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
