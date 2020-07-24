import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { delay } from 'rxjs/internal/operators';
import { BackendService } from '../shared/backend/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SNACKBAR_HAS_EMPTY_FIELDS_MSG,
  SNACKBAR_GENERATING_SUSCRIPTION_MSG,
  SNACKBAR_WRONG_SUSCRIPTION_MSG,
  SNACKBAR_SUCCESFULLY_SUSCRIPTION_MSG 
} from '../shared/snackbar.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // Form to generate suscription
  subsForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', Validators.email), // Email validation
    phone: new FormControl('', Validators.pattern(/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/)), // Chilean phone number regex validation
  });

  constructor(
    private backendSrv: BackendService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  /**
   * Action that creates a subscription, using backend service
   * @author cgalvezv
   */
  onSubmit() {
    if (this.hasEmptyField(this.subsForm.value)) {
      this.openSnackBar(SNACKBAR_HAS_EMPTY_FIELDS_MSG, 2000);
    } else {
      const email = this.subsForm.get('email').value;
      this.openSnackBar(SNACKBAR_GENERATING_SUSCRIPTION_MSG, 1000);
      this.backendSrv.postSuscribe(this.subsForm.value)
        .pipe(
          delay(1000)
        )
        .subscribe(_ => {
          const msg = SNACKBAR_SUCCESFULLY_SUSCRIPTION_MSG;
          this.openSnackBar(msg.replace('{email}', email), 2000);
        }, err => {
          const msg = SNACKBAR_WRONG_SUSCRIPTION_MSG;
          this.openSnackBar(msg.replace('{email}', email), 2000);
        });
    }
  }

  /**
   * Method that returns true if a form contains an empty field
   * @param form is the form to evaluate
   * @author cgalvezv
   */
  private hasEmptyField(form: any) {
    let fullField = 0;
    for (const control in form) {
        if (form[control] !== null && form[control] !== undefined && form[control] !== '') {
          fullField++;
        }
    }
    return fullField !== Object.keys(form).length;
  }
  /**
   * @param msg
   * @param timeDuration
   * @author cgalvezv
   */
  private openSnackBar(msg: string, timeDuration: number) {
    this.snackBar.open(msg, null, {
      duration: timeDuration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
