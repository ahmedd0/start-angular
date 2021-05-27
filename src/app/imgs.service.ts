import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgsService {
  portfolioItems = [
    {name:"LOG CABIN",imgSrc:"cabin.png"},
    {name:"TASTY CAKE",imgSrc:"cake.png"},
    {name:"CIRCUS TENT",imgSrc:"circus.png"},
    {name:"CONTROLLER",imgSrc:"game.png"},
    {name:"LOCKED SAFE",imgSrc:"safe.png"},
    {name:"SUBMARINE",imgSrc:"submarine.png"},

  ]

  constructor() { }
}
