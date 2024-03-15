import docsearch from '@docsearch/js';

docsearch({
  container: '#docsearch',
  appId: 'AHKXAT87MO',
  indexName: 'gethyas',
  apiKey: 'fbb7c4284e4c7843cccdb9edfa6ad729',
  insights: true,
});

const onClick = function() {
  document.getElementsByClassName('DocSearch-Button')[0].click();  
}

document.getElementById('searchToggleMobile').onclick = onClick;
document.getElementById('searchToggleDesktop').onclick = onClick;
