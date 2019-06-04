import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostComponent } from './all-post.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../core/data.service';
import { from } from 'rxjs';

describe('AllPostComponent', () => {
  let component: AllPostComponent;
  let fixture: ComponentFixture<AllPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ AllPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostComponent);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all the posts from server', ()=>{
     let service = TestBed.get(DataService);
     spyOn(service, 'getPosts').and.returnValue(from([[1,2,3]]));
     
     fixture.detectChanges();
     
     expect(component.allPost.length).toBe(3)
  })
});
