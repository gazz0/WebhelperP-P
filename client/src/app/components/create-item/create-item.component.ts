import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/services/data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/services/toast.service';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  itemForm: FormGroup;
  loading = false;
  submitted = false;
  item: Item;

  @Output() onCreate: EventEmitter<any> = new EventEmitter();

  constructor(private dataService: DataService, private formBuilder: FormBuilder,
              public  dialogRef: MatDialogRef<CreateItemComponent>,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.itemForm = this.formBuilder.group({
      heading: ['', Validators.required],
      description: ['', Validators.required],
      subject: ['', Validators.required],
      payment_per_hour: ['', Validators.required],
      hours_per_week: ['', Validators.required],
      skills: ['', Validators.required],
    });
  }

  onSaveItem() {
    this.submitted = true;

    console.log(this.itemForm);
    if (this.itemForm.invalid) {
      return;
    }

    this.loading = true;
    this.dataService.createItem(this.itemForm.value)
      .pipe(first())
      .subscribe(
        () => {
          this.onCancel();
          this.toastService.toastMessage('Item created', false);
        },
        error => {
          this.loading = false;
          this.toastService.toastMessage('Item error', true);
        });
  }

  onCancel(): void {
    this.dialogRef.close();
    this.resetForm();
  }

  resetForm() {
    this.itemForm.reset();
    this.itemForm.markAsUntouched();
    Object.keys(this.itemForm.controls).forEach((name) => {
      this.itemForm.controls[name].setErrors(null);
    });
  }

}
