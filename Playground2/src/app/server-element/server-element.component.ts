import { Component,OnInit,Input, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit{
  // @Input('srvElement')
  // element!: { type: string; name: string; content: string; };
  @Input() name: string | undefined;
  @ContentChild('contentParagraph') paragraph:ElementRef;
  constructor(){
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }
  ngOnInit(){
    console.log('ngOnInit called');
    console.log('Text paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngDoCheck callled');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentCheck');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewCheck');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
