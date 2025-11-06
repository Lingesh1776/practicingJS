import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./foodapplogo.png";

// const jsxHeading = <div>
//     <img src="./react.png" alt="Logo" />
//     <h1 id="heading">Test my app🚀</h1>
//     </div>;

// const HeadingComponent = () => (
//  <div>
//     <h1 id="heading">Hi, This is for practice!!</h1>
//  </div>
// );


const RestList = [
                  {
                    "info": {
                      "id": "582150",
                      "name": "Chinese Wok",
                      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                      "locality": "Avinashi Road",
                      "areaName": "Peelamedu",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "61955",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "4.1K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 6.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "6.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-06 02:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/chinese-wok-avinashi-road-peelamedu-rest582150",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "50314",
                      "name": "Pizza Hut",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/2d8c9493-12f6-42fa-84ff-635c0e66094f_50314.JPG",
                      "locality": "DB Road",
                      "areaName": "RS Puram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Pizzas"
                      ],
                      "avgRating": 4.4,
                      "parentId": "721",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "15K+",
                      "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-06 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Pizza.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/pizza-hut-db-road-rs-puram-rest50314",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "756256",
                      "name": "Olio - The Wood Fired Pizzeria",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/d9ebedce-b4ed-4d28-a1a5-07efe42693da_756256.JPG",
                      "locality": "Peelamedu",
                      "areaName": "PPS Colony",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "11633",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "872",
                      "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 6.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "6.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-06 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/olio-the-wood-fired-pizzeria-peelamedu-pps-colony-rest756256",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "579276",
                      "name": "Big Bowl",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_579276.JPG",
                      "locality": "Avinashi Road",
                      "areaName": "Namburar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Chinese",
                        "Tibetan",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "434792",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "2.1K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 6.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-45 mins",
                        "lastMileTravelString": "6.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-06 02:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹129"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/big-bowl-avinashi-road-namburar-rest579276",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "737927",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/b30f7bf8-baef-48c7-bd70-db0856f47f5c_737927.JPG",
                      "locality": "Cross cut Road",
                      "areaName": "Gandhipuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.4,
                      "parentId": "547",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "4.0K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-06 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹415"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/kfc-cross-cut-road-gandhipuram-rest737927",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "50456",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f73fffdc-9c14-42ed-8477-9a17eccb400a_50456.jpg",
                      "locality": "RS Puram",
                      "areaName": "Ram Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.4,
                      "parentId": "166",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "33K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-06 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹55"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "2.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/burger-king-rs-puram-ram-nagar-rest50456",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "51905",
                      "name": "Cock Ra Co",
                      "cloudinaryImageId": "j3htwdasf9rrgafdxtip",
                      "locality": "RS Puram",
                      "areaName": "RS Puram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Biryani",
                        "Arabian",
                        "South Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      "parentId": "574740",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "27K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.0",
                          "ratingCount": "7.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/cock-ra-co-rs-puram-rest51905",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "575570",
                      "name": "Nagerkovil Arya Bhavan",
                      "cloudinaryImageId": "yj6g7wugbi5qbvjtoqmr",
                      "locality": "Peelamedu",
                      "areaName": "Peelamedu",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "353249",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "52K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 4.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "4.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "9.0K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/nagerkovil-arya-bhavan-peelamedu-rest575570",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "53332",
                      "name": "Sree Aksshayam",
                      "cloudinaryImageId": "bc2eb057b8474efce6932bb4335d950e",
                      "locality": "Peelamedu",
                      "areaName": "Peelamedu",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "671577",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "98K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {

                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "12K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/sree-aksshayam-peelamedu-rest53332",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "50261",
                      "name": "HMR Hotel",
                      "cloudinaryImageId": "ngrkti6g5uh6adiwr37o",
                      "locality": "RS Puram",
                      "areaName": "RS Puram",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Biryani",
                        "Indian",
                        "Chinese",
                        "Seafood",
                        "Tandoor",
                        "Mexican"
                      ],
                      "avgRating": 4.4,
                      "parentId": "96264",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "84K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 23:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/hmr-hotel-rs-puram-rest50261",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "60958",
                      "name": "Denmarrk Restaurant",
                      "cloudinaryImageId": "kotlytcyvkm5c5sl86mk",
                      "locality": "Ganapathy",
                      "areaName": "Ganapathy",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Tandoor",
                        "Chinese",
                        "Kebabs",
                        "Juices",
                        "Arabian"
                      ],
                      "avgRating": 4.4,
                      "parentId": "598516",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "24K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹149"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.3",
                          "ratingCount": "6.4K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/denmarrk-restaurant-ganapathy-rest60958",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "902638",
                      "name": "Cream Centre- Vegetarian Legacy Since 1958",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/43874faa-2316-411d-a17f-6807a77f8bfb_902638.jpg",
                      "locality": "ThirugnanasambandarRoad",
                      "areaName": "Race Course",
                      "costForTwo": "₹900 for two",
                      "cuisines": [
                        "Continental",
                        "Indian",
                        "Italian",
                        "North Indian"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "600673",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "355",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/cream-centre-vegetarian-legacy-since-1958-thirugnanasambandarroad-race-course-rest902638",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "639425",
                      "name": "Dum Safar Biryani",
                      "cloudinaryImageId": "47eee43e59a6d49b0f6d9a2b0e523f47",
                      "locality": "Raja Street",
                      "areaName": "Town Hall",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Kebabs",
                        "North Indian",
                        "Barbecue"
                      ],
                      "avgRating": 4.1,
                      "parentId": "351013",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "628",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 23:30:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/dum-safar-biryani-raja-street-town-hall-rest639425",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "51260",
                      "name": "Haribhavanam",
                      "cloudinaryImageId": "otd8mzt2w2uze8ff9604",
                      "locality": "Gopalapuram",
                      "areaName": "Gopalapuram",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "South Indian",
                        "Chettinad",
                        "Chinese"
                      ],
                      "avgRating": 4.6,
                      "parentId": "642678",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "16K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-20 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-11-05 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "android/static-assets/icons/big_rx.png",
                            "description": "bolt!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Biryani.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "bolt!",
                                  "imageId": "android/static-assets/icons/big_rx.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹79"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.4",
                          "ratingCount": "9.8K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-f32c848e-f079-4a61-b05d-5ec2c64dbff0"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/coimbatore/haribhavanam-gopalapuram-rest51260",
                      "type": "WEBLINK"
                    }
                  }
                ];
