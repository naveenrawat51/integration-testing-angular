import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor( private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(p => {
      if(p['id'] === 0)
      this._router.navigate(['not-found']);
    });
  }

  save(){
    this._router.navigate(['allpost']);
  }
}
