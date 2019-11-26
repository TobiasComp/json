import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-angular-lifecycle',
  templateUrl: './angular-lifecycle.component.html',
  styleUrls: ['./angular-lifecycle.component.css']
})
export class AngularLifecycleComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy  {

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  constructor() { 
    console.log('constructor');

  }

  ngOnInit() {
    console.log('OnInit');

  }

}
