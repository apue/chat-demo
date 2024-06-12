document.getElementById('launch').addEventListener('click', () => {
  // chrome.sidebarAction.open("http://localhost:3000");
  chrome.tabs.create({ url: 'http://localhost:3000' });

});