import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  formEdit:FormGroup|undefined;
  book:any;
  constructor(private bookService:BookService,private fb:FormBuilder, private router:Router, private active: ActivatedRoute) { }
// @ts-ignore
  id = +this.active.snapshot.paramMap.get('id');
  ngOnInit(): void {
    console.log(this.id)
    this.bookService.getById(this.id).subscribe(res=>{
      this.book=res;
      this.formEdit = this.fb.group({
        title:[this.book.title,[Validators.required]],
        author:[this.book.author,[Validators.required]],
        description:[this.book.description,Validators.required]
      })
    })
  }
  submitForm(){
    let data = this.formEdit?.value;
    this.bookService.edit(this.id,data).subscribe(res=>{
      this.router.navigate(['books'])
    })
  }
  get title(){
    return this.formEdit?.get('title');
  }

  get author(){
    return this.formEdit?.get('author');
  }

  get description(){
    return this.formEdit?.get('description');
  }


}
