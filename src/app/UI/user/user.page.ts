import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone:true,
    selector:'app-user',
    templateUrl:'./user.page.html',
    styleUrls:['./user.page.scss'],
    imports: [CommonModule]
})

export class UserPage{
    
}