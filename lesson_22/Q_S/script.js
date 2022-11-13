//1
let copy = document.addEventListener("copy", function(){}) 
// getSelection re.

function _copy() {
    // document.getElementById("hw").textContent = document.getSelection();
    alert('You Copied: ' + document.getSelection());
}


//2
addEventListener("keydown", function(e){
    let s = `${e.code}`
    document.getElementById('hw').textContent = `You clicked: ${s[s.length-1]} Key`
})