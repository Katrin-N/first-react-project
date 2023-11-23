import React from 'react';
import ReactDOM from 'react-dom/client';

import {restaurants} from './constants/mock'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <h1>{restaurants[0].name}</h1>
        <h3>Меню</h3>
        <ul>
            <li id={restaurants[0].menu[0].id}>
                {restaurants[0].menu[0].name} - {restaurants[0].menu[0].price}
            </li>
            <li id={restaurants[0].menu[1].id}>
                {restaurants[0].menu[1].name} - {restaurants[0].menu[1].price}
            </li>
            <li id={restaurants[0].menu[2].id}>
                {restaurants[0].menu[2].name} - {restaurants[0].menu[2].price}
            </li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
            <li id={restaurants[0].reviews[0].id}>
                {restaurants[0].reviews[0].user} - {restaurants[0].reviews[0].text}
            </li>
            <li id={restaurants[0].reviews[1].id}>
                {restaurants[0].reviews[1].user} - {restaurants[0].reviews[1].text}
            </li>
        </ul>
        <h1>{restaurants[1].name}</h1>
        <h3>Меню</h3>
        <ul>
            <li id={restaurants[1].menu[0].id}>
                {restaurants[1].menu[0].name} - {restaurants[1].menu[0].price}
            </li>
            <li id={restaurants[1].menu[1].id}>
                {restaurants[1].menu[1].name} - {restaurants[1].menu[1].price}
            </li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
            <li id={restaurants[1].reviews[0].id}>
                {restaurants[1].reviews[0].user} - {restaurants[1].reviews[0].text}
            </li>
            <li id={restaurants[1].reviews[1].id}>
                {restaurants[1].reviews[1].user} - {restaurants[1].reviews[1].text}
            </li>
            <li id={restaurants[1].reviews[1].id}>
                {restaurants[1].reviews[1].user} - {restaurants[1].reviews[1].text}
            </li>
        </ul>
        <h1>{restaurants[2].name}</h1>
        <h3>Меню</h3>
        <ul>
            <li id={restaurants[2].menu[0].id}>
                {restaurants[2].menu[0].name} - {restaurants[2].menu[0].price}
            </li>
            <li id={restaurants[2].menu[1].id}>
                {restaurants[2].menu[1].name} - {restaurants[2].menu[1].price}
            </li>
            <li id={restaurants[2].menu[2].id}>
                {restaurants[2].menu[2].name} - {restaurants[2].menu[2].price}
            </li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
            <li id={restaurants[2].reviews[0].id}>
                {restaurants[2].reviews[0].user} - {restaurants[2].reviews[0].text}
            </li>
        </ul>
        <h1>{restaurants[3].name}</h1>
        <h3>Меню</h3>
        <ul>
            <li id={restaurants[3].menu[0].id}>
                {restaurants[3].menu[0].name} - {restaurants[3].menu[0].price}
            </li>
            <li id={restaurants[3].menu[1].id}>
                {restaurants[3].menu[1].name} - {restaurants[3].menu[1].price}
            </li>
        </ul>
        <h3>Отзывы</h3>
        <ul>
            <li id={restaurants[3].reviews[0].id}>
                {restaurants[3].reviews[0].user} - {restaurants[3].reviews[0].text}
            </li>
            <li id={restaurants[3].reviews[1].id}>
                {restaurants[3].reviews[1].user} - {restaurants[3].reviews[1].text}
            </li>
        </ul>
    </div>
);

root.render(
    React.createElement("div", {
        className: "restaurant",
        children: [
            //Ресторан 1
            React.createElement("h1", { children: restaurants[0].name }),
            React.createElement("h3", { children: "Меню" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[0].menu[0].name + " - " +restaurants[0].menu[0].price }),
                    React.createElement("li", { children: restaurants[0].menu[1].name + " - " +restaurants[0].menu[1].price }),
                    React.createElement("li", { children: restaurants[0].menu[2].name + " - " +restaurants[0].menu[2].price }),
                ]}),
            React.createElement("h3", { children: "Отзывы" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[0].reviews[0].user + " - " +restaurants[0].reviews[0].text }),
                    React.createElement("li", { children: restaurants[0].reviews[1].user + " - " +restaurants[0].reviews[1].text }),
                ]}),
            //Ресторан 2
            React.createElement("h1", { children: restaurants[1].name }),
            React.createElement("h3", { children: "Меню" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[1].menu[0].name + " - " +restaurants[1].menu[0].price }),
                    React.createElement("li", { children: restaurants[1].menu[1].name + " - " +restaurants[1].menu[1].price }),
                ]}),
            React.createElement("h3", { children: "Отзывы" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[1].reviews[0].user + " - " +restaurants[1].reviews[0].text }),
                    React.createElement("li", { children: restaurants[1].reviews[1].user + " - " +restaurants[1].reviews[1].text }),
                    React.createElement("li", { children: restaurants[1].reviews[2].user + " - " +restaurants[1].reviews[2].text }),
                ]}),
            //Ресторан 3
            React.createElement("h1", { children: restaurants[2].name }),
            React.createElement("h3", { children: "Меню" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[2].menu[0].name + " - " +restaurants[2].menu[0].price }),
                    React.createElement("li", { children: restaurants[2].menu[1].name + " - " +restaurants[2].menu[1].price }),
                    React.createElement("li", { children: restaurants[2].menu[2].name + " - " +restaurants[2].menu[2].price }),
                ]}),
            React.createElement("h3", { children: "Отзывы" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[2].reviews[0].user + " - " +restaurants[2].reviews[0].text }),
                ]}),
            //Ресторан 4
            React.createElement("h1", { children: restaurants[3].name }),
            React.createElement("h3", { children: "Меню" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[3].menu[0].name + " - " +restaurants[3].menu[0].price }),
                    React.createElement("li", { children: restaurants[3].menu[1].name + " - " +restaurants[3].menu[1].price }),
                ]}),
            React.createElement("h3", { children: "Отзывы" }),
            React.createElement("ul", {
                children: [
                    React.createElement("li", { children: restaurants[3].reviews[0].user + " - " +restaurants[3].reviews[0].text }),
                    React.createElement("li", { children: restaurants[3].reviews[1].user + " - " +restaurants[3].reviews[1].text }),
                ]}),
        ],
    })
);
