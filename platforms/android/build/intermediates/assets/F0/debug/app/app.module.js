"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var forms_2 = require("nativescript-angular/forms");
var app_router_module_1 = require("./app-router.module");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_2.NativeScriptFormsModule,
            forms_1.ReactiveFormsModule,
            app_router_module_1.AppRouterModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        providers: [
            {
                provide: core_1.NgModuleFactoryLoader,
                useClass: router_1.NSModuleFactoryLoader
            }
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFnRjtBQUNoRix3Q0FBbUQ7QUFDbkQsZ0ZBQTRFO0FBQzVFLHNEQUFrRTtBQUNsRSxvREFBbUU7QUFFbkUseURBQW9EO0FBQ3BELGlEQUE2QztBQTBCN0MsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBeEJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDJCQUFtQjtZQUNuQixtQ0FBZTtTQUNoQjtRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7U0FDakI7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsNEJBQXFCO2dCQUM5QixRQUFRLEVBQUUsOEJBQXFCO2FBQ2hDO1NBQ0Y7UUFDRCxTQUFTLEVBQUU7WUFDVCw0QkFBWTtTQUNiO0tBQ0YsQ0FBQztHQUVXLFNBQVMsQ0FBRztBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHtOU01vZHVsZUZhY3RvcnlMb2FkZXJ9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7QXBwUm91dGVyTW9kdWxlfSBmcm9tICcuL2FwcC1yb3V0ZXIubW9kdWxlJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQXBwUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIFxuICAgICAgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlclxuICAgIH1cbiAgXSxcbiAgYm9vdHN0cmFwOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==