"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login.component");
var routes = [
    {
        path: '',
        component: login_component_1.LoginComponent
    }
];
var LoginRouterModule = (function () {
    function LoginRouterModule() {
    }
    return LoginRouterModule;
}());
LoginRouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forChild(routes)],
        declarations: [login_component_1.LoginComponent]
    })
], LoginRouterModule);
exports.LoginRouterModule = LoginRouterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLXJvdXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF1QztBQUV2QyxzREFBcUU7QUFFckUscURBQWlEO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7Q0FDRixDQUFDO0FBT0YsSUFBYSxpQkFBaUI7SUFBOUI7SUFBZ0MsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUFqQyxJQUFpQztBQUFwQixpQkFBaUI7SUFMN0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDL0IsQ0FBQztHQUVXLGlCQUFpQixDQUFHO0FBQXBCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsIFxuICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Sb3V0ZXJNb2R1bGUge30iXX0=