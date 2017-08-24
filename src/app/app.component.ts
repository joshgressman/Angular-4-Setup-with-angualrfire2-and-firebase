import { Component, OnInit} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  item: FirebaseObjectObservable<any>;
  cuisines = [];

   constructor(private db: AngularFireDatabase) {

   }


   ngOnInit(){
     this.item = this.db.object('/cuisines');
   }


}
