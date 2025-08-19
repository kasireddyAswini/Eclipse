import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  // {
  //   path:'',component:AppComponent
  // },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'product/:id',component:ProductComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
   {
    path:'template-form',component:TemplateFormComponent
  },
  {
    path:'reactive-forms',component:ReactiveFormsComponent
  },
  {
    path:'parent',component:ParentComponent,children:[
      {
        path:'parent/Child1',component:Child1Component
      },
      {
        path:'parent/Child2',component:Child2Component
      }
    ]
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
