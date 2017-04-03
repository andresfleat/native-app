"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(fb) {
        this.fb = fb;
        this.registerForm = this.fb.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            passwordAgain: ['', forms_1.Validators.required] // TODO: Add custom validator that checks if it's equal to password
        });
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        console.log('valid state: ' + JSON.stringify(this.registerForm.value));
        // Not running for some reason
        if (this.registerForm.valid) {
            alert('You are logged in bitcha');
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0Q7QUFDaEQsd0NBQWtFO0FBU2xFLElBQWEsaUJBQWlCO0lBRTVCLDJCQUFvQixFQUFlO1FBQWYsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUU1QixpQkFBWSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzdDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsbUVBQW1FO1NBQzdHLENBQUMsQ0FBQztJQU5tQyxDQUFDO0lBUXZDLG9DQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsb0NBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLDhCQUE4QjtRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDNUIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksaUJBQWlCO0lBUDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN6QyxDQUFDO3FDQUl3QixtQkFBVztHQUZ4QixpQkFBaUIsQ0FtQjdCO0FBbkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JlZ2lzdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBwdWJsaWMgcmVnaXN0ZXJGb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICBwYXNzd29yZEFnYWluOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdIC8vIFRPRE86IEFkZCBjdXN0b20gdmFsaWRhdG9yIHRoYXQgY2hlY2tzIGlmIGl0J3MgZXF1YWwgdG8gcGFzc3dvcmRcbiAgfSk7XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCd2YWxpZCBzdGF0ZTogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMucmVnaXN0ZXJGb3JtLnZhbHVlKSlcbiAgICAvLyBOb3QgcnVubmluZyBmb3Igc29tZSByZWFzb25cbiAgICBpZiAodGhpcy5yZWdpc3RlckZvcm0udmFsaWQpIHtcbiAgICAgIGFsZXJ0KCdZb3UgYXJlIGxvZ2dlZCBpbiBiaXRjaGEnKVxuICAgIH1cbiAgfVxufSJdfQ==