import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ng-blurhash',
  templateUrl: './blurhash.component.html',
  styleUrls: ['./blurhash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlurhashComponent implements OnChanges {
  @Input()
  hash: string;

  @Input()
  punch = 1;

  @Input()
  width = 128;

  @Input()
  height = 128;

  @Input()
  resolutionX = 32;

  @Input()
  resolutionY = 32;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.resolutionX <= 0) {
      throw new Error('resolutionX must be larger than zero');
    }

    if (this.resolutionY <= 0) {
      throw new Error('resolutionY must be larger than zero');
    }
  }
}
