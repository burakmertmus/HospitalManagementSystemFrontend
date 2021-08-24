import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalView',
  templateUrl: './modalView.component.html',
  styleUrls: ['./modalView.component.scss']
})
export class ModalViewComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
