const ipcRenderer = window.electron.ipcRenderer
// 改变主程序窗口命令 type有min、max、close第一次传入min、max做相应操作第二次传入还原
function setmessage(type) {
  ipcRenderer.send(type)
}

export default setmessage
