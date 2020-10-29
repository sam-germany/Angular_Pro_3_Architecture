import {Component, OnInit} from '@angular/core';
import {test} from '@app/test';
import {environment} from '@src/environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'appCourse2';

  constructor(private afs: AngularFirestore) { }


  ngOnInit() {
     this.afs.collection('test22').snapshotChanges().subscribe(
       items => {
         console.log(items.map( x => x.payload.doc.data()))
       }
       );
  }
}














