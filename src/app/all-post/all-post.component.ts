import { Component, OnInit } from '@angular/core';
import { Post } from '../core/models/post.model';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {
  allPost: Post[] = [];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(data => {
      this.allPost = data;
    });
  }

}