const Header = () => {
    return(
    <div className="heading">
        <div className="logocontainer">
        <img 
        className="logo" src="https://imgs.search.brave.com/pJ2FWd4Wj5GgAiv9bBFSWhbcrUUJ3u1d3Zz93A18eOg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Zm9vZC1sb2dvLWRl/c2lnbi10ZW1wbGF0/ZV80NzQ4ODgtMTgw/Ny5qcGc_c2VtdD1h/aXNfaW5jb21pbmcm/dz03NDAmcT04MA"></img>
        </div>
        <div className="nav-items">
            <ul>
            <li>Home</li>
            <li>About Us</li>   
            <li>Contact Us</li>
            <li>Cart</li>
            </ul> 
        </div>
    </div>

    );
};

const RestCard = ({RestData}) => {
    const {cloudinaryImageId,name,cuisines,avgRating} = RestData?.info;
    return (
        <div className="res-container" style={{color:"0F0F0F"}}>
                <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
                <div
                className="res-describe">
                <h3>{name}</h3>
                <h4>{cuisines.join(",")}</h4>
                <h4>{"⭐ "+avgRating}</h4>
                <h4>{RestData.info.sla.deliveryTime + " min"}</h4>
                </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="cards">
                {
                    RestList.map((Res)=>
                    <RestCard key={Res.info.id} RestData={Res}/>)
                }
            </div>
        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);