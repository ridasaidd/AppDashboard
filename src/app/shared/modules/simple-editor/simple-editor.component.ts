import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simple-editor-content',
  // templateUrl: './simple-editor.component.html',
  // styleUrls: ['./simple-editor.component.scss'],
  template: `
  <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>`
})
export class SimpleEditorInputComponent {
  @Input() name;
  // @Input() callMethod: string;
  // @Input() inputs: {};
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-simple-editor',
  templateUrl: './simple-editor.component.html',
  styleUrls: ['./simple-editor.component.scss'],
  providers: []
})
export class SimpleEditorComponent implements OnInit {

  closeResult: string;

  // @Input() name: string;
  // @Input() callMethod: string;
  // @Input() inputs: {};

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    console.log('Clicked!');
    const modalRef = this.modalService.open(SimpleEditorInputComponent);
    // modalRef.componentInstance.name = 'this.name';
    // modalRef.componentInstance.callMethod = 'this.callMethod';
    // modalRef.componentInstance.inputs = 'this.inputs';
  }

}
