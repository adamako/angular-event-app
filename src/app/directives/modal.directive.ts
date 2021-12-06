import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { JQ_TOKEN } from '../services';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalDirective implements OnInit {
  el: HTMLElement;
  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  @Input('modal-trigger') modalId: string | undefined;

  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
