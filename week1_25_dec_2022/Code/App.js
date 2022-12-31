const a = {prop : "PPP"};
console.log(a.prop);
const b = Object.freeze(a);
console.log(b.prop);
b.prop = "QQQ";
a.prop = "RRR";
console.log(b.prop);
