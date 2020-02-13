import {Component, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Router} from '@angular/router';
import {Store} from '../../../shared/entities';
import {CollectionNames} from '../../../shared/collections';

@Component({
    selector: 'app-store-list',
    templateUrl: './store-list.component.html',
    styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent implements OnInit {

    public stores: Store[];

    constructor(private firestore: AngularFirestore,
                private router: Router) {
    }

    ngOnInit() {
        this.firestore.collection<Store>(CollectionNames.STORES).snapshotChanges().subscribe(stores => {
            this.stores = stores.map(store => {
                const doc = store.payload.doc;
                return {
                    id: doc.id,
                    ... doc.data()
                } as Store;
            });
        });
    }


    public createStoreClicked(): void {
        this.router.navigateByUrl('/store/create');
    }
}
