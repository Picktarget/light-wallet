/**
 * Created by zhaoj on 2017/3/29.
 */
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width:1067,
        height:836,
        frame: true
    });

    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }));

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed',function(){
        mainWindow = null;
    });
    
    // mainWindow.setMenu(null);
    // mainWindow.setMenuBarVisibility(false);
}

app.on('ready',createWindow);

app.on('window-all-closed',function(){
       // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate',function(){
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})