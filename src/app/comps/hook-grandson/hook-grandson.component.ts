import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-grandson',
  templateUrl: './hook-grandson.component.html',
  styleUrls: ['./hook-grandson.component.css']
})
export class HookGrandsonComponent implements OnInit {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges son');
  }
  ngDoCheck(): void {
    console.log('DoCheck son');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit son');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked son');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit son');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked son');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy son');
  }
  constructor() { 
    console.log('constructor son');

  }

  ngOnInit() {
    console.log('OnInit son');

  }


}
