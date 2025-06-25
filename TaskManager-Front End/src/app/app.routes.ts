import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserloginComponentComponent } from './userlogin-component/userlogin-component.component';
import { TasksComponentComponent } from './tasks-component/tasks-component.component';

export const routes: Routes = [
    {path:'' ,component:UserloginComponentComponent},
    {
        path:'tasks',component:TasksComponentComponent
    }
];
