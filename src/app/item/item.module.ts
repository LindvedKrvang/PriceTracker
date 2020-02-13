import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {IonicModule} from '@ionic/angular';
import {CoreModule} from '../core/core.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ItemOverviewComponent
    }
];

@NgModule({
    declarations: [
        ItemOverviewComponent,
        CreateItemComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        IonicModule,
        CoreModule,
        ReactiveFormsModule
    ],
    entryComponents: [
        CreateItemComponent
    ]
})
export class ItemModule {
}
