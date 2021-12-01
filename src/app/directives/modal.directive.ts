import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { JQ_TOKEN } from '../services';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalDirective implements OnInit {
  el: HTMLElement;
  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$('#simple-modal').modal({});
    });
  }
}