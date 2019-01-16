$(document).ready(function() {

  var storage = chrome.storage.sync;
  $(':checkbox').each(function(index, element) {
    var name = this.name;
    storage.get(name, function(items) {
        element.checked = items[name];
        console.log(name);
        console.log(items[name]);
        console.log("\n");
         // true  OR  false / undefined (=false)
    });
  });
   $(".checkboxes").on("change", ":checkbox", saveSettings);

   function saveSettings() {
    var name = this.name;
    var items = {};
    items[name] = this.checked;
    storage.set(items, function() {
        console.log("saved");
    });
  }
});
