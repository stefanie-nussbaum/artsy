# Artsy README 

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Artsy** is an app/website made for finding, buying, and selling various types of art. Users will be able to Upload, edit, and delete their own creations as well as search for and favorite other users' art. Artsy is inspired by the popular art commerce app Etsy.


<br>

## MVP

_The **Artsy** MVP will include full CRUD functionality of at least one table on both the front and back end. Tables in the databse will have at least one association between them. There should be at least 8 separate views/components to keep the code organized and easy to read.  _

<br>

### Goals

- _Full CRUD on products_
- _Many organized front end components and views_
- _Full CRUD functionality for users to create, read, update, and delete products._
- _Use flexbox or grid and 2 media queries in css styling_
- _etc._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Frontend development |
|   React Router   | Frontend routes |
| Axios | Makes calls for data from backend |
|     Rails     | Backend database |
|  JWT  | User authentication |
|  Bcrypt  | Hashing of user passwords |
|  Material UI  | Frontend styling |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD



#### Component Tree

![Screenshot from 2021-08-24 22-18-49](https://user-images.githubusercontent.com/85084394/130720859-db718abd-bb4e-4abd-9663-c554d91a5989.png)


#### Component Architecture

``` structure

src
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Products.jsx
      |__ ProductDetails.jsx
      |__ CreateProduct.jsx
      |__ EditProduct.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Favorites.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ products.js
      |__ categories.js

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Models/Controllers    |    H     |     2 hrs      |      hrs     |    TBD    |
| Backend routes    |    H     |     3 hrs      |      hrs     |    TBD    |
| Seed Data    |    H     |     2 hrs      |      hrs     |    TBD    |
| User authentication    |    H     |     2 hrs      |      hrs     |    TBD    |
| Create frontend setup    |    H     |     2 hrs      |      hrs     |    TBD    |
| Display products view    |    H     |     3 hrs      |      hrs     |    TBD    |
| Product details view    |    H     |     3 hrs      |      hrs     |    TBD    |
| Create product view    |    H     |     2 hrs      |      hrs     |    TBD    |
| Edit product view    |    H     |     1 hrs      |      hrs     |    TBD    |
| Register view    |    H     |     2 hrs      |      hrs     |    TBD    |
| Login view |    H     |     1 hrs      |      hrs     |     TBD     |
| Layout/Navbar/Footer    |    H     |     3 hrs      |      hrs     |    TBD    |
| Basic CSS styling    |    H     |     3 hrs      |      hrs     |    TBD    |
| Style products display    |    H     |     3 hrs      |      hrs     |    TBD    |
| Style product details    |    H     |     3 hrs      |      hrs     |    TBD    |
| Style layout    |    H     |     2 hrs      |      hrs     |    TBD    |
| TOTAL               |          |     6 hrs      |      hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Screenshot from 2021-08-24 20-41-38](https://user-images.githubusercontent.com/85084394/130712529-021386f6-d90b-4af6-9292-697abc61f753.png)

<br>

***

## Post-MVP

- _User authentication_
- _Users will have the ability to favorite items to come back to view later_
- _Both light and dark mode_
- 
***

## Code Showcase



## Code Issues & Resolutions

