import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { decode } from 'blurhash';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ng-blurhash-canvas',
  templateUrl: './blurhash-canvas.component.html',
  styleUrls: ['./blurhash-canvas.component.scss']
})
export class BlurhashCanvasComponent implements AfterViewInit, AfterViewChecked {
  @Input()
  width = 128;

  @Input()
  height = 128;

  @Input()
  hash: string;

  @Input()
  punch?: number;

  @ViewChild('canvasElement', { static: false })
  canvas: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    // viewchild is not available until view has been initialized
    this.drawCanvas();
  }

  ngAfterViewChecked(): void {
    // re-draw canvas after view has been checked, as width/height may have changed and forced the
    // canvas to be cleared
    this.drawCanvas();
  }

  drawCanvas(): void {
    if (this.canvas) {
      const pixels: Uint8ClampedArray = decode(this.hash, this.width, this.height, this.punch);
      const ctx = this.canvas.nativeElement.getContext('2d');

      if (ctx) {
        const imageData = ctx.createImageData(this.width, this.height);
        imageData.data.set(pixels);

        ctx.putImageData(imageData, 0, 0);
      }
    }
  }
}
