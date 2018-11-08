(function() {
    var EventTarget = function() {
        this.handlers = [];
    };

    EventTarget.prototype = {
        constructor: this,
        listen: function(module, type, handler) {
            for(var i=0; i<this.handlers.length; i++){
                if(this.handlers[i][module]){
                    break;
                }
            }
            if(i == this.handlers.length){
                var obj = new Object();
                obj[module] = module;
                obj[type] = [handler]
                this.handlers.push(obj);
            }else{
                if(!this.handlers[i][type]){
                    this.handlers[i][type] = [];
                }
                this.handlers[i][type].push(handler);
            }
        },
        fire: function(module, type, data) {
            for(var i=0; i<this.handlers.length; i++){
                if(this.handlers[i][module]){
                    break;
                }
            }
            if(i == this.handlers.length){
                return;
            }else{
                if (this.handlers[i][type]) {
                    var event = utils.extend({
                        type: type,
                        target: this
                    }, data);

                    if (this.handlers[i][module] == module && this.handlers[i][event.type] instanceof Array) {
                        var handlers = this.handlers[i][event.type];
                        for (var i = 0, len = handlers.length; i < len; i++) {
                            handlers[i].call(this, event);
                        }
                    }
                }
            }
        }
    };

    window.Event = EventTarget;
})();