import { Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, OnChanges, AfterContentInit, AfterContentChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-son',
  templateUrl: './hook-son.component.html',
  styleUrls: ['./hook-son.component.css']
})
export class HookSonComponent implements OnInit,
OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

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
