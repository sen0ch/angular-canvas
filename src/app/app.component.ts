import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ItemsService ]
})

export class AppComponent implements OnInit  {
  @ViewChild('canvasCanvas') canvas: any;
  @ViewChild('Canvas') Canvas: ElementRef;
  @ViewChild('img') img: ElementRef;

  @Input() id: number;
  @Input() item: string;
  @Input() source: any;
  @Input() cta: string;
  @Input() image = new Image();

  public items: any;

  private ctx: CanvasRenderingContext2D;

  constructor(private itemsService: ItemsService, private renderer: Renderer2, private elRef: ElementRef) {
  }

 ngOnInit() {
    this.getItems();
    this.preload(
      '../../assets/images/' + this.source );
  }

  getItems() {
    this.itemsService.getItems()
    .subscribe(res => {
      this.items = res;
    } );
  }

  preload(...args: any[]): void {
    for (let i = 0; i < args.length; i++) {
      this.image[i] = new Image();
      this.image[i].src = args[i];
    }
  }
}
