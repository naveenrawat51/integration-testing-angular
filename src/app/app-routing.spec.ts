import { routes } from './app-routing.module';
import { from } from "rxjs";
import { AllPostComponent } from './all-post/all-post.component';

describe('routes', ()=>{
    it('should contain a route for /allpost', ()=>{
       
        expect(routes).toContain({ path: 'allpost', component: AllPostComponent})
    })
})