"use strict";
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var StorageLogger = (function () {
    function StorageLogger() {
        this.logger = new BehaviorSubject_1.BehaviorSubject(null);
        this.logger$ = this.logger.asObservable();
    }
    StorageLogger.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        this.get(key);
    };
    StorageLogger.prototype.get = function (key) {
        var item;
        item = JSON.parse(localStorage.getItem(key));
        this.logger.next({ value: item, key: key });
    };
    StorageLogger.prototype.remove = function (keys) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            localStorage.removeItem(key);
            this.logger.next({ value: null, key: key });
        }
    };
    return StorageLogger;
}());
StorageLogger = __decorate([
    core_1.Injectable()
], StorageLogger);
exports.StorageLogger = StorageLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1sb2dnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b3JhZ2UtbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUd6Qyx3REFBcUQ7QUFJckQsSUFBYSxhQUFhO0lBRjFCO1FBSVUsV0FBTSxHQUFHLElBQUksaUNBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztRQUV6QyxZQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQTJCOUMsQ0FBQztJQXpCQywyQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLEtBQVU7UUFFekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxHQUFXO1FBRWIsSUFBSSxJQUFTLENBQUM7UUFFZCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sSUFBYztRQUVuQixHQUFHLENBQUMsQ0FBYyxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSTtZQUFqQixJQUFNLEdBQUcsYUFBQTtZQUVaLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxhQUFhO0lBRnpCLGlCQUFVLEVBQUU7R0FFQSxhQUFhLENBK0J6QjtBQS9CWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlTG9nZ2VyIHtcblxuICBwcml2YXRlIGxvZ2dlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcblxuICBwdWJsaWMgbG9nZ2VyJCA9IHRoaXMubG9nZ2VyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuXG4gICAgdGhpcy5nZXQoa2V5KTtcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgbGV0IGl0ZW06IGFueTtcblxuICAgIGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuXG4gICAgdGhpcy5sb2dnZXIubmV4dCh7dmFsdWU6IGl0ZW0sIGtleToga2V5fSk7XG4gIH1cblxuICByZW1vdmUoa2V5czogc3RyaW5nW10pOiB2b2lkIHtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcblxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblxuICAgICAgdGhpcy5sb2dnZXIubmV4dCh7dmFsdWU6IG51bGwsIGtleToga2V5fSk7XG4gICAgfVxuICB9XG59XG4iXX0=