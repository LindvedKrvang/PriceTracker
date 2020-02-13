import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreListComponent} from './components/store-list/store-list.component';
import {Route, RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';
import {IonicModule} from '@ionic/angular';
import {CreateStoreComponent} from './components/create-store/create-store.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'list',
        component: StoreListComponent
    },
    {
        path: 'create',
        component: CreateStoreComponent
    }
];

@NgModule({
    declarations: [
        StoreListComponent,
        CreateStoreComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        CoreModule,
        IonicModule,
        ReactiveFormsModule
    ],
    providers: [
        FormBuilder
    ]
})
export class StoreModule {
}
