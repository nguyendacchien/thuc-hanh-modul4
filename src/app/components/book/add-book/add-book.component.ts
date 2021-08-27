import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  formAdd: FormGroup|undefined
  constructor(private bookService:BookService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      title:['',[Validators.required]],
      author:['',[Validators.required]],
      description:['',[Validators.required]],
    })
  }
  submitForm(){
    let data = this.formAdd?.value;
    this.bookService.create(data).subscribe(res=>{
      this.router.navigate(['books'])
      console.log(res);
    })
  }
  get title(){
    return this.formAdd?.get('title');
  }

  get author(){
    return this.formAdd?.get('author');
  }

  get description(){
    return this.formAdd?.get('description');
  }
}
