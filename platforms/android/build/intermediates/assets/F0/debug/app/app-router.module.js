"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    // {
    //   path: '',
    //   loadChildren: 'app/pages/+products/products.module#ProductsModule'
    // },
    {
        path: '',
        loadChildren: './pages/+login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './pages/+register/register.module#RegisterModule'
    }
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(routes)
        ],
        exports: [
            router_1.NativeScriptRouterModule
        ]
    })
], AppRouterModule);
exports.AppRouterModule = AppRouterModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtcm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXVDO0FBQ3ZDLHNEQUFxRTtBQUdyRSxJQUFNLE1BQU0sR0FBVztJQUNyQixJQUFJO0lBQ0osY0FBYztJQUNkLHVFQUF1RTtJQUN2RSxLQUFLO0lBQ0w7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFlBQVksRUFBRSx5Q0FBeUM7S0FDeEQ7SUFDRDtRQUNFLElBQUksRUFBRSxVQUFVO1FBQ2hCLFlBQVksRUFBRSxrREFBa0Q7S0FDakU7Q0FDRixDQUFDO0FBWUYsSUFBYSxlQUFlO0lBQTVCO0lBQThCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFBL0IsSUFBK0I7QUFBbEIsZUFBZTtJQVYzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxpQ0FBd0I7WUFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUN6QztRQUNELE9BQU8sRUFBRTtZQUNQLGlDQUF3QjtTQUN6QjtLQUNGLENBQUM7R0FFVyxlQUFlLENBQUc7QUFBbEIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAvLyB7XG4gIC8vICAgcGF0aDogJycsXG4gIC8vICAgbG9hZENoaWxkcmVuOiAnYXBwL3BhZ2VzLytwcm9kdWN0cy9wcm9kdWN0cy5tb2R1bGUjUHJvZHVjdHNNb2R1bGUnXG4gIC8vIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBsb2FkQ2hpbGRyZW46ICcuL3BhZ2VzLytsb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGUnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAncmVnaXN0ZXInLFxuICAgIGxvYWRDaGlsZHJlbjogJy4vcGFnZXMvK3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZHVsZSNSZWdpc3Rlck1vZHVsZSdcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcFJvdXRlck1vZHVsZSB7fVxuIl19