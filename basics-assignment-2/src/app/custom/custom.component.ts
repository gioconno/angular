import { Component } from "@angular/core";

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})

export class CustomComponent {
    buttonDisabled = true;
    username = '';

    onInputInsert() {
        if(this.username)
            this.buttonDisabled = false;
    }

    resetInput(){
        this.buttonDisabled = true;
        this.username = '';
    }
}

