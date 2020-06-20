import { Injectable } from '@angular/core';
import {
  MatSnackBar, MatSnackBarConfig
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private matSnackBar: MatSnackBar) {
  }

  toastMessage(message: string, isError: boolean): void {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.duration = 2500;
    config.panelClass = isError ? ['error-message'] : ['success-message'];
    this.matSnackBar.open(message, 'close', config);
  }

}
