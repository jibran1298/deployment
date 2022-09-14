import { useEffect, useState } from 'react'
import ImageCarousel from './components/carousel/carousel'
import Description from './components/description/description'
import Label from './components/label/label'
import Login from './components/login/login'
import MapComponent from './components/map/map'
import NearbyActivity from './components/nearby-activity/nearbyActivity'
import { API_ENDPOINT } from './shared/data/common-data'

import './shared/style/main.css'

/**

{
    "id": 270,
    "location": null,
    "name": "Belfry of Ghent",
    "tripadvisor_key": null,
    "description_short": "Flanders has 23 belfries, but Ghent’s the only one with a dragon on top. Climb the Belfry of Ghent’s stairs or take a leisurely trip up the lift for 360 views of the city. ",
    "latitude": 51.0536,
    "longitude": 3.7249,
    "tips_tricks": "- Gets windy and the stairs are a bit steep and narrow\n\n\n**Getting There**\n\n\n- By Tram: close to tram stop Gent Korenmarkt perron 4. Trams 1 and 4 stop here\n- By Bus: close to bus stop Gent Korenmarkt perron 4. Bus N4 stops here\n\n\n",
    "description_long": "The Belfry of Ghent is a major tourist attraction and symbol of the city. Easily seen before you get to the main square, the belfry is one of three towers that keep watch over Ghent’s city centre. The Belfry, Saint Bavo’s Cathedral and Saint Nicholas' Church are all historic and well known buildings that you’ll see in every travel guide to Ghent. So, if we didn’t mention it you’d be missing out! \n\nThe Belfry has good views of Ghent from above once you get up all the stairs. It’s a 360 view of the city and, if you happen to come at sunset, you’ll have one of the best views around. But the stairs at the very top can get pretty busy in tourist season. Try the elevator in the evening or go outside of the tourist season to avoid the crowds. \n\nWhat’s a belfry for anyway? Well, the Belfry of Ghent was built in 1313 as a symbol of the city’s independence. It was used as a watchtower to view the whole city and keep an eye out for fires. And, before we had alarm clocks and phones, people stayed on time thanks to bell towers. The bells would chime each hour. The Belfry of Ghent actually has 7 bells to make an even grander sound. \n\n**The Dragon**\n\nGhent’s Belfry was also used to keep important documents safe. They didn’t have passwords to protect their documents back then, after all. A massive tower had to do it! The dragon of Ghent is a symbol of protection to keep the city safe. It also looks pretty cool. \n\nHistoric pieces are on display as you go up the belfort, with a bit of info on each and Ghent’s history. Ghent’s golden dragon at the very top of the belfort \n",
    "slug": "belfry-of-ghent",
    "anecdote_caption": null,
    "opening_hours": "Open everyday, 10:00 to 18:00 (last tickets sold 17:30)\n",
    "seasonality": "All seasons \n",
    "price": "Adult 8€, Kids (under 12) free, special discount rates available ",
    "covid_impact": "Open; national COVID rules apply\n",
    "anecdote": null,
    "published_at": "2021-02-03T15:31:51.512Z",
    "created_by": null,
    "updated_by": 7,
    "created_at": "2021-02-15T20:42:29.081Z",
    "updated_at": "2021-11-08T09:56:21.086Z",
    "local_name": null,
    "address": "Belfort van Gent, 9000 Gent, Belgium",
    "inactive": null,
    "author": 7,
    "activity_type": null,
    "active_start_date": null,
    "active_end_date": null,
    "content_views": 589,
    "highlighted_explore": null,
    "neighbourhood": null,
    "ticket_link": null,
    "tour_link": null,
    "intro": null,
    "anecdotes": [],
    "images": [
        {
            "id": 1601,
            "name": "Belfry of Ghent_4_Frans de Wit_Flickr",
            "alternativeText": "Ghent Belfry in the evening, East Flanders, Belgium",
            "sourceText": "Frans de Wit | Flickr",
            "url": "https://d3w13n53foase7.cloudfront.net/Belfry_of_Ghent_4_Frans_de_Wit_Flickr_e204790bdc.jpg",
            "width": 799,
            "height": 533,
            "thumbnail": "https://d3w13n53foase7.cloudfront.net/thumbnail_Belfry_of_Ghent_4_Frans_de_Wit_Flickr_e204790bdc.jpg",
            "small": "https://d3w13n53foase7.cloudfront.net/small_Belfry_of_Ghent_4_Frans_de_Wit_Flickr_e204790bdc.jpg"
        },
        {
            "id": 1602,
            "name": "Belfry of Ghent_5_leiris202_Flickr",
            "alternativeText": "Ghent Belfry with the golden dragon on top and clock face on the front, Belgium",
            "sourceText": "leiris202 | Flickr",
            "url": "https://d3w13n53foase7.cloudfront.net/Belfry_of_Ghent_5_leiris202_Flickr_aba8ecf2fb.jpg",
            "width": 600,
            "height": 800,
            "thumbnail": "https://d3w13n53foase7.cloudfront.net/thumbnail_Belfry_of_Ghent_5_leiris202_Flickr_aba8ecf2fb.jpg",
            "small": "https://d3w13n53foase7.cloudfront.net/small_Belfry_of_Ghent_5_leiris202_Flickr_aba8ecf2fb.jpg"
        },
        {
            "id": 1603,
            "name": "BelfryGhent_6_Artoria_VisitFlanders",
            "alternativeText": "Dragon display inside the Belfry of Ghent, Flanders, Belgium",
            "sourceText": "Visit Flanders",
            "url": "https://d3w13n53foase7.cloudfront.net/Belfry_Ghent_6_Artoria_Visit_Flanders_12c699d314.jpg",
            "width": 800,
            "height": 531,
            "thumbnail": "https://d3w13n53foase7.cloudfront.net/thumbnail_Belfry_Ghent_6_Artoria_Visit_Flanders_12c699d314.jpg",
            "small": "https://d3w13n53foase7.cloudfront.net/small_Belfry_Ghent_6_Artoria_Visit_Flanders_12c699d314.jpg"
        },
        {
            "id": 1604,
            "name": "Belfry of Ghent_2_Artoria_VisitFlanders",
            "alternativeText": "Birdseye view of Ghent with the Belfry of Ghent in the centre, Belgium",
            "sourceText": "Artoria | Visit Flanders",
            "url": "https://d3w13n53foase7.cloudfront.net/Belfry_of_Ghent_2_Artoria_Visit_Flanders_7a5832918d.jpg",
            "width": 799,
            "height": 533,
            "thumbnail": "https://d3w13n53foase7.cloudfront.net/thumbnail_Belfry_of_Ghent_2_Artoria_Visit_Flanders_7a5832918d.jpg",
            "small": "https://d3w13n53foase7.cloudfront.net/small_Belfry_of_Ghent_2_Artoria_Visit_Flanders_7a5832918d.jpg"
        },
        {
            "id": 1605,
            "name": "Belfry of Ghent_3_Dimitris Kamaras_Flickr",
            "alternativeText": "Clock face on the Belfry of Ghent, Belgium",
            "sourceText": "Dimitris Kamaras | Flickr",
            "url": "https://d3w13n53foase7.cloudfront.net/Belfry_of_Ghent_3_Dimitris_Kamaras_Flickr_c22a3f1cd6.jpg",
            "width": 800,
            "height": 600,
            "thumbnail": "https://d3w13n53foase7.cloudfront.net/thumbnail_Belfry_of_Ghent_3_Dimitris_Kamaras_Flickr_c22a3f1cd6.jpg",
            "small": "https://d3w13n53foase7.cloudfront.net/small_Belfry_of_Ghent_3_Dimitris_Kamaras_Flickr_c22a3f1cd6.jpg"
        },
        {
            "id": 1606,
            "name": "Belfry of Ghent_1_Xiquinho Silva_Flickr",
            "alternativeText": "Belfry tower, Ghent, Belgium",
            "sourceText": "Xiquinho Silva | Flickr",
            "url": "https://d3w13n53foase7.cloudfront.net/medium_Belfry_of_Ghent_1_Xiquinho_Silva_Flickr_b8f5fdc03e.jpg",
            "width": 886,
            "height": 1000,
            "thumbnail": "https://d3w13n53foase7.cloudfront.net/thumbnail_Belfry_of_Ghent_1_Xiquinho_Silva_Flickr_b8f5fdc03e.jpg",
            "small": "https://d3w13n53foase7.cloudfront.net/small_Belfry_of_Ghent_1_Xiquinho_Silva_Flickr_b8f5fdc03e.jpg"
        }
    ],
    "cities": [
        {
            "id": 42,
            "name": "Ghent",
            "description": "Belgium’s charming medieval city and the capital of East Flanders. An unmissable urban gem of Flanders!\n",
            "latitude": 51.0543,
            "longitude": 3.7174,
            "province": {
                "id": 2,
                "name": "East Flanders",
                "description": "Home to the iconic city of Ghent and so much more. Famous for its cycling events, beautiful sights, and medieval cities.  ",
                "country": {
                    "id": 2,
                    "name": "Belgium",
                    "code": "BEL",
                    "location": null,
                    "description": "Belgium, small but packs a punch. Not known among its fellow Europeans as a destination hub nor among those beyond the continent but look close and you will find some hidden gems. A confusing country with 3 official languages! We're here to help you navigate it and find the best best places in Belgium. ",
                    "latitude": 50.5039,
                    "longitude": 4.4699,
                    "created_by": null,
                    "updated_by": 1,
                    "created_at": "2021-02-15T20:32:45.326Z",
                    "updated_at": "2022-09-07T12:05:41.650Z",
                    "slug": "belgium",
                    "enabled": true,
                    "content_views": 3712,
                    "screenshots_set": "2022-05-05T12:20:00.283Z",
                    "enabled_landing_only": null
                },
                "created_by": null,
                "updated_by": 51,
                "created_at": "2021-02-15T20:36:04.890Z",
                "updated_at": "2022-09-08T08:37:33.095Z",
                "slug": "east-flanders",
                "latitude": 51.0362,
                "longitude": 3.7373,
                "detailed_content": true,
                "content_views": 1105,
                "get_inspired_subtitle": null,
                "screenshots_set": "2022-05-10T11:55:00.501Z",
                "popular_priority": null
            },
            "created_by": null,
            "updated_by": 51,
            "created_at": "2021-02-15T20:36:40.765Z",
            "updated_at": "2022-09-08T08:37:33.058Z",
            "published_at": "2021-02-15T20:36:40.765Z",
            "slug": "ghent",
            "detailed_content": true,
            "content_views": 705,
            "get_inspired_subtitle": null,
            "screenshots_set": "2022-05-10T11:55:00.499Z",
            "popular_priority": null
        }
    ],
    "labels": [
        {
            "id": 7,
            "name": "Sightseeing",
            "index": 8,
            "created_by": null,
            "updated_by": 51,
            "created_at": "2021-02-15T20:45:14.607Z",
            "updated_at": "2022-05-10T13:35:51.351Z",
            "slug": "sightseeing",
            "get_inspired_title": "Find the best viewpoints, monuments, and hidden gems in {{area}}",
            "get_inspired_subtitle": "See it to Believe it",
            "get_inspired_description": "All of the landmarks, viewpoints, monuments, city skylines, and hidden gems at your fingertips! These are the places that will astound your sight and senses,  and would also make a pretty Instastory. \nFrom urban architecture to natural wonders, explore the must-see spots in {{area}}, and revel in the beauty that surrounds you here.",
            "get_inspired_cta_text": "Explore activities on the map",
            "activities_count": 504
        },
        {
            "id": 12,
            "name": "COVID Proof",
            "index": 1,
            "created_by": null,
            "updated_by": 51,
            "created_at": "2021-02-15T20:45:27.211Z",
            "updated_at": "2022-05-10T11:49:46.925Z",
            "slug": "covid-proof",
            "get_inspired_title": "Explore COVID-proof activities in {{area}}",
            "get_inspired_subtitle": "Stay Healthy",
            "get_inspired_description": "Of course it's still possible to explore and have fun while taking precautions! There's so much to do, even during these COVID times. These fun activities are all safe since they're outdoors or with the organizers taking protocols into consideration.",
            "get_inspired_cta_text": "Explore activities on the map",
            "activities_count": 706
        }
    ],
    "keywords": [
        {
            "id": 20,
            "name": "Sights & Landmarks",
            "created_by": null,
            "updated_by": null,
            "created_at": "2021-02-15T20:43:40.961Z",
            "updated_at": "2021-04-08T07:23:08.168Z",
            "slug": "sights-and-landmarks"
        },
        {
            "id": 30,
            "name": "Architecture",
            "created_by": null,
            "updated_by": null,
            "created_at": "2021-02-15T20:44:01.757Z",
            "updated_at": "2021-04-08T07:23:08.750Z",
            "slug": "architecture"
        },
        {
            "id": 39,
            "name": "City views",
            "created_by": null,
            "updated_by": null,
            "created_at": "2021-02-15T20:44:15.445Z",
            "updated_at": "2021-04-08T07:23:09.342Z",
            "slug": "city-views"
        },
        {
            "id": 57,
            "name": "Free",
            "created_by": 7,
            "updated_by": 7,
            "created_at": "2021-03-12T09:14:46.514Z",
            "updated_at": "2021-04-08T07:23:09.952Z",
            "slug": "free"
        },
        {
            "id": 71,
            "name": "UNESCO Heritage Sites",
            "created_by": 7,
            "updated_by": 6,
            "created_at": "2021-08-19T10:15:08.575Z",
            "updated_at": "2021-08-31T12:50:11.198Z",
            "slug": "unesco-heritage-sites"
        }
    ],
    "external_pages": [
        {
            "id": 183,
            "name": "Visit Belfry of Ghent",
            "link": "https://www.belfortgent.be/en/home",
            "homepage": null,
            "description": "Book your tickets to the Belfry of Ghent on their website",
            "created_by": null,
            "updated_by": null,
            "created_at": "2021-02-15T20:48:05.723Z",
            "updated_at": "2021-02-15T20:48:05.959Z",
            "image": {
                "id": 1607,
                "name": "BelfryGhent_external_Wikimedia_Sergey Ashmarin",
                "alternativeText": null,
                "sourceText": "Sergey Ashmarin | Wikimedia",
                "url": "https://d3w13n53foase7.cloudfront.net/medium_Belfry_Ghent_external_Wikimedia_Sergey_Ashmarin_79b702c8fd.jpg",
                "thumbnail": "https://d3w13n53foase7.cloudfront.net/thumbnail_Belfry_Ghent_external_Wikimedia_Sergey_Ashmarin_79b702c8fd.jpg",
                "small": "https://d3w13n53foase7.cloudfront.net/small_Belfry_Ghent_external_Wikimedia_Sergey_Ashmarin_79b702c8fd.jpg",
                "width": 562,
                "height": 1000
            }
        }
    ],
    "type": "activity"
}

 */

function App() {
  const [data, setData] = useState({})

  const fetchDetails = async (activitySlug) => {
    const data = await fetch(
      `${API_ENDPOINT}/frontend/activities/slug/${activitySlug}`,
      {
        method: 'GET',
      }
    )

    const response = await data.json()
    setData(response)
  }

  useEffect(() => {
    fetchDetails(window.location.pathname.slice(1))
  }, [])

  return (
    <div className='App'>
      {localStorage.getItem('accessToken') ? (
        <>
          <section>
            <ImageCarousel images={data?.images} />
          </section>
          <section>
            <Label labels={data?.labels} title={data?.name} />
          </section>
          <section>
            <Description
              shortDescription={data?.description_short}
              longDescription={data?.description_long}
            />
          </section>
          <section>
            <MapComponent
              location={{ lat: data?.latitude, lng: data?.longitude }}
              name={data?.address}
            />
          </section>
          <section>
            <NearbyActivity />
          </section>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
