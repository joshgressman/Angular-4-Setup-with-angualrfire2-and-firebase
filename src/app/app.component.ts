import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

//Note: when using the LIST you can work with a list of data
// when working with the object observable you are working with
// a single object

  // item: FirebaseListObservable<any[]>;
  //
  // cuisines: FirebaseListObservable<any[]>;
  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;

  restaurant;

   constructor(private db: AngularFireDatabase) {

   }


   ngOnInit(){
    //  this.item = this.db.list('/cuisines');
    //  console.log(this.item);
    //  this.restaurant = this.db.object('/restaurant');

    //This is an example of joinin data from different nodes
    //the # value in restaurants is querying the cuisue by key in the second map method
    this.cuisines = this.db.list('/cuisines');
    this.restaurants = this.db.list('/restaurants')
    .map(restaurants => {
       console.log("Before Map", restaurants);
       restaurants.map(restaurant => {
         restaurant.cuisineType = this.db.object('/cuisines/' + restaurant.cuisine);
       })
       console.log("After Map", restaurants);
       return restaurants;
    });

   }

   add(){
    const item = this.db.list('/cuisines');
    item.push({name: "Asain"});
   }

   update(){
     this.db.object('/restaurant').set({
       name: "New Name 2",
       rating: 5,
       cuisin: "New Food"

     });
   }

   remove(){
     this.db.object('/restaurant').remove()
     //push, update, set remove returns a promise
     //Promise resolved when completed / response / error
     .then(message => console.log("success"))
     .catch(error => console.log(error));
   }

}
