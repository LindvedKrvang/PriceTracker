import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import {CollectionNames} from '../../../shared/collections';
import {Store} from '../../../shared/entities';

@Component({
    selector: 'app-create-store',
    templateUrl: './create-store.component.html',
    styleUrls: ['./create-store.component.scss'],
})
export class CreateStoreComponent implements OnInit {

    public form: FormGroup;

    constructor(private location: Location,
                private fb: FormBuilder,
                private firestore: AngularFirestore) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            name: null
        });
    }

    public saveClicked(): void {
        const store: Store = this.form.value;
        this.saveStoreToDb(store).then(() => this.navigateToSource());
    }

    public cancelClicked(): void {
        this.navigateToSource();
    }

    private async saveStoreToDb(store: Store) {
        await this.firestore.collection(CollectionNames.STORES).add(store);
    }

    private navigateToSource(): void {
        this.location.back();
    }
}
