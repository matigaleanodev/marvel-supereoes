import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'jarvis',
  templateUrl: './jarvis.component.html',
  styleUrls: ['./jarvis.component.scss'],
})
export class JarvisComponent implements AfterViewInit {
  readonly jarvisLike = viewChild<ElementRef>('jarvisLike');

  ngAfterViewInit(): void {
    const jarvis = this.jarvisLike();
    if (jarvis) {
      jarvis.nativeElement.style.display = 'flex';
    }
  }
}
