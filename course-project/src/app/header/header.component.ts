import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClick(){
    this.clickEvent.emit("recipes");
  }

  onShoppingListClick(){
    this.clickEvent.emit("shopping-list");
  }

}
