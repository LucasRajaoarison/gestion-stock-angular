import {FormControl, ValidationErrors} from "@angular/forms";

export class StockValidator {


  static notOnlyWhitespace(control: FormControl) : ValidationErrors {

    //check if string only contains white space
    if ((control.value != null ) && (control.value.trim().length === 0)) {

      //invalid, return error object
      return { 'notOnlyWhitespace': true} ;

    } else {
      //valid, return null
      // @ts-ignore
      return null;
    }

  }


}
