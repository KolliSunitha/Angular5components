import {Component } from '@angular/core';
import { Server } from 'selenium-webdriver/safari';

@Component ({
    selector: 'app-click-me',
    template :`
    <button (click) ="onClickMe()"> Click Me</button>{{clickMessage}}`
})

export class ClickMeComponent {

    clickMessage ='';

    onClickMe() :void {
        this.clickMessage = 'Iam from the Click me Button ';
    }
}