import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book:any
  constructor(private bookService:BookService,private active:ActivatedRoute) { }
// @ts-ignore
  id = +this.active.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.bookService.getById(this.id).subscribe(res=>{
      this.book=res
      // console.log(res)
    })
  }


}
