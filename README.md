# WEB103 Project 4 - *AutoMaster*

Submitted by: **Devin Khun**

About this web app: **AutoMaster is a user-friendly web app that lets car enthusiasts design and personalize their favorite vehicles. In the virtual garage, users can create, save, and update custom car models to match their unique preferences. Powered by a robust PostgreSQL database and Express backend controllers, AutoMaster delivers a smooth and reliable experience for all your car customization needs.**

Time spent: **12** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomCar` table**
  - [x] **NOTE: Your GIF must include a view of your Railway database that shows the contents of the table used by your app**
- [x] **The web app uses React to display data from the API**
- [x] **Users can view a list of options they can select for different aspects of a `CustomCar`**
- [x] **On selecting each option, the displayed visual icon for the `CustomCar` updates to match the option the user chose**
- [x] **The user can submit their choices to save the car to the list of created `CustomCar`**
- [x] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database**
- [x] **The app displays the total price of all features**
- [x] **Users can view a list of all submitted `CustomCar`**
- [x] **Users can edit or delete a submitted `CustomCar` from the list view of submitted `CustomCar`**
- [x] **Users can update or delete `CustomCar` that have been created from the detail page**

The following **optional** features are implemented:

- [ ] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/SJNc3wm.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
<img src='./Project4-AutoMaster.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [LICEcap](https://www.cockos.com/licecap/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges I came across was the backend controllers working with the API functions I had on the frontend. I found out that I needed to have the same routing on the Vite Config Proxy in order to grab the data from the API controllers.

## License

Copyright [2024] [Devin Khun]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

