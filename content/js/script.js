document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('.filters').style.display = 'block';
    
    var options = {
        valueNames: [ 'ouvrage-title', { name: 'time', attr: 'data-time' } ]
      };
      
    var collectionList = new List('js-collection', options);
});