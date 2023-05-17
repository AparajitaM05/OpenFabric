import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  title = 'Angular Form Validation Tutorial';
  selectedFile: File | null = null;
  images :any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(){

  }

  createForm() {
    this.myForm = this.fb.group({
      product_name: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (event.target.files.length > 0) {
      // const file = event.target.files[0];
      this.selectedFile = event.target.files[0];
      this.images =  this.selectedFile ;
    }
  }


  onSubmit() {
    if (this.myForm.valid && this.selectedFile) {
      // const formData = new FormData();

      this.http.post('http://localhost:5000/addproduct', { product_name: this.myForm.value.product_name , price: this.myForm.value.price  , image :  this.selectedFile.name} , { responseType: 'blob' }).subscribe(
        (response: Blob) => {
          console.log(response);
          alert('Product Added');

        },
        (error) => {
          console.error('Error uploading product:', error);
        }
      );


      const formData = new FormData();
      formData.append('file', this.images);
      this.http.post<any>('http://localhost:5000/file', formData).subscribe(
        (res) => {
        console.log(res);
          this.router.navigate(['/']);

      },
        (err) => console.log(err)
      );

          // this.router.navigate(['/']);

    }
}
}

// uploadFile(file: File): void {
//   const formData: FormData = new FormData();
//   formData.append('file', file);

//   this.http.post('http://your-server-url', formData, { responseType: 'blob' })
//     .subscribe(
//       (response: Blob) => {
//         // Save the file locally using the FileSaver library
//         saveAs(response, file.name);
//       },
//       error => {
//         console.error(error);
//       }
//     );
// }
