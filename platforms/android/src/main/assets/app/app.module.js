"use strict";
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// NativeScript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var forms_2 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
// App
var app_router_module_1 = require("./app-router.module");
var app_component_1 = require("./app.component");
// Services
var storage_logger_service_1 = require("./shared/services/storage-logger.service");
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
            http_1.NativeScriptHttpModule,
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
            },
            // Services
            storage_logger_service_1.StorageLogger
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFVBQVU7QUFDVixzQ0FBZ0Y7QUFDaEYsd0NBQW1EO0FBRW5ELGVBQWU7QUFDZixnRkFBNEU7QUFDNUUsc0RBQWtFO0FBQ2xFLG9EQUFtRTtBQUNuRSxrREFBaUU7QUFFakUsTUFBTTtBQUNOLHlEQUFvRDtBQUNwRCxpREFBNkM7QUFFN0MsV0FBVztBQUNYLG1GQUF1RTtBQThCdkUsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBNUJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDZCQUFzQjtZQUN0QiwyQkFBbUI7WUFDbkIsbUNBQWU7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1NBQ2pCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLDRCQUFxQjtnQkFDOUIsUUFBUSxFQUFFLDhCQUFxQjthQUNoQztZQUVELFdBQVc7WUFDWCxzQ0FBYTtTQUNkO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsNEJBQVk7U0FDYjtLQUNGLENBQUM7R0FFVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXJcbmltcG9ydCB7TmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlRmFjdG9yeUxvYWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gTmF0aXZlU2NyaXB0XG5pbXBvcnQge05hdGl2ZVNjcmlwdE1vZHVsZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQge05TTW9kdWxlRmFjdG9yeUxvYWRlcn0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuLy8gQXBwXG5pbXBvcnQge0FwcFJvdXRlck1vZHVsZX0gZnJvbSAnLi9hcHAtcm91dGVyLm1vZHVsZSc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7U3RvcmFnZUxvZ2dlcn0gZnJvbSAnLi9zaGFyZWQvc2VydmljZXMvc3RvcmFnZS1sb2dnZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEFwcFJvdXRlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBcbiAgICAgIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXJcbiAgICB9LFxuXG4gICAgLy8gU2VydmljZXNcbiAgICBTdG9yYWdlTG9nZ2VyXG4gIF0sXG4gIGJvb3RzdHJhcDogW1xuICAgIEFwcENvbXBvbmVudFxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=