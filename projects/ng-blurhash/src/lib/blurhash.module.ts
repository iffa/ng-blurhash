import { NgModule } from '@angular/core';
import { BlurhashComponent } from './blurhash.component';
import { BlurhashCanvasComponent } from './blurhash-canvas.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BlurhashCanvasComponent, BlurhashComponent],
  imports: [CommonModule],
  exports: [BlurhashComponent]
})
export class BlurhashModule {
}
