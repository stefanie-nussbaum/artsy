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

_**Artsy** is an app/website made for finding, buying, and selling various types of art. Users will be able to Upload, edit, and delete their own creations as well as search for and favorite other users' art. Artsy is inspired by the popular art commerce app Etsy._


<br>

## MVP

_The **Artsy** MVP will include full CRUD functionality of at least one table on both the front and back end. Tables in the databse will have at least one association between them. There should be at least 8 separate views/components to keep the code organized and easy to read._

<br>

### Goals

- _Full CRUD on products in backend._
- _Many organized front end components and views._
- _Full CRUD functionality for users to create, read, update, and delete products._
- _Use flexbox or grid and 2 media queries in css styling._


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

Mobile Views:
![Screenshot from 2021-08-24 23-23-28](https://user-images.githubusercontent.com/85084394/130726563-d36c04cb-90e5-4d71-9b5d-1bc7688db1d3.png)
![Screenshot from 2021-08-24 23-24-17](https://user-images.githubusercontent.com/85084394/130726571-46a3571c-24f7-46bc-8a04-c98541235bfb.png)
![Screenshot from 2021-08-24 23-24-26](https://user-images.githubusercontent.com/85084394/130726575-002cf261-66a0-45ff-86d1-3cd517ce1891.png)
Desktop Products:
![Screenshot from 2021-08-24 23-24-01](https://user-images.githubusercontent.com/85084394/130726586-ac7afbec-111c-48d6-a381-365d5dd90eab.png)
Desktop Product Details:
![Screenshot from 2021-08-24 23-26-33](https://user-images.githubusercontent.com/85084394/130726592-21ca2132-1580-471a-ba07-3f764728d7af.png)
Desktop Create/Edit Product:
![Screenshot from 2021-08-24 23-24-45](https://user-images.githubusercontent.com/85084394/130726598-6cab14ec-b193-49c0-8805-fbf3431bc7e6.png)




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
| Style products display    |    M     |     3 hrs      |      hrs     |    TBD    |
| Style product details    |    M     |     3 hrs      |      hrs     |    TBD    |
| Style layout    |    M     |     2 hrs      |      hrs     |    TBD    |
| PMVP favorites    |    L     |     3 hrs      |      hrs     |    TBD    |
| PMVP dark/light mode    |    L     |     3 hrs      |      hrs     |    TBD    |
| TOTAL               |          |     43 hrs      |      hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Screenshot from 2021-08-25 12-30-19](https://user-images.githubusercontent.com/85084394/130837723-52b43c39-8ac2-4264-80a2-1458a255f9c0.png)



<br>

***

## Post-MVP

- _User authentication_
- _Users will have the ability to favorite items to come back to view later_
- _Both light and dark mode_

***

## Code Showcase



## Code Issues & Resolutions

