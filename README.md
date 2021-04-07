<img src="https://github.com/ketka82uk/Tic-Tac-Dino/blob/master/unnamed.png?raw=true" alt="drawing" width="150"/>

### General Assembly Software Engineering Immersive Course

# ETC News Site

<img src="homepage.png"/>

## news you need to know.


### The brief
ETC. News was born from a 48-hour, pair programming 'hackathon' to create and deploy a simple React app that consumes an external RESTful API. The app should also allow users to navigate around using React Router. 

Our idea was to build a site that gave users a snapshot of UK news, presented in an easily digestible format and easy to navigate.

### Our external APIs
[newsapi.org](https://newsapi.org/) and [openweathermap.org](https://openweathermap.org/)

### Technologies used
* Javascript
* HTML
* CSS
* ReactJS
* Webpack
* Bulma
* Axios

## The logic

### Planning the routes
The structure of our design was pretty simple: 

* A homepage which pulls a selection of stories from the newsapi.org API. Each of these stories links directly to an individual article page.

<img src="article.png"/>

* A navigation bar with links which allows users to select specific news categories. Each of these links routes to a category page, showing stories only for that category. Again, by clicking on any of these stories, the user is routed to an individual article page. 

<img src="category.png"/>


### The original plan...

During the development phase, we had created a dynamic routing path, which linked to each category page using a category id. This meant that we only needed one category page template for all six categories and React did the rest. 

~~~javascript
const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/ETC-News/" component={Home}/>
      <Route exact path="/ETC-News/category/:id" component={Category}/>
      <Route exact path="/ETC-News/article" component={Article}/>
      <Route exact path="/ETC-News/category/:id/article" component={Article}/>
    </Switch>
  </BrowserRouter>

)
~~~

We had to change things during deployment but more on that later...

### Pulling data
The next major step was getting to the API and pulling the data. The documentation of our chosen API was extremely good and it was easy enough to find the endpoints we required. Our original code did a dynamic search for the correct category using match.params and pulled the data directly from the API using an Axios request:

~~~javascript
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Category({match}) {
  const id = match.params.id
  console.log('ID', id)

const [selectedCategory, updateSelectedCategory] = useState([])

useEffect(() => {
  axios.get(`https://newsapi.org/v2/top-headlines?country=gb&category=${id}`)
    .then(({ data }) => {
      updateSelectedCategory(data.articles)
    })
}, [])

if(!selectedCategory[0]) return null

return <div>
    <h1>Category: {id} </h1>
    <h2>Title: {selectedCategory.title} </h2>
</div>

~~~

This worked perfectly until deployment, allowing us to route to six category pages through only one short page of code by rendering the articles using a simple map function:

~~~javascript
<div className="columns is-multiline">
        {filteredArticles.map((news, index) => {
          const newsTitle = news.title.split('-')
          newsTitle.pop()
          const newsString = newsTitle.join('')
          return <div className="column is-one-quarter" key={index}>
            <Link key={news.name} to={{
              pathname: `/ETC-News/${id}/article`,
              state: {
                news: news,
                id: id
              }

            }}>
              <div className="card category-card" key={index}>
                <div className="card-image">
                  <figure className="image is-3by2">
                    <img src={news.urlToImage} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media-content">
                    <p className="title is-7 has-text-danger">{news.source.name}
                    </p>
                  </div>
                  <div className="media-content">
                    <p className="title is-5">{newsString.length >= 70
                      ? newsString.slice(0, 70) + '...'
                      : newsString
                    }
                    </p>
                  </div>
                </div>
                <div className="content pl-5 pb-4" id="flexboxCardBottom">
                  <p className="content is-size-7" id="flexbox1Card">{
                    !news.author ? '' :
                      news.author.length >= 30
                        ? news.author.slice(0, 30) + '...'
                        : news.author
                  }   </p>
                  <p className="content is-size-7 has-text-danger" id="flexbox2Card">   Posted {moment(news.publishedAt).fromNow()}</p>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>
~~~

Then came:

### The problem

It was only at deployment stage that we discovered we'd made a fatal error made by a lot of new developers messing around with public APIs for the first time - we hadn't read the smallprint. It turned out that our API wouldn't allow us to pull their data when the website was deployed publically - at least not without paying a pretty hefty monthly fee. As a learning experience it was an important one, but it did leave us with a bit of an issue in that we now had a site but no data!

Our eventual workaround was simply to pull data from the API and store it locally, which doesn't breach any usage conditions of the API, but does mean that our site unfotunately doesn't update and uses only pre-seeded data. The articles that you see when you log on are from 25 March 2021, which, depending when you're reading this, may be rather out of date, but at least give an idea of the look and feel. 

Speaking of...

## The user experience

### Styling

One of the main aims of our site was to create simple user interface that was easy to navigate and attractive to look at. We decided to use Bulma as a CSS framework as their styling fits well with what we wanted to achieve. The category and article pages are created using Bulma cards, while the homepage is created using a Bulma nested tile system, which allows for a lot of flexibility on design. The homepage was my main contribution to the project, and I went for large, bold titles, a variety of tile sizes and images pulled directly from the API to create something that is easy to read, while also being visually pleasing.


### Interface
We wanted users to be able to find their way around the site easily. Part of this was to have a simple navigation bar fixed in the header, but we also made sure that we had back buttons on each article page that take the user back to the last page visited. We achieved this using React Router's Link capability and pathname:

~~~javascript
<Link key={news.name} to={{
              pathname: id === '' ?
                '/ETC-News' :
                `/ETC-News/${id}`

            }}>
              <button className="button is-dark m-0" id="articleButton">Go back</button>
            </Link>
~~~

We also tried to make sure that links were obvious and consistent, as well as showing when an article was published.

## Next time...

### Improvements
With more time, I'd have liked to find a better way of mapping the data on the homepage. Because I was using Bulma's tile system and using different backgrounds/sizes for each one, it ended up being easier to hardcode a lot of the formatting in a pinch. This works, but doesn't allow for much flexibility and the code is quite long.

Also, given what we have since learned about accessibility, our color scheme could probably be improved to create more contrast between background color and text on the navbar.


### Future additions
As the API we used provides news articles from around the world, an option for users to select news from specific countries would have been good and relatively simple to implement - we just ran out of time.

It might also be nice to have a search bar for users to search for specific stories as well as a 'load more' button on the homepage to allow for more articles to be presented.

### Bugs squished (and not-so-squished)
Our main issue was the API and deployment problem described above. We also found on deployment that our weather API is not compatible with GitHub pages where HTTPS is enforced. This could probably be rectified by using another hosting service.


## Assets and dependencies
* Axios
* Bulma
* Moment.js

Logo made with [Looka](https://looka.com/)


