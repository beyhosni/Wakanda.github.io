"function"!=typeof Function.prototype.bind&&(Function.prototype.bind=function(t){var o=Array.prototype.slice.call(arguments,1),n=this,r=function(){},p=function(){return n.apply(this instanceof r?this:t||{},o.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype||{},p.prototype=new r,p});