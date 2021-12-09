import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { JQ_TOKEN } from '../../../services';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css'],
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() elementId: string | undefined;
  @Input() closeOnBodyClick: string | undefined;
  @ViewChild('modalContainer') containerEl: ElementRef | undefined;

  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit(): void {}

  closeModal() {
    if (this.closeOnBodyClick?.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl?.nativeElement).modal('hide');
    }
  }
}
