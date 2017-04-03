"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var register_component_1 = require("./register.component");
var routes = [
    {
        path: '',
        component: register_component_1.RegisterComponent
    }
];
var RegisterRouterModule = (function () {
    function RegisterRouterModule() {
    }
    return RegisterRouterModule;
}());
RegisterRouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forChild(routes)],
        declarations: [register_component_1.RegisterComponent]
    })
], RegisterRouterModule);
exports.RegisterRouterModule = RegisterRouterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItcm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXJvdXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF1QztBQUV2QyxzREFBcUU7QUFFckUsMkRBQXVEO0FBRXZELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsc0NBQWlCO0tBQzdCO0NBQ0YsQ0FBQztBQU9GLElBQWEsb0JBQW9CO0lBQWpDO0lBQW1DLENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFBcEMsSUFBb0M7QUFBdkIsb0JBQW9CO0lBTGhDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztLQUNsQyxDQUFDO0dBRVcsb0JBQW9CLENBQUc7QUFBdkIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7UmVnaXN0ZXJDb21wb25lbnR9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJywgXG4gICAgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBkZWNsYXJhdGlvbnM6IFtSZWdpc3RlckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclJvdXRlck1vZHVsZSB7fSJdfQ==