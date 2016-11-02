var container = document.getElementById('container');
function Counter(el) {
    var _this = this;
    this.count = 0; // this: Counter()
    el.innerHTML = this.count;
    // let _this = this;
    el.addEventListener('click', function () {
        _this.count += 1;
        el.innerHTML = _this.count;
    });
}
new Counter(container);
// var filtered = [-1,0,1,22,31].filter((x) => { return x > 0; });
var filtered = [-1, 0, 1, 22, 31].filter(function (x) { return x > 0; }); // filter: [1, 22, 31]
// WRONG!
// function Counter(el){
//   this.count = 0; // this: Counter()
//   el.innerHTML = this.count;
//   el.addEventListener('click', function(){
//     this.count += 1;  // this: <h1>.......</h1>
//     console.log(this);
//     el.innerHTML = this.count;
//   });
// }
