"use strict";
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.body;

document.addEventListener('click', event => {
    if (event.target.closest('.header__burger')) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
    };
});

//Слайдер

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.smart__arrowr',
        prevEl: '.smart__arrow',
    },
    loop: true,
    simulateTouch: false,
});

//Таби
const tabNavItems = document.querySelectorAll('.nav-tabs__button');
const tabItems = document.querySelectorAll('.body-tabs__tab');

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    let activeElement = null;
    let newActiveElement = null;

    if (targetElement.closest('.nav-tabs__button')) {

        tabNavItems.forEach(function (item, index) {
            if (item.classList.contains('active')) {
                activeElement = index;
                item.classList.remove('active');
            };
            if (item === targetElement) {
                newActiveElement = index;
            };
        });

        targetElement.classList.add('active');
        tabItems[activeElement].classList.remove('active');
        tabItems[newActiveElement].classList.add('active');
    };
});



















/*
const itemNavTabs = document.querySelectorAll('.naw-tabs__item');
const itemTabs = document.querySelectorAll('.body-tabs__tabs');

document.addEventListener('click', event => {
    const targetElement = event.target;
    let activeElement = null;
    let newTargetElement = null;

    if (targetElement.closest('.naw-tabs__item')) {
        itemNavTabs.forEach((item, index) => {
            if (item.classList.contains('active')) {
                activeElement = index;
                item.classList.remove('active');
            };
            if (item === targetElement) {
                newTargetElement = index;
            };
        });

        targetElement.classList.add('active');
        itemTabs[activeElement].classList.remove('active');
        itemTabs[newTargetElement].classList.add('active');
    };
});

*/





























//Таби
/*
const tabsNavItems = document.querySelectorAll('.naw-tabs__item');
const tabsItems = document.querySelectorAll('.body-tabs__tabs');

document.addEventListener('click', function (event) {
    const targetElement = event.target;
    let activeElement = null;
    let nevActiveElement = null;

    if(targetElement.closest('.naw-tabs__item')) {
        tabsNavItems.forEach(function (item, index) {
            if(item.classList.contains('active')) {
                activeElement = index;
                item.classList.remove('active');
            };

            if(item === targetElement) {
                nevActiveElement = index;
            };
        });
        targetElement.classList.add('active');
        tabsItems[activeElement].classList.remove('active');
        tabsItems[nevActiveElement].classList.add('active');
    };
});
*/