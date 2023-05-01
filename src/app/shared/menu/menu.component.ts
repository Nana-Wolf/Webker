import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit{

  @Input() currentPage: string = '';
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    console.log('ngOnInit called.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called.');
  }
  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }
}
