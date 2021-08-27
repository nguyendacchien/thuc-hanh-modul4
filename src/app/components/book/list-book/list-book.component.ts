import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books:any;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
   this.getAll()
  }
  getAll(){
    this.bookService.getList().subscribe(res=>{
      this.books=res
    })
  }
  delete(id:number){
    if (confirm('bạn có muốn xóa')){
      this.bookService.destroy(id).subscribe(res=>{
        this.getAll()
      })
    }
  }

}
