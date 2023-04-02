## Table of Contents

- [Delivery fee calculator](#delivery-fee-calculator)
  - [About the author](#about-the-author)
    - [Santiago Manso Castro student @Code Academy Berlin](#santiago-manso-castro-student-code-academy-berlin)
  - [**Notice regarding testing**](#notice-regarding-testing)
  - [Description](#description)
  - [Mockup](#mockup)
  - [Installation](#installation)
  - [Dependencies](#dependencies)
  - [Features](#features)
    - [Language Switcher](#language-switcher)
      - [Functionallity](#functionallity)
      - [User Experience](#user-experience)
    - [PLAYGROUND](#playground)
      - [Functionallity](#functionallity-1)
      - [Developer Experience](#developer-experience)

# Delivery fee calculator

## About the author

### Santiago Manso Castro student @Code Academy Berlin

I am a **physical therapist** turning fullstack developer, **Living in berlin with spanish passport since 2021**. I joined bootcamp on November 2022 and it's been fun Learning new teach stack and developing Apps, my fav thing about apps are global states, and **i would love to fully understand Redux❤️ this year**.

## **Notice regarding testing**

Inside of the **utils folder** there is a function called calculate.js that was meant to **isolate the functionallity** of the calculate function that lives inside of my cartContext, my goal was to perfom an **integration test** on that function itself, due to the importance that represent for both user and the company. I reckon that it is also necessary to isolate and export the CheckRush() function that resides also in the CartContext, **this would definitely be among my priorities for the near future.**

---

## Description

Delivery fee calculator with a twist! **has a playground built in where the tester can generate random values to different fields by just one clink**, providing a fun and engaging way to see how the fees are applied instantly and **with a language switcher incorporotaed, that allows the user to swap between English, Spanish, German and Finnish**, providing a better user experience across users of different native tounges.

---

## Mockup

<img src="https://i.postimg.cc/cCjTyjTc/mockup.png" alt="aa">

---

## Installation

```
npx install
```

## Dependencies

```
Tailwind CSS        // CSS framework
typescript          // Javascript superset
jest                // Testing library
```

---

## Features

### Language Switcher

#### Functionallity

**LanguageContext**: This component creates a LanguageContext using the createContext method from the React library. It also exports a LanguageProvider component which, when rendered, wraps its children with the LanguageContext.Provider component and provides the context data. The data object passed as the value to the Provider contains the current language, the corresponding text translations, and a function to handle changing the language. The language and text state variables are initialized to 'en' and the translations.en object respectively. The handleChangeLanguage function sets the language and text state variables based on the language argument passed to it, by using the switch statement to match the passed language with the available languages in the translations object. This allows for dynamic language switching throughout the app by consuming the LanguageContext in the components that need it.

#### User Experience

A user benefits from being able to switch between different languages by having improved accessibility and usability, as they can interact with the application in their native language, increased reach as the application can be used by a wider audience, including users who may not be fluent in the default language, and improved localization as the user can interact with the application in their preferred language.

- Involved files

```
src/context/LanguageContext.tsx
src/components/LanguageSwitcher.tsx
src/utils/countries.tsx
src/utils/diccionary.tsx
```

### PLAYGROUND

#### Functionallity

**RightCol**: This component creates a right column inside of the Cart.tsx component, diving the UI into two parts, in it there is a destructuring of the states passed on by the global cart context.
The main component is an article tag witch acts like a parent to several span tags where the actual value of the global states for value, distance, amountItems date and time reside.
There are also 3 random buttons that invoke the random functions that comes as well from the cart context.

#### Developer Experience

A developer benefits from being able to instantly see how the different fees are applied, therefore increasing testing times and diverse scenarios (there are values that return 0, hence the conditional rendering of the **CTA button** located in the LeftCol component)

- Involved files

```
src/context/CartContext.tsx
src/components/RightCol.tsx
```
